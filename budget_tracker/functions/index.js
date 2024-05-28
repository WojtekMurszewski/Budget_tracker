/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.dailyNotification = functions.pubsub.schedule('every day 20:00').timeZone('Europe/Warsaw').onRun(async (context) => {
    const db = admin.firestore();
    const usersRef = db.collection('userSettings');
    const snapshot = await usersRef.where('notificationsEnabled', '==', true).get();
    
    if (snapshot.empty) {
      console.log('No users found with notifications enabled.');
      return null;
    }
  
    const promises = [];
    snapshot.forEach(doc => {
      const userId = doc.id;
      const payload = {
        notification: {
          title: 'Przypomnienie',
          body: 'Pamiętaj, aby dodać wszystkie swoje transakcje dzisiaj.',
          clickAction: 'FLUTTER_NOTIFICATION_CLICK', // Dostosuj, jeśli używasz aplikacji mobilnej
        },
      };
  
      // Send a notification to each user
      promises.push(admin.messaging().sendToTopic(userId, payload));
    });
  
    await Promise.all(promises);
    console.log('Notifications sent successfully.');
    return null;
  });