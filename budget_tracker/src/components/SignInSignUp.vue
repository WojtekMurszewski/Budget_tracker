<template>
    <div class="sign-in-container">
        <h1>Sign In to an Account</h1>
        <p><input type= "text" placeholder="Email" v-model="email" /></p>
        <p><input type= "password" placeholder="Password" v-model="password" /></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p><button @click="signIn">Submit</button></p>
        <p><button @click="signInWithGoogle">Sign In With Google</button></p>

        <!-- Registration Form -->
        <h2>Register an Account</h2>
        <p><input type="text" placeholder="Email" v-model="registerEmail" /></p>
        <p><input type="password" placeholder="Password" v-model="registerPassword" /></p>
        <p><button @click="register">Register</button></p>
    </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

export default {
    name: 'SignInSignUpPage', 
    setup() {
        const email = ref("");
        const password = ref("");
        const errMsg = ref("");
        const registerEmail = ref("");
        const registerPassword = ref("");
        const router = useRouter();
        const auth = getAuth();

        const signIn = () => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("Successfully signed in!", user);
                    router.push("/main");
                })
                .catch((error) => {
                    console.error(error.code);
                    switch(error.code)  {
                        case "auth/invalid-email":
                            errMsg.value = "Invalid email";
                            break;
                        case "auth/user-not-found":
                            errMsg.value = "No account with that email was found";
                            break;
                        case "auth/wrong-password":
                            errMsg.value = "Incorrect password";
                            break;
                        default:
                            errMsg.value = "Email or password was incorrect";
                            break;
                    }
                });
        };

        const signInWithGoogle = () => {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user;
                    console.log("Successfully signed in with Google!", user);
                    router.push("/main");
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        const register = () => {
            createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value)
                .then((userCredential) => {
                const user = userCredential.user;
                console.log("Successfully registered and signed in!", user);
                router.push("/main");
                })
                .catch((error) => {
                console.error(error.code);
                switch (error.code) {
                    case "auth/email-already-in-use":
                    errMsg.value = "The email address is already in use by another account";
                    break;
                    case "auth/invalid-email":
                    errMsg.value = "The email address is not valid";
                    break;
                    case "auth/weak-password":
                    errMsg.value = "The password is too weak";
                    break;
                    default:
                    errMsg.value = "Failed to register";
                    break;
                }
                });
            };

        const signOutUser = () => {
        signOut(auth)
            .then(() => {
            console.log("Successfully signed out!");
            // Redirect or perform any other action after signing out
            })
            .catch((error) => {
            console.error("Sign out error:", error);
            });
        };

        return {
            email,
            password,
            errMsg,
            registerEmail,
            registerPassword,
            signIn,
            signInWithGoogle,
            register,
            signOut: signOutUser
        };
    }
};
</script>

<style>
.sign-in-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

input[type="text"],
input[type="password"] {
  width: calc(100% - 22px); /* 22px to uwzględniają marginesy i paddingi */
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: calc(100% - 22px); /* 22px to uwzględniają marginesy i paddingi */
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error-message {
  color: red;
  font-weight: bold;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
}

.google-sign-in-button {
  background-color: #dd4b39;
  color: white;
}

</style>