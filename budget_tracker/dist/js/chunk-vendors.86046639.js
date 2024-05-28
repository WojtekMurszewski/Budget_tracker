"use strict";(self["webpackChunkbudget_tracker"]=self["webpackChunkbudget_tracker"]||[]).push([[504],{4046:function(t,e,n){n.d(e,{Am:function(){return U},FA:function(){return P},Fy:function(){return _},I9:function(){return j},Im:function(){return L},Ku:function(){return q},T9:function(){return y},Tj:function(){return g},Uj:function(){return c},XA:function(){return v},ZQ:function(){return w},bD:function(){return F},cY:function(){return b},dM:function(){return O},eX:function(){return A},g:function(){return M},hp:function(){return B},jZ:function(){return x},lT:function(){return I},lV:function(){return S},nr:function(){return k},sr:function(){return T},tD:function(){return z},u:function(){return l},yU:function(){return m},zW:function(){return C}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,a=s?n[t.charAt(r)]:0;++r;const c=r<t.length,l=c?n[t.charAt(r)]:64;++r;const u=r<t.length,h=u?n[t.charAt(r)]:64;if(++r,null==e||null==a||null==l||null==h)throw new o;const d=e<<2|a>>4;if(i.push(d),64!==l){const t=a<<4&240|l>>2;if(i.push(t),64!==h){const t=l<<6&192|h;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=i(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},l=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>u().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/Project-PSM/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},f=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||d()||f()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},v=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function x(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function E(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(i){return!1}}function T(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const t=w();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function k(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function C(){try{return"object"===typeof indexedDB}catch(t){return!1}}function A(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function O(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R="FirebaseError";class M extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=R,Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?D(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new M(i,o,n);return a}}function D(t,e){return t.replace(N,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function F(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(V(n)&&V(s)){if(!F(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function V(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function j(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function B(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e){const n=new $(t,e);return n.subscribe.bind(n)}class ${constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=H(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=W),void 0===i.error&&(i.error=W),void 0===i.complete&&(i.complete=W);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function W(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(t){return t&&t._delegate?t._delegate:t}},144:function(t,e,n){n.d(e,{C4:function(){return y},EW:function(){return kt},Gc:function(){return gt},IG:function(){return Et},IJ:function(){return Mt},KR:function(){return Rt},Kh:function(){return pt},Pr:function(){return Ft},R1:function(){return Nt},X2:function(){return l},bl:function(){return v},fE:function(){return _t},g8:function(){return vt},hZ:function(){return A},i9:function(){return Ot},ju:function(){return wt},o5:function(){return c},u4:function(){return C},ux:function(){return xt},yC:function(){return o}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var i=n(4232);let r,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=r,!t&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=r;try{return r=this,t()}finally{r=e}}else 0}on(){r=this}off(){r=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function a(t,e=r){e&&e.active&&e.effects.push(t)}function c(){return r}class l{constructor(t,e,n,i){this.fn=t,this.trigger=e,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a(this,i)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,y();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(u(e.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),v()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=p,e=s;try{return p=!0,s=this,this._runnings++,h(this),this.fn()}finally{d(this),this._runnings--,s=e,p=t}}stop(){this.active&&(h(this),d(this),this.onStop&&this.onStop(),this.active=!1)}}function u(t){return t.value}function h(t){t._trackId++,t._depsLength=0}function d(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)f(t.deps[e],t);t.deps.length=t._depsLength}}function f(t,e){const n=t.get(e);void 0!==n&&e._trackId!==n&&(t.delete(e),0===t.size&&t.cleanup())}let p=!0,g=0;const m=[];function y(){m.push(p),p=!1}function v(){const t=m.pop();p=void 0===t||t}function b(){g++}function _(){g--;while(!g&&x.length)x.shift()()}function w(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const n=t.deps[t._depsLength];n!==e?(n&&f(n,t),t.deps[t._depsLength++]=e):t._depsLength++}}const x=[];function E(t,e,n){b();for(const i of t.keys()){let n;i._dirtyLevel<e&&(null!=n?n:n=t.get(i)===i._trackId)&&(i._shouldSchedule||(i._shouldSchedule=0===i._dirtyLevel),i._dirtyLevel=e),i._shouldSchedule&&(null!=n?n:n=t.get(i)===i._trackId)&&(i.trigger(),i._runnings&&!i.allowRecurse||2===i._dirtyLevel||(i._shouldSchedule=!1,i.scheduler&&x.push(i.scheduler)))}_()}const T=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},S=new WeakMap,I=Symbol(""),k=Symbol("");function C(t,e,n){if(p&&s){let e=S.get(t);e||S.set(t,e=new Map);let i=e.get(n);i||e.set(n,i=T((()=>e.delete(n)))),w(s,i,void 0)}}function A(t,e,n,r,s,o){const a=S.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,i.cy)(t)){const t=Number(r);a.forEach(((e,n)=>{("length"===n||!(0,i.Bm)(n)&&n>=t)&&c.push(e)}))}else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,i.cy)(t)?(0,i.yI)(n)&&c.push(a.get("length")):(c.push(a.get(I)),(0,i.CE)(t)&&c.push(a.get(k)));break;case"delete":(0,i.cy)(t)||(c.push(a.get(I)),(0,i.CE)(t)&&c.push(a.get(k)));break;case"set":(0,i.CE)(t)&&c.push(a.get(I));break}b();for(const i of c)i&&E(i,4,void 0);_()}const O=(0,i.pD)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(i.Bm)),M=P();function P(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=xt(this);for(let e=0,r=this.length;e<r;e++)C(n,"get",e+"");const i=n[e](...t);return-1===i||!1===i?n[e](...t.map(xt)):i}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){y(),b();const n=xt(this)[e].apply(this,t);return _(),v(),n}})),t}function D(t){(0,i.Bm)(t)||(t=String(t));const e=xt(this);return C(e,"has",t),e.hasOwnProperty(t)}class N{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){const r=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!r;if("__v_isReadonly"===e)return r;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(r?s?ht:ut:s?lt:ct).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,i.cy)(t);if(!r){if(o&&(0,i.$3)(M,e))return Reflect.get(M,e,n);if("hasOwnProperty"===e)return D}const a=Reflect.get(t,e,n);return((0,i.Bm)(e)?R.has(e):O(e))?a:(r||C(t,"get",e),s?a:Ot(a)?o&&(0,i.yI)(e)?a:a.value:(0,i.Gv)(a)?r?mt(a):pt(a):a)}}class L extends N{constructor(t=!1){super(!1,t)}set(t,e,n,r){let s=t[e];if(!this._isShallow){const e=bt(s);if(_t(n)||bt(n)||(s=xt(s),n=xt(n)),!(0,i.cy)(t)&&Ot(s)&&!Ot(n))return!e&&(s.value=n,!0)}const o=(0,i.cy)(t)&&(0,i.yI)(e)?Number(e)<t.length:(0,i.$3)(t,e),a=Reflect.set(t,e,n,r);return t===xt(r)&&(o?(0,i.$H)(n,s)&&A(t,"set",e,n,s):A(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,i.$3)(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&A(t,"delete",e,void 0,r),s}has(t,e){const n=Reflect.has(t,e);return(0,i.Bm)(e)&&R.has(e)||C(t,"has",e),n}ownKeys(t){return C(t,"iterate",(0,i.cy)(t)?"length":I),Reflect.ownKeys(t)}}class F extends N{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const V=new L,U=new F,j=new L(!0),B=t=>t,z=t=>Reflect.getPrototypeOf(t);function $(t,e,n=!1,r=!1){t=t["__v_raw"];const s=xt(t),o=xt(e);n||((0,i.$H)(e,o)&&C(s,"get",e),C(s,"get",o));const{has:a}=z(s),c=r?B:n?St:Tt;return a.call(s,e)?c(t.get(e)):a.call(s,o)?c(t.get(o)):void(t!==s&&t.get(e))}function H(t,e=!1){const n=this["__v_raw"],r=xt(n),s=xt(t);return e||((0,i.$H)(t,s)&&C(r,"has",t),C(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function W(t,e=!1){return t=t["__v_raw"],!e&&C(xt(t),"iterate",I),Reflect.get(t,"size",t)}function q(t){t=xt(t);const e=xt(this),n=z(e),i=n.has.call(e,t);return i||(e.add(t),A(e,"add",t,t)),this}function K(t,e){e=xt(e);const n=xt(this),{has:r,get:s}=z(n);let o=r.call(n,t);o||(t=xt(t),o=r.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,i.$H)(e,a)&&A(n,"set",t,e,a):A(n,"add",t,e),this}function G(t){const e=xt(this),{has:n,get:i}=z(e);let r=n.call(e,t);r||(t=xt(t),r=n.call(e,t));const s=i?i.call(e,t):void 0,o=e.delete(t);return r&&A(e,"delete",t,void 0,s),o}function Q(){const t=xt(this),e=0!==t.size,n=void 0,i=t.clear();return e&&A(t,"clear",void 0,void 0,n),i}function Y(t,e){return function(n,i){const r=this,s=r["__v_raw"],o=xt(s),a=e?B:t?St:Tt;return!t&&C(o,"iterate",I),s.forEach(((t,e)=>n.call(i,a(t),a(e),r)))}}function X(t,e,n){return function(...r){const s=this["__v_raw"],o=xt(s),a=(0,i.CE)(o),c="entries"===t||t===Symbol.iterator&&a,l="keys"===t&&a,u=s[t](...r),h=n?B:e?St:Tt;return!e&&C(o,"iterate",l?k:I),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function J(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function Z(){const t={get(t){return $(this,t)},get size(){return W(this)},has:H,add:q,set:K,delete:G,clear:Q,forEach:Y(!1,!1)},e={get(t){return $(this,t,!1,!0)},get size(){return W(this)},has:H,add:q,set:K,delete:G,clear:Q,forEach:Y(!1,!0)},n={get(t){return $(this,t,!0)},get size(){return W(this,!0)},has(t){return H.call(this,t,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:Y(!0,!1)},i={get(t){return $(this,t,!0,!0)},get size(){return W(this,!0)},has(t){return H.call(this,t,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:Y(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{t[r]=X(r,!1,!1),n[r]=X(r,!0,!1),e[r]=X(r,!1,!0),i[r]=X(r,!0,!0)})),[t,n,e,i]}const[tt,et,nt,it]=Z();function rt(t,e){const n=e?t?it:nt:t?et:tt;return(e,r,s)=>"__v_isReactive"===r?!t:"__v_isReadonly"===r?t:"__v_raw"===r?e:Reflect.get((0,i.$3)(n,r)&&r in e?n:e,r,s)}const st={get:rt(!1,!1)},ot={get:rt(!1,!0)},at={get:rt(!0,!1)};const ct=new WeakMap,lt=new WeakMap,ut=new WeakMap,ht=new WeakMap;function dt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ft(t){return t["__v_skip"]||!Object.isExtensible(t)?0:dt((0,i.Zf)(t))}function pt(t){return bt(t)?t:yt(t,!1,V,st,ct)}function gt(t){return yt(t,!1,j,ot,lt)}function mt(t){return yt(t,!0,U,at,ut)}function yt(t,e,n,r,s){if(!(0,i.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=ft(t);if(0===a)return t;const c=new Proxy(t,2===a?r:n);return s.set(t,c),c}function vt(t){return bt(t)?vt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function bt(t){return!(!t||!t["__v_isReadonly"])}function _t(t){return!(!t||!t["__v_isShallow"])}function wt(t){return!!t&&!!t["__v_raw"]}function xt(t){const e=t&&t["__v_raw"];return e?xt(e):t}function Et(t){return Object.isExtensible(t)&&(0,i.yQ)(t,"__v_skip",!0),t}const Tt=t=>(0,i.Gv)(t)?pt(t):t,St=t=>(0,i.Gv)(t)?mt(t):t;class It{constructor(t,e,n,i){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new l((()=>t(this._value)),(()=>At(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const t=xt(this);return t._cacheable&&!t.effect.dirty||!(0,i.$H)(t._value,t._value=t.effect.run())||At(t,4),Ct(t),t.effect._dirtyLevel>=2&&At(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function kt(t,e,n=!1){let r,s;const o=(0,i.Tn)(t);o?(r=t,s=i.tE):(r=t.get,s=t.set);const a=new It(r,s,o||!s,n);return a}function Ct(t){var e;p&&s&&(t=xt(t),w(s,null!=(e=t.dep)?e:t.dep=T((()=>t.dep=void 0),t instanceof It?t:void 0),void 0))}function At(t,e=4,n){t=xt(t);const i=t.dep;i&&E(i,e,void 0)}function Ot(t){return!(!t||!0!==t.__v_isRef)}function Rt(t){return Pt(t,!1)}function Mt(t){return Pt(t,!0)}function Pt(t,e){return Ot(t)?t:new Dt(t,e)}class Dt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:xt(t),this._value=e?t:Tt(t)}get value(){return Ct(this),this._value}set value(t){const e=this.__v_isShallow||_t(t)||bt(t);t=e?t:xt(t),(0,i.$H)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Tt(t),At(this,4,t))}}function Nt(t){return Ot(t)?t.value:t}const Lt={get:(t,e,n)=>Nt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ot(r)&&!Ot(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ft(t){return vt(t)?t:new Proxy(t,Lt)}},6768:function(t,e,n){n.d(e,{$u:function(){return Nt},CE:function(){return rn},Df:function(){return bt},EW:function(){return Hn},FK:function(){return qe},Gt:function(){return fe},Gy:function(){return lt},K9:function(){return Fe},Lk:function(){return un},MZ:function(){return vt},OW:function(){return gt},Q3:function(){return mn},QP:function(){return ht},Qi:function(){return N},WQ:function(){return pe},Wv:function(){return sn},bF:function(){return hn},bo:function(){return st},dY:function(){return v},eW:function(){return gn},g2:function(){return W},h:function(){return Wn},hi:function(){return Ft},jt:function(){return L},k6:function(){return F},nI:function(){return In},pI:function(){return zt},pM:function(){return _t},pR:function(){return ft},qL:function(){return o},rE:function(){return qn},sV:function(){return Pt},uX:function(){return Je},wB:function(){return tt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var i=n(144),r=n(4232);function s(t,e,n,i){try{return i?t(...i):t()}catch(r){a(r,e,n)}}function o(t,e,n,i){if((0,r.Tn)(t)){const o=s(t,e,n,i);return o&&(0,r.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,r.cy)(t)){const r=[];for(let s=0;s<t.length;s++)r.push(o(t[s],e,n,i));return r}}function a(t,e,n,r=!0){const o=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;r=r.parent}const c=e.appContext.config.errorHandler;if(c)return(0,i.C4)(),s(c,null,10,[t,o,a]),void(0,i.bl)()}c(t,n,o,r)}function c(t,e,n,i=!0){console.error(t)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(t){const e=y||m;return t?e.then(this?t.bind(this):t):e}function b(t){let e=d+1,n=h.length;while(e<n){const i=e+n>>>1,r=h[i],s=I(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function _(t){h.length&&h.includes(t,l&&t.allowRecurse?d+1:d)||(null==t.id?h.push(t):h.splice(b(t.id),0,t),w())}function w(){l||u||(u=!0,y=m.then(C))}function x(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function E(t){(0,r.cy)(t)?f.push(...t):p&&p.includes(t,t.allowRecurse?g+1:g)||f.push(t),w()}function T(t,e,n=(l?d+1:0)){for(0;n<h.length;n++){const e=h[n];if(e&&e.pre){if(t&&e.id!==t.uid)continue;0,h.splice(n,1),n--,e()}}}function S(t){if(f.length){const t=[...new Set(f)].sort(((t,e)=>I(t)-I(e)));if(f.length=0,p)return void p.push(...t);for(p=t,g=0;g<p.length;g++)p[g]();p=null,g=0}}const I=t=>null==t.id?1/0:t.id,k=(t,e)=>{const n=I(t)-I(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function C(t){u=!1,l=!0,h.sort(k);r.tE;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&s(t,null,14)}}finally{d=0,h.length=0,S(t),l=!1,y=null,(h.length||f.length)&&C(t)}}function A(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||r.MZ;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in i){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=i[t]||r.MZ;o&&(s=n.map((t=>(0,r.Kg)(t)?t.trim():t))),e&&(s=n.map(r.bB))}let l;let u=i[l=(0,r.rU)(e)]||i[l=(0,r.rU)((0,r.PT)(e))];!u&&a&&(u=i[l=(0,r.rU)((0,r.Tg)(e))]),u&&o(u,t,6,s);const h=i[l+"Once"];if(h){if(t.emitted){if(t.emitted[l])return}else t.emitted={};t.emitted[l]=!0,o(h,t,6,s)}}function O(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,r.Tn)(t)){const i=t=>{const n=O(t,e,!0);n&&(c=!0,(0,r.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||c?((0,r.cy)(o)?o.forEach((t=>a[t]=null)):(0,r.X$)(a,o),(0,r.Gv)(t)&&i.set(t,a),a):((0,r.Gv)(t)&&i.set(t,null),null)}function R(t,e){return!(!t||!(0,r.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,r.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,r.$3)(t,(0,r.Tg)(e))||(0,r.$3)(t,e))}let M=null,P=null;function D(t){const e=M;return M=t,P=t&&t.type.__scopeId||null,e}function N(t){P=t}function L(){P=null}function F(t,e=M,n){if(!e)return t;if(t._n)return t;const i=(...n)=>{i._d&&en(-1);const r=D(e);let s;try{s=t(...n)}finally{D(r),i._d&&en(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function V(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:c,attrs:l,emit:u,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=D(t);let b,_;try{if(4&n.shapeFlag){const t=s||i,e=t;b=yn(h.call(e,t,d,f,g,p,m)),_=l}else{const t=e;0,b=yn(t.length>1?t(f,{attrs:l,slots:c,emit:u}):t(f,null)),_=e.props?l:U(l)}}catch(x){Ye.length=0,a(x,t,1),b=hn(Ge)}let w=b;if(_&&!1!==y){const t=Object.keys(_),{shapeFlag:e}=w;t.length&&7&e&&(o&&t.some(r.CP)&&(_=j(_,o)),w=pn(w,_,!1,!0))}return n.dirs&&(w=pn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),b=w,D(v),b}const U=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,r.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},j=(t,e)=>{const n={};for(const i in t)(0,r.CP)(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function B(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||z(i,o,l):!!o);if(1024&c)return!0;if(16&c)return i?z(i,o,l):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==i[n]&&!R(l,n))return!0}}return!1}function z(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!R(n,s))return!0}return!1}function $({vnode:t,parent:e},n){while(e){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i!==t)break;(t=e.vnode).el=n,e=e.parent}}const H="components";function W(t,e){return K(H,t,!0,e)||t}const q=Symbol.for("v-ndc");function K(t,e,n=!0,i=!1){const s=M||Sn;if(s){const n=s.type;if(t===H){const t=zn(n,!1);if(t&&(t===e||t===(0,r.PT)(e)||t===(0,r.ZH)((0,r.PT)(e))))return n}const o=G(s[t]||n[t],e)||G(s.appContext[t],e);return!o&&i?n:o}}function G(t,e){return t&&(t[e]||t[(0,r.PT)(e)]||t[(0,r.ZH)((0,r.PT)(e))])}const Q=t=>t.__isSuspense;function Y(t,e){e&&e.pendingBranch?(0,r.cy)(t)?e.effects.push(...t):e.effects.push(t):E(t)}const X=Symbol.for("v-scx"),J=()=>{{const t=pe(X);return t}};const Z={};function tt(t,e,n){return et(t,e,n)}function et(t,e,{immediate:n,deep:a,flush:c,once:l,onTrack:u,onTrigger:h}=r.MZ){if(e&&l){const t=e;e=(...e)=>{t(...e),I()}}const d=Sn,f=t=>!0===a?t:rt(t,!1===a?1:void 0);let p,g,m=!1,y=!1;if((0,i.i9)(t)?(p=()=>t.value,m=(0,i.fE)(t)):(0,i.g8)(t)?(p=()=>f(t),m=!0):(0,r.cy)(t)?(y=!0,m=t.some((t=>(0,i.g8)(t)||(0,i.fE)(t))),p=()=>t.map((t=>(0,i.i9)(t)?t.value:(0,i.g8)(t)?f(t):(0,r.Tn)(t)?s(t,d,2):void 0))):p=(0,r.Tn)(t)?e?()=>s(t,d,2):()=>(g&&g(),o(t,d,3,[b])):r.tE,e&&a){const t=p;p=()=>rt(t())}let v,b=t=>{g=T.onStop=()=>{s(t,d,4),g=T.onStop=void 0}};if(Dn){if(b=r.tE,e?n&&o(e,d,3,[p(),y?[]:void 0,b]):p(),"sync"!==c)return r.tE;{const t=J();v=t.__watcherHandles||(t.__watcherHandles=[])}}let w=y?new Array(t.length).fill(Z):Z;const x=()=>{if(T.active&&T.dirty)if(e){const t=T.run();(a||m||(y?t.some(((t,e)=>(0,r.$H)(t,w[e]))):(0,r.$H)(t,w)))&&(g&&g(),o(e,d,3,[t,w===Z?void 0:y&&w[0]===Z?[]:w,b]),w=t)}else T.run()};let E;x.allowRecurse=!!e,"sync"===c?E=x:"post"===c?E=()=>Le(x,d&&d.suspense):(x.pre=!0,d&&(x.id=d.uid),E=()=>_(x));const T=new i.X2(p,r.tE,E),S=(0,i.o5)(),I=()=>{T.stop(),S&&(0,r.TF)(S.effects,T)};return e?n?x():w=T.run():"post"===c?Le(T.run.bind(T),d&&d.suspense):T.run(),v&&v.push(I),I}function nt(t,e,n){const i=this.proxy,s=(0,r.Kg)(t)?t.includes(".")?it(i,t):()=>i[t]:t.bind(i,i);let o;(0,r.Tn)(e)?o=e:(o=e.handler,n=e);const a=An(this),c=et(s,o.bind(i),n);return a(),c}function it(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function rt(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,(0,i.i9)(t))rt(t.value,e,n);else if((0,r.cy)(t))for(let i=0;i<t.length;i++)rt(t[i],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach((t=>{rt(t,e,n)}));else if((0,r.Qd)(t))for(const i in t)rt(t[i],e,n);return t}function st(t,e){if(null===M)return t;const n=Bn(M)||M.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,o,a,c=r.MZ]=e[s];t&&((0,r.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&rt(o),i.push({dir:t,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ot(t,e,n,r){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[r];u&&((0,i.C4)(),o(u,n,8,[t.el,l,t,e]),(0,i.bl)())}}const at=Symbol("_leaveCb"),ct=Symbol("_enterCb");function lt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pt((()=>{t.isMounted=!0})),Lt((()=>{t.isUnmounting=!0})),t}const ut=[Function,Array],ht={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ut,onEnter:ut,onAfterEnter:ut,onEnterCancelled:ut,onBeforeLeave:ut,onLeave:ut,onAfterLeave:ut,onLeaveCancelled:ut,onBeforeAppear:ut,onAppear:ut,onAfterAppear:ut,onAppearCancelled:ut},dt={name:"BaseTransition",props:ht,setup(t,{slots:e}){const n=In(),r=lt();return()=>{const s=e.default&&bt(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let t=!1;for(const e of s)if(e.type!==Ge){0,o=e,t=!0;break}}const a=(0,i.ux)(t),{mode:c}=a;if(r.isLeaving)return mt(o);const l=yt(o);if(!l)return mt(o);const u=gt(l,a,r,n);vt(l,u);const h=n.subTree,d=h&&yt(h);if(d&&d.type!==Ge&&!an(l,d)){const t=gt(d,a,r,n);if(vt(d,t),"out-in"===c&&l.type!==Ge)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},mt(o);"in-out"===c&&l.type!==Ge&&(t.delayLeave=(t,e,n)=>{const i=pt(r,d);i[String(d.key)]=d,t[at]=()=>{e(),t[at]=void 0,delete u.delayedLeave},u.delayedLeave=n})}return o}}},ft=dt;function pt(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function gt(t,e,n,i){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:b,onAppearCancelled:_}=e,w=String(t.key),x=pt(n,t),E=(t,e)=>{t&&o(t,i,9,e)},T=(t,e)=>{const n=e[1];E(t,e),(0,r.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(e){let i=l;if(!n.isMounted){if(!s)return;i=y||l}e[at]&&e[at](!0);const r=x[w];r&&an(t,r)&&r.el[at]&&r.el[at](),E(i,[e])},enter(t){let e=u,i=h,r=d;if(!n.isMounted){if(!s)return;e=v||u,i=b||h,r=_||d}let o=!1;const a=t[ct]=e=>{o||(o=!0,E(e?r:i,[t]),S.delayedLeave&&S.delayedLeave(),t[ct]=void 0)};e?T(e,[t,a]):a()},leave(e,i){const r=String(t.key);if(e[ct]&&e[ct](!0),n.isUnmounting)return i();E(f,[e]);let s=!1;const o=e[at]=n=>{s||(s=!0,i(),E(n?m:g,[e]),e[at]=void 0,x[r]===t&&delete x[r])};x[r]=t,p?T(p,[e,o]):o()},clone(t){return gt(t,e,n,i)}};return S}function mt(t){if(xt(t))return t=pn(t),t.children=null,t}function yt(t){if(!xt(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(16&e)return n[0];if(32&e&&(0,r.Tn)(n.default))return n.default()}}function vt(t,e){6&t.shapeFlag&&t.component?vt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function bt(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===qe?(128&o.patchFlag&&r++,i=i.concat(bt(o.children,e,a))):(e||o.type!==Ge)&&i.push(null!=a?pn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}
/*! #__NO_SIDE_EFFECTS__ */function _t(t,e){return(0,r.Tn)(t)?(()=>(0,r.X$)({name:t.name},e,{setup:t}))():t}const wt=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const xt=t=>t.type.__isKeepAlive;RegExp,RegExp;function Et(t,e){return(0,r.cy)(t)?t.some((t=>Et(t,e))):(0,r.Kg)(t)?t.split(",").includes(e):!!(0,r.gd)(t)&&t.test(e)}function Tt(t,e){It(t,"a",e)}function St(t,e){It(t,"da",e)}function It(t,e,n=Sn){const i=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Ot(e,i,n),n){let t=n.parent;while(t&&t.parent)xt(t.parent.vnode)&&kt(i,e,n,t),t=t.parent}}function kt(t,e,n,i){const s=Ot(e,t,i,!0);Ft((()=>{(0,r.TF)(i[e],s)}),n)}function Ct(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function At(t){return 128&t.shapeFlag?t.ssContent:t}function Ot(t,e,n=Sn,r=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;(0,i.C4)();const s=An(n),a=o(e,n,t,r);return s(),(0,i.bl)(),a});return r?s.unshift(a):s.push(a),a}}const Rt=t=>(e,n=Sn)=>(!Dn||"sp"===t)&&Ot(t,((...t)=>e(...t)),n),Mt=Rt("bm"),Pt=Rt("m"),Dt=Rt("bu"),Nt=Rt("u"),Lt=Rt("bum"),Ft=Rt("um"),Vt=Rt("sp"),Ut=Rt("rtg"),jt=Rt("rtc");function Bt(t,e=Sn){Ot("ec",t,e)}function zt(t,e,n,i){let s;const o=n&&n[i];if((0,r.cy)(t)||(0,r.Kg)(t)){s=new Array(t.length);for(let n=0,i=t.length;n<i;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,r.Gv)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=e(t[r],r,i,o&&o[i])}}else s=[];return n&&(n[i]=s),s}const $t=t=>t?Rn(t)?Bn(t)||t.proxy:$t(t.parent):null,Ht=(0,r.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$t(t.parent),$root:t=>$t(t.root),$emit:t=>t.emit,$options:t=>Zt(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,_(t.update)}),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>nt.bind(t)}),Wt=(t,e)=>t!==r.MZ&&!t.__isScriptSetup&&(0,r.$3)(t,e),qt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=t;let h;if("$"!==e[0]){const i=c[e];if(void 0!==i)switch(i){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(Wt(s,e))return c[e]=1,s[e];if(o!==r.MZ&&(0,r.$3)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,r.$3)(h,e))return c[e]=3,a[e];if(n!==r.MZ&&(0,r.$3)(n,e))return c[e]=4,n[e];Gt&&(c[e]=0)}}const d=Ht[e];let f,p;return d?("$attrs"===e&&(0,i.u4)(t.attrs,"get",""),d(t)):(f=l.__cssModules)&&(f=f[e])?f:n!==r.MZ&&(0,r.$3)(n,e)?(c[e]=4,n[e]):(p=u.config.globalProperties,(0,r.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return Wt(s,e)?(s[e]=n,!0):i!==r.MZ&&(0,r.$3)(i,e)?(i[e]=n,!0):!(0,r.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==r.MZ&&(0,r.$3)(t,a)||Wt(e,a)||(c=o[0])&&(0,r.$3)(c,a)||(0,r.$3)(i,a)||(0,r.$3)(Ht,a)||(0,r.$3)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,r.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Kt(t){return(0,r.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Gt=!0;function Qt(t){const e=Zt(t),n=t.proxy,s=t.ctx;Gt=!1,e.beforeCreate&&Xt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:b,beforeUnmount:_,destroyed:w,unmounted:x,render:E,renderTracked:T,renderTriggered:S,errorCaptured:I,serverPrefetch:k,expose:C,inheritAttrs:A,components:O,directives:R,filters:M}=e,P=null;if(h&&Yt(h,s,P),c)for(const i in c){const t=c[i];(0,r.Tn)(t)&&(s[i]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,r.Gv)(e)&&(t.data=(0,i.Kh)(e))}if(Gt=!0,a)for(const i in a){const t=a[i],e=(0,r.Tn)(t)?t.bind(n,n):(0,r.Tn)(t.get)?t.get.bind(n,n):r.tE;0;const o=!(0,r.Tn)(t)&&(0,r.Tn)(t.set)?t.set.bind(n):r.tE,c=Hn({get:e,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(l)for(const i in l)Jt(l[i],s,n,i);if(u){const t=(0,r.Tn)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{fe(e,t[e])}))}function D(t,e){(0,r.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Xt(d,t,"c"),D(Mt,f),D(Pt,p),D(Dt,g),D(Nt,m),D(Tt,y),D(St,v),D(Bt,I),D(jt,T),D(Ut,S),D(Lt,_),D(Ft,x),D(Vt,k),(0,r.cy)(C))if(C.length){const e=t.exposed||(t.exposed={});C.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});E&&t.render===r.tE&&(t.render=E),null!=A&&(t.inheritAttrs=A),O&&(t.components=O),R&&(t.directives=R)}function Yt(t,e,n=r.tE){(0,r.cy)(t)&&(t=re(t));for(const s in t){const n=t[s];let o;o=(0,r.Gv)(n)?"default"in n?pe(n.from||s,n.default,!0):pe(n.from||s):pe(n),(0,i.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Xt(t,e,n){o((0,r.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Jt(t,e,n,i){const s=i.includes(".")?it(n,i):()=>n[i];if((0,r.Kg)(t)){const n=e[t];(0,r.Tn)(n)&&tt(s,n)}else if((0,r.Tn)(t))tt(s,t.bind(n));else if((0,r.Gv)(t))if((0,r.cy)(t))t.forEach((t=>Jt(t,e,n,i)));else{const i=(0,r.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,r.Tn)(i)&&tt(s,i,t)}else 0}function Zt(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let l;return c?l=c:s.length||n||i?(l={},s.length&&s.forEach((t=>te(l,t,a,!0))),te(l,e,a)):l=e,(0,r.Gv)(e)&&o.set(e,l),l}function te(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&te(t,s,n,!0),r&&r.forEach((e=>te(t,e,n,!0)));for(const o in e)if(i&&"expose"===o);else{const i=ee[o]||n&&n[o];t[o]=i?i(t[o],e[o]):e[o]}return t}const ee={data:ne,props:ae,emits:ae,methods:oe,computed:oe,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:oe,directives:oe,watch:ce,provide:ne,inject:ie};function ne(t,e){return e?t?function(){return(0,r.X$)((0,r.Tn)(t)?t.call(this,this):t,(0,r.Tn)(e)?e.call(this,this):e)}:e:t}function ie(t,e){return oe(re(t),re(e))}function re(t){if((0,r.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function se(t,e){return t?[...new Set([].concat(t,e))]:e}function oe(t,e){return t?(0,r.X$)(Object.create(null),t,e):e}function ae(t,e){return t?(0,r.cy)(t)&&(0,r.cy)(e)?[...new Set([...t,...e])]:(0,r.X$)(Object.create(null),Kt(t),Kt(null!=e?e:{})):e}function ce(t,e){if(!t)return e;if(!e)return t;const n=(0,r.X$)(Object.create(null),t);for(const i in e)n[i]=se(t[i],e[i]);return n}function le(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ue=0;function he(t,e){return function(n,i=null){(0,r.Tn)(n)||(n=(0,r.X$)({},n)),null==i||(0,r.Gv)(i)||(i=null);const s=le(),o=new WeakSet;let a=!1;const c=s.app={_uid:ue++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:qn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,r.Tn)(t.install)?(o.add(t),t.install(c,...e)):(0,r.Tn)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(r,o,l){if(!a){0;const u=hn(n,i);return u.appContext=s,!0===l?l="svg":!1===l&&(l=void 0),o&&e?e(u,r):t(u,r,l),a=!0,c._container=r,r.__vue_app__=c,Bn(u.component)||u.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c},runWithContext(t){const e=de;de=c;try{return t()}finally{de=e}}};return c}}let de=null;function fe(t,e){if(Sn){let n=Sn.provides;const i=Sn.parent&&Sn.parent.provides;i===n&&(n=Sn.provides=Object.create(i)),n[t]=e}else 0}function pe(t,e,n=!1){const i=Sn||M;if(i||de){const s=i?null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:de._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,r.Tn)(e)?e.call(i&&i.proxy):e}else 0}const ge={},me=()=>Object.create(ge),ye=t=>Object.getPrototypeOf(t)===ge;function ve(t,e,n,r=!1){const s={},o=me();t.propsDefaults=Object.create(null),_e(t,e,s,o);for(const i in t.propsOptions[0])i in s||(s[i]=void 0);n?t.props=r?s:(0,i.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function be(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,l=(0,i.ux)(o),[u]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let i;_e(t,e,o,a)&&(h=!0);for(const s in l)e&&((0,r.$3)(e,s)||(i=(0,r.Tg)(s))!==s&&(0,r.$3)(e,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=we(u,l,s,void 0,t,!0)):delete o[s]);if(a!==l)for(const t in a)e&&(0,r.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(R(t.emitsOptions,s))continue;const c=e[s];if(u)if((0,r.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,r.PT)(s);o[e]=we(u,l,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,i.hZ)(t.attrs,"set","")}function _e(t,e,n,s){const[o,a]=t.propsOptions;let c,l=!1;if(e)for(let i in e){if((0,r.SU)(i))continue;const u=e[i];let h;o&&(0,r.$3)(o,h=(0,r.PT)(i))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:R(t.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,l=!0)}if(a){const e=(0,i.ux)(n),s=c||r.MZ;for(let i=0;i<a.length;i++){const c=a[i];n[c]=we(o,e,c,s[c],t,!(0,r.$3)(s,c))}}return l}function we(t,e,n,i,s,o){const a=t[n];if(null!=a){const t=(0,r.$3)(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,r.Tn)(t)){const{propsDefaults:r}=s;if(n in r)i=r[n];else{const o=An(s);i=r[n]=t.call(null,e),o()}}else i=t}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==(0,r.Tg)(n)||(i=!0))}return i}function xe(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},c=[];let l=!1;if(!(0,r.Tn)(t)){const i=t=>{l=!0;const[n,i]=xe(t,e,!0);(0,r.X$)(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!l)return(0,r.Gv)(t)&&i.set(t,r.Oj),r.Oj;if((0,r.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,r.PT)(o[h]);Ee(t)&&(a[t]=r.MZ)}else if(o){0;for(const t in o){const e=(0,r.PT)(t);if(Ee(e)){const n=o[t],i=a[e]=(0,r.cy)(n)||(0,r.Tn)(n)?{type:n}:(0,r.X$)({},n);if(i){const t=Ie(Boolean,i.type),n=Ie(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||(0,r.$3)(i,"default"))&&c.push(e)}}}}const u=[a,c];return(0,r.Gv)(t)&&i.set(t,u),u}function Ee(t){return"$"!==t[0]&&!(0,r.SU)(t)}function Te(t){if(null===t)return"null";if("function"===typeof t)return t.name||"";if("object"===typeof t){const e=t.constructor&&t.constructor.name;return e||""}return""}function Se(t,e){return Te(t)===Te(e)}function Ie(t,e){return(0,r.cy)(e)?e.findIndex((e=>Se(e,t))):(0,r.Tn)(e)&&Se(e,t)?0:-1}const ke=t=>"_"===t[0]||"$stable"===t,Ce=t=>(0,r.cy)(t)?t.map(yn):[yn(t)],Ae=(t,e,n)=>{if(e._n)return e;const i=F(((...t)=>Ce(e(...t))),n);return i._c=!1,i},Oe=(t,e,n)=>{const i=t._ctx;for(const s in t){if(ke(s))continue;const n=t[s];if((0,r.Tn)(n))e[s]=Ae(s,n,i);else if(null!=n){0;const t=Ce(n);e[s]=()=>t}}},Re=(t,e)=>{const n=Ce(e);t.slots.default=()=>n},Me=(t,e)=>{const n=t.slots=me();if(32&t.vnode.shapeFlag){const t=e._;t?((0,r.X$)(n,e),(0,r.yQ)(n,"_",t,!0)):Oe(e,n)}else e&&Re(t,e)},Pe=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=r.MZ;if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,r.X$)(s,e),n||1!==t||delete s._):(o=!e.$stable,Oe(e,s)),a=e}else e&&(Re(t,e),a={default:1});if(o)for(const r in s)ke(r)||null!=a[r]||delete s[r]};function De(t,e,n,o,a=!1){if((0,r.cy)(t))return void t.forEach(((t,i)=>De(t,e&&((0,r.cy)(e)?e[i]:e),n,o,a)));if(wt(o)&&!a)return;const c=4&o.shapeFlag?Bn(o.component)||o.component.proxy:o.el,l=a?null:c,{i:u,r:h}=t;const d=e&&e.r,f=u.refs===r.MZ?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,r.Kg)(d)?(f[d]=null,(0,r.$3)(p,d)&&(p[d]=null)):(0,i.i9)(d)&&(d.value=null)),(0,r.Tn)(h))s(h,u,12,[l,f]);else{const e=(0,r.Kg)(h),s=(0,i.i9)(h);if(e||s){const i=()=>{if(t.f){const n=e?(0,r.$3)(p,h)?p[h]:f[h]:h.value;a?(0,r.cy)(n)&&(0,r.TF)(n,c):(0,r.cy)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,r.$3)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=l,(0,r.$3)(p,h)&&(p[h]=l)):s&&(h.value=l,t.k&&(f[t.k]=l))};l?(i.id=-1,Le(i,n)):i()}else 0}}function Ne(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,r.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Le=Y;function Fe(t){return Ve(t)}function Ve(t,e){Ne();const n=(0,r.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=r.tE,insertStaticContent:m}=t,y=(t,e,n,i=null,r=null,s=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!an(t,e)&&(i=J(t),K(t,r,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=e;switch(l){case Ke:v(t,e,n,i);break;case Ge:b(t,e,n,i);break;case Qe:null==t&&w(e,n,i,o);break;case qe:D(t,e,n,i,r,s,o,a,c);break;default:1&h?k(t,e,n,i,r,s,o,a,c):6&h?N(t,e,n,i,r,s,o,a,c):(64&h||128&h)&&l.process(t,e,n,i,r,s,o,a,c,et)}null!=u&&r&&De(u,t&&t.ref,s,e||t,!e)},v=(t,e,n,i)=>{if(null==t)s(e.el=l(e.children),n,i);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,i)=>{null==t?s(e.el=u(e.children||""),n,i):e.el=t.el},w=(t,e,n,i)=>{[t.el,t.anchor]=m(t.children,e,n,i,t.el,t.anchor)},E=({el:t,anchor:e},n,i)=>{let r;while(t&&t!==e)r=p(t),s(t,n,i),t=r;s(e,n,i)},I=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},k=(t,e,n,i,r,s,o,a,c)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?C(e,n,i,r,s,o,a,c):R(t,e,r,s,o,a,c)},C=(t,e,n,i,o,l,u,h)=>{let f,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(f=t.el=c(t.type,l,g&&g.is,g),8&m?d(f,t.children):16&m&&O(t.children,f,null,i,o,Ue(t,l),u,h),v&&ot(t,null,i,"created"),A(f,t,t.scopeId,u,i),g){for(const e in g)"value"===e||(0,r.SU)(e)||a(f,e,null,g[e],l,t.children,i,o,X);"value"in g&&a(f,"value",null,g.value,l),(p=g.onVnodeBeforeMount)&&wn(p,i,t)}v&&ot(t,null,i,"beforeMount");const b=Be(o,y);b&&y.beforeEnter(f),s(f,e,n),((p=g&&g.onVnodeMounted)||b||v)&&Le((()=>{p&&wn(p,i,t),b&&y.enter(f),v&&ot(t,null,i,"mounted")}),o)},A=(t,e,n,i,r)=>{if(n&&g(t,n),i)for(let s=0;s<i.length;s++)g(t,i[s]);if(r){let n=r.subTree;if(e===n){const e=r.vnode;A(t,e,e.scopeId,e.slotScopeIds,r.parent)}}},O=(t,e,n,i,r,s,o,a,c=0)=>{for(let l=c;l<t.length;l++){const c=t[l]=a?vn(t[l]):yn(t[l]);y(null,c,e,n,i,r,s,o,a)}},R=(t,e,n,i,s,o,c)=>{const l=e.el=t.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=e;u|=16&t.patchFlag;const p=t.props||r.MZ,g=e.props||r.MZ;let m;if(n&&je(n,!1),(m=g.onVnodeBeforeUpdate)&&wn(m,n,e,t),f&&ot(e,t,n,"beforeUpdate"),n&&je(n,!0),h?M(t.dynamicChildren,h,l,n,i,Ue(e,s),o):c||z(t,e,l,null,n,i,Ue(e,s),o,!1),u>0){if(16&u)P(l,e,p,g,n,i,s);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,s),4&u&&a(l,"style",p.style,g.style,s),8&u){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const o=r[e],c=p[o],u=g[o];u===c&&"value"!==o||a(l,o,c,u,s,t.children,n,i,X)}}1&u&&t.children!==e.children&&d(l,e.children)}else c||null!=h||P(l,e,p,g,n,i,s);((m=g.onVnodeUpdated)||f)&&Le((()=>{m&&wn(m,n,e,t),f&&ot(e,t,n,"updated")}),i)},M=(t,e,n,i,r,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],l=e[a],u=c.el&&(c.type===qe||!an(c,l)||70&c.shapeFlag)?f(c.el):n;y(c,l,u,null,i,r,s,o,!0)}},P=(t,e,n,i,s,o,c)=>{if(n!==i){if(n!==r.MZ)for(const l in n)(0,r.SU)(l)||l in i||a(t,l,n[l],null,c,e.children,s,o,X);for(const l in i){if((0,r.SU)(l))continue;const u=i[l],h=n[l];u!==h&&"value"!==l&&a(t,l,h,u,c,e.children,s,o,X)}"value"in i&&a(t,"value",n.value,i.value,c)}},D=(t,e,n,i,r,o,a,c,u)=>{const h=e.el=t?t.el:l(""),d=e.anchor=t?t.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,i),s(d,n,i),O(e.children||[],n,d,r,o,a,c,u)):f>0&&64&f&&p&&t.dynamicChildren?(M(t.dynamicChildren,p,n,r,o,a,c),(null!=e.key||r&&e===r.subTree)&&ze(t,e,!0)):z(t,e,n,d,r,o,a,c,u)},N=(t,e,n,i,r,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?r.ctx.activate(e,n,i,o,c):L(e,n,i,r,s,o,c):F(t,e,c)},L=(t,e,n,i,r,s,o)=>{const a=t.component=Tn(t,i,r);if(xt(t)&&(a.ctx.renderer=et),Nn(a),a.asyncDep){if(r&&r.registerDep(a,U),!t.el){const t=a.subTree=hn(Ge);b(null,t,e,n)}}else U(a,t,e,n,r,s,o)},F=(t,e,n)=>{const i=e.component=t.component;if(B(t,e,n)){if(i.asyncDep&&!i.asyncResolved)return void j(i,e,n);i.next=e,x(i.update),i.effect.dirty=!0,i.update()}else e.el=t.el,i.vnode=e},U=(t,e,n,s,o,a,c)=>{const l=()=>{if(t.isMounted){let{next:e,bu:n,u:i,parent:s,vnode:u}=t;{const n=He(t);if(n)return e&&(e.el=u.el,j(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||l()}))}let h,d=e;0,je(t,!1),e?(e.el=u.el,j(t,e,c)):e=u,n&&(0,r.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&wn(h,s,e,u),je(t,!0);const p=V(t);0;const g=t.subTree;t.subTree=p,y(g,p,f(g.el),J(g),t,o,a),e.el=p.el,null===d&&$(t,p.el),i&&Le(i,o),(h=e.props&&e.props.onVnodeUpdated)&&Le((()=>wn(h,s,e,u)),o)}else{let i;const{el:c,props:l}=e,{bm:u,m:h,parent:d}=t,f=wt(e);if(je(t,!1),u&&(0,r.DY)(u),!f&&(i=l&&l.onVnodeBeforeMount)&&wn(i,d,e),je(t,!0),c&&it){const n=()=>{t.subTree=V(t),it(c,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const i=t.subTree=V(t);0,y(null,i,n,s,t,o,a),e.el=i.el}if(h&&Le(h,o),!f&&(i=l&&l.onVnodeMounted)){const t=e;Le((()=>wn(i,d,t)),o)}(256&e.shapeFlag||d&&wt(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&Le(t.a,o),t.isMounted=!0,e=n=s=null}},u=t.effect=new i.X2(l,r.tE,(()=>_(h)),t.scope),h=t.update=()=>{u.dirty&&u.run()};h.id=t.uid,je(t,!0),h()},j=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,be(t,e.props,r,n),Pe(t,e.children,n),(0,i.C4)(),T(t),(0,i.bl)()},z=(t,e,n,i,r,s,o,a,c=!1)=>{const l=t&&t.children,u=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void W(l,h,n,i,r,s,o,a,c);if(256&f)return void H(l,h,n,i,r,s,o,a,c)}8&p?(16&u&&X(l,r,s),h!==l&&d(n,h)):16&u?16&p?W(l,h,n,i,r,s,o,a,c):X(l,r,s,!0):(8&u&&d(n,""),16&p&&O(h,n,i,r,s,o,a,c))},H=(t,e,n,i,s,o,a,c,l)=>{t=t||r.Oj,e=e||r.Oj;const u=t.length,h=e.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const i=e[f]=l?vn(e[f]):yn(e[f]);y(t[f],i,n,null,s,o,a,c,l)}u>h?X(t,s,o,!0,!1,d):O(e,n,i,s,o,a,c,l,d)},W=(t,e,n,i,s,o,a,c,l)=>{let u=0;const h=e.length;let d=t.length-1,f=h-1;while(u<=d&&u<=f){const i=t[u],r=e[u]=l?vn(e[u]):yn(e[u]);if(!an(i,r))break;y(i,r,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const i=t[d],r=e[f]=l?vn(e[f]):yn(e[f]);if(!an(i,r))break;y(i,r,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const t=f+1,r=t<h?e[t].el:i;while(u<=f)y(null,e[u]=l?vn(e[u]):yn(e[u]),n,r,s,o,a,c,l),u++}}else if(u>f)while(u<=d)K(t[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const t=e[u]=l?vn(e[u]):yn(e[u]);null!=t.key&&m.set(t.key,u)}let v,b=0;const _=f-g+1;let w=!1,x=0;const E=new Array(_);for(u=0;u<_;u++)E[u]=0;for(u=p;u<=d;u++){const i=t[u];if(b>=_){K(i,s,o,!0);continue}let r;if(null!=i.key)r=m.get(i.key);else for(v=g;v<=f;v++)if(0===E[v-g]&&an(i,e[v])){r=v;break}void 0===r?K(i,s,o,!0):(E[r-g]=u+1,r>=x?x=r:w=!0,y(i,e[r],n,null,s,o,a,c,l),b++)}const T=w?$e(E):r.Oj;for(v=T.length-1,u=_-1;u>=0;u--){const t=g+u,r=e[t],d=t+1<h?e[t+1].el:i;0===E[u]?y(null,r,n,d,s,o,a,c,l):w&&(v<0||u!==T[v]?q(r,n,d,2):v--)}}},q=(t,e,n,i,r=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=t;if(6&u)return void q(t.component.subTree,e,n,i);if(128&u)return void t.suspense.move(e,n,i);if(64&u)return void a.move(t,e,n,et);if(a===qe){s(o,e,n);for(let t=0;t<l.length;t++)q(l[t],e,n,i);return void s(t.anchor,e,n)}if(a===Qe)return void E(t,e,n);const h=2!==i&&1&u&&c;if(h)if(0===i)c.beforeEnter(o),s(o,e,n),Le((()=>c.enter(o)),r);else{const{leave:t,delayLeave:i,afterLeave:r}=c,a=()=>s(o,e,n),l=()=>{t(o,(()=>{a(),r&&r()}))};i?i(o,a,l):l()}else s(o,e,n)},K=(t,e,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=t;if(null!=a&&De(a,null,n,t,!0),256&u)return void e.ctx.deactivate(t);const f=1&u&&d,p=!wt(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&wn(g,e,t),6&u)Y(t.component,n,i);else{if(128&u)return void t.suspense.unmount(n,i);f&&ot(t,null,e,"beforeUnmount"),64&u?t.type.remove(t,e,n,r,et,i):l&&(s!==qe||h>0&&64&h)?X(l,e,n,!1,!0):(s===qe&&384&h||!r&&16&u)&&X(c,e,n),i&&G(t)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Le((()=>{g&&wn(g,e,t),f&&ot(t,null,e,"unmounted")}),n)},G=t=>{const{type:e,el:n,anchor:i,transition:r}=t;if(e===qe)return void Q(n,i);if(e===Qe)return void I(t);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&t.shapeFlag&&r&&!r.persisted){const{leave:e,delayLeave:i}=r,o=()=>e(n,s);i?i(t.el,s,o):o()}else s()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=t;i&&(0,r.DY)(i),s.stop(),o&&(o.active=!1,K(a,t,e,n)),c&&Le(c,e),Le((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,i=!1,r=!1,s=0)=>{for(let o=s;o<t.length;o++)K(t[o],e,n,i,r)},J=t=>6&t.shapeFlag?J(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el);let Z=!1;const tt=(t,e,n)=>{null==t?e._vnode&&K(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),Z||(Z=!0,T(),S(),Z=!1),e._vnode=t},et={p:y,um:K,m:q,r:G,mt:L,mc:O,pc:z,pbc:M,n:J,o:t};let nt,it;return e&&([nt,it]=e(et)),{render:tt,hydrate:nt,createApp:he(tt,nt)}}function Ue({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function je({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Be(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ze(t,e,n=!1){const i=t.children,s=e.children;if((0,r.cy)(i)&&(0,r.cy)(s))for(let r=0;r<i.length;r++){const t=i[r];let e=s[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[r]=vn(s[r]),e.el=t.el),n||ze(t,e)),e.type===Ke&&(e.el=t.el)}}function $e(t){const e=t.slice(),n=[0];let i,r,s,o,a;const c=t.length;for(i=0;i<c;i++){const c=t[i];if(0!==c){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function He(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:He(e)}const We=t=>t.__isTeleport;const qe=Symbol.for("v-fgt"),Ke=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),Qe=Symbol.for("v-stc"),Ye=[];let Xe=null;function Je(t=!1){Ye.push(Xe=t?null:[])}function Ze(){Ye.pop(),Xe=Ye[Ye.length-1]||null}let tn=1;function en(t){tn+=t}function nn(t){return t.dynamicChildren=tn>0?Xe||r.Oj:null,Ze(),tn>0&&Xe&&Xe.push(t),t}function rn(t,e,n,i,r,s){return nn(un(t,e,n,i,r,s,!0))}function sn(t,e,n,i,r){return nn(hn(t,e,n,i,r,!0))}function on(t){return!!t&&!0===t.__v_isVNode}function an(t,e){return t.type===e.type&&t.key===e.key}const cn=({key:t})=>null!=t?t:null,ln=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,r.Kg)(t)||(0,i.i9)(t)||(0,r.Tn)(t)?{i:M,r:t,k:e,f:!!n}:t:null);function un(t,e=null,n=null,i=0,s=null,o=(t===qe?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cn(e),ref:e&&ln(e),scopeId:P,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:M};return c?(bn(l,n),128&o&&t.normalize(l)):n&&(l.shapeFlag|=(0,r.Kg)(n)?8:16),tn>0&&!a&&Xe&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Xe.push(l),l}const hn=dn;function dn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==q||(t=Ge),on(t)){const i=pn(t,e,!0);return n&&bn(i,n),tn>0&&!a&&Xe&&(6&i.shapeFlag?Xe[Xe.indexOf(t)]=i:Xe.push(i)),i.patchFlag|=-2,i}if($n(t)&&(t=t.__vccOpts),e){e=fn(e);let{class:t,style:n}=e;t&&!(0,r.Kg)(t)&&(e.class=(0,r.C4)(t)),(0,r.Gv)(n)&&((0,i.ju)(n)&&!(0,r.cy)(n)&&(n=(0,r.X$)({},n)),e.style=(0,r.Tr)(n))}const c=(0,r.Kg)(t)?1:Q(t)?128:We(t)?64:(0,r.Gv)(t)?4:(0,r.Tn)(t)?2:0;return un(t,e,n,s,o,c,a,!0)}function fn(t){return t?(0,i.ju)(t)||ye(t)?(0,r.X$)({},t):t:null}function pn(t,e,n=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:l}=t,u=e?_n(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&cn(u),ref:e&&e.ref?n&&o?(0,r.cy)(o)?o.concat(ln(e)):[o,ln(e)]:ln(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pn(t.ssContent),ssFallback:t.ssFallback&&pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&(h.transition=l.clone(h)),h}function gn(t=" ",e=0){return hn(Ke,null,t,e)}function mn(t="",e=!1){return e?(Je(),sn(Ge,null,t)):hn(Ge,null,t)}function yn(t){return null==t||"boolean"===typeof t?hn(Ge):(0,r.cy)(t)?hn(qe,null,t.slice()):"object"===typeof t?vn(t):hn(Ke,null,String(t))}function vn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:pn(t)}function bn(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if((0,r.cy)(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),bn(t,n()),n._c&&(n._d=!0)))}{n=32;const i=e._;i||ye(e)?3===i&&M&&(1===M.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=M}}else(0,r.Tn)(e)?(e={default:e,_ctx:M},n=32):(e=String(e),64&i?(n=16,e=[gn(e)]):n=8);t.children=e,t.shapeFlag|=n}function _n(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=(0,r.C4)([e.class,i.class]));else if("style"===t)e.style=(0,r.Tr)([e.style,i.style]);else if((0,r.Mp)(t)){const n=e[t],s=i[t];!s||n===s||(0,r.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=i[t])}return e}function wn(t,e,n,i=null){o(t,e,7,[n,i])}const xn=le();let En=0;function Tn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||xn,a={uid:En++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xe(s,o),emitsOptions:O(s,o),emit:null,emitted:null,propsDefaults:r.MZ,inheritAttrs:s.inheritAttrs,ctx:r.MZ,data:r.MZ,props:r.MZ,attrs:r.MZ,slots:r.MZ,refs:r.MZ,setupState:r.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=A.bind(null,a),t.ce&&t.ce(a),a}let Sn=null;const In=()=>Sn||M;let kn,Cn;{const t=(0,r.We)(),e=(e,n)=>{let i;return(i=t[e])||(i=t[e]=[]),i.push(n),t=>{i.length>1?i.forEach((e=>e(t))):i[0](t)}};kn=e("__VUE_INSTANCE_SETTERS__",(t=>Sn=t)),Cn=e("__VUE_SSR_SETTERS__",(t=>Dn=t))}const An=t=>{const e=Sn;return kn(t),t.scope.on(),()=>{t.scope.off(),kn(e)}},On=()=>{Sn&&Sn.scope.off(),kn(null)};function Rn(t){return 4&t.vnode.shapeFlag}let Mn,Pn,Dn=!1;function Nn(t,e=!1){e&&Cn(e);const{props:n,children:i}=t.vnode,r=Rn(t);ve(t,n,r,e),Me(t,i);const s=r?Ln(t,e):void 0;return e&&Cn(!1),s}function Ln(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qt);const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?jn(t):null,c=An(t);(0,i.C4)();const l=s(o,t,0,[t.props,n]);if((0,i.bl)(),c(),(0,r.yL)(l)){if(l.then(On,On),e)return l.then((n=>{Fn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=l}else Fn(t,l,e)}else Vn(t,e)}function Fn(t,e,n){(0,r.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,r.Gv)(e)&&(t.setupState=(0,i.Pr)(e)),Vn(t,n)}function Vn(t,e,n){const s=t.type;if(!t.render){if(!e&&Mn&&!s.render){const e=s.template||Zt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,r.X$)((0,r.X$)({isCustomElement:n,delimiters:o},i),a);s.render=Mn(e,c)}}t.render=s.render||r.tE,Pn&&Pn(t)}{const e=An(t);(0,i.C4)();try{Qt(t)}finally{(0,i.bl)(),e()}}}const Un={get(t,e){return(0,i.u4)(t,"get",""),t[e]}};function jn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Un),slots:t.slots,emit:t.emit,expose:e}}function Bn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,i.Pr)((0,i.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in Ht?Ht[n](t):void 0},has(t,e){return e in t||e in Ht}}))}function zn(t,e=!0){return(0,r.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function $n(t){return(0,r.Tn)(t)&&"__vccOpts"in t}const Hn=(t,e)=>{const n=(0,i.EW)(t,e,Dn);return n};function Wn(t,e,n){const i=arguments.length;return 2===i?(0,r.Gv)(e)&&!(0,r.cy)(e)?on(e)?hn(t,null,[e]):hn(t,e):hn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&on(n)&&(n=[n]),hn(t,e,n))}const qn="3.4.26"},5130:function(t,e,n){n.d(e,{D$:function(){return kt},Ef:function(){return Rt},Jo:function(){return vt},lH:function(){return bt},u1:function(){return wt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var i=n(6768),r=n(4232),s=n(144);
/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,l=c&&c.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r="svg"===e?c.createElementNS(o,t):"mathml"===e?c.createElementNS(a,t):c.createElement(t,n?{is:n}:void 0);return"select"===t&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:t=>c.createTextNode(t),createComment:t=>c.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>c.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(e.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{l.innerHTML="svg"===i?`<svg>${t}</svg>`:"mathml"===i?`<math>${t}</math>`:t;const r=l.content;if("svg"===i||"mathml"===i){const t=r.firstChild;while(t.firstChild)r.appendChild(t.firstChild);r.removeChild(t)}e.insertBefore(r,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},h="transition",d="animation",f=Symbol("_vtc"),p=(t,{slots:e})=>(0,i.h)(i.pR,b(t),e);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,r.X$)({},i.QP,g),y=(t,e=[])=>{(0,r.cy)(t)?t.forEach((t=>t(...e))):t&&t(...e)},v=t=>!!t&&((0,r.cy)(t)?t.some((t=>t.length>1)):t.length>1);function b(t){const e={};for(const r in t)r in g||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=_(s),b=m&&m[0],w=m&&m[1],{onBeforeEnter:S,onEnter:k,onEnterCancelled:C,onLeave:A,onLeaveCancelled:R,onBeforeAppear:M=S,onAppear:P=k,onAppearCancelled:D=C}=e,N=(t,e,n)=>{E(t,e?h:c),E(t,e?u:a),n&&n()},L=(t,e)=>{t._isLeaving=!1,E(t,d),E(t,p),E(t,f),e&&e()},F=t=>(e,n)=>{const r=t?P:k,s=()=>N(e,t,n);y(r,[e,s]),T((()=>{E(e,t?l:o),x(e,t?h:c),v(r)||I(e,i,b,s)}))};return(0,r.X$)(e,{onBeforeEnter(t){y(S,[t]),x(t,o),x(t,a)},onBeforeAppear(t){y(M,[t]),x(t,l),x(t,u)},onEnter:F(!1),onAppear:F(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>L(t,e);x(t,d),x(t,f),O(),T((()=>{t._isLeaving&&(E(t,d),x(t,p),v(A)||I(t,i,w,n))})),y(A,[t,n])},onEnterCancelled(t){N(t,!1),y(C,[t])},onAppearCancelled(t){N(t,!0),y(D,[t])},onLeaveCancelled(t){L(t),y(R,[t])}})}function _(t){if(null==t)return null;if((0,r.Gv)(t))return[w(t.enter),w(t.leave)];{const e=w(t);return[e,e]}}function w(t){const e=(0,r.Ro)(t);return e}function x(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t[f]||(t[f]=new Set)).add(e)}function E(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const n=t[f];n&&(n.delete(e),n.size||(t[f]=void 0))}function T(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let S=0;function I(t,e,n,i){const r=t._endId=++S,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=k(t,e);if(!o)return i();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),s()},d=e=>{e.target===t&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),t.addEventListener(l,d)}function k(t,e){const n=window.getComputedStyle(t),i=t=>(n[t]||"").split(", "),r=i(`${h}Delay`),s=i(`${h}Duration`),o=C(r,s),a=i(`${d}Delay`),c=i(`${d}Duration`),l=C(a,c);let u=null,f=0,p=0;e===h?o>0&&(u=h,f=o,p=s.length):e===d?l>0&&(u=d,f=l,p=c.length):(f=Math.max(o,l),u=f>0?o>l?h:d:null,p=u?u===h?s.length:c.length:0);const g=u===h&&/\b(transform|all)(,|$)/.test(i(`${h}Property`).toString());return{type:u,timeout:f,propCount:p,hasTransform:g}}function C(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>A(e)+A(t[n]))))}function A(t){return"auto"===t?0:1e3*Number(t.slice(0,-1).replace(",","."))}function O(){return document.body.offsetHeight}function R(t,e,n){const i=t[f];i&&(e=(e?[e,...i]:[...i]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const M=Symbol("_vod"),P=Symbol("_vsh");const D=Symbol("");const N=/(^|;)\s*display\s*:/;function L(t,e,n){const i=t.style,s=(0,r.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,r.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&V(i,e,"")}else for(const t in e)null==n[t]&&V(i,t,"");for(const t in n)"display"===t&&(o=!0),V(i,t,n[t])}else if(s){if(e!==n){const t=i[D];t&&(n+=";"+t),i.cssText=n,o=N.test(n)}}else e&&t.removeAttribute("style");M in t&&(t[M]=o?i.display:"",t[P]&&(i.display="none"))}const F=/\s*!important$/;function V(t,e,n){if((0,r.cy)(n))n.forEach((n=>V(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=B(t,e);F.test(n)?t.setProperty((0,r.Tg)(i),n.replace(F,""),"important"):t[i]=n}}const U=["Webkit","Moz","ms"],j={};function B(t,e){const n=j[e];if(n)return n;let i=(0,r.PT)(e);if("filter"!==i&&i in t)return j[e]=i;i=(0,r.ZH)(i);for(let r=0;r<U.length;r++){const n=U[r]+i;if(n in t)return j[e]=n}return e}const z="http://www.w3.org/1999/xlink";function $(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(z,e.slice(6,e.length)):t.setAttributeNS(z,e,n);else{const i=(0,r.J$)(e);null==n||i&&!(0,r.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function H(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);const c=t.tagName;if("value"===e&&"PROGRESS"!==c&&!c.includes("-")){const i="OPTION"===c?t.getAttribute("value")||"":t.value,r=null==n?"":n;return i===r&&"_value"in t||(t.value=r),null==n&&t.removeAttribute(e),void(t._value=n)}let l=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.Y2)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{t[e]=n}catch(u){0}l&&t.removeAttribute(e)}function W(t,e,n,i){t.addEventListener(e,n,i)}function q(t,e,n,i){t.removeEventListener(e,n,i)}const K=Symbol("_vei");function G(t,e,n,i,r=null){const s=t[K]||(t[K]={}),o=s[e];if(i&&o)o.value=i;else{const[n,a]=Y(e);if(i){const o=s[e]=tt(i,r);W(t,n,o,a)}else o&&(q(t,n,o,a),s[e]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function Y(t){let e;if(Q.test(t)){let n;e={};while(n=t.match(Q))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.Tg)(t.slice(2));return[n,e]}let X=0;const J=Promise.resolve(),Z=()=>X||(J.then((()=>X=0)),X=Date.now());function tt(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,i.qL)(et(t,n.value),e,5,[t])};return n.value=t,n.attached=Z(),n}function et(t,e){if((0,r.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const nt=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,it=(t,e,n,i,s,o,a,c,l)=>{const u="svg"===s;"class"===e?R(t,i,u):"style"===e?L(t,n,i):(0,r.Mp)(e)?(0,r.CP)(e)||G(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):rt(t,e,i,u))?H(t,e,i,o,a,c,l):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),$(t,e,i,u))};function rt(t,e,n,i){if(i)return"innerHTML"===e||"textContent"===e||!!(e in t&&nt(e)&&(0,r.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!nt(e)||!(0,r.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const st=new WeakMap,ot=new WeakMap,at=Symbol("_moveCb"),ct=Symbol("_enterCb"),lt={name:"TransitionGroup",props:(0,r.X$)({},m,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,i.nI)(),r=(0,i.Gy)();let o,a;return(0,i.$u)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!ft(o[0].el,n.vnode.el,e))return;o.forEach(ut),o.forEach(ht);const i=o.filter(dt);O(),i.forEach((t=>{const n=t.el,i=n.style;x(n,e),i.transform=i.webkitTransform=i.transitionDuration="";const r=n[at]=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",r),n[at]=null,E(n,e))};n.addEventListener("transitionend",r)}))})),()=>{const c=(0,s.ux)(t),l=b(c);let u=c.tag||i.FK;if(o=[],a)for(let t=0;t<a.length;t++){const e=a[t];e.el&&e.el instanceof Element&&(o.push(e),(0,i.MZ)(e,(0,i.OW)(e,l,r,n)),st.set(e,e.el.getBoundingClientRect()))}a=e.default?(0,i.Df)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,i.MZ)(e,(0,i.OW)(e,l,r,n))}return(0,i.bF)(u,null,a)}}};lt.props;function ut(t){const e=t.el;e[at]&&e[at](),e[ct]&&e[ct]()}function ht(t){ot.set(t,t.el.getBoundingClientRect())}function dt(t){const e=st.get(t),n=ot.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${i}px,${r}px)`,e.transitionDuration="0s",t}}function ft(t,e,n){const i=t.cloneNode(),r=t[f];r&&r.forEach((t=>{t.split(/\s+/).forEach((t=>t&&i.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&i.classList.add(t))),i.style.display="none";const s=1===e.nodeType?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=k(i);return s.removeChild(i),o}const pt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.cy)(e)?t=>(0,r.DY)(e,t):e};function gt(t){t.target.composing=!0}function mt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yt=Symbol("_assign"),vt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[yt]=pt(s);const o=i||s.props&&"number"===s.props.type;W(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),o&&(i=(0,r.bB)(i)),t[yt](i)})),n&&W(t,"change",(()=>{t.value=t.value.trim()})),e||(W(t,"compositionstart",gt),W(t,"compositionend",mt),W(t,"change",mt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t[yt]=pt(o),t.composing)return;const a=!s&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,r.bB)(t.value),c=null==e?"":e;if(a!==c){if(document.activeElement===t&&"range"!==t.type){if(n)return;if(i&&t.value.trim()===c)return}t.value=c}}},bt={deep:!0,created(t,e,n){t[yt]=pt(n),W(t,"change",(()=>{const e=t._modelValue,n=Et(t),i=t.checked,s=t[yt];if((0,r.cy)(e)){const t=(0,r.u3)(e,n),o=-1!==t;if(i&&!o)s(e.concat(n));else if(!i&&o){const n=[...e];n.splice(t,1),s(n)}}else if((0,r.vM)(e)){const t=new Set(e);i?t.add(n):t.delete(n),s(t)}else s(Tt(t,i))}))},mounted:_t,beforeUpdate(t,e,n){t[yt]=pt(n),_t(t,e,n)}};function _t(t,{value:e,oldValue:n},i){t._modelValue=e,(0,r.cy)(e)?t.checked=(0,r.u3)(e,i.props.value)>-1:(0,r.vM)(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=(0,r.BX)(e,Tt(t,!0)))}const wt={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const o=(0,r.vM)(e);W(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,r.bB)(Et(t)):Et(t)));t[yt](t.multiple?o?new Set(e):e:e[0]),t._assigning=!0,(0,i.dY)((()=>{t._assigning=!1}))})),t[yt]=pt(s)},mounted(t,{value:e,modifiers:{number:n}}){xt(t,e)},beforeUpdate(t,e,n){t[yt]=pt(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||xt(t,e)}};function xt(t,e,n){const i=t.multiple,s=(0,r.cy)(e);if(!i||s||(0,r.vM)(e)){for(let n=0,o=t.options.length;n<o;n++){const o=t.options[n],a=Et(o);if(i)if(s){const t=typeof a;o.selected="string"===t||"number"===t?e.some((t=>String(t)===String(a))):(0,r.u3)(e,a)>-1}else o.selected=e.has(a);else if((0,r.BX)(Et(o),e))return void(t.selectedIndex!==n&&(t.selectedIndex=n))}i||-1===t.selectedIndex||(t.selectedIndex=-1)}}function Et(t){return"_value"in t?t._value:t.value}function Tt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const St=["ctrl","shift","alt","meta"],It={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>St.some((n=>t[`${n}Key`]&&!e.includes(n)))},kt=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(n,...i)=>{for(let t=0;t<e.length;t++){const i=It[e[t]];if(i&&i(n,e))return}return t(n,...i)})},Ct=(0,r.X$)({patchProp:it},u);let At;function Ot(){return At||(At=(0,i.K9)(Ct))}const Rt=(...t)=>{const e=Ot().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=Pt(t);if(!i)return;const s=e._component;(0,r.Tn)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Mt(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Mt(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function Pt(t){if((0,r.Kg)(t)){const e=document.querySelector(t);return e}return t}},4232:function(t,e,n){n.d(e,{$3:function(){return f},$H:function(){return F},BH:function(){return W},BX:function(){return nt},Bm:function(){return w},C4:function(){return X},CE:function(){return g},CP:function(){return l},DY:function(){return V},Gv:function(){return x},J$:function(){return Z},Kg:function(){return _},MZ:function(){return r},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return M},Qd:function(){return k},Ro:function(){return B},SU:function(){return A},TF:function(){return h},Tg:function(){return D},Tn:function(){return b},Tr:function(){return q},We:function(){return $},X$:function(){return u},Y2:function(){return tt},ZH:function(){return N},Zf:function(){return I},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return i},rU:function(){return L},tE:function(){return o},u3:function(){return it},vM:function(){return m},v_:function(){return rt},yI:function(){return C},yL:function(){return E},yQ:function(){return U}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);
/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function i(t,e){const n=new Set(t.split(","));return e?t=>n.has(t.toLowerCase()):t=>n.has(t)}const r={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),l=t=>t.startsWith("onUpdate:"),u=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(t,e)=>d.call(t,e),p=Array.isArray,g=t=>"[object Map]"===S(t),m=t=>"[object Set]"===S(t),y=t=>"[object Date]"===S(t),v=t=>"[object RegExp]"===S(t),b=t=>"function"===typeof t,_=t=>"string"===typeof t,w=t=>"symbol"===typeof t,x=t=>null!==t&&"object"===typeof t,E=t=>(x(t)||b(t))&&b(t.then)&&b(t.catch),T=Object.prototype.toString,S=t=>T.call(t),I=t=>S(t).slice(8,-1),k=t=>"[object Object]"===S(t),C=t=>_(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,A=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=t=>{const e=Object.create(null);return n=>{const i=e[n];return i||(e[n]=t(n))}},R=/-(\w)/g,M=O((t=>t.replace(R,((t,e)=>e?e.toUpperCase():"")))),P=/\B([A-Z])/g,D=O((t=>t.replace(P,"-$1").toLowerCase())),N=O((t=>t.charAt(0).toUpperCase()+t.slice(1))),L=O((t=>{const e=t?`on${N(t)}`:"";return e})),F=(t,e)=>!Object.is(t,e),V=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},U=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},B=t=>{const e=_(t)?Number(t):NaN;return isNaN(e)?t:e};let z;const $=()=>z||(z="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",W=i(H);function q(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=_(i)?Y(i):q(i);if(r)for(const t in r)e[t]=r[t]}return e}if(_(t)||x(t))return t}const K=/;(?![^(]*\))/g,G=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function Y(t){const e={};return t.replace(Q,"").split(K).forEach((t=>{if(t){const n=t.split(G);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function X(t){let e="";if(_(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const i=X(t[n]);i&&(e+=i+" ")}else if(x(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=i(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=nt(t[i],e[i]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),i=y(e);if(n||i)return!(!n||!i)&&t.getTime()===e.getTime();if(n=w(t),i=w(e),n||i)return t===e;if(n=p(t),i=p(e),n||i)return!(!n||!i)&&et(t,e);if(n=x(t),i=x(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const n in t){const i=t.hasOwnProperty(n),r=e.hasOwnProperty(n);if(i&&!r||!i&&r||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function it(t,e){return t.findIndex((t=>nt(t,e)))}const rt=t=>_(t)?t:null==t?"":p(t)||x(t)&&(t.toString===T||!b(t.toString))?JSON.stringify(t,st,2):String(t),st=(t,e)=>e&&e.__v_isRef?st(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],i)=>(t[ot(e,i)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>ot(t)))}:w(e)?ot(e):!x(e)||p(e)||k(e)?e:String(e),ot=(t,e="")=>{var n;return w(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},4458:function(t,e,n){n.d(e,{k:function(){return s}});var i,r=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var s=function(t){var n=[],i=arguments.length-1;while(i-- >0)n[i]=arguments[i+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&i.then((function(){r()?(c(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)}))):(a(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)})))}))}function o(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return o(e,t)}))}function c(t,e,n){fetch(t).then((function(i){404===i.status?(e("error",new Error("Service worker not found at "+t)),l()):-1===i.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+i.headers.get("content-type"))),l()):a(t,e,n)})).catch((function(t){return o(e,t)}))}function l(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return o(emit,t)}))}"undefined"!==typeof window&&(i="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},1241:function(t,e){e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n}},9306:function(t,e,n){var i=n(4901),r=n(6823),s=TypeError;t.exports=function(t){if(i(t))return t;throw new s(r(t)+" is not a function")}},3506:function(t,e,n){var i=n(3925),r=String,s=TypeError;t.exports=function(t){if(i(t))return t;throw new s("Can't set "+r(t)+" as a prototype")}},7080:function(t,e,n){var i=n(4402).has;t.exports=function(t){return i(t),t}},679:function(t,e,n){var i=n(1625),r=TypeError;t.exports=function(t,e){if(i(e,t))return t;throw new r("Incorrect invocation")}},8551:function(t,e,n){var i=n(34),r=String,s=TypeError;t.exports=function(t){if(i(t))return t;throw new s(r(t)+" is not an object")}},7811:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(t,e,n){var i=n(6706),r=n(4576),s=TypeError;t.exports=i(ArrayBuffer.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==r(t))throw new s("ArrayBuffer expected");return t.byteLength}},3238:function(t,e,n){var i=n(9504),r=n(7394),s=i(ArrayBuffer.prototype.slice);t.exports=function(t){if(0!==r(t))return!1;try{return s(t,0,0),!1}catch(e){return!0}}},5636:function(t,e,n){var i=n(4475),r=n(9504),s=n(6706),o=n(7696),a=n(3238),c=n(7394),l=n(4483),u=n(1548),h=i.structuredClone,d=i.ArrayBuffer,f=i.DataView,p=i.TypeError,g=Math.min,m=d.prototype,y=f.prototype,v=r(m.slice),b=s(m,"resizable","get"),_=s(m,"maxByteLength","get"),w=r(y.getInt8),x=r(y.setInt8);t.exports=(u||l)&&function(t,e,n){var i,r=c(t),s=void 0===e?r:o(e),m=!b||!b(t);if(a(t))throw new p("ArrayBuffer is detached");if(u&&(t=h(t,{transfer:[t]}),r===s&&(n||m)))return t;if(r>=s&&(!n||m))i=v(t,0,s);else{var y=n&&!m&&_?{maxByteLength:_(t)}:void 0;i=new d(s,y);for(var E=new f(t),T=new f(i),S=g(s,r),I=0;I<S;I++)x(T,I,w(E,I))}return u||l(t),i}},4644:function(t,e,n){var i,r,s,o=n(7811),a=n(3724),c=n(4475),l=n(4901),u=n(34),h=n(9297),d=n(6955),f=n(6823),p=n(6699),g=n(6840),m=n(2106),y=n(1625),v=n(2787),b=n(2967),_=n(8227),w=n(3392),x=n(1181),E=x.enforce,T=x.get,S=c.Int8Array,I=S&&S.prototype,k=c.Uint8ClampedArray,C=k&&k.prototype,A=S&&v(S),O=I&&v(I),R=Object.prototype,M=c.TypeError,P=_("toStringTag"),D=w("TYPED_ARRAY_TAG"),N="TypedArrayConstructor",L=o&&!!b&&"Opera"!==d(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!u(t))return!1;var e=d(t);return"DataView"===e||h(V,e)||h(U,e)},B=function(t){var e=v(t);if(u(e)){var n=T(e);return n&&h(n,N)?n[N]:B(e)}},z=function(t){if(!u(t))return!1;var e=d(t);return h(V,e)||h(U,e)},$=function(t){if(z(t))return t;throw new M("Target is not a typed array")},H=function(t){if(l(t)&&(!b||y(A,t)))return t;throw new M(f(t)+" is not a typed array constructor")},W=function(t,e,n,i){if(a){if(n)for(var r in V){var s=c[r];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(l){}}}O[t]&&!n||g(O,t,n?e:L&&I[t]||e,i)}},q=function(t,e,n){var i,r;if(a){if(b){if(n)for(i in V)if(r=c[i],r&&h(r,t))try{delete r[t]}catch(s){}if(A[t]&&!n)return;try{return g(A,t,n?e:L&&A[t]||e)}catch(s){}}for(i in V)r=c[i],!r||r[t]&&!n||g(r,t,e)}};for(i in V)r=c[i],s=r&&r.prototype,s?E(s)[N]=r:L=!1;for(i in U)r=c[i],s=r&&r.prototype,s&&(E(s)[N]=r);if((!L||!l(A)||A===Function.prototype)&&(A=function(){throw new M("Incorrect invocation")},L))for(i in V)c[i]&&b(c[i],A);if((!L||!O||O===R)&&(O=A.prototype,L))for(i in V)c[i]&&b(c[i].prototype,O);if(L&&v(C)!==O&&b(C,O),a&&!h(O,P))for(i in F=!0,m(O,P,{configurable:!0,get:function(){return u(this)?this[D]:void 0}}),V)c[i]&&p(c[i],D,i);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:F&&D,aTypedArray:$,aTypedArrayConstructor:H,exportTypedArrayMethod:W,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:B,isView:j,isTypedArray:z,TypedArray:A,TypedArrayPrototype:O}},5370:function(t,e,n){var i=n(6198);t.exports=function(t,e,n){var r=0,s=arguments.length>2?n:i(e),o=new t(s);while(s>r)o[r]=e[r++];return o}},9617:function(t,e,n){var i=n(5397),r=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=i(e),c=s(a);if(0===c)return!t&&-1;var l,u=r(o,c);if(t&&n!==n){while(c>u)if(l=a[u++],l!==l)return!0}else for(;c>u;u++)if((t||u in a)&&a[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4527:function(t,e,n){var i=n(3724),r=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(r(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},7628:function(t,e,n){var i=n(6198);t.exports=function(t,e){for(var n=i(t),r=new e(n),s=0;s<n;s++)r[s]=t[n-s-1];return r}},9928:function(t,e,n){var i=n(6198),r=n(1291),s=RangeError;t.exports=function(t,e,n,o){var a=i(t),c=r(n),l=c<0?a+c:c;if(l>=a||l<0)throw new s("Incorrect index");for(var u=new e(a),h=0;h<a;h++)u[h]=h===l?o:t[h];return u}},4576:function(t,e,n){var i=n(9504),r=i({}.toString),s=i("".slice);t.exports=function(t){return s(r(t),8,-1)}},6955:function(t,e,n){var i=n(2140),r=n(4901),s=n(4576),o=n(8227),a=o("toStringTag"),c=Object,l="Arguments"===s(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=i?s:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=c(t),a))?n:l?s(e):"Object"===(i=s(e))&&r(e.callee)?"Arguments":i}},7740:function(t,e,n){var i=n(9297),r=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=r(e),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];i(t,h)||n&&i(n,h)||c(t,h,l(e,h))}}},2211:function(t,e,n){var i=n(9039);t.exports=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},6699:function(t,e,n){var i=n(3724),r=n(4913),s=n(6980);t.exports=i?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},2106:function(t,e,n){var i=n(283),r=n(4913);t.exports=function(t,e,n){return n.get&&i(n.get,e,{getter:!0}),n.set&&i(n.set,e,{setter:!0}),r.f(t,e,n)}},6840:function(t,e,n){var i=n(4901),r=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:e;if(i(n)&&s(n,l,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(u){}c?t[e]=n:r.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},9433:function(t,e,n){var i=n(4475),r=Object.defineProperty;t.exports=function(t,e){try{r(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},3724:function(t,e,n){var i=n(9039);t.exports=!i((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(t,e,n){var i,r,s,o,a=n(4475),c=n(9714),l=n(1548),u=a.structuredClone,h=a.ArrayBuffer,d=a.MessageChannel,f=!1;if(l)f=function(t){u(t,{transfer:[t]})};else if(h)try{d||(i=c("worker_threads"),i&&(d=i.MessageChannel)),d&&(r=new d,s=new h(2),o=function(t){r.port1.postMessage(null,[t])},2===s.byteLength&&(o(s),0===s.byteLength&&(f=o)))}catch(p){}t.exports=f},4055:function(t,e,n){var i=n(4475),r=n(34),s=i.document,o=r(s)&&r(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},6837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},5002:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7290:function(t,e,n){var i=n(516),r=n(9088);t.exports=!i&&!r&&"object"==typeof window&&"object"==typeof document},516:function(t){t.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},9088:function(t,e,n){var i=n(4475),r=n(4576);t.exports="process"===r(i.process)},9392:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(t,e,n){var i,r,s=n(4475),o=n(9392),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),t.exports=r},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(t,e,n){var i=n(9504),r=Error,s=i("".replace),o=function(t){return String(new r(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!r.prepareStackTrace)while(e--)t=s(t,a,"");return t}},6518:function(t,e,n){var i=n(4475),r=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),l=n(2796);t.exports=function(t,e){var n,u,h,d,f,p,g=t.target,m=t.global,y=t.stat;if(u=m?i:y?i[g]||a(g,{}):i[g]&&i[g].prototype,u)for(h in e){if(f=e[h],t.dontCallGetSet?(p=r(u,h),d=p&&p.value):d=u[h],n=l(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,t)}}},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},616:function(t,e,n){var i=n(9039);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){var i=n(616),r=Function.prototype.call;t.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},350:function(t,e,n){var i=n(3724),r=n(9297),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},6706:function(t,e,n){var i=n(9504),r=n(9306);t.exports=function(t,e,n){try{return i(r(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},9504:function(t,e,n){var i=n(616),r=Function.prototype,s=r.call,o=i&&r.bind.bind(s,s);t.exports=i?o:function(t){return function(){return s.apply(t,arguments)}}},7751:function(t,e,n){var i=n(4475),r=n(4901),s=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(i[t]):i[t]&&i[t][e]}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},5966:function(t,e,n){var i=n(9306),r=n(4117);t.exports=function(t,e){var n=t[e];return r(n)?void 0:i(n)}},3789:function(t,e,n){var i=n(9306),r=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",l=RangeError,u=TypeError,h=Math.max,d=function(t,e){this.set=t,this.size=h(e,0),this.has=i(t.has),this.keys=i(t.keys)};d.prototype={getIterator:function(){return a(r(s(this.keys,this.set)))},includes:function(t){return s(this.has,this.set,t)}},t.exports=function(t){r(t);var e=+t.size;if(e!==e)throw new u(c);var n=o(e);if(n<0)throw new l(c);return new d(t,n)}},4475:function(t,e,n){var i=function(t){return t&&t.Math===Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||i("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){var i=n(9504),r=n(8981),s=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(r(t),e)}},421:function(t){t.exports={}},5917:function(t,e,n){var i=n(3724),r=n(9039),s=n(4055);t.exports=!i&&!r((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){var i=n(9504),r=n(9039),s=n(4576),o=Object,a=i("".split);t.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},3167:function(t,e,n){var i=n(4901),r=n(34),s=n(2967);t.exports=function(t,e,n){var o,a;return s&&i(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3706:function(t,e,n){var i=n(9504),r=n(4901),s=n(7629),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},1181:function(t,e,n){var i,r,s,o=n(8622),a=n(4475),c=n(34),l=n(6699),u=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return s(t)?r(t):i(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=r(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var b=h.state||(h.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,i=function(t,e){if(b.has(t))throw new g(p);return e.facade=t,b.set(t,e),e},r=function(t){return b.get(t)||{}},s=function(t){return b.has(t)}}else{var _=d("state");f[_]=!0,i=function(t,e){if(u(t,_))throw new g(p);return e.facade=t,l(t,_,e),e},r=function(t){return u(t,_)?t[_]:{}},s=function(t){return u(t,_)}}t.exports={set:i,get:r,has:s,enforce:y,getterFor:v}},4376:function(t,e,n){var i=n(4576);t.exports=Array.isArray||function(t){return"Array"===i(t)}},1108:function(t,e,n){var i=n(6955);t.exports=function(t){var e=i(t);return"BigInt64Array"===e||"BigUint64Array"===e}},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){var i=n(9039),r=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===u||n!==l&&(r(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},4117:function(t){t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){var i=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},3925:function(t,e,n){var i=n(34);t.exports=function(t){return i(t)||null===t}},6395:function(t){t.exports=!1},757:function(t,e,n){var i=n(7751),r=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&s(e.prototype,a(t))}},507:function(t,e,n){var i=n(9565);t.exports=function(t,e,n){var r,s,o=n?t:t.iterator,a=t.next;while(!(r=i(a,o)).done)if(s=e(r.value),void 0!==s)return s}},9539:function(t,e,n){var i=n(9565),r=n(8551),s=n(5966);t.exports=function(t,e,n){var o,a;r(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=i(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return r(o),n}},6198:function(t,e,n){var i=n(8014);t.exports=function(t){return i(t.length)}},283:function(t,e,n){var i=n(9504),r=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,l=n(3706),u=n(1181),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,g=i("".slice),m=i("".replace),y=i([].join),v=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),_=t.exports=function(t,e,n){"Symbol("===g(f(e),0,7)&&(e="["+m(f(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(r){}var i=h(t);return o(i,"source")||(i.source=y(b,"string"==typeof e?e:"")),t};Function.prototype.toString=_((function(){return s(this)&&d(this).source||l(this)}),"toString")},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var i=+t;return(i>0?n:e)(i)}},2603:function(t,e,n){var i=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:i(t)}},4913:function(t,e,n){var i=n(3724),r=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=i?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var i=u(t,e);i&&i[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:h in n?n[h]:i[h],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(o(t),e=a(e),o(n),r)try{return l(t,e,n)}catch(i){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){var i=n(3724),r=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),l=n(9297),u=n(5917),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=c(e),u)try{return h(t,e)}catch(n){}if(l(t,e))return o(!r(s.f,t,e),t[e])}},8480:function(t,e,n){var i=n(1828),r=n(8727),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},3717:function(t,e){e.f=Object.getOwnPropertySymbols},2787:function(t,e,n){var i=n(9297),r=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),l=Object,u=l.prototype;t.exports=a?l.getPrototypeOf:function(t){var e=s(t);if(i(e,c))return e[c];var n=e.constructor;return r(n)&&e instanceof n?n.prototype:e instanceof l?u:null}},1625:function(t,e,n){var i=n(9504);t.exports=i({}.isPrototypeOf)},1828:function(t,e,n){var i=n(9504),r=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=i([].push);t.exports=function(t,e){var n,i=s(t),l=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&c(u,n);while(e.length>l)r(i,n=e[l++])&&(~o(u,n)||c(u,n));return u}},8773:function(t,e){var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);e.f=r?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},2967:function(t,e,n){var i=n(6706),r=n(34),s=n(7750),o=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=i(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,i){return s(n),o(i),r(n)?(e?t(n,i):n.__proto__=i,n):n}}():void 0)},4270:function(t,e,n){var i=n(9565),r=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&r(n=t.toString)&&!s(a=i(n,t)))return a;if(r(n=t.valueOf)&&!s(a=i(n,t)))return a;if("string"!==e&&r(n=t.toString)&&!s(a=i(n,t)))return a;throw new o("Can't convert object to primitive value")}},5031:function(t,e,n){var i=n(7751),r=n(9504),s=n(8480),o=n(3717),a=n(8551),c=r([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},7750:function(t,e,n){var i=n(4117),r=TypeError;t.exports=function(t){if(i(t))throw new r("Can't call method on "+t);return t}},9286:function(t,e,n){var i=n(4402),r=n(8469),s=i.Set,o=i.add;t.exports=function(t){var e=new s;return r(t,(function(t){o(e,t)})),e}},3440:function(t,e,n){var i=n(7080),r=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),l=n(507),u=r.has,h=r.remove;t.exports=function(t){var e=i(this),n=a(t),r=s(e);return o(e)<=n.size?c(e,(function(t){n.includes(t)&&h(r,t)})):l(n.getIterator(),(function(t){u(e,t)&&h(r,t)})),r}},4402:function(t,e,n){var i=n(9504),r=Set.prototype;t.exports={Set:Set,add:i(r.add),has:i(r.has),remove:i(r["delete"]),proto:r}},8750:function(t,e,n){var i=n(7080),r=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),l=r.Set,u=r.add,h=r.has;t.exports=function(t){var e=i(this),n=o(t),r=new l;return s(e)>n.size?c(n.getIterator(),(function(t){h(e,t)&&u(r,t)})):a(e,(function(t){n.includes(t)&&u(r,t)})),r}},4449:function(t,e,n){var i=n(7080),r=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),l=n(9539);t.exports=function(t){var e=i(this),n=o(t);if(s(e)<=n.size)return!1!==a(e,(function(t){if(n.includes(t))return!1}),!0);var u=n.getIterator();return!1!==c(u,(function(t){if(r(e,t))return l(u,"normal",!1)}))}},3838:function(t,e,n){var i=n(7080),r=n(5170),s=n(8469),o=n(3789);t.exports=function(t){var e=i(this),n=o(t);return!(r(e)>n.size)&&!1!==s(e,(function(t){if(!n.includes(t))return!1}),!0)}},8527:function(t,e,n){var i=n(7080),r=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);t.exports=function(t){var e=i(this),n=o(t);if(s(e)<n.size)return!1;var l=n.getIterator();return!1!==a(l,(function(t){if(!r(e,t))return c(l,"normal",!1)}))}},8469:function(t,e,n){var i=n(9504),r=n(507),s=n(4402),o=s.Set,a=s.proto,c=i(a.forEach),l=i(a.keys),u=l(new o).next;t.exports=function(t,e,n){return n?r({iterator:l(t),next:u},e):c(t,e)}},4916:function(t,e,n){var i=n(7751),r=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};t.exports=function(t){var e=i("Set");try{(new e)[t](r(0));try{return(new e)[t](r(-1)),!1}catch(n){return!0}}catch(s){return!1}}},5170:function(t,e,n){var i=n(6706),r=n(4402);t.exports=i(r.proto,"size","get")||function(t){return t.size}},3650:function(t,e,n){var i=n(7080),r=n(4402),s=n(9286),o=n(3789),a=n(507),c=r.add,l=r.has,u=r.remove;t.exports=function(t){var e=i(this),n=o(t).getIterator(),r=s(e);return a(n,(function(t){l(e,t)?u(r,t):c(r,t)})),r}},4204:function(t,e,n){var i=n(7080),r=n(4402).add,s=n(9286),o=n(3789),a=n(507);t.exports=function(t){var e=i(this),n=o(t).getIterator(),c=s(e);return a(n,(function(t){r(c,t)})),c}},6119:function(t,e,n){var i=n(5745),r=n(3392),s=i("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},7629:function(t,e,n){var i=n(6395),r=n(4475),s=n(9433),o="__core-js_shared__",a=t.exports=r[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.37.0",mode:i?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){var i=n(7629);t.exports=function(t,e){return i[t]||(i[t]=e||{})}},1548:function(t,e,n){var i=n(4475),r=n(9039),s=n(7388),o=n(7290),a=n(516),c=n(9088),l=i.structuredClone;t.exports=!!l&&!r((function(){if(a&&s>92||c&&s>94||o&&s>97)return!1;var t=new ArrayBuffer(8),e=l(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}))},4495:function(t,e,n){var i=n(7388),r=n(9039),s=n(4475),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},5610:function(t,e,n){var i=n(1291),r=Math.max,s=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):s(n,e)}},5854:function(t,e,n){var i=n(2777),r=TypeError;t.exports=function(t){var e=i(t,"number");if("number"==typeof e)throw new r("Can't convert number to bigint");return BigInt(e)}},7696:function(t,e,n){var i=n(1291),r=n(8014),s=RangeError;t.exports=function(t){if(void 0===t)return 0;var e=i(t),n=r(e);if(e!==n)throw new s("Wrong length or index");return n}},5397:function(t,e,n){var i=n(7055),r=n(7750);t.exports=function(t){return i(r(t))}},1291:function(t,e,n){var i=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:i(e)}},8014:function(t,e,n){var i=n(1291),r=Math.min;t.exports=function(t){var e=i(t);return e>0?r(e,9007199254740991):0}},8981:function(t,e,n){var i=n(7750),r=Object;t.exports=function(t){return r(i(t))}},2777:function(t,e,n){var i=n(9565),r=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),l=TypeError,u=c("toPrimitive");t.exports=function(t,e){if(!r(t)||s(t))return t;var n,c=o(t,u);if(c){if(void 0===e&&(e="default"),n=i(c,t,e),!r(n)||s(n))return n;throw new l("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){var i=n(2777),r=n(757);t.exports=function(t){var e=i(t,"string");return r(e)?e:e+""}},2140:function(t,e,n){var i=n(8227),r=i("toStringTag"),s={};s[r]="z",t.exports="[object z]"===String(s)},655:function(t,e,n){var i=n(6955),r=String;t.exports=function(t){if("Symbol"===i(t))throw new TypeError("Cannot convert a Symbol value to a string");return r(t)}},9714:function(t,e,n){var i=n(9088);t.exports=function(t){try{if(i)return Function('return require("'+t+'")')()}catch(e){}}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){var i=n(9504),r=0,s=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+s,36)}},7040:function(t,e,n){var i=n(4495);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){var i=n(3724),r=n(9039);t.exports=i&&r((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},8622:function(t,e,n){var i=n(4475),r=n(4901),s=i.WeakMap;t.exports=r(s)&&/native code/.test(String(s))},8227:function(t,e,n){var i=n(4475),r=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),l=i.Symbol,u=r("wks"),h=c?l["for"]||l:l&&l.withoutSetter||o;t.exports=function(t){return s(u,t)||(u[t]=a&&s(l,t)?l[t]:h("Symbol."+t)),u[t]}},6573:function(t,e,n){var i=n(3724),r=n(2106),s=n(3238),o=ArrayBuffer.prototype;i&&!("detached"in o)&&r(o,"detached",{configurable:!0,get:function(){return s(this)}})},7936:function(t,e,n){var i=n(6518),r=n(5636);r&&i({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return r(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(t,e,n){var i=n(6518),r=n(5636);r&&i({target:"ArrayBuffer",proto:!0},{transfer:function(){return r(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(t,e,n){var i=n(6518),r=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=l||!u();i({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=r(this),n=s(e),i=arguments.length;a(n+i);for(var c=0;c<i;c++)e[n]=arguments[c],n++;return o(e,n),n}})},7642:function(t,e,n){var i=n(6518),r=n(3440),s=n(4916);i({target:"Set",proto:!0,real:!0,forced:!s("difference")},{difference:r})},8004:function(t,e,n){var i=n(6518),r=n(9039),s=n(8750),o=n(4916),a=!o("intersection")||r((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));i({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},3853:function(t,e,n){var i=n(6518),r=n(4449),s=n(4916);i({target:"Set",proto:!0,real:!0,forced:!s("isDisjointFrom")},{isDisjointFrom:r})},5876:function(t,e,n){var i=n(6518),r=n(3838),s=n(4916);i({target:"Set",proto:!0,real:!0,forced:!s("isSubsetOf")},{isSubsetOf:r})},2475:function(t,e,n){var i=n(6518),r=n(8527),s=n(4916);i({target:"Set",proto:!0,real:!0,forced:!s("isSupersetOf")},{isSupersetOf:r})},5024:function(t,e,n){var i=n(6518),r=n(3650),s=n(4916);i({target:"Set",proto:!0,real:!0,forced:!s("symmetricDifference")},{symmetricDifference:r})},1698:function(t,e,n){var i=n(6518),r=n(4204),s=n(4916);i({target:"Set",proto:!0,real:!0,forced:!s("union")},{union:r})},7467:function(t,e,n){var i=n(7628),r=n(4644),s=r.aTypedArray,o=r.exportTypedArrayMethod,a=r.getTypedArrayConstructor;o("toReversed",(function(){return i(s(this),a(this))}))},4732:function(t,e,n){var i=n(4644),r=n(9504),s=n(9306),o=n(5370),a=i.aTypedArray,c=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,u=r(i.TypedArrayPrototype.sort);l("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(c(e),e);return u(n,t)}))},9577:function(t,e,n){var i=n(9928),r=n(4644),s=n(1108),o=n(1291),a=n(5854),c=r.aTypedArray,l=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();u("with",{with:function(t,e){var n=c(this),r=o(t),u=s(n)?a(e):+e;return i(n,l(n),r,u)}}["with"],!h)},3375:function(t,e,n){n(7642)},9225:function(t,e,n){n(8004)},3972:function(t,e,n){n(3853)},9209:function(t,e,n){n(5876)},5714:function(t,e,n){n(2475)},7561:function(t,e,n){n(5024)},6197:function(t,e,n){n(1698)},4979:function(t,e,n){var i=n(6518),r=n(4475),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),l=n(679),u=n(3167),h=n(2603),d=n(5002),f=n(6193),p=n(3724),g=n(6395),m="DOMException",y=s("Error"),v=s(m),b=function(){l(this,_);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),i=new v(e,n),r=new y(e);return r.name=m,a(i,"stack",o(1,f(r.stack,1))),u(i,this,b),i},_=b.prototype=v.prototype,w="stack"in new y(m),x="stack"in new v(1,2),E=v&&p&&Object.getOwnPropertyDescriptor(r,m),T=!!E&&!(E.writable&&E.configurable),S=w&&!T&&!x;i({global:!0,constructor:!0,forced:g||S},{DOMException:S?b:v});var I=s(m),k=I.prototype;if(k.constructor!==I)for(var C in g||a(k,"constructor",o(1,I)),d)if(c(d,C)){var A=d[C],O=A.s;c(I,O)||a(I,O,o(6,A.c))}},4603:function(t,e,n){var i=n(6840),r=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,l=r(c.append),u=r(c["delete"]),h=r(c.forEach),d=r([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&i(c,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return u(this,t);var i=[];h(this,(function(t,e){d(i,{key:e,value:t})})),o(e,1);var r,a=s(t),c=s(n),f=0,p=0,g=!1,m=i.length;while(f<m)r=i[f++],g||r.key===a?(g=!0,u(this,r.key)):p++;while(p<m)r=i[p++],r.key===a&&r.value===c||l(this,r.key,r.value)}),{enumerable:!0,unsafe:!0})},7566:function(t,e,n){var i=n(6840),r=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,l=r(c.getAll),u=r(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||i(c,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return u(this,t);var i=l(this,t);o(e,1);var r=s(n),a=0;while(a<i.length)if(i[a++]===r)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(t,e,n){var i=n(3724),r=n(9504),s=n(2106),o=URLSearchParams.prototype,a=r(o.forEach);i&&!("size"in o)&&s(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},6540:function(t,e,n){n.d(e,{KO:function(){return J},MF:function(){return Q},Sx:function(){return X},Wp:function(){return Y},j6:function(){return H},om:function(){return $},xZ:function(){return W}});n(4114);var i=n(852),r=n(1363),s=n(4046),o=n(8071);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(c(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function c(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const l="@firebase/app",u="0.10.2",h=new r.Vy("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",m="@firebase/app-check",y="@firebase/auth",v="@firebase/auth-compat",b="@firebase/database",_="@firebase/database-compat",w="@firebase/functions",x="@firebase/functions-compat",E="@firebase/installations",T="@firebase/installations-compat",S="@firebase/messaging",I="@firebase/messaging-compat",k="@firebase/performance",C="@firebase/performance-compat",A="@firebase/remote-config",O="@firebase/remote-config-compat",R="@firebase/storage",M="@firebase/storage-compat",P="@firebase/firestore",D="@firebase/firestore-compat",N="firebase",L="10.11.1",F="[DEFAULT]",V={[l]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[g]:"fire-app-check-compat",[y]:"fire-auth",[v]:"fire-auth-compat",[b]:"fire-rtdb",[_]:"fire-rtdb-compat",[w]:"fire-fn",[x]:"fire-fn-compat",[E]:"fire-iid",[T]:"fire-iid-compat",[S]:"fire-fcm",[I]:"fire-fcm-compat",[k]:"fire-perf",[C]:"fire-perf-compat",[A]:"fire-rc",[O]:"fire-rc-compat",[R]:"fire-gcs",[M]:"fire-gcs-compat",[P]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},U=new Map,j=new Map,B=new Map;function z(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $(t){const e=t.name;if(B.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;B.set(e,t);for(const n of U.values())z(n,t);for(const n of j.values())z(n,t);return!0}function H(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function W(t){return void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},K=new s.FA("app","Firebase",q);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q=L;function Y(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:F,automaticDataCollectionEnabled:!1},e),o=r.name;if("string"!==typeof o||!o)throw K.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw K.create("no-options");const a=U.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(r,a.config))return a;throw K.create("duplicate-app",{appName:o})}const c=new i.h1(o);for(const i of B.values())c.addComponent(i);const l=new G(n,r,c);return U.set(o,l),l}function X(t=F){const e=U.get(t);if(!e&&t===F&&(0,s.T9)())return Y();if(!e)throw K.create("no-app",{appName:t});return e}function J(t,e,n){var r;let s=null!==(r=V[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}$(new i.uA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="firebase-heartbeat-database",tt=1,et="firebase-heartbeat-store";let nt=null;function it(){return nt||(nt=(0,o.P2)(Z,tt,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(et)}catch(n){console.warn(n)}}}}).catch((t=>{throw K.create("idb-open",{originalErrorMessage:t.message})}))),nt}async function rt(t){try{const e=await it(),n=e.transaction(et),i=await n.objectStore(et).get(ot(t));return await n.done,i}catch(e){if(e instanceof s.g)h.warn(e.message);else{const t=K.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});h.warn(t.message)}}}async function st(t,e){try{const n=await it(),i=n.transaction(et,"readwrite"),r=i.objectStore(et);await r.put(e,ot(t)),await i.done}catch(n){if(n instanceof s.g)h.warn(n.message);else{const t=K.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(t.message)}}}function ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=1024,ct=2592e6;class lt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),r=ut();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=ct})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=ut(),{heartbeatsToSend:n,unsentEntries:i}=ht(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ut(){const t=new Date;return t.toISOString().substring(0,10)}function ht(t,e=at){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),ft(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ft(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await rt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ft(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){$(new i.uA("platform-logger",(t=>new a(t)),"PRIVATE")),$(new i.uA("heartbeat",(t=>new lt(t)),"PRIVATE")),J(l,u,t),J(l,u,"esm2017"),J("fire-js","")}pt("")},852:function(t,e,n){n.d(e,{h1:function(){return l},uA:function(){return r}});n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var i=n(4046);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},1363:function(t,e,n){n.d(e,{$b:function(){return r},Vy:function(){return l}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}},6912:function(t,e,n){function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function r(t,e){if("object"!=i(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function s(t){var e=r(t,"string");return"symbol"==i(e)?e:e+""}function o(t,e,n){return e=s(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Bs:function(){return Ho},PP:function(){return Ja},t1:function(){return No},s$:function(){return Ta},kc:function(){return nc},P$:function(){return xr},hE:function(){return ka},m_:function(){return Ka}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function a(t){return t+.5|0}const c=(t,e,n)=>Math.max(Math.min(t,n),e);function l(t){return c(a(2.55*t),0,255)}function u(t){return c(a(255*t),0,255)}function h(t){return c(a(t/2.55)/100,0,1)}function d(t){return c(a(100*t),0,100)}const f={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},p=[..."0123456789ABCDEF"],g=t=>p[15&t],m=t=>p[(240&t)>>4]+p[15&t],y=t=>(240&t)>>4===(15&t),v=t=>y(t.r)&&y(t.g)&&y(t.b)&&y(t.a);function b(t){var e,n=t.length;return"#"===t[0]&&(4===n||5===n?e={r:255&17*f[t[1]],g:255&17*f[t[2]],b:255&17*f[t[3]],a:5===n?17*f[t[4]]:255}:7!==n&&9!==n||(e={r:f[t[1]]<<4|f[t[2]],g:f[t[3]]<<4|f[t[4]],b:f[t[5]]<<4|f[t[6]],a:9===n?f[t[7]]<<4|f[t[8]]:255})),e}const _=(t,e)=>t<255?e(t):"";function w(t){var e=v(t)?g:m;return t?"#"+e(t.r)+e(t.g)+e(t.b)+_(t.a,e):void 0}const x=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function E(t,e,n){const i=e*Math.min(n,1-n),r=(e,r=(e+t/30)%12)=>n-i*Math.max(Math.min(r-3,9-r,1),-1);return[r(0),r(8),r(4)]}function T(t,e,n){const i=(i,r=(i+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function S(t,e,n){const i=E(t,1,.5);let r;for(e+n>1&&(r=1/(e+n),e*=r,n*=r),r=0;r<3;r++)i[r]*=1-e-n,i[r]+=e;return i}function I(t,e,n,i,r){return t===r?(e-n)/i+(e<n?6:0):e===r?(n-t)/i+2:(t-e)/i+4}function k(t){const e=255,n=t.r/e,i=t.g/e,r=t.b/e,s=Math.max(n,i,r),o=Math.min(n,i,r),a=(s+o)/2;let c,l,u;return s!==o&&(u=s-o,l=a>.5?u/(2-s-o):u/(s+o),c=I(n,i,r,u,s),c=60*c+.5),[0|c,l||0,a]}function C(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(u)}function A(t,e,n){return C(E,t,e,n)}function O(t,e,n){return C(S,t,e,n)}function R(t,e,n){return C(T,t,e,n)}function M(t){return(t%360+360)%360}function P(t){const e=x.exec(t);let n,i=255;if(!e)return;e[5]!==n&&(i=e[6]?l(+e[5]):u(+e[5]));const r=M(+e[2]),s=+e[3]/100,o=+e[4]/100;return n="hwb"===e[1]?O(r,s,o):"hsv"===e[1]?R(r,s,o):A(r,s,o),{r:n[0],g:n[1],b:n[2],a:i}}function D(t,e){var n=k(t);n[0]=M(n[0]+e),n=A(n),t.r=n[0],t.g=n[1],t.b=n[2]}function N(t){if(!t)return;const e=k(t),n=e[0],i=d(e[1]),r=d(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${r}%, ${h(t.a)})`:`hsl(${n}, ${i}%, ${r}%)`}const L={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},F={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function V(){const t={},e=Object.keys(F),n=Object.keys(L);let i,r,s,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],r=0;r<n.length;r++)s=n[r],a=a.replace(s,L[s]);s=parseInt(F[o],16),t[a]=[s>>16&255,s>>8&255,255&s]}return t}let U;function j(t){U||(U=V(),U.transparent=[0,0,0,0]);const e=U[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const B=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function z(t){const e=B.exec(t);let n,i,r,s=255;if(e){if(e[7]!==n){const t=+e[7];s=e[8]?l(t):c(255*t,0,255)}return n=+e[1],i=+e[3],r=+e[5],n=255&(e[2]?l(n):c(n,0,255)),i=255&(e[4]?l(i):c(i,0,255)),r=255&(e[6]?l(r):c(r,0,255)),{r:n,g:i,b:r,a:s}}}function $(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${h(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const H=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,W=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function q(t,e,n){const i=W(h(t.r)),r=W(h(t.g)),s=W(h(t.b));return{r:u(H(i+n*(W(h(e.r))-i))),g:u(H(r+n*(W(h(e.g))-r))),b:u(H(s+n*(W(h(e.b))-s))),a:t.a+n*(e.a-t.a)}}function K(t,e,n){if(t){let i=k(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,0===e?360:1)),i=A(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function G(t,e){return t?Object.assign(e||{},t):t}function Q(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=u(t[3]))):(e=G(t,{r:0,g:0,b:0,a:1}),e.a=u(e.a)),e}function Y(t){return"r"===t.charAt(0)?z(t):P(t)}class X{constructor(t){if(t instanceof X)return t;const e=typeof t;let n;"object"===e?n=Q(t):"string"===e&&(n=b(t)||j(t)||Y(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=G(this._rgb);return t&&(t.a=h(t.a)),t}set rgb(t){this._rgb=Q(t)}rgbString(){return this._valid?$(this._rgb):void 0}hexString(){return this._valid?w(this._rgb):void 0}hslString(){return this._valid?N(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,i=t.rgb;let r;const s=e===r?.5:e,o=2*s-1,a=n.a-i.a,c=((o*a===-1?o:(o+a)/(1+o*a))+1)/2;r=1-c,n.r=255&c*n.r+r*i.r+.5,n.g=255&c*n.g+r*i.g+.5,n.b=255&c*n.b+r*i.b+.5,n.a=s*n.a+(1-s)*i.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=q(this._rgb,t._rgb,e)),this}clone(){return new X(this.rgb)}alpha(t){return this._rgb.a=u(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=a(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return K(this._rgb,2,t),this}darken(t){return K(this._rgb,2,-t),this}saturate(t){return K(this._rgb,1,t),this}desaturate(t){return K(this._rgb,1,-t),this}rotate(t){return D(this._rgb,t),this}}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function J(){}const Z=(()=>{let t=0;return()=>t++})();function tt(t){return null===t||"undefined"===typeof t}function et(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function nt(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}function it(t){return("number"===typeof t||t instanceof Number)&&isFinite(+t)}function rt(t,e){return it(t)?t:e}function st(t,e){return"undefined"===typeof t?e:t}const ot=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100:+t/e,at=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function ct(t,e,n){if(t&&"function"===typeof t.call)return t.apply(n,e)}function lt(t,e,n,i){let r,s,o;if(et(t))if(s=t.length,i)for(r=s-1;r>=0;r--)e.call(n,t[r],r);else for(r=0;r<s;r++)e.call(n,t[r],r);else if(nt(t))for(o=Object.keys(t),s=o.length,r=0;r<s;r++)e.call(n,t[o[r]],o[r])}function ut(t,e){let n,i,r,s;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(r=t[n],s=e[n],r.datasetIndex!==s.datasetIndex||r.index!==s.index)return!1;return!0}function ht(t){if(et(t))return t.map(ht);if(nt(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let r=0;for(;r<i;++r)e[n[r]]=ht(t[n[r]]);return e}return t}function dt(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function ft(t,e,n,i){if(!dt(t))return;const r=e[t],s=n[t];nt(r)&&nt(s)?pt(r,s,i):e[t]=ht(s)}function pt(t,e,n){const i=et(e)?e:[e],r=i.length;if(!nt(t))return t;n=n||{};const s=n.merger||ft;let o;for(let a=0;a<r;++a){if(o=i[a],!nt(o))continue;const e=Object.keys(o);for(let i=0,r=e.length;i<r;++i)s(e[i],t,o,n)}return t}function gt(t,e){return pt(t,e,{merger:mt})}function mt(t,e,n){if(!dt(t))return;const i=e[t],r=n[t];nt(i)&&nt(r)?gt(i,r):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=ht(r))}const yt={"":t=>t,x:t=>t.x,y:t=>t.y};function vt(t){const e=t.split("."),n=[];let i="";for(const r of e)i+=r,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function bt(t){const e=vt(t);return t=>{for(const n of e){if(""===n)break;t=t&&t[n]}return t}}function _t(t,e){const n=yt[e]||(yt[e]=bt(e));return n(t)}function wt(t){return t.charAt(0).toUpperCase()+t.slice(1)}const xt=t=>"undefined"!==typeof t,Et=t=>"function"===typeof t,Tt=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function St(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}const It=Math.PI,kt=2*It,Ct=kt+It,At=Number.POSITIVE_INFINITY,Ot=It/180,Rt=It/2,Mt=It/4,Pt=2*It/3,Dt=Math.log10,Nt=Math.sign;function Lt(t,e,n){return Math.abs(t-e)<n}function Ft(t){const e=Math.round(t);t=Lt(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Dt(t))),i=t/n,r=i<=1?1:i<=2?2:i<=5?5:10;return r*n}function Vt(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(0|n)&&e.push(n),e.sort(((t,e)=>t-e)).pop(),e}function Ut(t){return!isNaN(parseFloat(t))&&isFinite(t)}function jt(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function Bt(t,e,n){let i,r,s;for(i=0,r=t.length;i<r;i++)s=t[i][n],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function zt(t){return t*(It/180)}function $t(t){return t*(180/It)}function Ht(t){if(!it(t))return;let e=1,n=0;while(Math.round(t*e)/e!==t)e*=10,n++;return n}function Wt(t,e){const n=e.x-t.x,i=e.y-t.y,r=Math.sqrt(n*n+i*i);let s=Math.atan2(i,n);return s<-.5*It&&(s+=kt),{angle:s,distance:r}}function qt(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Kt(t,e){return(t-e+Ct)%kt-It}function Gt(t){return(t%kt+kt)%kt}function Qt(t,e,n,i){const r=Gt(t),s=Gt(e),o=Gt(n),a=Gt(s-r),c=Gt(o-r),l=Gt(r-s),u=Gt(r-o);return r===s||r===o||i&&s===o||a>c&&l<u}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function Xt(t){return Yt(t,-32768,32767)}function Jt(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function Zt(t,e,n){n=n||(n=>t[n]<e);let i,r=t.length-1,s=0;while(r-s>1)i=s+r>>1,n(i)?s=i:r=i;return{lo:s,hi:r}}const te=(t,e,n,i)=>Zt(t,n,i?i=>{const r=t[i][e];return r<n||r===n&&t[i+1][e]===n}:i=>t[i][e]<n),ee=(t,e,n)=>Zt(t,n,(i=>t[i][e]>=n));function ne(t,e,n){let i=0,r=t.length;while(i<r&&t[i]<e)i++;while(r>i&&t[r-1]>n)r--;return i>0||r<t.length?t.slice(i,r):t}const ie=["push","pop","shift","splice","unshift"];function re(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),ie.forEach((e=>{const n="_onData"+wt(e),i=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const r=i.apply(this,e);return t._chartjs.listeners.forEach((t=>{"function"===typeof t[n]&&t[n](...e)})),r}})})))}function se(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,r=i.indexOf(e);-1!==r&&i.splice(r,1),i.length>0||(ie.forEach((e=>{delete t[e]})),delete t._chartjs)}function oe(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const ae=function(){return"undefined"===typeof window?function(t){return t()}:window.requestAnimationFrame}();function ce(t,e){let n=[],i=!1;return function(...r){n=r,i||(i=!0,ae.call(window,(()=>{i=!1,t.apply(e,n)})))}}function le(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const ue=t=>"start"===t?"left":"end"===t?"right":"center",he=(t,e,n)=>"start"===t?e:"end"===t?n:(e+n)/2,de=(t,e,n,i)=>{const r=i?"left":"right";return t===r?n:"center"===t?(e+n)/2:e};function fe(t,e,n){const i=e.length;let r=0,s=i;if(t._sorted){const{iScale:o,_parsed:a}=t,c=o.axis,{min:l,max:u,minDefined:h,maxDefined:d}=o.getUserBounds();h&&(r=Yt(Math.min(te(a,c,l).lo,n?i:te(e,c,o.getPixelForValue(l)).lo),0,i-1)),s=d?Yt(Math.max(te(a,o.axis,u,!0).hi+1,n?0:te(e,c,o.getPixelForValue(u),!0).hi+1),r,i)-r:i-r}return{start:r,count:s}}function pe(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,r={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=r,!0;const s=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,r),s}const ge=t=>0===t||1===t,me=(t,e,n)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*kt/n),ye=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*kt/n)+1,ve={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*Rt),easeOutSine:t=>Math.sin(t*Rt),easeInOutSine:t=>-.5*(Math.cos(It*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>ge(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>ge(t)?t:me(t,.075,.3),easeOutElastic:t=>ge(t)?t:ye(t,.075,.3),easeInOutElastic(t){const e=.1125,n=.45;return ge(t)?t:t<.5?.5*me(2*t,e,n):.5+.5*ye(2*t-1,e,n)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-ve.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},easeInOutBounce:t=>t<.5?.5*ve.easeInBounce(2*t):.5*ve.easeOutBounce(2*t-1)+.5};function be(t){if(t&&"object"===typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function _e(t){return be(t)?t:new X(t)}function we(t){return be(t)?t:new X(t).saturate(.5).darken(.1).hexString()}const xe=["x","y","borderWidth","radius","tension"],Ee=["color","borderColor","backgroundColor"];function Te(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),t.set("animations",{colors:{type:"color",properties:Ee},numbers:{type:"number",properties:xe}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}})}function Se(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Ie=new Map;function ke(t,e){e=e||{};const n=t+JSON.stringify(e);let i=Ie.get(n);return i||(i=new Intl.NumberFormat(t,e),Ie.set(n,i)),i}function Ce(t,e,n){return ke(e,n).format(t)}const Ae={values(t){return et(t)?t:""+t},numeric(t,e,n){if(0===t)return"0";const i=this.chart.options.locale;let r,s=t;if(n.length>1){const e=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(e<1e-4||e>1e15)&&(r="scientific"),s=Oe(t,n)}const o=Dt(Math.abs(s)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),Ce(t,i,c)},logarithmic(t,e,n){if(0===t)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(Dt(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?Ae.numeric.call(this,t,e,n):""}};function Oe(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Re={formatters:Ae};function Me(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Re.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t&&"dash"!==t}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t})}const Pe=Object.create(null),De=Object.create(null);function Ne(t,e){if(!e)return t;const n=e.split(".");for(let i=0,r=n.length;i<r;++i){const e=n[i];t=t[e]||(t[e]=Object.create(null))}return t}function Le(t,e,n){return"string"===typeof e?pt(Ne(t,e),n):pt(Ne(t,""),e)}class Fe{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>we(e.backgroundColor),this.hoverBorderColor=(t,e)=>we(e.borderColor),this.hoverColor=(t,e)=>we(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Le(this,t,e)}get(t){return Ne(this,t)}describe(t,e){return Le(De,t,e)}override(t,e){return Le(Pe,t,e)}route(t,e,n,i){const r=Ne(this,t),s=Ne(this,n),o="_"+e;Object.defineProperties(r,{[o]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[o],e=s[i];return nt(t)?Object.assign({},e,t):st(t,e)},set(t){this[o]=t}}})}apply(t){t.forEach((t=>t(this)))}}var Ve=new Fe({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Te,Se,Me]);function Ue(t){return!t||tt(t.size)||tt(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function je(t,e,n,i,r){let s=e[r];return s||(s=e[r]=t.measureText(r).width,n.push(r)),s>i&&(i=s),i}function Be(t,e,n,i){i=i||{};let r=i.data=i.data||{},s=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(r=i.data={},s=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let c,l,u,h,d;for(c=0;c<a;c++)if(h=n[c],void 0===h||null===h||et(h)){if(et(h))for(l=0,u=h.length;l<u;l++)d=h[l],void 0===d||null===d||et(d)||(o=je(t,r,s,o,d))}else o=je(t,r,s,o,h);t.restore();const f=s.length/2;if(f>n.length){for(c=0;c<f;c++)delete r[s[c]];s.splice(0,f)}return o}function ze(t,e,n){const i=t.currentDevicePixelRatio,r=0!==n?Math.max(n/2,.5):0;return Math.round((e-r)*i)/i+r}function $e(t,e){(e||t)&&(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function He(t,e,n,i){We(t,e,n,i,null)}function We(t,e,n,i,r){let s,o,a,c,l,u,h,d;const f=e.pointStyle,p=e.rotation,g=e.radius;let m=(p||0)*Ot;if(f&&"object"===typeof f&&(s=f.toString(),"[object HTMLImageElement]"===s||"[object HTMLCanvasElement]"===s))return t.save(),t.translate(n,i),t.rotate(m),t.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),void t.restore();if(!(isNaN(g)||g<=0)){switch(t.beginPath(),f){default:r?t.ellipse(n,i,r/2,g,0,0,kt):t.arc(n,i,g,0,kt),t.closePath();break;case"triangle":u=r?r/2:g,t.moveTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=Pt,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),m+=Pt,t.lineTo(n+Math.sin(m)*u,i-Math.cos(m)*g),t.closePath();break;case"rectRounded":l=.516*g,c=g-l,o=Math.cos(m+Mt)*c,h=Math.cos(m+Mt)*(r?r/2-l:c),a=Math.sin(m+Mt)*c,d=Math.sin(m+Mt)*(r?r/2-l:c),t.arc(n-h,i-a,l,m-It,m-Rt),t.arc(n+d,i-o,l,m-Rt,m),t.arc(n+h,i+a,l,m,m+Rt),t.arc(n-d,i+o,l,m+Rt,m+It),t.closePath();break;case"rect":if(!p){c=Math.SQRT1_2*g,u=r?r/2:c,t.rect(n-u,i-c,2*u,2*c);break}m+=Mt;case"rectRot":h=Math.cos(m)*(r?r/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(r?r/2:g),t.moveTo(n-h,i-a),t.lineTo(n+d,i-o),t.lineTo(n+h,i+a),t.lineTo(n-d,i+o),t.closePath();break;case"crossRot":m+=Mt;case"cross":h=Math.cos(m)*(r?r/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(r?r/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o);break;case"star":h=Math.cos(m)*(r?r/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(r?r/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o),m+=Mt,h=Math.cos(m)*(r?r/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(r?r/2:g),t.moveTo(n-h,i-a),t.lineTo(n+h,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o);break;case"line":o=r?r/2:Math.cos(m)*g,a=Math.sin(m)*g,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(m)*(r?r/2:g),i+Math.sin(m)*g);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function qe(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Ke(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Ge(t){t.restore()}function Qe(t,e,n,i,r){if(!e)return t.lineTo(n.x,n.y);if("middle"===r){const i=(e.x+n.x)/2;t.lineTo(i,e.y),t.lineTo(i,n.y)}else"after"===r!==!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function Ye(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function Xe(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),tt(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function Je(t,e,n,i,r){if(r.strikethrough||r.underline){const s=t.measureText(i),o=e-s.actualBoundingBoxLeft,a=e+s.actualBoundingBoxRight,c=n-s.actualBoundingBoxAscent,l=n+s.actualBoundingBoxDescent,u=r.strikethrough?(c+l)/2:l;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=r.decorationWidth||2,t.moveTo(o,u),t.lineTo(a,u),t.stroke()}}function Ze(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function tn(t,e,n,i,r,s={}){const o=et(e)?e:[e],a=s.strokeWidth>0&&""!==s.strokeColor;let c,l;for(t.save(),t.font=r.string,Xe(t,s),c=0;c<o.length;++c)l=o[c],s.backdrop&&Ze(t,s.backdrop),a&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),tt(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(l,n,i,s.maxWidth)),t.fillText(l,n,i,s.maxWidth),Je(t,n,i,l,s),i+=Number(r.lineHeight);t.restore()}function en(t,e){const{x:n,y:i,w:r,h:s,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,1.5*It,It,!0),t.lineTo(n,i+s-o.bottomLeft),t.arc(n+o.bottomLeft,i+s-o.bottomLeft,o.bottomLeft,It,Rt,!0),t.lineTo(n+r-o.bottomRight,i+s),t.arc(n+r-o.bottomRight,i+s-o.bottomRight,o.bottomRight,Rt,0,!0),t.lineTo(n+r,i+o.topRight),t.arc(n+r-o.topRight,i+o.topRight,o.topRight,0,-Rt,!0),t.lineTo(n+o.topLeft,i)}const nn=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,rn=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function sn(t,e){const n=(""+t).match(nn);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const on=t=>+t||0;function an(t,e){const n={},i=nt(e),r=i?Object.keys(e):e,s=nt(t)?i?n=>st(t[n],t[e[n]]):e=>t[e]:()=>t;for(const o of r)n[o]=on(s(o));return n}function cn(t){return an(t,{top:"y",right:"x",bottom:"y",left:"x"})}function ln(t){return an(t,["topLeft","topRight","bottomLeft","bottomRight"])}function un(t){const e=cn(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function hn(t,e){t=t||{},e=e||Ve.font;let n=st(t.size,e.size);"string"===typeof n&&(n=parseInt(n,10));let i=st(t.style,e.style);i&&!(""+i).match(rn)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const r={family:st(t.family,e.family),lineHeight:sn(st(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:st(t.weight,e.weight),string:""};return r.string=Ue(r),r}function dn(t,e,n,i){let r,s,o,a=!0;for(r=0,s=t.length;r<s;++r)if(o=t[r],void 0!==o&&(void 0!==e&&"function"===typeof o&&(o=o(e),a=!1),void 0!==n&&et(o)&&(o=o[n%o.length],a=!1),void 0!==o))return i&&!a&&(i.cacheable=!1),o}function fn(t,e,n){const{min:i,max:r}=t,s=at(e,(r-i)/2),o=(t,e)=>n&&0===t?0:t+e;return{min:o(i,-Math.abs(s)),max:o(r,s)}}function pn(t,e){return Object.assign(Object.create(t),e)}function gn(t,e=[""],n,i,r=(()=>t[0])){const s=n||t;"undefined"===typeof i&&(i=Rn("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:i,_getTarget:r,override:n=>gn([n,...t],e,s,i)};return new Proxy(o,{deleteProperty(e,n){return delete e[n],delete e._keys,delete t[0][n],!0},get(n,i){return _n(n,i,(()=>On(i,e,t,n)))},getOwnPropertyDescriptor(t,e){return Reflect.getOwnPropertyDescriptor(t._scopes[0],e)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(t,e){return Mn(t).includes(e)},ownKeys(t){return Mn(t)},set(t,e,n){const i=t._storage||(t._storage=r());return t[e]=i[e]=n,delete t._keys,!0}})}function mn(t,e,n,i){const r={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:yn(t,i),setContext:e=>mn(t,e,n,i),override:r=>mn(t.override(r),e,n,i)};return new Proxy(r,{deleteProperty(e,n){return delete e[n],delete t[n],!0},get(t,e,n){return _n(t,e,(()=>wn(t,e,n)))},getOwnPropertyDescriptor(e,n){return e._descriptors.allKeys?Reflect.has(t,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,n)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(e,n){return Reflect.has(t,n)},ownKeys(){return Reflect.ownKeys(t)},set(e,n,i){return t[n]=i,delete e[n],!0}})}function yn(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:r=e.allKeys}=t;return{allKeys:r,scriptable:n,indexable:i,isScriptable:Et(n)?n:()=>n,isIndexable:Et(i)?i:()=>i}}const vn=(t,e)=>t?t+wt(e):e,bn=(t,e)=>nt(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function _n(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||"constructor"===e)return t[e];const i=n();return t[e]=i,i}function wn(t,e,n){const{_proxy:i,_context:r,_subProxy:s,_descriptors:o}=t;let a=i[e];return Et(a)&&o.isScriptable(e)&&(a=xn(e,a,t,n)),et(a)&&a.length&&(a=En(e,a,t,o.isIndexable)),bn(e,a)&&(a=mn(a,r,s&&s[e],o)),a}function xn(t,e,n,i){const{_proxy:r,_context:s,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let c=e(s,o||i);return a.delete(t),bn(t,c)&&(c=kn(r._scopes,r,t,c)),c}function En(t,e,n,i){const{_proxy:r,_context:s,_subProxy:o,_descriptors:a}=n;if("undefined"!==typeof s.index&&i(t))return e[s.index%e.length];if(nt(e[0])){const n=e,i=r._scopes.filter((t=>t!==n));e=[];for(const c of n){const n=kn(i,r,t,c);e.push(mn(n,s,o&&o[t],a))}}return e}function Tn(t,e,n){return Et(t)?t(e,n):t}const Sn=(t,e)=>!0===t?e:"string"===typeof t?_t(e,t):void 0;function In(t,e,n,i,r){for(const s of e){const e=Sn(n,s);if(e){t.add(e);const s=Tn(e._fallback,n,r);if("undefined"!==typeof s&&s!==n&&s!==i)return s}else if(!1===e&&"undefined"!==typeof i&&n!==i)return null}return!1}function kn(t,e,n,i){const r=e._rootScopes,s=Tn(e._fallback,n,i),o=[...t,...r],a=new Set;a.add(i);let c=Cn(a,o,n,s||n,i);return null!==c&&(("undefined"===typeof s||s===n||(c=Cn(a,o,s,c,i),null!==c))&&gn(Array.from(a),[""],r,s,(()=>An(e,n,i))))}function Cn(t,e,n,i,r){while(n)n=In(t,e,n,i,r);return n}function An(t,e,n){const i=t._getTarget();e in i||(i[e]={});const r=i[e];return et(r)&&nt(n)?n:r||{}}function On(t,e,n,i){let r;for(const s of e)if(r=Rn(vn(s,t),n),"undefined"!==typeof r)return bn(t,r)?kn(n,i,t,r):r}function Rn(t,e){for(const n of e){if(!n)continue;const e=n[t];if("undefined"!==typeof e)return e}}function Mn(t){let e=t._keys;return e||(e=t._keys=Pn(t._scopes)),e}function Pn(t){const e=new Set;for(const n of t)for(const t of Object.keys(n).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}function Dn(t,e,n,i){const{iScale:r}=t,{key:s="r"}=this._parsing,o=new Array(i);let a,c,l,u;for(a=0,c=i;a<c;++a)l=a+n,u=e[l],o[a]={r:r.parse(_t(u,s),l)};return o}const Nn=Number.EPSILON||1e-14,Ln=(t,e)=>e<t.length&&!t[e].skip&&t[e],Fn=t=>"x"===t?"y":"x";function Vn(t,e,n,i){const r=t.skip?e:t,s=e,o=n.skip?e:n,a=qt(s,r),c=qt(o,s);let l=a/(a+c),u=c/(a+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;const h=i*l,d=i*u;return{previous:{x:s.x-h*(o.x-r.x),y:s.y-h*(o.y-r.y)},next:{x:s.x+d*(o.x-r.x),y:s.y+d*(o.y-r.y)}}}function Un(t,e,n){const i=t.length;let r,s,o,a,c,l=Ln(t,0);for(let u=0;u<i-1;++u)c=l,l=Ln(t,u+1),c&&l&&(Lt(e[u],0,Nn)?n[u]=n[u+1]=0:(r=n[u]/e[u],s=n[u+1]/e[u],a=Math.pow(r,2)+Math.pow(s,2),a<=9||(o=3/Math.sqrt(a),n[u]=r*o*e[u],n[u+1]=s*o*e[u])))}function jn(t,e,n="x"){const i=Fn(n),r=t.length;let s,o,a,c=Ln(t,0);for(let l=0;l<r;++l){if(o=a,a=c,c=Ln(t,l+1),!a)continue;const r=a[n],u=a[i];o&&(s=(r-o[n])/3,a[`cp1${n}`]=r-s,a[`cp1${i}`]=u-s*e[l]),c&&(s=(c[n]-r)/3,a[`cp2${n}`]=r+s,a[`cp2${i}`]=u+s*e[l])}}function Bn(t,e="x"){const n=Fn(e),i=t.length,r=Array(i).fill(0),s=Array(i);let o,a,c,l=Ln(t,0);for(o=0;o<i;++o)if(a=c,c=l,l=Ln(t,o+1),c){if(l){const t=l[e]-c[e];r[o]=0!==t?(l[n]-c[n])/t:0}s[o]=a?l?Nt(r[o-1])!==Nt(r[o])?0:(r[o-1]+r[o])/2:r[o-1]:r[o]}Un(t,r,s),jn(t,s,e)}function zn(t,e,n){return Math.max(Math.min(t,n),e)}function $n(t,e){let n,i,r,s,o,a=qe(t[0],e);for(n=0,i=t.length;n<i;++n)o=s,s=a,a=n<i-1&&qe(t[n+1],e),s&&(r=t[n],o&&(r.cp1x=zn(r.cp1x,e.left,e.right),r.cp1y=zn(r.cp1y,e.top,e.bottom)),a&&(r.cp2x=zn(r.cp2x,e.left,e.right),r.cp2y=zn(r.cp2y,e.top,e.bottom)))}function Hn(t,e,n,i,r){let s,o,a,c;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)Bn(t,r);else{let n=i?t[t.length-1]:t[0];for(s=0,o=t.length;s<o;++s)a=t[s],c=Vn(n,a,t[Math.min(s+1,o-(i?0:1))%o],e.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,n=a}e.capBezierPoints&&$n(t,n)}function Wn(){return"undefined"!==typeof window&&"undefined"!==typeof document}function qn(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function Kn(t,e,n){let i;return"string"===typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}const Gn=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function Qn(t,e){return Gn(t).getPropertyValue(e)}const Yn=["top","right","bottom","left"];function Xn(t,e,n){const i={};n=n?"-"+n:"";for(let r=0;r<4;r++){const s=Yn[r];i[s]=parseFloat(t[e+"-"+s+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const Jn=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function Zn(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:r,offsetY:s}=i;let o,a,c=!1;if(Jn(r,s,t.target))o=r,a=s;else{const t=e.getBoundingClientRect();o=i.clientX-t.left,a=i.clientY-t.top,c=!0}return{x:o,y:a,box:c}}function ti(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,r=Gn(n),s="border-box"===r.boxSizing,o=Xn(r,"padding"),a=Xn(r,"border","width"),{x:c,y:l,box:u}=Zn(t,n),h=o.left+(u&&a.left),d=o.top+(u&&a.top);let{width:f,height:p}=e;return s&&(f-=o.width+a.width,p-=o.height+a.height),{x:Math.round((c-h)/f*n.width/i),y:Math.round((l-d)/p*n.height/i)}}function ei(t,e,n){let i,r;if(void 0===e||void 0===n){const s=t&&qn(t);if(s){const t=s.getBoundingClientRect(),o=Gn(s),a=Xn(o,"border","width"),c=Xn(o,"padding");e=t.width-c.width-a.width,n=t.height-c.height-a.height,i=Kn(o.maxWidth,s,"clientWidth"),r=Kn(o.maxHeight,s,"clientHeight")}else e=t.clientWidth,n=t.clientHeight}return{width:e,height:n,maxWidth:i||At,maxHeight:r||At}}const ni=t=>Math.round(10*t)/10;function ii(t,e,n,i){const r=Gn(t),s=Xn(r,"margin"),o=Kn(r.maxWidth,t,"clientWidth")||At,a=Kn(r.maxHeight,t,"clientHeight")||At,c=ei(t,e,n);let{width:l,height:u}=c;if("content-box"===r.boxSizing){const t=Xn(r,"border","width"),e=Xn(r,"padding");l-=e.width+t.width,u-=e.height+t.height}l=Math.max(0,l-s.width),u=Math.max(0,i?l/i:u-s.height),l=ni(Math.min(l,o,c.maxWidth)),u=ni(Math.min(u,a,c.maxHeight)),l&&!u&&(u=ni(l/2));const h=void 0!==e||void 0!==n;return h&&i&&c.height&&u>c.height&&(u=c.height,l=ni(Math.floor(u*i))),{width:l,height:u}}function ri(t,e,n){const i=e||1,r=Math.floor(t.height*i),s=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==i||o.height!==r||o.width!==s)&&(t.currentDevicePixelRatio=i,o.height=r,o.width=s,t.ctx.setTransform(i,0,0,i,0,0),!0)}const si=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};Wn()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch(e){}return t}();function oi(t,e){const n=Qn(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function ai(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function ci(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:"middle"===i?n<.5?t.y:e.y:"after"===i?n<1?t.y:e.y:n>0?e.y:t.y}}function li(t,e,n,i){const r={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},o=ai(t,r,n),a=ai(r,s,n),c=ai(s,e,n),l=ai(o,a,n),u=ai(a,c,n);return ai(l,u,n)}const ui=function(t,e){return{x(n){return t+t+e-n},setWidth(t){e=t},textAlign(t){return"center"===t?t:"right"===t?"left":"right"},xPlus(t,e){return t-e},leftForLtr(t,e){return t-e}}},hi=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function di(t,e,n){return t?ui(e,n):hi()}function fi(t,e){let n,i;"ltr"!==e&&"rtl"!==e||(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function pi(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function gi(t){return"angle"===t?{between:Qt,compare:Kt,normalize:Gt}:{between:Jt,compare:(t,e)=>t-e,normalize:t=>t}}function mi({start:t,end:e,count:n,loop:i,style:r}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:r}}function yi(t,e,n){const{property:i,start:r,end:s}=n,{between:o,normalize:a}=gi(i),c=e.length;let l,u,{start:h,end:d,loop:f}=t;if(f){for(h+=c,d+=c,l=0,u=c;l<u;++l){if(!o(a(e[h%c][i]),r,s))break;h--,d--}h%=c,d%=c}return d<h&&(d+=c),{start:h,end:d,loop:f,style:t.style}}function vi(t,e,n){if(!n)return[t];const{property:i,start:r,end:s}=n,o=e.length,{compare:a,between:c,normalize:l}=gi(i),{start:u,end:h,loop:d,style:f}=yi(t,e,n),p=[];let g,m,y,v=!1,b=null;const _=()=>c(r,y,g)&&0!==a(r,y),w=()=>0===a(s,g)||c(s,y,g),x=()=>v||_(),E=()=>!v||w();for(let T=u,S=u;T<=h;++T)m=e[T%o],m.skip||(g=l(m[i]),g!==y&&(v=c(g,r,s),null===b&&x()&&(b=0===a(g,r)?T:S),null!==b&&E()&&(p.push(mi({start:b,end:T,loop:d,count:o,style:f})),b=null),S=T,y=g));return null!==b&&p.push(mi({start:b,end:h,loop:d,count:o,style:f})),p}function bi(t,e){const n=[],i=t.segments;for(let r=0;r<i.length;r++){const s=vi(i[r],t.points,e);s.length&&n.push(...s)}return n}function _i(t,e,n,i){let r=0,s=e-1;if(n&&!i)while(r<e&&!t[r].skip)r++;while(r<e&&t[r].skip)r++;r%=e,n&&(s+=r);while(s>r&&t[s%e].skip)s--;return s%=e,{start:r,end:s}}function wi(t,e,n,i){const r=t.length,s=[];let o,a=e,c=t[e];for(o=e+1;o<=n;++o){const n=t[o%r];n.skip||n.stop?c.skip||(i=!1,s.push({start:e%r,end:(o-1)%r,loop:i}),e=a=n.stop?o:null):(a=o,c.skip&&(e=o)),c=n}return null!==a&&s.push({start:e%r,end:a%r,loop:i}),s}function xi(t,e){const n=t.points,i=t.options.spanGaps,r=n.length;if(!r)return[];const s=!!t._loop,{start:o,end:a}=_i(n,r,s,i);if(!0===i)return Ei(t,[{start:o,end:a,loop:s}],n,e);const c=a<o?a+r:a,l=!!t._fullLoop&&0===o&&a===r-1;return Ei(t,wi(n,o,c,l),n,e)}function Ei(t,e,n,i){return i&&i.setContext&&n?Ti(t,e,n,i):e}function Ti(t,e,n,i){const r=t._chart.getContext(),s=Si(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,c=n.length,l=[];let u=s,h=e[0].start,d=h;function f(t,e,i,r){const s=a?-1:1;if(t!==e){t+=c;while(n[t%c].skip)t-=s;while(n[e%c].skip)e+=s;t%c!==e%c&&(l.push({start:t%c,end:e%c,loop:i,style:r}),u=r,h=e%c)}}for(const p of e){h=a?h:p.start;let t,e=n[h%c];for(d=h+1;d<=p.end;d++){const s=n[d%c];t=Si(i.setContext(pn(r,{type:"segment",p0:e,p1:s,p0DataIndex:(d-1)%c,p1DataIndex:d%c,datasetIndex:o}))),Ii(t,u)&&f(h,d-1,p.loop,u),e=s,u=t}h<d-1&&f(h,d-1,p.loop,u)}return l}function Si(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Ii(t,e){if(!e)return!1;const n=[],i=function(t,e){return be(e)?(n.includes(e)||n.push(e),n.indexOf(e)):e};return JSON.stringify(t,i)!==JSON.stringify(e,i)}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
class ki{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,i){const r=e.listeners[i],s=e.duration;r.forEach((i=>i({chart:t,initial:e.initial,numSteps:s,currentStep:Math.min(n-e.start,s)})))}_refresh(){this._request||(this._running=!0,this._request=ae.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let e=0;this._charts.forEach(((n,i)=>{if(!n.running||!n.items.length)return;const r=n.items;let s,o=r.length-1,a=!1;for(;o>=0;--o)s=r[o],s._active?(s._total>n.duration&&(n.duration=s._total),s.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(i.draw(),this._notify(i,n,t,"progress")),r.length||(n.running=!1,this._notify(i,n,t,"complete"),n.initial=!1),e+=r.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const n=e.items;let i=n.length-1;for(;i>=0;--i)n[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Ci=new ki;const Ai="transparent",Oi={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=_e(t||Ai),r=i.valid&&_e(e||Ai);return r&&r.valid?r.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class Ri{constructor(t,e,n,i){const r=e[n];i=dn([t.to,i,r,t.from]);const s=dn([t.from,r,i]);this._active=!0,this._fn=t.fn||Oi[t.type||typeof s],this._easing=ve[t.easing]||ve.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=s,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,n){if(this._active){this._notify(!1);const i=this._target[this._prop],r=n-this._start,s=this._duration-r;this._start=n,this._duration=Math.floor(Math.max(s,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=dn([t.to,e,i,t.from]),this._from=dn([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,n=this._duration,i=this._prop,r=this._from,s=this._loop,o=this._to;let a;if(this._active=r!==o&&(s||e<n),!this._active)return this._target[i]=o,void this._notify(!0);e<0?this._target[i]=r:(a=e/n%2,a=s&&a>1?2-a:a,a=this._easing(Math.min(1,Math.max(0,a))),this._target[i]=this._fn(r,o,a))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,n)=>{t.push({res:e,rej:n})}))}_notify(t){const e=t?"res":"rej",n=this._promises||[];for(let i=0;i<n.length;i++)n[i][e]()}}class Mi{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!nt(t))return;const e=Object.keys(Ve.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach((i=>{const r=t[i];if(!nt(r))return;const s={};for(const t of e)s[t]=r[t];(et(r.properties)&&r.properties||[i]).forEach((t=>{t!==i&&n.has(t)||n.set(t,s)}))}))}_animateOptions(t,e){const n=e.options,i=Di(t,n);if(!i)return[];const r=this._createAnimations(i,n);return n.$shared&&Pi(t.options.$animations,n).then((()=>{t.options=n}),(()=>{})),r}_createAnimations(t,e){const n=this._properties,i=[],r=t.$animations||(t.$animations={}),s=Object.keys(e),o=Date.now();let a;for(a=s.length-1;a>=0;--a){const c=s[a];if("$"===c.charAt(0))continue;if("options"===c){i.push(...this._animateOptions(t,e));continue}const l=e[c];let u=r[c];const h=n.get(c);if(u){if(h&&u.active()){u.update(h,l,o);continue}u.cancel()}h&&h.duration?(r[c]=u=new Ri(h,t,c,l),i.push(u)):t[c]=l}return i}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const n=this._createAnimations(t,e);return n.length?(Ci.add(this._chart,n),!0):void 0}}function Pi(t,e){const n=[],i=Object.keys(e);for(let r=0;r<i.length;r++){const e=t[i[r]];e&&e.active()&&n.push(e.wait())}return Promise.all(n)}function Di(t,e){if(!e)return;let n=t.options;if(n)return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n;t.options=e}function Ni(t,e){const n=t&&t.options||{},i=n.reverse,r=void 0===n.min?e:0,s=void 0===n.max?e:0;return{start:i?s:r,end:i?r:s}}function Li(t,e,n){if(!1===n)return!1;const i=Ni(t,n),r=Ni(e,n);return{top:r.end,right:i.end,bottom:r.start,left:i.start}}function Fi(t){let e,n,i,r;return nt(t)?(e=t.top,n=t.right,i=t.bottom,r=t.left):e=n=i=r=t,{top:e,right:n,bottom:i,left:r,disabled:!1===t}}function Vi(t,e){const n=[],i=t._getSortedDatasetMetas(e);let r,s;for(r=0,s=i.length;r<s;++r)n.push(i[r].index);return n}function Ui(t,e,n,i={}){const r=t.keys,s="single"===i.mode;let o,a,c,l;if(null!==e){for(o=0,a=r.length;o<a;++o){if(c=+r[o],c===n){if(i.all)continue;break}l=t.values[c],it(l)&&(s||0===e||Nt(e)===Nt(l))&&(e+=l)}return e}}function ji(t,e){const{iScale:n,vScale:i}=e,r="x"===n.axis?"x":"y",s="x"===i.axis?"x":"y",o=Object.keys(t),a=new Array(o.length);let c,l,u;for(c=0,l=o.length;c<l;++c)u=o[c],a[c]={[r]:u,[s]:t[u]};return a}function Bi(t,e){const n=t&&t.options.stacked;return n||void 0===n&&void 0!==e.stack}function zi(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function $i(t){const{min:e,max:n,minDefined:i,maxDefined:r}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}function Hi(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function Wi(t,e,n,i){for(const r of e.getMatchingVisibleMetas(i).reverse()){const e=t[r.index];if(n&&e>0||!n&&e<0)return r.index}return null}function qi(t,e){const{chart:n,_cachedMeta:i}=t,r=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:a}=i,c=s.axis,l=o.axis,u=zi(s,o,i),h=e.length;let d;for(let f=0;f<h;++f){const t=e[f],{[c]:n,[l]:s}=t,h=t._stacks||(t._stacks={});d=h[l]=Hi(r,u,n),d[a]=s,d._top=Wi(d,o,!0,i.type),d._bottom=Wi(d,o,!1,i.type);const p=d._visualValues||(d._visualValues={});p[a]=s}}function Ki(t,e){const n=t.scales;return Object.keys(n).filter((t=>n[t].axis===e)).shift()}function Gi(t,e){return pn(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Qi(t,e,n){return pn(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function Yi(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[i]||void 0===e[i][n])return;delete e[i][n],void 0!==e[i]._visualValues&&void 0!==e[i]._visualValues[n]&&delete e[i]._visualValues[n]}}}const Xi=t=>"reset"===t||"none"===t,Ji=(t,e)=>e?t:Object.assign({},t),Zi=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:Vi(n,!0),values:null};class tr{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Bi(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Yi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,n=this.getDataset(),i=(t,e,n,i)=>"x"===t?e:"r"===t?i:n,r=e.xAxisID=st(n.xAxisID,Ki(t,"x")),s=e.yAxisID=st(n.yAxisID,Ki(t,"y")),o=e.rAxisID=st(n.rAxisID,Ki(t,"r")),a=e.indexAxis,c=e.iAxisID=i(a,r,s,o),l=e.vAxisID=i(a,s,r,o);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(s),e.rScale=this.getScaleForId(o),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&se(this._data,this),t._stacked&&Yi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),n=this._data;if(nt(e)){const t=this._cachedMeta;this._data=ji(e,t)}else if(n!==e){if(n){se(n,this);const t=this._cachedMeta;Yi(t),t._parsed=[]}e&&Object.isExtensible(e)&&re(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,n=this.getDataset();let i=!1;this._dataCheck();const r=e._stacked;e._stacked=Bi(e.vScale,e),e.stack!==n.stack&&(i=!0,Yi(e),e.stack=n.stack),this._resyncElements(t),(i||r!==e._stacked)&&qi(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:n,_data:i}=this,{iScale:r,_stacked:s}=n,o=r.axis;let a,c,l,u=0===t&&e===i.length||n._sorted,h=t>0&&n._parsed[t-1];if(!1===this._parsing)n._parsed=i,n._sorted=!0,l=i;else{l=et(i[t])?this.parseArrayData(n,i,t,e):nt(i[t])?this.parseObjectData(n,i,t,e):this.parsePrimitiveData(n,i,t,e);const r=()=>null===c[o]||h&&c[o]<h[o];for(a=0;a<e;++a)n._parsed[a+t]=c=l[a],u&&(r()&&(u=!1),h=c);n._sorted=u}s&&qi(this,l)}parsePrimitiveData(t,e,n,i){const{iScale:r,vScale:s}=t,o=r.axis,a=s.axis,c=r.getLabels(),l=r===s,u=new Array(i);let h,d,f;for(h=0,d=i;h<d;++h)f=h+n,u[h]={[o]:l||r.parse(c[f],f),[a]:s.parse(e[f],f)};return u}parseArrayData(t,e,n,i){const{xScale:r,yScale:s}=t,o=new Array(i);let a,c,l,u;for(a=0,c=i;a<c;++a)l=a+n,u=e[l],o[a]={x:r.parse(u[0],l),y:s.parse(u[1],l)};return o}parseObjectData(t,e,n,i){const{xScale:r,yScale:s}=t,{xAxisKey:o="x",yAxisKey:a="y"}=this._parsing,c=new Array(i);let l,u,h,d;for(l=0,u=i;l<u;++l)h=l+n,d=e[h],c[l]={x:r.parse(_t(d,o),h),y:s.parse(_t(d,a),h)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,n){const i=this.chart,r=this._cachedMeta,s=e[t.axis],o={keys:Vi(i,!0),values:e._stacks[t.axis]._visualValues};return Ui(o,s,r.index,{mode:n})}updateRangeFromParsed(t,e,n,i){const r=n[e.axis];let s=null===r?NaN:r;const o=i&&n._stacks[e.axis];i&&o&&(i.values=o,s=Ui(i,r,this._cachedMeta.index)),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,e){const n=this._cachedMeta,i=n._parsed,r=n._sorted&&t===n.iScale,s=i.length,o=this._getOtherScale(t),a=Zi(e,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:l,max:u}=$i(o);let h,d;function f(){d=i[h];const e=d[o.axis];return!it(d[t.axis])||l>e||u<e}for(h=0;h<s;++h)if(!f()&&(this.updateRangeFromParsed(c,t,d,a),r))break;if(r)for(h=s-1;h>=0;--h)if(!f()){this.updateRangeFromParsed(c,t,d,a);break}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,n=[];let i,r,s;for(i=0,r=e.length;i<r;++i)s=e[i][t.axis],it(s)&&n.push(s);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,n=e.iScale,i=e.vScale,r=this.getParsed(t);return{label:n?""+n.getLabelForValue(r[n.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=Fi(st(this.options.clip,Li(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,n=this._cachedMeta,i=n.data||[],r=e.chartArea,s=[],o=this._drawStart||0,a=this._drawCount||i.length-o,c=this.options.drawActiveElementsOnTop;let l;for(n.dataset&&n.dataset.draw(t,r,o,a),l=o;l<o+a;++l){const e=i[l];e.hidden||(e.active&&c?s.push(e):e.draw(t,r))}for(l=0;l<s.length;++l)s[l].draw(t,r)}getStyle(t,e){const n=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,e,n){const i=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];r=e.$context||(e.$context=Qi(this.getContext(),t,e)),r.parsed=this.getParsed(t),r.raw=i.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=Gi(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=n,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",n){const i="active"===e,r=this._cachedDataOpts,s=t+"-"+e,o=r[s],a=this.enableOptionSharing&&xt(n);if(o)return Ji(o,a);const c=this.chart.config,l=c.datasetElementScopeKeys(this._type,t),u=i?[`${t}Hover`,"hover",t,""]:[t,""],h=c.getOptionScopes(this.getDataset(),l),d=Object.keys(Ve.elements[t]),f=()=>this.getContext(n,i,e),p=c.resolveNamedOptions(h,d,f,u);return p.$shared&&(p.$shared=a,r[s]=Object.freeze(Ji(p,a))),p}_resolveAnimations(t,e,n){const i=this.chart,r=this._cachedDataOpts,s=`animation-${e}`,o=r[s];if(o)return o;let a;if(!1!==i.options.animation){const i=this.chart.config,r=i.datasetAnimationScopeKeys(this._type,e),s=i.getOptionScopes(this.getDataset(),r);a=i.createResolver(s,this.getContext(t,n,e))}const c=new Mi(i,a&&a.animations);return a&&a._cacheable&&(r[s]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Xi(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const n=this.resolveDataElementOptions(t,e),i=this._sharedOptions,r=this.getSharedOptions(n),s=this.includeOptions(e,r)||r!==i;return this.updateSharedOptions(r,e,n),{sharedOptions:r,includeOptions:s}}updateElement(t,e,n,i){Xi(i)?Object.assign(t,n):this._resolveAnimations(e,i).update(t,n)}updateSharedOptions(t,e,n){t&&!Xi(e)&&this._resolveAnimations(void 0,e).update(t,n)}_setStyle(t,e,n,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,n,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,e,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,n=this._cachedMeta.data;for(const[o,a,c]of this._syncList)this[o](a,c);this._syncList=[];const i=n.length,r=e.length,s=Math.min(r,i);s&&this.parse(0,s),r>i?this._insertElements(i,r-i,t):r<i&&this._removeElements(r,i-r)}_insertElements(t,e,n=!0){const i=this._cachedMeta,r=i.data,s=t+e;let o;const a=t=>{for(t.length+=e,o=t.length-1;o>=s;o--)t[o]=t[o-e]};for(a(r),o=t;o<s;++o)r[o]=new this.dataElementType;this._parsing&&a(i._parsed),this.parse(t,e),n&&this.updateElements(r,t,e,"reset")}updateElements(t,e,n,i){}_removeElements(t,e){const n=this._cachedMeta;if(this._parsing){const i=n._parsed.splice(t,e);n._stacked&&Yi(n,i)}n.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,n,i]=t;this[e](n,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function er(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let i=[];for(let e=0,r=n.length;e<r;e++)i=i.concat(n[e].controller.getAllParsedValues(t));t._cache.$bar=oe(i.sort(((t,e)=>t-e)))}return t._cache.$bar}function nr(t){const e=t.iScale,n=er(e,t.type);let i,r,s,o,a=e._length;const c=()=>{32767!==s&&-32768!==s&&(xt(o)&&(a=Math.min(a,Math.abs(s-o)||a)),o=s)};for(i=0,r=n.length;i<r;++i)s=e.getPixelForValue(n[i]),c();for(o=void 0,i=0,r=e.ticks.length;i<r;++i)s=e.getPixelForTick(i),c();return a}function ir(t,e,n,i){const r=n.barThickness;let s,o;return tt(r)?(s=e.min*n.categoryPercentage,o=n.barPercentage):(s=r*i,o=1),{chunk:s/i,ratio:o,start:e.pixels[t]-s/2}}function rr(t,e,n,i){const r=e.pixels,s=r[t];let o=t>0?r[t-1]:null,a=t<r.length-1?r[t+1]:null;const c=n.categoryPercentage;null===o&&(o=s-(null===a?e.end-e.start:a-s)),null===a&&(a=s+s-o);const l=s-(s-Math.min(o,a))/2*c,u=Math.abs(a-o)/2*c;return{chunk:u/i,ratio:n.barPercentage,start:l}}function sr(t,e,n,i){const r=n.parse(t[0],i),s=n.parse(t[1],i),o=Math.min(r,s),a=Math.max(r,s);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),e[n.axis]=l,e._custom={barStart:c,barEnd:l,start:r,end:s,min:o,max:a}}function or(t,e,n,i){return et(t)?sr(t,e,n,i):e[n.axis]=n.parse(t,i),e}function ar(t,e,n,i){const r=t.iScale,s=t.vScale,o=r.getLabels(),a=r===s,c=[];let l,u,h,d;for(l=n,u=n+i;l<u;++l)d=e[l],h={},h[r.axis]=a||r.parse(o[l],l),c.push(or(d,h,s,l));return c}function cr(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function lr(t,e,n){return 0!==t?Nt(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}function ur(t){let e,n,i,r,s;return t.horizontal?(e=t.base>t.x,n="left",i="right"):(e=t.base<t.y,n="bottom",i="top"),e?(r="end",s="start"):(r="start",s="end"),{start:n,end:i,reverse:e,top:r,bottom:s}}function hr(t,e,n,i){let r=e.borderSkipped;const s={};if(!r)return void(t.borderSkipped=s);if(!0===r)return void(t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0});const{start:o,end:a,reverse:c,top:l,bottom:u}=ur(t);"middle"===r&&n&&(t.enableBorderRadius=!0,(n._top||0)===i?r=l:(n._bottom||0)===i?r=u:(s[dr(u,o,a,c)]=!0,r=l)),s[dr(r,o,a,c)]=!0,t.borderSkipped=s}function dr(t,e,n,i){return i?(t=fr(t,e,n),t=pr(t,n,e)):t=pr(t,e,n),t}function fr(t,e,n){return t===e?n:t===n?e:t}function pr(t,e,n){return"start"===t?e:"end"===t?n:t}function gr(t,{inflateAmount:e},n){t.inflateAmount="auto"===e?1===n?.33:0:e}o(tr,"defaults",{}),o(tr,"datasetElementType",null),o(tr,"dataElementType",null);class mr extends tr{parsePrimitiveData(t,e,n,i){return ar(t,e,n,i)}parseArrayData(t,e,n,i){return ar(t,e,n,i)}parseObjectData(t,e,n,i){const{iScale:r,vScale:s}=t,{xAxisKey:o="x",yAxisKey:a="y"}=this._parsing,c="x"===r.axis?o:a,l="x"===s.axis?o:a,u=[];let h,d,f,p;for(h=n,d=n+i;h<d;++h)p=e[h],f={},f[r.axis]=r.parse(_t(p,c),h),u.push(or(_t(p,l),f,s,h));return u}updateRangeFromParsed(t,e,n,i){super.updateRangeFromParsed(t,e,n,i);const r=n._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:n,vScale:i}=e,r=this.getParsed(t),s=r._custom,o=cr(s)?"["+s.start+", "+s.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+n.getLabelForValue(r[n.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,n,i){const r="reset"===i,{index:s,_cachedMeta:{vScale:o}}=this,a=o.getBasePixel(),c=o.isHorizontal(),l=this._getRuler(),{sharedOptions:u,includeOptions:h}=this._getSharedOptions(e,i);for(let d=e;d<e+n;d++){const e=this.getParsed(d),n=r||tt(e[o.axis])?{base:a,head:a}:this._calculateBarValuePixels(d),f=this._calculateBarIndexPixels(d,l),p=(e._stacks||{})[o.axis],g={horizontal:c,base:n.base,enableBorderRadius:!p||cr(e._custom)||s===p._top||s===p._bottom,x:c?n.head:f.center,y:c?f.center:n.head,height:c?f.size:Math.abs(n.size),width:c?Math.abs(n.size):f.size};h&&(g.options=u||this.resolveDataElementOptions(d,t[d].active?"active":i));const m=g.options||t[d].options;hr(g,m,p,s),gr(g,m,l.ratio),this.updateElement(t[d],d,g,i)}}_getStacks(t,e){const{iScale:n}=this._cachedMeta,i=n.getMatchingVisibleMetas(this._type).filter((t=>t.controller.options.grouped)),r=n.options.stacked,s=[],o=t=>{const n=t.controller.getParsed(e),i=n&&n[t.vScale.axis];if(tt(i)||isNaN(i))return!0};for(const a of i)if((void 0===e||!o(a))&&((!1===r||-1===s.indexOf(a.stack)||void 0===r&&void 0===a.stack)&&s.push(a.stack),a.index===t))break;return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,n){const i=this._getStacks(t,n),r=void 0!==e?i.indexOf(e):-1;return-1===r?i.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,n=e.iScale,i=[];let r,s;for(r=0,s=e.data.length;r<s;++r)i.push(n.getPixelForValue(this.getParsed(r)[n.axis],r));const o=t.barThickness,a=o||nr(e);return{min:a,pixels:i,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:t.grouped,ratio:o?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:n,index:i},options:{base:r,minBarLength:s}}=this,o=r||0,a=this.getParsed(t),c=a._custom,l=cr(c);let u,h,d=a[e.axis],f=0,p=n?this.applyStack(e,a,n):d;p!==d&&(f=p-d,p=d),l&&(d=c.barStart,p=c.barEnd-c.barStart,0!==d&&Nt(d)!==Nt(c.barEnd)&&(f=0),f+=d);const g=tt(r)||l?f:r;let m=e.getPixelForValue(g);if(u=this.chart.getDataVisibility(t)?e.getPixelForValue(f+p):m,h=u-m,Math.abs(h)<s){h=lr(h,e,o)*s,d===o&&(m-=h/2);const t=e.getPixelForDecimal(0),r=e.getPixelForDecimal(1),c=Math.min(t,r),f=Math.max(t,r);m=Math.max(Math.min(m,f),c),u=m+h,n&&!l&&(a._stacks[e.axis]._visualValues[i]=e.getValueForPixel(u)-e.getValueForPixel(m))}if(m===e.getPixelForValue(o)){const t=Nt(h)*e.getLineWidthForValue(o)/2;m+=t,h-=t}return{size:h,base:m,head:u,center:u+h/2}}_calculateBarIndexPixels(t,e){const n=e.scale,i=this.options,r=i.skipNull,s=st(i.maxBarThickness,1/0);let o,a;if(e.grouped){const n=r?this._getStackCount(t):e.stackCount,c="flex"===i.barThickness?rr(t,e,i,n):ir(t,e,i,n),l=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0);o=c.start+c.chunk*l+c.chunk/2,a=Math.min(s,c.chunk*c.ratio)}else o=n.getPixelForValue(this.getParsed(t)[n.axis],t),a=Math.min(s,e.min*e.ratio);return{base:o-a/2,head:o+a/2,center:o,size:a}}draw(){const t=this._cachedMeta,e=t.vScale,n=t.data,i=n.length;let r=0;for(;r<i;++r)null===this.getParsed(r)[e.axis]||n[r].hidden||n[r].draw(this._ctx)}}o(mr,"id","bar"),o(mr,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),o(mr,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class yr extends tr{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,n,i){const r=super.parsePrimitiveData(t,e,n,i);for(let s=0;s<r.length;s++)r[s]._custom=this.resolveDataElementOptions(s+n).radius;return r}parseArrayData(t,e,n,i){const r=super.parseArrayData(t,e,n,i);for(let s=0;s<r.length;s++){const t=e[n+s];r[s]._custom=st(t[2],this.resolveDataElementOptions(s+n).radius)}return r}parseObjectData(t,e,n,i){const r=super.parseObjectData(t,e,n,i);for(let s=0;s<r.length;s++){const t=e[n+s];r[s]._custom=st(t&&t.r&&+t.r,this.resolveDataElementOptions(s+n).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart.data.labels||[],{xScale:i,yScale:r}=e,s=this.getParsed(t),o=i.getLabelForValue(s.x),a=r.getLabelForValue(s.y),c=s._custom;return{label:n[t]||"",value:"("+o+", "+a+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,n,i){const r="reset"===i,{iScale:s,vScale:o}=this._cachedMeta,{sharedOptions:a,includeOptions:c}=this._getSharedOptions(e,i),l=s.axis,u=o.axis;for(let h=e;h<e+n;h++){const e=t[h],n=!r&&this.getParsed(h),d={},f=d[l]=r?s.getPixelForDecimal(.5):s.getPixelForValue(n[l]),p=d[u]=r?o.getBasePixel():o.getPixelForValue(n[u]);d.skip=isNaN(f)||isNaN(p),c&&(d.options=a||this.resolveDataElementOptions(h,e.active?"active":i),r&&(d.options.radius=0)),this.updateElement(e,h,d,i)}}resolveDataElementOptions(t,e){const n=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const r=i.radius;return"active"!==e&&(i.radius=0),i.radius+=st(n&&n._custom,r),i}}function vr(t,e,n){let i=1,r=1,s=0,o=0;if(e<kt){const a=t,c=a+e,l=Math.cos(a),u=Math.sin(a),h=Math.cos(c),d=Math.sin(c),f=(t,e,i)=>Qt(t,a,c,!0)?1:Math.max(e,e*n,i,i*n),p=(t,e,i)=>Qt(t,a,c,!0)?-1:Math.min(e,e*n,i,i*n),g=f(0,l,h),m=f(Rt,u,d),y=p(It,l,h),v=p(It+Rt,u,d);i=(g-y)/2,r=(m-v)/2,s=-(g+y)/2,o=-(m+v)/2}return{ratioX:i,ratioY:r,offsetX:s,offsetY:o}}o(yr,"id","bubble"),o(yr,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),o(yr,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});class br extends tr{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const n=this.getDataset().data,i=this._cachedMeta;if(!1===this._parsing)i._parsed=n;else{let r,s,o=t=>+n[t];if(nt(n[t])){const{key:t="value"}=this._parsing;o=e=>+_t(n[e],t)}for(r=t,s=t+e;r<s;++r)i._parsed[r]=o(r)}}_getRotation(){return zt(this.options.rotation-90)}_getCircumference(){return zt(this.options.circumference)}_getRotationExtents(){let t=kt,e=-kt;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){const i=this.chart.getDatasetMeta(n).controller,r=i._getRotation(),s=i._getCircumference();t=Math.min(t,r),e=Math.max(e,r+s)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:n}=e,i=this._cachedMeta,r=i.data,s=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,o=Math.max((Math.min(n.width,n.height)-s)/2,0),a=Math.min(ot(this.options.cutout,o),1),c=this._getRingWeight(this.index),{circumference:l,rotation:u}=this._getRotationExtents(),{ratioX:h,ratioY:d,offsetX:f,offsetY:p}=vr(u,l,a),g=(n.width-s)/h,m=(n.height-s)/d,y=Math.max(Math.min(g,m)/2,0),v=at(this.options.radius,y),b=Math.max(v*a,0),_=(v-b)/this._getVisibleDatasetWeightTotal();this.offsetX=f*v,this.offsetY=p*v,i.total=this.calculateTotal(),this.outerRadius=v-_*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-_*c,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const n=this.options,i=this._cachedMeta,r=this._getCircumference();return e&&n.animation.animateRotate||!this.chart.getDataVisibility(t)||null===i._parsed[t]||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*r/kt)}updateElements(t,e,n,i){const r="reset"===i,s=this.chart,o=s.chartArea,a=s.options,c=a.animation,l=(o.left+o.right)/2,u=(o.top+o.bottom)/2,h=r&&c.animateScale,d=h?0:this.innerRadius,f=h?0:this.outerRadius,{sharedOptions:p,includeOptions:g}=this._getSharedOptions(e,i);let m,y=this._getRotation();for(m=0;m<e;++m)y+=this._circumference(m,r);for(m=e;m<e+n;++m){const e=this._circumference(m,r),n=t[m],s={x:l+this.offsetX,y:u+this.offsetY,startAngle:y,endAngle:y+e,circumference:e,outerRadius:f,innerRadius:d};g&&(s.options=p||this.resolveDataElementOptions(m,n.active?"active":i)),y+=e,this.updateElement(n,m,s,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let n,i=0;for(n=0;n<e.length;n++){const r=t._parsed[n];null===r||isNaN(r)||!this.chart.getDataVisibility(n)||e[n].hidden||(i+=Math.abs(r))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?kt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,i=n.data.labels||[],r=Ce(e._parsed[t],n.options.locale);return{label:i[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const n=this.chart;let i,r,s,o,a;if(!t)for(i=0,r=n.data.datasets.length;i<r;++i)if(n.isDatasetVisible(i)){s=n.getDatasetMeta(i),t=s.data,o=s.controller;break}if(!t)return 0;for(i=0,r=t.length;i<r;++i)a=o.resolveDataElementOptions(i),"inner"!==a.borderAlign&&(e=Math.max(e,a.borderWidth||0,a.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let n=0,i=t.length;n<i;++n){const t=this.resolveDataElementOptions(n);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e}_getRingWeight(t){return Math.max(st(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}o(br,"id","doughnut"),o(br,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),o(br,"descriptors",{_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),o(br,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n,color:i}}=t.legend.options;return e.labels.map(((e,r)=>{const s=t.getDatasetMeta(0),o=s.controller.getStyle(r);return{text:e,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,fontColor:i,lineWidth:o.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(r),index:r}}))}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}}}});class _r extends tr{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:n,data:i=[],_dataset:r}=e,s=this.chart._animationsDisabled;let{start:o,count:a}=fe(e,i,s);this._drawStart=o,this._drawCount=a,pe(e)&&(o=0,a=i.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!r._decimated,n.points=i;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!s,options:c},t),this.updateElements(i,o,a,t)}updateElements(t,e,n,i){const r="reset"===i,{iScale:s,vScale:o,_stacked:a,_dataset:c}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(e,i),h=s.axis,d=o.axis,{spanGaps:f,segment:p}=this.options,g=Ut(f)?f:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||r||"none"===i,y=e+n,v=t.length;let b=e>0&&this.getParsed(e-1);for(let _=0;_<v;++_){const n=t[_],f=m?n:{};if(_<e||_>=y){f.skip=!0;continue}const v=this.getParsed(_),w=tt(v[d]),x=f[h]=s.getPixelForValue(v[h],_),E=f[d]=r||w?o.getBasePixel():o.getPixelForValue(a?this.applyStack(o,v,a):v[d],_);f.skip=isNaN(x)||isNaN(E)||w,f.stop=_>0&&Math.abs(v[h]-b[h])>g,p&&(f.parsed=v,f.raw=c.data[_]),u&&(f.options=l||this.resolveDataElementOptions(_,n.active?"active":i)),m||this.updateElement(n,_,f,i),b=v}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,n=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return n;const r=i[0].size(this.resolveDataElementOptions(0)),s=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(n,r,s)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}o(_r,"id","line"),o(_r,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),o(_r,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class wr extends tr{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,i=n.data.labels||[],r=Ce(e._parsed[t].r,n.options.locale);return{label:i[t]||"",value:r}}parseObjectData(t,e,n,i){return Dn.bind(this)(t,e,n,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach(((t,n)=>{const i=this.getParsed(n).r;!isNaN(i)&&this.chart.getDataVisibility(n)&&(i<e.min&&(e.min=i),i>e.max&&(e.max=i))})),e}_updateRadius(){const t=this.chart,e=t.chartArea,n=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(i/2,0),s=Math.max(n.cutoutPercentage?r/100*n.cutoutPercentage:1,0),o=(r-s)/t.getVisibleDatasetCount();this.outerRadius=r-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,e,n,i){const r="reset"===i,s=this.chart,o=s.options,a=o.animation,c=this._cachedMeta.rScale,l=c.xCenter,u=c.yCenter,h=c.getIndexAngle(0)-.5*It;let d,f=h;const p=360/this.countVisibleElements();for(d=0;d<e;++d)f+=this._computeAngle(d,i,p);for(d=e;d<e+n;d++){const e=t[d];let n=f,o=f+this._computeAngle(d,i,p),g=s.getDataVisibility(d)?c.getDistanceFromCenterForValue(this.getParsed(d).r):0;f=o,r&&(a.animateScale&&(g=0),a.animateRotate&&(n=o=h));const m={x:l,y:u,innerRadius:0,outerRadius:g,startAngle:n,endAngle:o,options:this.resolveDataElementOptions(d,e.active?"active":i)};this.updateElement(e,d,m,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach(((t,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&e++})),e}_computeAngle(t,e,n){return this.chart.getDataVisibility(t)?zt(this.resolveDataElementOptions(t,e).angle||n):0}}o(wr,"id","polarArea"),o(wr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),o(wr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n,color:i}}=t.legend.options;return e.labels.map(((e,r)=>{const s=t.getDatasetMeta(0),o=s.controller.getStyle(r);return{text:e,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,fontColor:i,lineWidth:o.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(r),index:r}}))}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class xr extends br{}o(xr,"id","pie"),o(xr,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Er extends tr{getLabelAndValue(t){const e=this._cachedMeta.vScale,n=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(n[e.axis])}}parseObjectData(t,e,n,i){return Dn.bind(this)(t,e,n,i)}update(t){const e=this._cachedMeta,n=e.dataset,i=e.data||[],r=e.iScale.getLabels();if(n.points=i,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const s={_loop:!0,_fullLoop:r.length===i.length,options:e};this.updateElement(n,void 0,s,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,n,i){const r=this._cachedMeta.rScale,s="reset"===i;for(let o=e;o<e+n;o++){const e=t[o],n=this.resolveDataElementOptions(o,e.active?"active":i),a=r.getPointPositionForValue(o,this.getParsed(o).r),c=s?r.xCenter:a.x,l=s?r.yCenter:a.y,u={x:c,y:l,angle:a.angle,skip:isNaN(c)||isNaN(l),options:n};this.updateElement(e,o,u,i)}}}o(Er,"id","radar"),o(Er,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),o(Er,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Tr extends tr{getLabelAndValue(t){const e=this._cachedMeta,n=this.chart.data.labels||[],{xScale:i,yScale:r}=e,s=this.getParsed(t),o=i.getLabelForValue(s.x),a=r.getLabelForValue(s.y);return{label:n[t]||"",value:"("+o+", "+a+")"}}update(t){const e=this._cachedMeta,{data:n=[]}=e,i=this.chart._animationsDisabled;let{start:r,count:s}=fe(e,n,i);if(this._drawStart=r,this._drawCount=s,pe(e)&&(r=0,s=n.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:r,_dataset:s}=e;r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!s._decimated,r.points=n;const o=this.resolveDatasetElementOptions(t);o.segment=this.options.segment,this.updateElement(r,void 0,{animated:!i,options:o},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(n,r,s,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,n,i){const r="reset"===i,{iScale:s,vScale:o,_stacked:a,_dataset:c}=this._cachedMeta,l=this.resolveDataElementOptions(e,i),u=this.getSharedOptions(l),h=this.includeOptions(i,u),d=s.axis,f=o.axis,{spanGaps:p,segment:g}=this.options,m=Ut(p)?p:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||r||"none"===i;let v=e>0&&this.getParsed(e-1);for(let b=e;b<e+n;++b){const e=t[b],n=this.getParsed(b),l=y?e:{},p=tt(n[f]),_=l[d]=s.getPixelForValue(n[d],b),w=l[f]=r||p?o.getBasePixel():o.getPixelForValue(a?this.applyStack(o,n,a):n[f],b);l.skip=isNaN(_)||isNaN(w)||p,l.stop=b>0&&Math.abs(n[d]-v[d])>m,g&&(l.parsed=n,l.raw=c.data[b]),h&&(l.options=u||this.resolveDataElementOptions(b,e.active?"active":i)),y||this.updateElement(e,b,l,i),v=n}this.updateSharedOptions(u,i,l)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let t=0;for(let n=e.length-1;n>=0;--n)t=Math.max(t,e[n].size(this.resolveDataElementOptions(n))/2);return t>0&&t}const n=t.dataset,i=n.options&&n.options.borderWidth||0;if(!e.length)return i;const r=e[0].size(this.resolveDataElementOptions(0)),s=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,r,s)/2}}o(Tr,"id","scatter"),o(Tr,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),o(Tr,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});function Sr(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Ir{static override(t){Object.assign(Ir.prototype,t)}constructor(t){o(this,"options",void 0),this.options=t||{}}init(){}formats(){return Sr()}parse(){return Sr()}format(){return Sr()}add(){return Sr()}diff(){return Sr()}startOf(){return Sr()}endOf(){return Sr()}}var kr={_date:Ir};function Cr(t,e,n,i){const{controller:r,data:s,_sorted:o}=t,a=r._cachedMeta.iScale;if(a&&e===a.axis&&"r"!==e&&o&&s.length){const t=a._reversePixels?ee:te;if(!i)return t(s,e,n);if(r._sharedOptions){const i=s[0],r="function"===typeof i.getRange&&i.getRange(e);if(r){const i=t(s,e,n-r),o=t(s,e,n+r);return{lo:i.lo,hi:o.hi}}}}return{lo:0,hi:s.length-1}}function Ar(t,e,n,i,r){const s=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,c=s.length;a<c;++a){const{index:t,data:n}=s[a],{lo:c,hi:l}=Cr(s[a],e,o,r);for(let e=c;e<=l;++e){const r=n[e];r.skip||i(r,t,e)}}}function Or(t){const e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,i){const r=e?Math.abs(t.x-i.x):0,s=n?Math.abs(t.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(s,2))}}function Rr(t,e,n,i,r){const s=[];if(!r&&!t.isPointInArea(e))return s;const o=function(n,o,a){(r||qe(n,t.chartArea,0))&&n.inRange(e.x,e.y,i)&&s.push({element:n,datasetIndex:o,index:a})};return Ar(t,n,e,o,!0),s}function Mr(t,e,n,i){let r=[];function s(t,n,s){const{startAngle:o,endAngle:a}=t.getProps(["startAngle","endAngle"],i),{angle:c}=Wt(t,{x:e.x,y:e.y});Qt(c,o,a)&&r.push({element:t,datasetIndex:n,index:s})}return Ar(t,n,e,s),r}function Pr(t,e,n,i,r,s){let o=[];const a=Or(n);let c=Number.POSITIVE_INFINITY;function l(n,l,u){const h=n.inRange(e.x,e.y,r);if(i&&!h)return;const d=n.getCenterPoint(r),f=!!s||t.isPointInArea(d);if(!f&&!h)return;const p=a(e,d);p<c?(o=[{element:n,datasetIndex:l,index:u}],c=p):p===c&&o.push({element:n,datasetIndex:l,index:u})}return Ar(t,n,e,l),o}function Dr(t,e,n,i,r,s){return s||t.isPointInArea(e)?"r"!==n||i?Pr(t,e,n,i,r,s):Mr(t,e,n,r):[]}function Nr(t,e,n,i,r){const s=[],o="x"===n?"inXRange":"inYRange";let a=!1;return Ar(t,n,e,((t,i,c)=>{t[o](e[n],r)&&(s.push({element:t,datasetIndex:i,index:c}),a=a||t.inRange(e.x,e.y,r))})),i&&!a?[]:s}var Lr={evaluateInteractionItems:Ar,modes:{index(t,e,n,i){const r=ti(e,t),s=n.axis||"x",o=n.includeInvisible||!1,a=n.intersect?Rr(t,r,s,i,o):Dr(t,r,s,!1,i,o),c=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=a[0].index,n=t.data[e];n&&!n.skip&&c.push({element:n,datasetIndex:t.index,index:e})})),c):[]},dataset(t,e,n,i){const r=ti(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;let a=n.intersect?Rr(t,r,s,i,o):Dr(t,r,s,!1,i,o);if(a.length>0){const e=a[0].datasetIndex,n=t.getDatasetMeta(e).data;a=[];for(let t=0;t<n.length;++t)a.push({element:n[t],datasetIndex:e,index:t})}return a},point(t,e,n,i){const r=ti(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return Rr(t,r,s,i,o)},nearest(t,e,n,i){const r=ti(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return Dr(t,r,s,n.intersect,i,o)},x(t,e,n,i){const r=ti(e,t);return Nr(t,r,"x",n.intersect,i)},y(t,e,n,i){const r=ti(e,t);return Nr(t,r,"y",n.intersect,i)}}};const Fr=["left","top","right","bottom"];function Vr(t,e){return t.filter((t=>t.pos===e))}function Ur(t,e){return t.filter((t=>-1===Fr.indexOf(t.pos)&&t.box.axis===e))}function jr(t,e){return t.sort(((t,n)=>{const i=e?n:t,r=e?t:n;return i.weight===r.weight?i.index-r.index:i.weight-r.weight}))}function Br(t){const e=[];let n,i,r,s,o,a;for(n=0,i=(t||[]).length;n<i;++n)r=t[n],({position:s,options:{stack:o,stackWeight:a=1}}=r),e.push({index:n,box:r,pos:s,horizontal:r.isHorizontal(),weight:r.weight,stack:o&&s+o,stackWeight:a});return e}function zr(t){const e={};for(const n of t){const{stack:t,pos:i,stackWeight:r}=n;if(!t||!Fr.includes(i))continue;const s=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=r}return e}function $r(t,e){const n=zr(t),{vBoxMaxWidth:i,hBoxMaxHeight:r}=e;let s,o,a;for(s=0,o=t.length;s<o;++s){a=t[s];const{fullSize:o}=a.box,c=n[a.stack],l=c&&a.stackWeight/c.weight;a.horizontal?(a.width=l?l*i:o&&e.availableWidth,a.height=r):(a.width=i,a.height=l?l*r:o&&e.availableHeight)}return n}function Hr(t){const e=Br(t),n=jr(e.filter((t=>t.box.fullSize)),!0),i=jr(Vr(e,"left"),!0),r=jr(Vr(e,"right")),s=jr(Vr(e,"top"),!0),o=jr(Vr(e,"bottom")),a=Ur(e,"x"),c=Ur(e,"y");return{fullSize:n,leftAndTop:i.concat(s),rightAndBottom:r.concat(c).concat(o).concat(a),chartArea:Vr(e,"chartArea"),vertical:i.concat(r).concat(c),horizontal:s.concat(o).concat(a)}}function Wr(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function qr(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function Kr(t,e,n,i){const{pos:r,box:s}=n,o=t.maxPadding;if(!nt(r)){n.size&&(t[r]-=n.size);const e=i[n.stack]||{size:0,count:1};e.size=Math.max(e.size,n.horizontal?s.height:s.width),n.size=e.size/e.count,t[r]+=n.size}s.getPadding&&qr(o,s.getPadding());const a=Math.max(0,e.outerWidth-Wr(o,t,"left","right")),c=Math.max(0,e.outerHeight-Wr(o,t,"top","bottom")),l=a!==t.w,u=c!==t.h;return t.w=a,t.h=c,n.horizontal?{same:l,other:u}:{same:u,other:l}}function Gr(t){const e=t.maxPadding;function n(n){const i=Math.max(e[n]-t[n],0);return t[n]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function Qr(t,e){const n=e.maxPadding;function i(t){const i={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{i[t]=Math.max(e[t],n[t])})),i}return i(t?["left","right"]:["top","bottom"])}function Yr(t,e,n,i){const r=[];let s,o,a,c,l,u;for(s=0,o=t.length,l=0;s<o;++s){a=t[s],c=a.box,c.update(a.width||e.w,a.height||e.h,Qr(a.horizontal,e));const{same:o,other:h}=Kr(e,n,a,i);l|=o&&r.length,u=u||h,c.fullSize||r.push(a)}return l&&Yr(r,e,n,i)||u}function Xr(t,e,n,i,r){t.top=n,t.left=e,t.right=e+i,t.bottom=n+r,t.width=i,t.height=r}function Jr(t,e,n,i){const r=n.padding;let{x:s,y:o}=e;for(const a of t){const t=a.box,c=i[a.stack]||{count:1,placed:0,weight:1},l=a.stackWeight/c.weight||1;if(a.horizontal){const i=e.w*l,s=c.size||t.height;xt(c.start)&&(o=c.start),t.fullSize?Xr(t,r.left,o,n.outerWidth-r.right-r.left,s):Xr(t,e.left+c.placed,o,i,s),c.start=o,c.placed+=i,o=t.bottom}else{const i=e.h*l,o=c.size||t.width;xt(c.start)&&(s=c.start),t.fullSize?Xr(t,s,r.top,o,n.outerHeight-r.bottom-r.top):Xr(t,s,e.top+c.placed,o,i),c.start=s,c.placed+=i,s=t.right}}e.x=s,e.y=o}var Zr={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const r=un(t.options.layout.padding),s=Math.max(e-r.width,0),o=Math.max(n-r.height,0),a=Hr(t.boxes),c=a.vertical,l=a.horizontal;lt(t.boxes,(t=>{"function"===typeof t.beforeLayout&&t.beforeLayout()}));const u=c.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:r,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/u,hBoxMaxHeight:o/2}),d=Object.assign({},r);qr(d,un(i));const f=Object.assign({maxPadding:d,w:s,h:o,x:r.left,y:r.top},r),p=$r(c.concat(l),h);Yr(a.fullSize,f,h,p),Yr(c,f,h,p),Yr(l,f,h,p)&&Yr(c,f,h,p),Gr(f),Jr(a.leftAndTop,f,h,p),f.x+=f.w,f.y+=f.h,Jr(a.rightAndBottom,f,h,p),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},lt(a.chartArea,(e=>{const n=e.box;Object.assign(n,t.chartArea),n.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})}))}};class ts{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,i){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):n)}}isAttached(t){return!0}updateConfig(t){}}class es extends ts{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ns="$chartjs",is={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},rs=t=>null===t||""===t;function ss(t,e){const n=t.style,i=t.getAttribute("height"),r=t.getAttribute("width");if(t[ns]={initial:{height:i,width:r,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",rs(r)){const e=oi(t,"width");void 0!==e&&(t.width=e)}if(rs(i))if(""===t.style.height)t.height=t.width/(e||2);else{const e=oi(t,"height");void 0!==e&&(t.height=e)}return t}const os=!!si&&{passive:!0};function as(t,e,n){t&&t.addEventListener(e,n,os)}function cs(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,os)}function ls(t,e){const n=is[t.type]||t.type,{x:i,y:r}=ti(t,e);return{type:n,chart:e,native:t,x:void 0!==i?i:null,y:void 0!==r?r:null}}function us(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function hs(t,e,n){const i=t.canvas,r=new MutationObserver((t=>{let e=!1;for(const n of t)e=e||us(n.addedNodes,i),e=e&&!us(n.removedNodes,i);e&&n()}));return r.observe(document,{childList:!0,subtree:!0}),r}function ds(t,e,n){const i=t.canvas,r=new MutationObserver((t=>{let e=!1;for(const n of t)e=e||us(n.removedNodes,i),e=e&&!us(n.addedNodes,i);e&&n()}));return r.observe(document,{childList:!0,subtree:!0}),r}const fs=new Map;let ps=0;function gs(){const t=window.devicePixelRatio;t!==ps&&(ps=t,fs.forEach(((e,n)=>{n.currentDevicePixelRatio!==t&&e()})))}function ms(t,e){fs.size||window.addEventListener("resize",gs),fs.set(t,e)}function ys(t){fs.delete(t),fs.size||window.removeEventListener("resize",gs)}function vs(t,e,n){const i=t.canvas,r=i&&qn(i);if(!r)return;const s=ce(((t,e)=>{const i=r.clientWidth;n(t,e),i<r.clientWidth&&n()}),window),o=new ResizeObserver((t=>{const e=t[0],n=e.contentRect.width,i=e.contentRect.height;0===n&&0===i||s(n,i)}));return o.observe(r),ms(t,s),o}function bs(t,e,n){n&&n.disconnect(),"resize"===e&&ys(t)}function _s(t,e,n){const i=t.canvas,r=ce((e=>{null!==t.ctx&&n(ls(e,t))}),t);return as(i,e,r),r}class ws extends ts{acquireContext(t,e){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(ss(t,e),n):null}releaseContext(t){const e=t.canvas;if(!e[ns])return!1;const n=e[ns].initial;["height","width"].forEach((t=>{const i=n[t];tt(i)?e.removeAttribute(t):e.setAttribute(t,i)}));const i=n.style||{};return Object.keys(i).forEach((t=>{e.style[t]=i[t]})),e.width=e.width,delete e[ns],!0}addEventListener(t,e,n){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),r={attach:hs,detach:ds,resize:vs},s=r[e]||_s;i[e]=s(t,e,n)}removeEventListener(t,e){const n=t.$proxies||(t.$proxies={}),i=n[e];if(!i)return;const r={attach:bs,detach:bs,resize:bs},s=r[e]||cs;s(t,e,i),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,i){return ii(t,e,n,i)}isAttached(t){const e=t&&qn(t);return!(!e||!e.isConnected)}}function xs(t){return!Wn()||"undefined"!==typeof OffscreenCanvas&&t instanceof OffscreenCanvas?es:ws}class Es{constructor(){o(this,"x",void 0),o(this,"y",void 0),o(this,"active",!1),o(this,"options",void 0),o(this,"$animations",void 0)}tooltipPosition(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return Ut(this.x)&&Ut(this.y)}getProps(t,e){const n=this.$animations;if(!e||!n)return this;const i={};return t.forEach((t=>{i[t]=n[t]&&n[t].active()?n[t]._to:this[t]})),i}}function Ts(t,e){const n=t.options.ticks,i=Ss(t),r=Math.min(n.maxTicksLimit||i,i),s=n.major.enabled?ks(e):[],o=s.length,a=s[0],c=s[o-1],l=[];if(o>r)return Cs(e,l,s,o/r),l;const u=Is(s,e,r);if(o>0){let t,n;const i=o>1?Math.round((c-a)/(o-1)):null;for(As(e,l,u,tt(i)?0:a-i,a),t=0,n=o-1;t<n;t++)As(e,l,u,s[t],s[t+1]);return As(e,l,u,c,tt(i)?e.length:c+i),l}return As(e,l,u),l}function Ss(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),r=t._maxLength/n;return Math.floor(Math.min(i,r))}function Is(t,e,n){const i=Os(t),r=e.length/n;if(!i)return Math.max(r,1);const s=Vt(i);for(let o=0,a=s.length-1;o<a;o++){const t=s[o];if(t>r)return t}return Math.max(r,1)}function ks(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function Cs(t,e,n,i){let r,s=0,o=n[0];for(i=Math.ceil(i),r=0;r<t.length;r++)r===o&&(e.push(t[r]),s++,o=n[s*i])}function As(t,e,n,i,r){const s=st(i,0),o=Math.min(st(r,t.length),t.length);let a,c,l,u=0;n=Math.ceil(n),r&&(a=r-i,n=a/Math.floor(a/n)),l=s;while(l<0)u++,l=Math.round(s+u*n);for(c=Math.max(s,0);c<o;c++)c===l&&(e.push(t[c]),u++,l=Math.round(s+u*n))}function Os(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}o(Es,"defaults",{}),o(Es,"defaultRoutes",void 0);const Rs=t=>"left"===t?"right":"right"===t?"left":t,Ms=(t,e,n)=>"top"===e||"left"===e?t[e]+n:t[e]-n,Ps=(t,e)=>Math.min(e||t,t);function Ds(t,e){const n=[],i=t.length/e,r=t.length;let s=0;for(;s<r;s+=i)n.push(t[Math.floor(s)]);return n}function Ns(t,e,n){const i=t.ticks.length,r=Math.min(e,i-1),s=t._startPixel,o=t._endPixel,a=1e-6;let c,l=t.getPixelForTick(r);if(!(n&&(c=1===i?Math.max(l-s,o-l):0===e?(t.getPixelForTick(1)-l)/2:(l-t.getPixelForTick(r-1))/2,l+=r<e?c:-c,l<s-a||l>o+a)))return l}function Ls(t,e){lt(t,(t=>{const n=t.gc,i=n.length/2;let r;if(i>e){for(r=0;r<i;++r)delete t.data[n[r]];n.splice(0,i)}}))}function Fs(t){return t.drawTicks?t.tickLength:0}function Vs(t,e){if(!t.display)return 0;const n=hn(t.font,e),i=un(t.padding),r=et(t.text)?t.text.length:1;return r*n.lineHeight+i.height}function Us(t,e){return pn(t,{scale:e,type:"scale"})}function js(t,e,n){return pn(t,{tick:n,index:e,type:"tick"})}function Bs(t,e,n){let i=ue(t);return(n&&"right"!==e||!n&&"right"===e)&&(i=Rs(i)),i}function zs(t,e,n,i){const{top:r,left:s,bottom:o,right:a,chart:c}=t,{chartArea:l,scales:u}=c;let h,d,f,p=0;const g=o-r,m=a-s;if(t.isHorizontal()){if(d=he(i,s,a),nt(n)){const t=Object.keys(n)[0],i=n[t];f=u[t].getPixelForValue(i)+g-e}else f="center"===n?(l.bottom+l.top)/2+g-e:Ms(t,n,e);h=a-s}else{if(nt(n)){const t=Object.keys(n)[0],i=n[t];d=u[t].getPixelForValue(i)-m+e}else d="center"===n?(l.left+l.right)/2-m+e:Ms(t,n,e);f=he(i,o,r),p="left"===n?-Rt:Rt}return{titleX:d,titleY:f,maxWidth:h,rotation:p}}class $s extends Es{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:i}=this;return t=rt(t,Number.POSITIVE_INFINITY),e=rt(e,Number.NEGATIVE_INFINITY),n=rt(n,Number.POSITIVE_INFINITY),i=rt(i,Number.NEGATIVE_INFINITY),{min:rt(t,n),max:rt(e,i),minDefined:it(t),maxDefined:it(e)}}getMinMax(t){let e,{min:n,max:i,minDefined:r,maxDefined:s}=this.getUserBounds();if(r&&s)return{min:n,max:i};const o=this.getMatchingVisibleMetas();for(let a=0,c=o.length;a<c;++a)e=o[a].controller.getMinMax(this,t),r||(n=Math.min(n,e.min)),s||(i=Math.max(i,e.max));return n=s&&n>i?i:n,i=r&&n>i?n:i,{min:rt(n,rt(i,n)),max:rt(i,rt(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){const e=this._labelItems||(this._labelItems=this._computeLabelItems(t));return e}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ct(this.options.beforeUpdate,[this])}update(t,e,n){const{beginAtZero:i,grace:r,ticks:s}=this.options,o=s.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=fn(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const a=o<this.ticks.length;this._convertTicksToLabels(a?Ds(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||"auto"===s.source)&&(this.ticks=Ts(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),a&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,n=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,n=!n),this._startPixel=t,this._endPixel=e,this._reversePixels=n,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ct(this.options.afterUpdate,[this])}beforeSetDimensions(){ct(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ct(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ct(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ct(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let n,i,r;for(n=0,i=t.length;n<i;n++)r=t[n],r.label=ct(e.callback,[r.value,n,t],this)}afterTickToLabelConversion(){ct(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ct(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,n=Ps(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,r=e.maxRotation;let s,o,a,c=i;if(!this._isVisible()||!e.display||i>=r||n<=1||!this.isHorizontal())return void(this.labelRotation=i);const l=this._getLabelSizes(),u=l.widest.width,h=l.highest.height,d=Yt(this.chart.width-u,0,this.maxWidth);s=t.offset?this.maxWidth/n:d/(n-1),u+6>s&&(s=d/(n-(t.offset?.5:1)),o=this.maxHeight-Fs(t.grid)-e.padding-Vs(t.title,this.chart.options.font),a=Math.sqrt(u*u+h*h),c=$t(Math.min(Math.asin(Yt((l.highest.height+6)/s,-1,1)),Math.asin(Yt(o/a,-1,1))-Math.asin(Yt(h/a,-1,1)))),c=Math.max(i,Math.min(r,c))),this.labelRotation=c}afterCalculateLabelRotation(){ct(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ct(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:n,title:i,grid:r}}=this,s=this._isVisible(),o=this.isHorizontal();if(s){const s=Vs(i,e.options.font);if(o?(t.width=this.maxWidth,t.height=Fs(r)+s):(t.height=this.maxHeight,t.width=Fs(r)+s),n.display&&this.ticks.length){const{first:e,last:i,widest:r,highest:s}=this._getLabelSizes(),a=2*n.padding,c=zt(this.labelRotation),l=Math.cos(c),u=Math.sin(c);if(o){const e=n.mirror?0:u*r.width+l*s.height;t.height=Math.min(this.maxHeight,t.height+e+a)}else{const e=n.mirror?0:l*r.width+u*s.height;t.width=Math.min(this.maxWidth,t.width+e+a)}this._calculatePadding(e,i,u,l)}}this._handleMargins(),o?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,n,i){const{ticks:{align:r,padding:s},position:o}=this.options,a=0!==this.labelRotation,c="top"!==o&&"x"===this.axis;if(this.isHorizontal()){const o=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1);let u=0,h=0;a?c?(u=i*t.width,h=n*e.height):(u=n*t.height,h=i*e.width):"start"===r?h=e.width:"end"===r?u=t.width:"inner"!==r&&(u=t.width/2,h=e.width/2),this.paddingLeft=Math.max((u-o+s)*this.width/(this.width-o),0),this.paddingRight=Math.max((h-l+s)*this.width/(this.width-l),0)}else{let n=e.height/2,i=t.height/2;"start"===r?(n=0,i=t.height):"end"===r&&(n=e.height,i=0),this.paddingTop=n+s,this.paddingBottom=i+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ct(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,n;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,n=t.length;e<n;e++)tt(t[e].label)&&(t.splice(e,1),n--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let n=this.ticks;e<n.length&&(n=Ds(n,e)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,n){const{ctx:i,_longestTextCache:r}=this,s=[],o=[],a=Math.floor(e/Ps(e,n));let c,l,u,h,d,f,p,g,m,y,v,b=0,_=0;for(c=0;c<e;c+=a){if(h=t[c].label,d=this._resolveTickFontOptions(c),i.font=f=d.string,p=r[f]=r[f]||{data:{},gc:[]},g=d.lineHeight,m=y=0,tt(h)||et(h)){if(et(h))for(l=0,u=h.length;l<u;++l)v=h[l],tt(v)||et(v)||(m=je(i,p.data,p.gc,m,v),y+=g)}else m=je(i,p.data,p.gc,m,h),y=g;s.push(m),o.push(y),b=Math.max(m,b),_=Math.max(y,_)}Ls(r,e);const w=s.indexOf(b),x=o.indexOf(_),E=t=>({width:s[t]||0,height:o[t]||0});return{first:E(0),last:E(e-1),widest:E(w),highest:E(x),widths:s,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Xt(this._alignToPixels?ze(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const n=e[t];return n.$context||(n.$context=js(this.getContext(),t,n))}return this.$context||(this.$context=Us(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=zt(this.labelRotation),n=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),r=this._getLabelSizes(),s=t.autoSkipPadding||0,o=r?r.widest.width+s:0,a=r?r.highest.height+s:0;return this.isHorizontal()?a*n>o*i?o/n:a/i:a*i<o*n?a/n:o/i}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,n=this.chart,i=this.options,{grid:r,position:s,border:o}=i,a=r.offset,c=this.isHorizontal(),l=this.ticks,u=l.length+(a?1:0),h=Fs(r),d=[],f=o.setContext(this.getContext()),p=f.display?f.width:0,g=p/2,m=function(t){return ze(n,t,p)};let y,v,b,_,w,x,E,T,S,I,k,C;if("top"===s)y=m(this.bottom),x=this.bottom-h,T=y-g,I=m(t.top)+g,C=t.bottom;else if("bottom"===s)y=m(this.top),I=t.top,C=m(t.bottom)-g,x=y+g,T=this.top+h;else if("left"===s)y=m(this.right),w=this.right-h,E=y-g,S=m(t.left)+g,k=t.right;else if("right"===s)y=m(this.left),S=t.left,k=m(t.right)-g,w=y+g,E=this.left+h;else if("x"===e){if("center"===s)y=m((t.top+t.bottom)/2+.5);else if(nt(s)){const t=Object.keys(s)[0],e=s[t];y=m(this.chart.scales[t].getPixelForValue(e))}I=t.top,C=t.bottom,x=y+g,T=x+h}else if("y"===e){if("center"===s)y=m((t.left+t.right)/2);else if(nt(s)){const t=Object.keys(s)[0],e=s[t];y=m(this.chart.scales[t].getPixelForValue(e))}w=y-g,E=w-h,S=t.left,k=t.right}const A=st(i.ticks.maxTicksLimit,u),O=Math.max(1,Math.ceil(u/A));for(v=0;v<u;v+=O){const t=this.getContext(v),e=r.setContext(t),i=o.setContext(t),s=e.lineWidth,l=e.color,u=i.dash||[],h=i.dashOffset,f=e.tickWidth,p=e.tickColor,g=e.tickBorderDash||[],m=e.tickBorderDashOffset;b=Ns(this,v,a),void 0!==b&&(_=ze(n,b,s),c?w=E=S=k=_:x=T=I=C=_,d.push({tx1:w,ty1:x,tx2:E,ty2:T,x1:S,y1:I,x2:k,y2:C,width:s,color:l,borderDash:u,borderDashOffset:h,tickWidth:f,tickColor:p,tickBorderDash:g,tickBorderDashOffset:m}))}return this._ticksLength=u,this._borderValue=y,d}_computeLabelItems(t){const e=this.axis,n=this.options,{position:i,ticks:r}=n,s=this.isHorizontal(),o=this.ticks,{align:a,crossAlign:c,padding:l,mirror:u}=r,h=Fs(n.grid),d=h+l,f=u?-l:d,p=-zt(this.labelRotation),g=[];let m,y,v,b,_,w,x,E,T,S,I,k,C="middle";if("top"===i)w=this.bottom-f,x=this._getXAxisLabelAlignment();else if("bottom"===i)w=this.top+f,x=this._getXAxisLabelAlignment();else if("left"===i){const t=this._getYAxisLabelAlignment(h);x=t.textAlign,_=t.x}else if("right"===i){const t=this._getYAxisLabelAlignment(h);x=t.textAlign,_=t.x}else if("x"===e){if("center"===i)w=(t.top+t.bottom)/2+d;else if(nt(i)){const t=Object.keys(i)[0],e=i[t];w=this.chart.scales[t].getPixelForValue(e)+d}x=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===i)_=(t.left+t.right)/2-d;else if(nt(i)){const t=Object.keys(i)[0],e=i[t];_=this.chart.scales[t].getPixelForValue(e)}x=this._getYAxisLabelAlignment(h).textAlign}"y"===e&&("start"===a?C="top":"end"===a&&(C="bottom"));const A=this._getLabelSizes();for(m=0,y=o.length;m<y;++m){v=o[m],b=v.label;const t=r.setContext(this.getContext(m));E=this.getPixelForTick(m)+r.labelOffset,T=this._resolveTickFontOptions(m),S=T.lineHeight,I=et(b)?b.length:1;const e=I/2,n=t.color,a=t.textStrokeColor,l=t.textStrokeWidth;let h,d=x;if(s?(_=E,"inner"===x&&(d=m===y-1?this.options.reverse?"left":"right":0===m?this.options.reverse?"right":"left":"center"),k="top"===i?"near"===c||0!==p?-I*S+S/2:"center"===c?-A.highest.height/2-e*S+S:-A.highest.height+S/2:"near"===c||0!==p?S/2:"center"===c?A.highest.height/2-e*S:A.highest.height-I*S,u&&(k*=-1),0===p||t.showLabelBackdrop||(_+=S/2*Math.sin(p))):(w=E,k=(1-I)*S/2),t.showLabelBackdrop){const e=un(t.backdropPadding),n=A.heights[m],i=A.widths[m];let r=k-e.top,s=0-e.left;switch(C){case"middle":r-=n/2;break;case"bottom":r-=n;break}switch(x){case"center":s-=i/2;break;case"right":s-=i;break;case"inner":m===y-1?s-=i:m>0&&(s-=i/2);break}h={left:s,top:r,width:i+e.width,height:n+e.height,color:t.backdropColor}}g.push({label:b,font:T,textOffset:k,options:{rotation:p,color:n,strokeColor:a,strokeWidth:l,textAlign:d,textBaseline:C,translation:[_,w],backdrop:h}})}return g}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options,n=-zt(this.labelRotation);if(n)return"top"===t?"left":"right";let i="center";return"start"===e.align?i="left":"end"===e.align?i="right":"inner"===e.align&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:n,mirror:i,padding:r}}=this.options,s=this._getLabelSizes(),o=t+r,a=s.widest.width;let c,l;return"left"===e?i?(l=this.right+r,"near"===n?c="left":"center"===n?(c="center",l+=a/2):(c="right",l+=a)):(l=this.right-o,"near"===n?c="right":"center"===n?(c="center",l-=a/2):(c="left",l=this.left)):"right"===e?i?(l=this.left+r,"near"===n?c="right":"center"===n?(c="center",l-=a/2):(c="left",l-=a)):(l=this.left+o,"near"===n?c="left":"center"===n?(c="center",l+=a/2):(c="right",l=this.right)):c="right",{textAlign:c,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:n,top:i,width:r,height:s}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,i,r,s),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const n=this.ticks,i=n.findIndex((e=>e.value===t));if(i>=0){const t=e.setContext(this.getContext(i));return t.lineWidth}return 0}drawGrid(t){const e=this.options.grid,n=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,s;const o=(t,e,i)=>{i.width&&i.color&&(n.save(),n.lineWidth=i.width,n.strokeStyle=i.color,n.setLineDash(i.borderDash||[]),n.lineDashOffset=i.borderDashOffset,n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(e.x,e.y),n.stroke(),n.restore())};if(e.display)for(r=0,s=i.length;r<s;++r){const t=i[r];e.drawOnChartArea&&o({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&o({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:n,grid:i}}=this,r=n.setContext(this.getContext()),s=n.display?r.width:0;if(!s)return;const o=i.setContext(this.getContext(0)).lineWidth,a=this._borderValue;let c,l,u,h;this.isHorizontal()?(c=ze(t,this.left,s)-s/2,l=ze(t,this.right,o)+o/2,u=h=a):(u=ze(t,this.top,s)-s/2,h=ze(t,this.bottom,o)+o/2,c=l=a),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(c,u),e.lineTo(l,h),e.stroke(),e.restore()}drawLabels(t){const e=this.options.ticks;if(!e.display)return;const n=this.ctx,i=this._computeLabelArea();i&&Ke(n,i);const r=this.getLabelItems(t);for(const s of r){const t=s.options,e=s.font,i=s.label,r=s.textOffset;tn(n,i,0,r,e,t)}i&&Ge(n)}drawTitle(){const{ctx:t,options:{position:e,title:n,reverse:i}}=this;if(!n.display)return;const r=hn(n.font),s=un(n.padding),o=n.align;let a=r.lineHeight/2;"bottom"===e||"center"===e||nt(e)?(a+=s.bottom,et(n.text)&&(a+=r.lineHeight*(n.text.length-1))):a+=s.top;const{titleX:c,titleY:l,maxWidth:u,rotation:h}=zs(this,a,e,o);tn(t,n.text,0,0,r,{color:n.color,maxWidth:u,rotation:h,textAlign:Bs(o,e,i),textBaseline:"middle",translation:[c,l]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,n=st(t.grid&&t.grid.z,-1),i=st(t.border&&t.border.z,0);return this._isVisible()&&this.draw===$s.prototype.draw?[{z:n,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",i=[];let r,s;for(r=0,s=e.length;r<s;++r){const s=e[r];s[n]!==this.id||t&&s.type!==t||i.push(s)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return hn(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Hs{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let n;Ks(e)&&(n=this.register(e));const i=this.items,r=t.id,s=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in i||(i[r]=t,Ws(t,s,n),this.override&&Ve.override(t.id,t.overrides)),s}get(t){return this.items[t]}unregister(t){const e=this.items,n=t.id,i=this.scope;n in e&&delete e[n],i&&n in Ve[i]&&(delete Ve[i][n],this.override&&delete Pe[n])}}function Ws(t,e,n){const i=pt(Object.create(null),[n?Ve.get(n):{},Ve.get(e),t.defaults]);Ve.set(e,i),t.defaultRoutes&&qs(e,t.defaultRoutes),t.descriptors&&Ve.describe(e,t.descriptors)}function qs(t,e){Object.keys(e).forEach((n=>{const i=n.split("."),r=i.pop(),s=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),c=o.join(".");Ve.route(s,r,c,a)}))}function Ks(t){return"id"in t&&"defaults"in t}class Gs{constructor(){this.controllers=new Hs(tr,"datasets",!0),this.elements=new Hs(Es,"elements"),this.plugins=new Hs(Object,"plugins"),this.scales=new Hs($s,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,n){[...e].forEach((e=>{const i=n||this._getRegistryForType(e);n||i.isForType(e)||i===this.plugins&&e.id?this._exec(t,i,e):lt(e,(e=>{const i=n||this._getRegistryForType(e);this._exec(t,i,e)}))}))}_exec(t,e,n){const i=wt(t);ct(n["before"+i],[],n),e[t](n),ct(n["after"+i],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){const i=e.get(t);if(void 0===i)throw new Error('"'+t+'" is not a registered '+n+".");return i}}var Qs=new Gs;class Ys{constructor(){this._init=[]}notify(t,e,n,i){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const r=i?this._descriptors(t).filter(i):this._descriptors(t),s=this._notify(r,t,e,n);return"afterDestroy"===e&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall")),s}_notify(t,e,n,i){i=i||{};for(const r of t){const t=r.plugin,s=t[n],o=[e,i,r.options];if(!1===ct(s,o,t)&&i.cancelable)return!1}return!0}invalidate(){tt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const n=t&&t.config,i=st(n.options&&n.options.plugins,{}),r=Xs(n);return!1!==i||e?Zs(t,r,i,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],n=this._cache,i=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(i(e,n),t,"stop"),this._notify(i(n,e),t,"start")}}function Xs(t){const e={},n=[],i=Object.keys(Qs.plugins.items);for(let s=0;s<i.length;s++)n.push(Qs.getPlugin(i[s]));const r=t.plugins||[];for(let s=0;s<r.length;s++){const t=r[s];-1===n.indexOf(t)&&(n.push(t),e[t.id]=!0)}return{plugins:n,localIds:e}}function Js(t,e){return e||!1!==t?!0===t?{}:t:null}function Zs(t,{plugins:e,localIds:n},i,r){const s=[],o=t.getContext();for(const a of e){const e=a.id,c=Js(i[e],r);null!==c&&s.push({plugin:a,options:to(t.config,{plugin:a,local:n[e]},c,o)})}return s}function to(t,{plugin:e,local:n},i,r){const s=t.pluginScopeKeys(e),o=t.getOptionScopes(i,s);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function eo(t,e){const n=Ve.datasets[t]||{},i=(e.datasets||{})[t]||{};return i.indexAxis||e.indexAxis||n.indexAxis||"x"}function no(t,e){let n=t;return"_index_"===t?n=e:"_value_"===t&&(n="x"===e?"y":"x"),n}function io(t,e){return t===e?"_index_":"_value_"}function ro(t){if("x"===t||"y"===t||"r"===t)return t}function so(t){return"top"===t||"bottom"===t?"x":"left"===t||"right"===t?"y":void 0}function oo(t,...e){if(ro(t))return t;for(const n of e){const e=n.axis||so(n.position)||t.length>1&&ro(t[0].toLowerCase());if(e)return e}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function ao(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function co(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter((e=>e.xAxisID===t||e.yAxisID===t));if(n.length)return ao(t,"x",n[0])||ao(t,"y",n[0])}return{}}function lo(t,e){const n=Pe[t.type]||{scales:{}},i=e.scales||{},r=eo(t.type,e),s=Object.create(null);return Object.keys(i).forEach((e=>{const o=i[e];if(!nt(o))return console.error(`Invalid scale configuration for scale: ${e}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${e}`);const a=oo(e,o,co(e,t),Ve.scales[o.type]),c=io(a,r),l=n.scales||{};s[e]=gt(Object.create(null),[{axis:a},o,l[a],l[c]])})),t.data.datasets.forEach((n=>{const r=n.type||t.type,o=n.indexAxis||eo(r,e),a=Pe[r]||{},c=a.scales||{};Object.keys(c).forEach((t=>{const e=no(t,o),r=n[e+"AxisID"]||e;s[r]=s[r]||Object.create(null),gt(s[r],[{axis:e},i[r],c[t]])}))})),Object.keys(s).forEach((t=>{const e=s[t];gt(e,[Ve.scales[e.type],Ve.scale])})),s}function uo(t){const e=t.options||(t.options={});e.plugins=st(e.plugins,{}),e.scales=lo(t,e)}function ho(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function fo(t){return t=t||{},t.data=ho(t.data),uo(t),t}const po=new Map,go=new Set;function mo(t,e){let n=po.get(t);return n||(n=e(),po.set(t,n),go.add(n)),n}const yo=(t,e,n)=>{const i=_t(e,n);void 0!==i&&t.add(i)};class vo{constructor(t){this._config=fo(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=ho(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),uo(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return mo(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return mo(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return mo(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id,n=this.type;return mo(`${n}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const n=this._scopeCache;let i=n.get(t);return i&&!e||(i=new Map,n.set(t,i)),i}getOptionScopes(t,e,n){const{options:i,type:r}=this,s=this._cachedScopes(t,n),o=s.get(e);if(o)return o;const a=new Set;e.forEach((e=>{t&&(a.add(t),e.forEach((e=>yo(a,t,e)))),e.forEach((t=>yo(a,i,t))),e.forEach((t=>yo(a,Pe[r]||{},t))),e.forEach((t=>yo(a,Ve,t))),e.forEach((t=>yo(a,De,t)))}));const c=Array.from(a);return 0===c.length&&c.push(Object.create(null)),go.has(e)&&s.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,Pe[e]||{},Ve.datasets[e]||{},{type:e},Ve,De]}resolveNamedOptions(t,e,n,i=[""]){const r={$shared:!0},{resolver:s,subPrefixes:o}=bo(this._resolverCache,t,i);let a=s;if(wo(s,e)){r.$shared=!1,n=Et(n)?n():n;const e=this.createResolver(t,n,o);a=mn(s,n,e)}for(const c of e)r[c]=a[c];return r}createResolver(t,e,n=[""],i){const{resolver:r}=bo(this._resolverCache,t,n);return nt(e)?mn(r,e,void 0,i):r}}function bo(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const r=n.join();let s=i.get(r);if(!s){const t=gn(e,n);s={resolver:t,subPrefixes:n.filter((t=>!t.toLowerCase().includes("hover")))},i.set(r,s)}return s}const _o=t=>nt(t)&&Object.getOwnPropertyNames(t).some((e=>Et(t[e])));function wo(t,e){const{isScriptable:n,isIndexable:i}=yn(t);for(const r of e){const e=n(r),s=i(r),o=(s||e)&&t[r];if(e&&(Et(o)||_o(o))||s&&et(o))return!0}return!1}var xo="4.4.3";const Eo=["top","bottom","left","right","chartArea"];function To(t,e){return"top"===t||"bottom"===t||-1===Eo.indexOf(t)&&"x"===e}function So(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function Io(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),ct(n&&n.onComplete,[t],e)}function ko(t){const e=t.chart,n=e.options.animation;ct(n&&n.onProgress,[t],e)}function Co(t){return Wn()&&"string"===typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Ao={},Oo=t=>{const e=Co(t);return Object.values(Ao).filter((t=>t.canvas===e)).pop()};function Ro(t,e,n){const i=Object.keys(t);for(const r of i){const i=+r;if(i>=e){const s=t[r];delete t[r],(n>0||i>e)&&(t[i+n]=s)}}}function Mo(t,e,n,i){return n&&"mouseout"!==t.type?i?e:t:null}function Po(t,e,n){return t.options.clip?t[n]:e[n]}function Do(t,e){const{xScale:n,yScale:i}=t;return n&&i?{left:Po(n,e,"left"),right:Po(n,e,"right"),top:Po(i,e,"top"),bottom:Po(i,e,"bottom")}:e}class No{static register(...t){Qs.add(...t),Lo()}static unregister(...t){Qs.remove(...t),Lo()}constructor(t,e){const n=this.config=new vo(e),i=Co(t),r=Oo(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const s=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||xs(i)),this.platform.updateConfig(n);const o=this.platform.acquireContext(i,s.aspectRatio),a=o&&o.canvas,c=a&&a.height,l=a&&a.width;this.id=Z(),this.ctx=o,this.canvas=a,this.width=l,this.height=c,this._options=s,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Ys,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=le((t=>this.update(t)),s.resizeDelay||0),this._dataChanges=[],Ao[this.id]=this,o&&a?(Ci.listen(this,"complete",Io),Ci.listen(this,"progress",ko),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:n,height:i,_aspectRatio:r}=this;return tt(t)?e&&r?r:i?n/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Qs}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():ri(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return $e(this.canvas,this.ctx),this}stop(){return Ci.stop(this),this}resize(t,e){Ci.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const n=this.options,i=this.canvas,r=n.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(i,t,e,r),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),a=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,ri(this,o,!0)&&(this.notifyPlugins("resize",{size:s}),ct(n.onResize,[this,s],this),this.attached&&this._doResize(a)&&this.render())}ensureScalesHaveIDs(){const t=this.options,e=t.scales||{};lt(e,((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,n=this.scales,i=Object.keys(n).reduce(((t,e)=>(t[e]=!1,t)),{});let r=[];e&&(r=r.concat(Object.keys(e).map((t=>{const n=e[t],i=oo(t,n),r="r"===i,s="x"===i;return{options:n,dposition:r?"chartArea":s?"bottom":"left",dtype:r?"radialLinear":s?"category":"linear"}})))),lt(r,(e=>{const r=e.options,s=r.id,o=oo(s,r),a=st(r.type,e.dtype);void 0!==r.position&&To(r.position,o)===To(e.dposition)||(r.position=e.dposition),i[s]=!0;let c=null;if(s in n&&n[s].type===a)c=n[s];else{const t=Qs.getScale(a);c=new t({id:s,type:a,ctx:this.ctx,chart:this}),n[c.id]=c}c.init(r,t)})),lt(i,((t,e)=>{t||delete n[e]})),lt(n,(t=>{Zr.configure(this,t,t.options),Zr.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,n=t.length;if(t.sort(((t,e)=>t.index-e.index)),n>e){for(let t=e;t<n;++t)this._destroyDatasetMeta(t);t.splice(e,n-e)}this._sortedMetasets=t.slice(0).sort(So("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,n)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(n)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let n,i;for(this._removeUnreferencedMetasets(),n=0,i=e.length;n<i;n++){const i=e[n];let r=this.getDatasetMeta(n);const s=i.type||this.config.type;if(r.type&&r.type!==s&&(this._destroyDatasetMeta(n),r=this.getDatasetMeta(n)),r.type=s,r.indexAxis=i.indexAxis||eo(s,this.options),r.order=i.order||0,r.index=n,r.label=""+i.label,r.visible=this.isDatasetVisible(n),r.controller)r.controller.updateIndex(n),r.controller.linkScales();else{const e=Qs.getController(s),{datasetElementType:i,dataElementType:o}=Ve.datasets[s];Object.assign(e,{dataElementType:Qs.getElement(o),datasetElementType:i&&Qs.getElement(i)}),r.controller=new e(this,n),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){lt(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const n=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let c=0,l=this.data.datasets.length;c<l;c++){const{controller:t}=this.getDatasetMeta(c),e=!i&&-1===r.indexOf(t);t.buildOrUpdateElements(e),s=Math.max(+t.getMaxOverflow(),s)}s=this._minPadding=n.layout.autoPadding?s:0,this._updateLayout(s),i||lt(r,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(So("z","_idx"));const{_active:o,_lastEvent:a}=this;a?this._eventHandler(a,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){lt(this.scales,(t=>{Zr.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),n=new Set(t.events);Tt(e,n)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:n,start:i,count:r}of e){const e="_removeElements"===n?-r:r;Ro(t,i,e)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,n=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),i=n(0);for(let r=1;r<e;r++)if(!Tt(i,n(r)))return;return Array.from(i).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;Zr.update(this,this.width,this.height,t);const e=this.chartArea,n=e.width<=0||e.height<=0;this._layers=[],lt(this.boxes,(t=>{n&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,n=this.data.datasets.length;e<n;++e)this._updateDataset(e,Et(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const n=this.getDatasetMeta(t),i={meta:n,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",i)&&(n.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(Ci.has(this)?this.attached&&!Ci.running(this)&&Ci.start(this):(this.draw(),Io({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,n=[];let i,r;for(i=0,r=e.length;i<r;++i){const r=e[i];t&&!r.visible||n.push(r)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,n=t._clip,i=!n.disabled,r=Do(t,this.chartArea),s={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",s)&&(i&&Ke(e,{left:!1===n.left?0:r.left-n.left,right:!1===n.right?this.width:r.right+n.right,top:!1===n.top?0:r.top-n.top,bottom:!1===n.bottom?this.height:r.bottom+n.bottom}),t.controller.draw(),i&&Ge(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return qe(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,n,i){const r=Lr.modes[e];return"function"===typeof r?r(this,t,n,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],n=this._metasets;let i=n.filter((t=>t&&t._dataset===e)).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},n.push(i)),i}getContext(){return this.$context||(this.$context=pn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const n=this.getDatasetMeta(t);return"boolean"===typeof n.hidden?!n.hidden:!e.hidden}setDatasetVisibility(t,e){const n=this.getDatasetMeta(t);n.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,n){const i=n?"show":"hide",r=this.getDatasetMeta(t),s=r.controller._resolveAnimations(void 0,i);xt(e)?(r.data[e].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),s.update(r,{visible:n}),this.update((e=>e.datasetIndex===t?i:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Ci.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),$e(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Ao[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,n=(n,i)=>{e.addEventListener(this,n,i),t[n]=i},i=(t,e,n)=>{t.offsetX=e,t.offsetY=n,this._eventHandler(t)};lt(this.options.events,(t=>n(t,i)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,n=(n,i)=>{e.addEventListener(this,n,i),t[n]=i},i=(n,i)=>{t[n]&&(e.removeEventListener(this,n,i),delete t[n])},r=(t,e)=>{this.canvas&&this.resize(t,e)};let s;const o=()=>{i("attach",o),this.attached=!0,this.resize(),n("resize",r),n("detach",s)};s=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),n("attach",o)},e.isAttached(this.canvas)?o():s()}unbindEvents(){lt(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},lt(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,n){const i=n?"set":"remove";let r,s,o,a;for("dataset"===e&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),o=0,a=t.length;o<a;++o){s=t[o];const e=s&&this.getDatasetMeta(s.datasetIndex).controller;e&&e[i+"HoverStyle"](s.element,s.datasetIndex,s.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],n=t.map((({datasetIndex:t,index:e})=>{const n=this.getDatasetMeta(t);if(!n)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:n.data[e],index:e}})),i=!ut(n,e);i&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,e))}notifyPlugins(t,e,n){return this._plugins.notify(this,t,e,n)}isPluginEnabled(t){return 1===this._plugins._cache.filter((e=>e.plugin.id===t)).length}_updateHoverStyles(t,e,n){const i=this.options.hover,r=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),s=r(e,t),o=n?t:r(t,e);s.length&&this.updateHoverStyle(s,i.mode,!1),o.length&&i.mode&&this.updateHoverStyle(o,i.mode,!0)}_eventHandler(t,e){const n={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",n,i))return;const r=this._handleEvent(t,e,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,i),(r||n.changed)&&this.render(),this}_handleEvent(t,e,n){const{_active:i=[],options:r}=this,s=e,o=this._getActiveElements(t,i,n,s),a=St(t),c=Mo(t,this._lastEvent,n,a);n&&(this._lastEvent=null,ct(r.onHover,[t,o,this],this),a&&ct(r.onClick,[t,o,this],this));const l=!ut(o,i);return(l||e)&&(this._active=o,this._updateHoverStyles(o,i,e)),this._lastEvent=c,l}_getActiveElements(t,e,n,i){if("mouseout"===t.type)return[];if(!n)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,i)}}function Lo(){return lt(No.instances,(t=>t._plugins.invalidate()))}function Fo(t,e,n){const{startAngle:i,pixelMargin:r,x:s,y:o,outerRadius:a,innerRadius:c}=e;let l=r/a;t.beginPath(),t.arc(s,o,a,i-l,n+l),c>r?(l=r/c,t.arc(s,o,c,n+l,i-l,!0)):t.arc(s,o,r,n+Rt,i-Rt),t.closePath(),t.clip()}function Vo(t){return an(t,["outerStart","outerEnd","innerStart","innerEnd"])}function Uo(t,e,n,i){const r=Vo(t.options.borderRadius),s=(n-e)/2,o=Math.min(s,i*e/2),a=t=>{const e=(n-Math.min(s,t))*i/2;return Yt(t,0,Math.min(s,e))};return{outerStart:a(r.outerStart),outerEnd:a(r.outerEnd),innerStart:Yt(r.innerStart,0,o),innerEnd:Yt(r.innerEnd,0,o)}}function jo(t,e,n,i){return{x:n+t*Math.cos(e),y:i+t*Math.sin(e)}}function Bo(t,e,n,i,r,s){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:u}=e,h=Math.max(e.outerRadius+i+n-l,0),d=u>0?u+i+n+l:0;let f=0;const p=r-c;if(i){const t=u>0?u-i:0,e=h>0?h-i:0,n=(t+e)/2,r=0!==n?p*n/(n+i):p;f=(p-r)/2}const g=Math.max(.001,p*h-n/It)/h,m=(p-g)/2,y=c+m+f,v=r-m-f,{outerStart:b,outerEnd:_,innerStart:w,innerEnd:x}=Uo(e,d,h,v-y),E=h-b,T=h-_,S=y+b/E,I=v-_/T,k=d+w,C=d+x,A=y+w/k,O=v-x/C;if(t.beginPath(),s){const e=(S+I)/2;if(t.arc(o,a,h,S,e),t.arc(o,a,h,e,I),_>0){const e=jo(T,I,o,a);t.arc(e.x,e.y,_,I,v+Rt)}const n=jo(C,v,o,a);if(t.lineTo(n.x,n.y),x>0){const e=jo(C,O,o,a);t.arc(e.x,e.y,x,v+Rt,O+Math.PI)}const i=(v-x/d+(y+w/d))/2;if(t.arc(o,a,d,v-x/d,i,!0),t.arc(o,a,d,i,y+w/d,!0),w>0){const e=jo(k,A,o,a);t.arc(e.x,e.y,w,A+Math.PI,y-Rt)}const r=jo(E,y,o,a);if(t.lineTo(r.x,r.y),b>0){const e=jo(E,S,o,a);t.arc(e.x,e.y,b,y-Rt,S)}}else{t.moveTo(o,a);const e=Math.cos(S)*h+o,n=Math.sin(S)*h+a;t.lineTo(e,n);const i=Math.cos(I)*h+o,r=Math.sin(I)*h+a;t.lineTo(i,r)}t.closePath()}function zo(t,e,n,i,r){const{fullCircles:s,startAngle:o,circumference:a}=e;let c=e.endAngle;if(s){Bo(t,e,n,i,c,r);for(let e=0;e<s;++e)t.fill();isNaN(a)||(c=o+(a%kt||kt))}return Bo(t,e,n,i,c,r),t.fill(),c}function $o(t,e,n,i,r){const{fullCircles:s,startAngle:o,circumference:a,options:c}=e,{borderWidth:l,borderJoinStyle:u,borderDash:h,borderDashOffset:d}=c,f="inner"===c.borderAlign;if(!l)return;t.setLineDash(h||[]),t.lineDashOffset=d,f?(t.lineWidth=2*l,t.lineJoin=u||"round"):(t.lineWidth=l,t.lineJoin=u||"bevel");let p=e.endAngle;if(s){Bo(t,e,n,i,p,r);for(let e=0;e<s;++e)t.stroke();isNaN(a)||(p=o+(a%kt||kt))}f&&Fo(t,e,p),s||(Bo(t,e,n,i,p,r),t.stroke())}o(No,"defaults",Ve),o(No,"instances",Ao),o(No,"overrides",Pe),o(No,"registry",Qs),o(No,"version",xo),o(No,"getChart",Oo);class Ho extends Es{constructor(t){super(),o(this,"circumference",void 0),o(this,"endAngle",void 0),o(this,"fullCircles",void 0),o(this,"innerRadius",void 0),o(this,"outerRadius",void 0),o(this,"pixelMargin",void 0),o(this,"startAngle",void 0),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,n){const i=this.getProps(["x","y"],n),{angle:r,distance:s}=Wt(i,{x:t,y:e}),{startAngle:o,endAngle:a,innerRadius:c,outerRadius:l,circumference:u}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),h=(this.options.spacing+this.options.borderWidth)/2,d=st(u,a-o),f=d>=kt||Qt(r,o,a),p=Jt(s,c+h,l+h);return f&&p}getCenterPoint(t){const{x:e,y:n,startAngle:i,endAngle:r,innerRadius:s,outerRadius:o}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:a,spacing:c}=this.options,l=(i+r)/2,u=(s+o+c+a)/2;return{x:e+Math.cos(l)*u,y:n+Math.sin(l)*u}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:n}=this,i=(e.offset||0)/4,r=(e.spacing||0)/2,s=e.circular;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=n>kt?Math.floor(n/kt):0,0===n||this.innerRadius<0||this.outerRadius<0)return;t.save();const o=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(o)*i,Math.sin(o)*i);const a=1-Math.sin(Math.min(It,n||0)),c=i*a;t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor,zo(t,this,c,r,s),$o(t,this,c,r,s),t.restore()}}function Wo(t,e,n=e){t.lineCap=st(n.borderCapStyle,e.borderCapStyle),t.setLineDash(st(n.borderDash,e.borderDash)),t.lineDashOffset=st(n.borderDashOffset,e.borderDashOffset),t.lineJoin=st(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=st(n.borderWidth,e.borderWidth),t.strokeStyle=st(n.borderColor,e.borderColor)}function qo(t,e,n){t.lineTo(n.x,n.y)}function Ko(t){return t.stepped?Qe:t.tension||"monotone"===t.cubicInterpolationMode?Ye:qo}function Go(t,e,n={}){const i=t.length,{start:r=0,end:s=i-1}=n,{start:o,end:a}=e,c=Math.max(r,o),l=Math.min(s,a),u=r<o&&s<o||r>a&&s>a;return{count:i,start:c,loop:e.loop,ilen:l<c&&!u?i+l-c:l-c}}function Qo(t,e,n,i){const{points:r,options:s}=e,{count:o,start:a,loop:c,ilen:l}=Go(r,n,i),u=Ko(s);let h,d,f,{move:p=!0,reverse:g}=i||{};for(h=0;h<=l;++h)d=r[(a+(g?l-h:h))%o],d.skip||(p?(t.moveTo(d.x,d.y),p=!1):u(t,f,d,g,s.stepped),f=d);return c&&(d=r[(a+(g?l:0))%o],u(t,f,d,g,s.stepped)),!!c}function Yo(t,e,n,i){const r=e.points,{count:s,start:o,ilen:a}=Go(r,n,i),{move:c=!0,reverse:l}=i||{};let u,h,d,f,p,g,m=0,y=0;const v=t=>(o+(l?a-t:t))%s,b=()=>{f!==p&&(t.lineTo(m,p),t.lineTo(m,f),t.lineTo(m,g))};for(c&&(h=r[v(0)],t.moveTo(h.x,h.y)),u=0;u<=a;++u){if(h=r[v(u)],h.skip)continue;const e=h.x,n=h.y,i=0|e;i===d?(n<f?f=n:n>p&&(p=n),m=(y*m+e)/++y):(b(),t.lineTo(e,n),d=i,y=0,f=p=n),g=n}b()}function Xo(t){const e=t.options,n=e.borderDash&&e.borderDash.length,i=!t._decimated&&!t._loop&&!e.tension&&"monotone"!==e.cubicInterpolationMode&&!e.stepped&&!n;return i?Yo:Qo}function Jo(t){return t.stepped?ci:t.tension||"monotone"===t.cubicInterpolationMode?li:ai}function Zo(t,e,n,i){let r=e._path;r||(r=e._path=new Path2D,e.path(r,n,i)&&r.closePath()),Wo(t,e.options),t.stroke(r)}function ta(t,e,n,i){const{segments:r,options:s}=e,o=Xo(e);for(const a of r)Wo(t,s,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}o(Ho,"id","arc"),o(Ho,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),o(Ho,"defaultRoutes",{backgroundColor:"backgroundColor"}),o(Ho,"descriptors",{_scriptable:!0,_indexable:t=>"borderDash"!==t});const ea="function"===typeof Path2D;function na(t,e,n,i){ea&&!e.options.segment?Zo(t,e,n,i):ta(t,e,n,i)}class ia extends Es{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const n=this.options;if((n.tension||"monotone"===n.cubicInterpolationMode)&&!n.stepped&&!this._pointsUpdated){const i=n.spanGaps?this._loop:this._fullLoop;Hn(this._points,n,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=xi(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,n=t.length;return n&&e[t[n-1].end]}interpolate(t,e){const n=this.options,i=t[e],r=this.points,s=bi(this,{property:e,start:i,end:i});if(!s.length)return;const o=[],a=Jo(n);let c,l;for(c=0,l=s.length;c<l;++c){const{start:l,end:u}=s[c],h=r[l],d=r[u];if(h===d){o.push(h);continue}const f=Math.abs((i-h[e])/(d[e]-h[e])),p=a(h,d,f,n.stepped);p[e]=t[e],o.push(p)}return 1===o.length?o[0]:o}pathSegment(t,e,n){const i=Xo(this);return i(t,this,e,n)}path(t,e,n){const i=this.segments,r=Xo(this);let s=this._loop;e=e||0,n=n||this.points.length-e;for(const o of i)s&=r(t,this,o,{start:e,end:e+n-1});return!!s}draw(t,e,n,i){const r=this.options||{},s=this.points||[];s.length&&r.borderWidth&&(t.save(),na(t,this,n,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function ra(t,e,n,i){const r=t.options,{[n]:s}=t.getProps([n],i);return Math.abs(e-s)<r.radius+r.hitRadius}o(ia,"id","line"),o(ia,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),o(ia,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),o(ia,"descriptors",{_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t});class sa extends Es{constructor(t){super(),o(this,"parsed",void 0),o(this,"skip",void 0),o(this,"stop",void 0),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,n){const i=this.options,{x:r,y:s}=this.getProps(["x","y"],n);return Math.pow(t-r,2)+Math.pow(e-s,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(t,e){return ra(this,t,"x",e)}inYRange(t,e){return ra(this,t,"y",e)}getCenterPoint(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}size(t){t=t||this.options||{};let e=t.radius||0;e=Math.max(e,e&&t.hoverRadius||0);const n=e&&t.borderWidth||0;return 2*(e+n)}draw(t,e){const n=this.options;this.skip||n.radius<.1||!qe(this,e,this.size(n)/2)||(t.strokeStyle=n.borderColor,t.lineWidth=n.borderWidth,t.fillStyle=n.backgroundColor,He(t,n,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function oa(t,e){const{x:n,y:i,base:r,width:s,height:o}=t.getProps(["x","y","base","width","height"],e);let a,c,l,u,h;return t.horizontal?(h=o/2,a=Math.min(n,r),c=Math.max(n,r),l=i-h,u=i+h):(h=s/2,a=n-h,c=n+h,l=Math.min(i,r),u=Math.max(i,r)),{left:a,top:l,right:c,bottom:u}}function aa(t,e,n,i){return t?0:Yt(e,n,i)}function ca(t,e,n){const i=t.options.borderWidth,r=t.borderSkipped,s=cn(i);return{t:aa(r.top,s.top,0,n),r:aa(r.right,s.right,0,e),b:aa(r.bottom,s.bottom,0,n),l:aa(r.left,s.left,0,e)}}function la(t,e,n){const{enableBorderRadius:i}=t.getProps(["enableBorderRadius"]),r=t.options.borderRadius,s=ln(r),o=Math.min(e,n),a=t.borderSkipped,c=i||nt(r);return{topLeft:aa(!c||a.top||a.left,s.topLeft,0,o),topRight:aa(!c||a.top||a.right,s.topRight,0,o),bottomLeft:aa(!c||a.bottom||a.left,s.bottomLeft,0,o),bottomRight:aa(!c||a.bottom||a.right,s.bottomRight,0,o)}}function ua(t){const e=oa(t),n=e.right-e.left,i=e.bottom-e.top,r=ca(t,n/2,i/2),s=la(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i,radius:s},inner:{x:e.left+r.l,y:e.top+r.t,w:n-r.l-r.r,h:i-r.t-r.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,s.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(r.b,r.r))}}}}function ha(t,e,n,i){const r=null===e,s=null===n,o=r&&s,a=t&&!o&&oa(t,i);return a&&(r||Jt(e,a.left,a.right))&&(s||Jt(n,a.top,a.bottom))}function da(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function fa(t,e){t.rect(e.x,e.y,e.w,e.h)}function pa(t,e,n={}){const i=t.x!==n.x?-e:0,r=t.y!==n.y?-e:0,s=(t.x+t.w!==n.x+n.w?e:0)-i,o=(t.y+t.h!==n.y+n.h?e:0)-r;return{x:t.x+i,y:t.y+r,w:t.w+s,h:t.h+o,radius:t.radius}}o(sa,"id","point"),o(sa,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),o(sa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});class ga extends Es{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:n,backgroundColor:i}}=this,{inner:r,outer:s}=ua(this),o=da(s.radius)?en:fa;t.save(),s.w===r.w&&s.h===r.h||(t.beginPath(),o(t,pa(s,e,r)),t.clip(),o(t,pa(r,-e,s)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),o(t,pa(r,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,n){return ha(this,t,e,n)}inXRange(t,e){return ha(this,t,null,e)}inYRange(t,e){return ha(this,null,t,e)}getCenterPoint(t){const{x:e,y:n,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?n:(n+i)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}o(ga,"id","bar"),o(ga,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),o(ga,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const ma=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},ya=(t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class va extends Es{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){this.maxWidth=t,this.maxHeight=e,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=ct(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,n)=>t.sort(e,n,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const n=t.labels,i=hn(n.font),r=i.size,s=this._computeTitleHeight(),{boxWidth:o,itemHeight:a}=ma(n,r);let c,l;e.font=i.string,this.isHorizontal()?(c=this.maxWidth,l=this._fitRows(s,r,o,a)+10):(l=this.maxHeight,c=this._fitCols(s,i,o,a)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(l,t.maxHeight||this.maxHeight)}_fitRows(t,e,n,i){const{ctx:r,maxWidth:s,options:{labels:{padding:o}}}=this,a=this.legendHitBoxes=[],c=this.lineWidths=[0],l=i+o;let u=t;r.textAlign="left",r.textBaseline="middle";let h=-1,d=-l;return this.legendItems.forEach(((t,f)=>{const p=n+e/2+r.measureText(t.text).width;(0===f||c[c.length-1]+p+2*o>s)&&(u+=l,c[c.length-(f>0?0:1)]=0,d+=l,h++),a[f]={left:0,top:d,row:h,width:p,height:i},c[c.length-1]+=p+o})),u}_fitCols(t,e,n,i){const{ctx:r,maxHeight:s,options:{labels:{padding:o}}}=this,a=this.legendHitBoxes=[],c=this.columnSizes=[],l=s-t;let u=o,h=0,d=0,f=0,p=0;return this.legendItems.forEach(((t,s)=>{const{itemWidth:g,itemHeight:m}=ba(n,e,r,t,i);s>0&&d+m+2*o>l&&(u+=h+o,c.push({width:h,height:d}),f+=h+o,p++,h=d=0),a[s]={left:f,top:d,col:p,width:g,height:m},h=Math.max(h,g),d+=m+o})),u+=h,c.push({width:h,height:d}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:n,labels:{padding:i},rtl:r}}=this,s=di(r,this.left,this.width);if(this.isHorizontal()){let r=0,o=he(n,this.left+i,this.right-this.lineWidths[r]);for(const a of e)r!==a.row&&(r=a.row,o=he(n,this.left+i,this.right-this.lineWidths[r])),a.top+=this.top+t+i,a.left=s.leftForLtr(s.x(o),a.width),o+=a.width+i}else{let r=0,o=he(n,this.top+t+i,this.bottom-this.columnSizes[r].height);for(const a of e)a.col!==r&&(r=a.col,o=he(n,this.top+t+i,this.bottom-this.columnSizes[r].height)),a.top=o,a.left+=this.left+i,a.left=s.leftForLtr(s.x(a.left),a.width),o+=a.height+i}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;Ke(t,this),this._draw(),Ge(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:n,ctx:i}=this,{align:r,labels:s}=t,o=Ve.color,a=di(t.rtl,this.left,this.width),c=hn(s.font),{padding:l}=s,u=c.size,h=u/2;let d;this.drawTitle(),i.textAlign=a.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=c.string;const{boxWidth:f,boxHeight:p,itemHeight:g}=ma(s,u),m=function(t,e,n){if(isNaN(f)||f<=0||isNaN(p)||p<0)return;i.save();const r=st(n.lineWidth,1);if(i.fillStyle=st(n.fillStyle,o),i.lineCap=st(n.lineCap,"butt"),i.lineDashOffset=st(n.lineDashOffset,0),i.lineJoin=st(n.lineJoin,"miter"),i.lineWidth=r,i.strokeStyle=st(n.strokeStyle,o),i.setLineDash(st(n.lineDash,[])),s.usePointStyle){const o={radius:p*Math.SQRT2/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:r},c=a.xPlus(t,f/2),l=e+h;We(i,o,c,l,s.pointStyleWidth&&f)}else{const s=e+Math.max((u-p)/2,0),o=a.leftForLtr(t,f),c=ln(n.borderRadius);i.beginPath(),Object.values(c).some((t=>0!==t))?en(i,{x:o,y:s,w:f,h:p,radius:c}):i.rect(o,s,f,p),i.fill(),0!==r&&i.stroke()}i.restore()},y=function(t,e,n){tn(i,n.text,t,e+g/2,c,{strikethrough:n.hidden,textAlign:a.textAlign(n.textAlign)})},v=this.isHorizontal(),b=this._computeTitleHeight();d=v?{x:he(r,this.left+l,this.right-n[0]),y:this.top+l+b,line:0}:{x:this.left+l,y:he(r,this.top+b+l,this.bottom-e[0].height),line:0},fi(this.ctx,t.textDirection);const _=g+l;this.legendItems.forEach(((o,u)=>{i.strokeStyle=o.fontColor,i.fillStyle=o.fontColor;const p=i.measureText(o.text).width,g=a.textAlign(o.textAlign||(o.textAlign=s.textAlign)),w=f+h+p;let x=d.x,E=d.y;a.setWidth(this.width),v?u>0&&x+w+l>this.right&&(E=d.y+=_,d.line++,x=d.x=he(r,this.left+l,this.right-n[d.line])):u>0&&E+_>this.bottom&&(x=d.x=x+e[d.line].width+l,d.line++,E=d.y=he(r,this.top+b+l,this.bottom-e[d.line].height));const T=a.x(x);if(m(T,E,o),x=de(g,x+f+h,v?x+w:this.right,t.rtl),y(a.x(x),E,o),v)d.x+=w+l;else if("string"!==typeof o.text){const t=c.lineHeight;d.y+=xa(o,t)+l}else d.y+=_})),pi(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,n=hn(e.font),i=un(e.padding);if(!e.display)return;const r=di(t.rtl,this.left,this.width),s=this.ctx,o=e.position,a=n.size/2,c=i.top+a;let l,u=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),l=this.top+c,u=he(t.align,u,this.right-h);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);l=c+he(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const d=he(o,u,u+h);s.textAlign=r.textAlign(ue(o)),s.textBaseline="middle",s.strokeStyle=e.color,s.fillStyle=e.color,s.font=n.string,tn(s,e.text,d,l,n)}_computeTitleHeight(){const t=this.options.title,e=hn(t.font),n=un(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){let n,i,r;if(Jt(t,this.left,this.right)&&Jt(e,this.top,this.bottom))for(r=this.legendHitBoxes,n=0;n<r.length;++n)if(i=r[n],Jt(t,i.left,i.left+i.width)&&Jt(e,i.top,i.top+i.height))return this.legendItems[n];return null}handleEvent(t){const e=this.options;if(!Ea(t.type,e))return;const n=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){const i=this._hoveredItem,r=ya(i,n);i&&!r&&ct(e.onLeave,[t,i,this],this),this._hoveredItem=n,n&&!r&&ct(e.onHover,[t,n,this],this)}else n&&ct(e.onClick,[t,n,this],this)}}function ba(t,e,n,i,r){const s=_a(i,t,e,n),o=wa(r,i,e.lineHeight);return{itemWidth:s,itemHeight:o}}function _a(t,e,n,i){let r=t.text;return r&&"string"!==typeof r&&(r=r.reduce(((t,e)=>t.length>e.length?t:e))),e+n.size/2+i.measureText(r).width}function wa(t,e,n){let i=t;return"string"!==typeof e.text&&(i=xa(e,n)),i}function xa(t,e){const n=t.text?t.text.length:0;return e*n}function Ea(t,e){return!("mousemove"!==t&&"mouseout"!==t||!e.onHover&&!e.onLeave)||!(!e.onClick||"click"!==t&&"mouseup"!==t)}var Ta={id:"legend",_element:va,start(t,e,n){const i=t.legend=new va({ctx:t.ctx,options:n,chart:t});Zr.configure(t,i,n),Zr.addBox(t,i)},stop(t){Zr.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Zr.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,r=n.chart;r.isDatasetVisible(i)?(r.hide(i),e.hidden=!0):(r.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:r,color:s,useBorderRadius:o,borderRadius:a}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const c=t.controller.getStyle(n?0:void 0),l=un(c.borderWidth);return{text:e[t.index].label,fillStyle:c.backgroundColor,fontColor:s,hidden:!t.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:r||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Sa extends Es{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const n=this.options;if(this.left=0,this.top=0,!n.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const i=et(n.text)?n.text.length:1;this._padding=un(n.padding);const r=i*hn(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:n,bottom:i,right:r,options:s}=this,o=s.align;let a,c,l,u=0;return this.isHorizontal()?(c=he(o,n,r),l=e+t,a=r-n):("left"===s.position?(c=n+t,l=he(o,i,e),u=-.5*It):(c=r-t,l=he(o,e,i),u=.5*It),a=i-e),{titleX:c,titleY:l,maxWidth:a,rotation:u}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const n=hn(e.font),i=n.lineHeight,r=i/2+this._padding.top,{titleX:s,titleY:o,maxWidth:a,rotation:c}=this._drawArgs(r);tn(t,e.text,0,0,n,{color:e.color,maxWidth:a,rotation:c,textAlign:ue(e.align),textBaseline:"middle",translation:[s,o]})}}function Ia(t,e){const n=new Sa({ctx:t.ctx,options:e,chart:t});Zr.configure(t,n,e),Zr.addBox(t,n),t.titleBlock=n}var ka={id:"title",_element:Sa,start(t,e,n){Ia(t,n)},stop(t){const e=t.titleBlock;Zr.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Zr.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};new WeakMap;const Ca={average(t){if(!t.length)return!1;let e,n,i=new Set,r=0,s=0;for(e=0,n=t.length;e<n;++e){const n=t[e].element;if(n&&n.hasValue()){const t=n.tooltipPosition();i.add(t.x),r+=t.y,++s}}const o=[...i].reduce(((t,e)=>t+e))/i.size;return{x:o,y:r/s}},nearest(t,e){if(!t.length)return!1;let n,i,r,s=e.x,o=e.y,a=Number.POSITIVE_INFINITY;for(n=0,i=t.length;n<i;++n){const i=t[n].element;if(i&&i.hasValue()){const t=i.getCenterPoint(),n=qt(e,t);n<a&&(a=n,r=i)}}if(r){const t=r.tooltipPosition();s=t.x,o=t.y}return{x:s,y:o}}};function Aa(t,e){return e&&(et(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Oa(t){return("string"===typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function Ra(t,e){const{element:n,datasetIndex:i,index:r}=e,s=t.getDatasetMeta(i).controller,{label:o,value:a}=s.getLabelAndValue(r);return{chart:t,label:o,parsed:s.getParsed(r),raw:t.data.datasets[i].data[r],formattedValue:a,dataset:s.getDataset(),dataIndex:r,datasetIndex:i,element:n}}function Ma(t,e){const n=t.chart.ctx,{body:i,footer:r,title:s}=t,{boxWidth:o,boxHeight:a}=e,c=hn(e.bodyFont),l=hn(e.titleFont),u=hn(e.footerFont),h=s.length,d=r.length,f=i.length,p=un(e.padding);let g=p.height,m=0,y=i.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);if(y+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*l.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),y){const t=e.displayColors?Math.max(a,c.lineHeight):c.lineHeight;g+=f*t+(y-f)*c.lineHeight+(y-1)*e.bodySpacing}d&&(g+=e.footerMarginTop+d*u.lineHeight+(d-1)*e.footerSpacing);let v=0;const b=function(t){m=Math.max(m,n.measureText(t).width+v)};return n.save(),n.font=l.string,lt(t.title,b),n.font=c.string,lt(t.beforeBody.concat(t.afterBody),b),v=e.displayColors?o+2+e.boxPadding:0,lt(i,(t=>{lt(t.before,b),lt(t.lines,b),lt(t.after,b)})),v=0,n.font=u.string,lt(t.footer,b),n.restore(),m+=p.width,{width:m,height:g}}function Pa(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function Da(t,e,n,i){const{x:r,width:s}=i,o=n.caretSize+n.caretPadding;return"left"===t&&r+s+o>e.width||("right"===t&&r-s-o<0||void 0)}function Na(t,e,n,i){const{x:r,width:s}=n,{width:o,chartArea:{left:a,right:c}}=t;let l="center";return"center"===i?l=r<=(a+c)/2?"left":"right":r<=s/2?l="left":r>=o-s/2&&(l="right"),Da(l,t,e,n)&&(l="center"),l}function La(t,e,n){const i=n.yAlign||e.yAlign||Pa(t,n);return{xAlign:n.xAlign||e.xAlign||Na(t,e,n,i),yAlign:i}}function Fa(t,e){let{x:n,width:i}=t;return"right"===e?n-=i:"center"===e&&(n-=i/2),n}function Va(t,e,n){let{y:i,height:r}=t;return"top"===e?i+=n:i-="bottom"===e?r+n:r/2,i}function Ua(t,e,n,i){const{caretSize:r,caretPadding:s,cornerRadius:o}=t,{xAlign:a,yAlign:c}=n,l=r+s,{topLeft:u,topRight:h,bottomLeft:d,bottomRight:f}=ln(o);let p=Fa(e,a);const g=Va(e,c,l);return"center"===c?"left"===a?p+=l:"right"===a&&(p-=l):"left"===a?p-=Math.max(u,d)+r:"right"===a&&(p+=Math.max(h,f)+r),{x:Yt(p,0,i.width-e.width),y:Yt(g,0,i.height-e.height)}}function ja(t,e,n){const i=un(n.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-i.right:t.x+i.left}function Ba(t){return Aa([],Oa(t))}function za(t,e,n){return pn(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function $a(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const Ha={beforeTitle:J,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:J,beforeBody:J,beforeLabel:J,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return tt(n)||(e+=n),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex),n=e.controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex),n=e.controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:J,afterBody:J,beforeFooter:J,footer:J,afterFooter:J};function Wa(t,e,n,i){const r=t[e].call(n,i);return"undefined"===typeof r?Ha[e].call(n,i):r}class qa extends Es{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,n=this.options.setContext(this.getContext()),i=n.enabled&&e.options.animation&&n.animations,r=new Mi(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=za(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:n}=e,i=Wa(n,"beforeTitle",this,t),r=Wa(n,"title",this,t),s=Wa(n,"afterTitle",this,t);let o=[];return o=Aa(o,Oa(i)),o=Aa(o,Oa(r)),o=Aa(o,Oa(s)),o}getBeforeBody(t,e){return Ba(Wa(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:n}=e,i=[];return lt(t,(t=>{const e={before:[],lines:[],after:[]},r=$a(n,t);Aa(e.before,Oa(Wa(r,"beforeLabel",this,t))),Aa(e.lines,Wa(r,"label",this,t)),Aa(e.after,Oa(Wa(r,"afterLabel",this,t))),i.push(e)})),i}getAfterBody(t,e){return Ba(Wa(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:n}=e,i=Wa(n,"beforeFooter",this,t),r=Wa(n,"footer",this,t),s=Wa(n,"afterFooter",this,t);let o=[];return o=Aa(o,Oa(i)),o=Aa(o,Oa(r)),o=Aa(o,Oa(s)),o}_createItems(t){const e=this._active,n=this.chart.data,i=[],r=[],s=[];let o,a,c=[];for(o=0,a=e.length;o<a;++o)c.push(Ra(this.chart,e[o]));return t.filter&&(c=c.filter(((e,i,r)=>t.filter(e,i,r,n)))),t.itemSort&&(c=c.sort(((e,i)=>t.itemSort(e,i,n)))),lt(c,(e=>{const n=$a(t.callbacks,e);i.push(Wa(n,"labelColor",this,e)),r.push(Wa(n,"labelPointStyle",this,e)),s.push(Wa(n,"labelTextColor",this,e))})),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=s,this.dataPoints=c,c}update(t,e){const n=this.options.setContext(this.getContext()),i=this._active;let r,s=[];if(i.length){const t=Ca[n.position].call(this,i,this._eventPosition);s=this._createItems(n),this.title=this.getTitle(s,n),this.beforeBody=this.getBeforeBody(s,n),this.body=this.getBody(s,n),this.afterBody=this.getAfterBody(s,n),this.footer=this.getFooter(s,n);const e=this._size=Ma(this,n),o=Object.assign({},t,e),a=La(this.chart,n,o),c=Ua(n,o,a,this.chart);this.xAlign=a.xAlign,this.yAlign=a.yAlign,r={opacity:1,x:c.x,y:c.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(r={opacity:0});this._tooltipItems=s,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,n,i){const r=this.getCaretPosition(t,n,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,n){const{xAlign:i,yAlign:r}=this,{caretSize:s,cornerRadius:o}=n,{topLeft:a,topRight:c,bottomLeft:l,bottomRight:u}=ln(o),{x:h,y:d}=t,{width:f,height:p}=e;let g,m,y,v,b,_;return"center"===r?(b=d+p/2,"left"===i?(g=h,m=g-s,v=b+s,_=b-s):(g=h+f,m=g+s,v=b-s,_=b+s),y=g):(m="left"===i?h+Math.max(a,l)+s:"right"===i?h+f-Math.max(c,u)-s:this.caretX,"top"===r?(v=d,b=v-s,g=m-s,y=m+s):(v=d+p,b=v+s,g=m+s,y=m-s),_=v),{x1:g,x2:m,x3:y,y1:v,y2:b,y3:_}}drawTitle(t,e,n){const i=this.title,r=i.length;let s,o,a;if(r){const c=di(n.rtl,this.x,this.width);for(t.x=ja(this,n.titleAlign,n),e.textAlign=c.textAlign(n.titleAlign),e.textBaseline="middle",s=hn(n.titleFont),o=n.titleSpacing,e.fillStyle=n.titleColor,e.font=s.string,a=0;a<r;++a)e.fillText(i[a],c.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+o,a+1===r&&(t.y+=n.titleMarginBottom-o)}}_drawColorBox(t,e,n,i,r){const s=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:a,boxWidth:c}=r,l=hn(r.bodyFont),u=ja(this,"left",r),h=i.x(u),d=a<l.lineHeight?(l.lineHeight-a)/2:0,f=e.y+d;if(r.usePointStyle){const e={radius:Math.min(c,a)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},n=i.leftForLtr(h,c)+c/2,l=f+a/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,He(t,e,n,l),t.strokeStyle=s.borderColor,t.fillStyle=s.backgroundColor,He(t,e,n,l)}else{t.lineWidth=nt(s.borderWidth)?Math.max(...Object.values(s.borderWidth)):s.borderWidth||1,t.strokeStyle=s.borderColor,t.setLineDash(s.borderDash||[]),t.lineDashOffset=s.borderDashOffset||0;const e=i.leftForLtr(h,c),n=i.leftForLtr(i.xPlus(h,1),c-2),o=ln(s.borderRadius);Object.values(o).some((t=>0!==t))?(t.beginPath(),t.fillStyle=r.multiKeyBackground,en(t,{x:e,y:f,w:c,h:a,radius:o}),t.fill(),t.stroke(),t.fillStyle=s.backgroundColor,t.beginPath(),en(t,{x:n,y:f+1,w:c-2,h:a-2,radius:o}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(e,f,c,a),t.strokeRect(e,f,c,a),t.fillStyle=s.backgroundColor,t.fillRect(n,f+1,c-2,a-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,e,n){const{body:i}=this,{bodySpacing:r,bodyAlign:s,displayColors:o,boxHeight:a,boxWidth:c,boxPadding:l}=n,u=hn(n.bodyFont);let h=u.lineHeight,d=0;const f=di(n.rtl,this.x,this.width),p=function(n){e.fillText(n,f.x(t.x+d),t.y+h/2),t.y+=h+r},g=f.textAlign(s);let m,y,v,b,_,w,x;for(e.textAlign=s,e.textBaseline="middle",e.font=u.string,t.x=ja(this,g,n),e.fillStyle=n.bodyColor,lt(this.beforeBody,p),d=o&&"right"!==g?"center"===s?c/2+l:c+2+l:0,b=0,w=i.length;b<w;++b){for(m=i[b],y=this.labelTextColors[b],e.fillStyle=y,lt(m.before,p),v=m.lines,o&&v.length&&(this._drawColorBox(e,t,b,f,n),h=Math.max(u.lineHeight,a)),_=0,x=v.length;_<x;++_)p(v[_]),h=u.lineHeight;lt(m.after,p)}d=0,h=u.lineHeight,lt(this.afterBody,p),t.y-=r}drawFooter(t,e,n){const i=this.footer,r=i.length;let s,o;if(r){const a=di(n.rtl,this.x,this.width);for(t.x=ja(this,n.footerAlign,n),t.y+=n.footerMarginTop,e.textAlign=a.textAlign(n.footerAlign),e.textBaseline="middle",s=hn(n.footerFont),e.fillStyle=n.footerColor,e.font=s.string,o=0;o<r;++o)e.fillText(i[o],a.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+n.footerSpacing}}drawBackground(t,e,n,i){const{xAlign:r,yAlign:s}=this,{x:o,y:a}=t,{width:c,height:l}=n,{topLeft:u,topRight:h,bottomLeft:d,bottomRight:f}=ln(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(o+u,a),"top"===s&&this.drawCaret(t,e,n,i),e.lineTo(o+c-h,a),e.quadraticCurveTo(o+c,a,o+c,a+h),"center"===s&&"right"===r&&this.drawCaret(t,e,n,i),e.lineTo(o+c,a+l-f),e.quadraticCurveTo(o+c,a+l,o+c-f,a+l),"bottom"===s&&this.drawCaret(t,e,n,i),e.lineTo(o+d,a+l),e.quadraticCurveTo(o,a+l,o,a+l-d),"center"===s&&"left"===r&&this.drawCaret(t,e,n,i),e.lineTo(o,a+u),e.quadraticCurveTo(o,a,o+u,a),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,n=this.$animations,i=n&&n.x,r=n&&n.y;if(i||r){const n=Ca[t.position].call(this,this._active,this._eventPosition);if(!n)return;const s=this._size=Ma(this,t),o=Object.assign({},n,this._size),a=La(e,t,o),c=Ua(t,o,a,e);i._to===c.x&&r._to===c.y||(this.xAlign=a.xAlign,this.yAlign=a.yAlign,this.width=s.width,this.height=s.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const s=un(e.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&o&&(t.save(),t.globalAlpha=n,this.drawBackground(r,t,i,e),fi(t,e.textDirection),r.y+=s.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),pi(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const n=this._active,i=t.map((({datasetIndex:t,index:e})=>{const n=this.chart.getDatasetMeta(t);if(!n)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:n.data[e],index:e}})),r=!ut(n,i),s=this._positionChanged(i,e);(r||s)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,n=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],s=this._getActiveElements(t,r,e,n),o=this._positionChanged(s,t),a=e||!ut(s,r)||o;return a&&(this._active=s,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),a}_getActiveElements(t,e,n,i){const r=this.options;if("mouseout"===t.type)return[];if(!i)return e.filter((t=>this.chart.data.datasets[t.datasetIndex]&&void 0!==this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index)));const s=this.chart.getElementsAtEventForMode(t,r.mode,r,n);return r.reverse&&s.reverse(),s}_positionChanged(t,e){const{caretX:n,caretY:i,options:r}=this,s=Ca[r.position].call(this,t,e);return!1!==s&&(n!==s.x||i!==s.y)}}o(qa,"positioners",Ca);var Ka={id:"tooltip",_element:qa,positioners:Ca,afterInit(t,e,n){n&&(t.tooltip=new qa({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0}))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Ha},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const Ga=(t,e,n,i)=>("string"===typeof e?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function Qa(t,e,n,i){const r=t.indexOf(e);if(-1===r)return Ga(t,e,n,i);const s=t.lastIndexOf(e);return r!==s?n:r}const Ya=(t,e)=>null===t?null:Yt(Math.round(t),0,e);function Xa(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Ja extends $s{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:n,label:i}of e)t[n]===i&&t.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(tt(t))return null;const n=this.getLabels();return e=isFinite(e)&&n[e]===t?e:Qa(n,t,st(e,t),this._addedLabels),Ya(e,n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:n,max:i}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(n=0),e||(i=this.getLabels().length-1)),this.min=n,this.max=i}buildTicks(){const t=this.min,e=this.max,n=this.options.offset,i=[];let r=this.getLabels();r=0===t&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let s=t;s<=e;s++)i.push({value:s});return i}getLabelForValue(t){return Xa.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!==typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function Za(t,e){const n=[],i=1e-14,{bounds:r,step:s,min:o,max:a,precision:c,count:l,maxTicks:u,maxDigits:h,includeBounds:d}=t,f=s||1,p=u-1,{min:g,max:m}=e,y=!tt(o),v=!tt(a),b=!tt(l),_=(m-g)/(h+1);let w,x,E,T,S=Ft((m-g)/p/f)*f;if(S<i&&!y&&!v)return[{value:g},{value:m}];T=Math.ceil(m/S)-Math.floor(g/S),T>p&&(S=Ft(T*S/p/f)*f),tt(c)||(w=Math.pow(10,c),S=Math.ceil(S*w)/w),"ticks"===r?(x=Math.floor(g/S)*S,E=Math.ceil(m/S)*S):(x=g,E=m),y&&v&&s&&jt((a-o)/s,S/1e3)?(T=Math.round(Math.min((a-o)/S,u)),S=(a-o)/T,x=o,E=a):b?(x=y?o:x,E=v?a:E,T=l-1,S=(E-x)/T):(T=(E-x)/S,T=Lt(T,Math.round(T),S/1e3)?Math.round(T):Math.ceil(T));const I=Math.max(Ht(S),Ht(x));w=Math.pow(10,tt(c)?I:c),x=Math.round(x*w)/w,E=Math.round(E*w)/w;let k=0;for(y&&(d&&x!==o?(n.push({value:o}),x<o&&k++,Lt(Math.round((x+k*S)*w)/w,o,tc(o,_,t))&&k++):x<o&&k++);k<T;++k){const t=Math.round((x+k*S)*w)/w;if(v&&t>a)break;n.push({value:t})}return v&&d&&E!==a?n.length&&Lt(n[n.length-1].value,a,tc(a,_,t))?n[n.length-1].value=a:n.push({value:a}):v&&E!==a||n.push({value:E}),n}function tc(t,e,{horizontal:n,minRotation:i}){const r=zt(i),s=(n?Math.sin(r):Math.cos(r))||.001,o=.75*e*(""+t).length;return Math.min(e/s,o)}o(Ja,"id","category"),o(Ja,"defaults",{ticks:{callback:Xa}});class ec extends $s{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return tt(t)||("number"===typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:r}=this;const s=t=>i=e?i:t,o=t=>r=n?r:t;if(t){const t=Nt(i),e=Nt(r);t<0&&e<0?o(0):t>0&&e>0&&s(0)}if(i===r){let e=0===r?1:Math.abs(.05*r);o(r+e),t||s(i-e)}this.min=i,this.max=r}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:n,stepSize:i}=t;return i?(e=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),n=n||11),n&&(e=Math.min(n,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const i={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},r=this._range||this,s=Za(i,r);return"ticks"===t.bounds&&Bt(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){const t=this.ticks;let e=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const i=(n-e)/Math.max(t.length-1,1)/2;e-=i,n+=i}this._startValue=e,this._endValue=n,this._valueRange=n-e}getLabelForValue(t){return Ce(t,this.chart.options.locale,this.options.ticks.format)}}class nc extends ec{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=it(t)?t:0,this.max=it(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,n=zt(this.options.ticks.minRotation),i=(t?Math.sin(n):Math.cos(n))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/i))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}o(nc,"id","linear"),o(nc,"defaults",{ticks:{callback:Re.formatters.numeric}});const ic=t=>Math.floor(Dt(t)),rc=(t,e)=>Math.pow(10,ic(t)+e);function sc(t){const e=t/Math.pow(10,ic(t));return 1===e}function oc(t,e,n){const i=Math.pow(10,n),r=Math.floor(t/i),s=Math.ceil(e/i);return s-r}function ac(t,e){const n=e-t;let i=ic(n);while(oc(t,e,i)>10)i++;while(oc(t,e,i)<10)i--;return Math.min(i,ic(t))}function cc(t,{min:e,max:n}){e=rt(t.min,e);const i=[],r=ic(e);let s=ac(e,n),o=s<0?Math.pow(10,Math.abs(s)):1;const a=Math.pow(10,s),c=r>s?Math.pow(10,r):0,l=Math.round((e-c)*o)/o,u=Math.floor((e-c)/a/10)*a*10;let h=Math.floor((l-u)/Math.pow(10,s)),d=rt(t.min,Math.round((c+u+h*Math.pow(10,s))*o)/o);while(d<n)i.push({value:d,major:sc(d),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(s++,h=2,o=s>=0?1:o),d=Math.round((c+u+h*Math.pow(10,s))*o)/o;const f=rt(t.max,d);return i.push({value:f,major:sc(f),significand:h}),i}class lc extends $s{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const n=ec.prototype.parse.apply(this,[t,e]);if(0!==n)return it(n)&&n>0?n:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=it(t)?Math.max(0,t):null,this.max=it(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!it(this._userMin)&&(this.min=t===rc(this.min,0)?rc(this.min,-1):rc(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let n=this.min,i=this.max;const r=e=>n=t?n:e,s=t=>i=e?i:t;n===i&&(n<=0?(r(1),s(10)):(r(rc(n,-1)),s(rc(i,1)))),n<=0&&r(rc(i,-1)),i<=0&&s(rc(n,1)),this.min=n,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},n=cc(e,this);return"ticks"===t.bounds&&Bt(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(t){return void 0===t?"0":Ce(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Dt(t),this._valueRange=Dt(this.max)-Dt(t)}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Dt(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function uc(t){const e=t.ticks;if(e.display&&t.display){const t=un(e.backdropPadding);return st(e.font&&e.font.size,Ve.font.size)+t.height}return 0}function hc(t,e,n){return n=et(n)?n:[n],{w:Be(t,e.string,n),h:n.length*e.lineHeight}}function dc(t,e,n,i,r){return t===i||t===r?{start:e-n/2,end:e+n/2}:t<i||t>r?{start:e-n,end:e}:{start:e,end:e+n}}function fc(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),i=[],r=[],s=t._pointLabels.length,o=t.options.pointLabels,a=o.centerPointLabels?It/s:0;for(let c=0;c<s;c++){const s=o.setContext(t.getPointLabelContext(c));r[c]=s.padding;const l=t.getPointPosition(c,t.drawingArea+r[c],a),u=hn(s.font),h=hc(t.ctx,u,t._pointLabels[c]);i[c]=h;const d=Gt(t.getIndexAngle(c)+a),f=Math.round($t(d)),p=dc(f,l.x,h.w,0,180),g=dc(f,l.y,h.h,90,270);pc(n,e,d,p,g)}t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=yc(t,i,r)}function pc(t,e,n,i,r){const s=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,c=0;i.start<e.l?(a=(e.l-i.start)/s,t.l=Math.min(t.l,e.l-a)):i.end>e.r&&(a=(i.end-e.r)/s,t.r=Math.max(t.r,e.r+a)),r.start<e.t?(c=(e.t-r.start)/o,t.t=Math.min(t.t,e.t-c)):r.end>e.b&&(c=(r.end-e.b)/o,t.b=Math.max(t.b,e.b+c))}function gc(t,e,n){const i=t.drawingArea,{extra:r,additionalAngle:s,padding:o,size:a}=n,c=t.getPointPosition(e,i+r+o,s),l=Math.round($t(Gt(c.angle+Rt))),u=_c(c.y,a.h,l),h=vc(l),d=bc(c.x,a.w,h);return{visible:!0,x:c.x,y:u,textAlign:h,left:d,top:u,right:d+a.w,bottom:u+a.h}}function mc(t,e){if(!e)return!0;const{left:n,top:i,right:r,bottom:s}=t,o=qe({x:n,y:i},e)||qe({x:n,y:s},e)||qe({x:r,y:i},e)||qe({x:r,y:s},e);return!o}function yc(t,e,n){const i=[],r=t._pointLabels.length,s=t.options,{centerPointLabels:o,display:a}=s.pointLabels,c={extra:uc(s)/2,additionalAngle:o?It/r:0};let l;for(let u=0;u<r;u++){c.padding=n[u],c.size=e[u];const r=gc(t,u,c);i.push(r),"auto"===a&&(r.visible=mc(r,l),r.visible&&(l=r))}return i}function vc(t){return 0===t||180===t?"center":t<180?"left":"right"}function bc(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function _c(t,e,n){return 90===n||270===n?t-=e/2:(n>270||n<90)&&(t-=e),t}function wc(t,e,n){const{left:i,top:r,right:s,bottom:o}=n,{backdropColor:a}=e;if(!tt(a)){const n=ln(e.borderRadius),c=un(e.backdropPadding);t.fillStyle=a;const l=i-c.left,u=r-c.top,h=s-i+c.width,d=o-r+c.height;Object.values(n).some((t=>0!==t))?(t.beginPath(),en(t,{x:l,y:u,w:h,h:d,radius:n}),t.fill()):t.fillRect(l,u,h,d)}}function xc(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let r=e-1;r>=0;r--){const e=t._pointLabelItems[r];if(!e.visible)continue;const s=i.setContext(t.getPointLabelContext(r));wc(n,s,e);const o=hn(s.font),{x:a,y:c,textAlign:l}=e;tn(n,t._pointLabels[r],a,c+o.lineHeight/2,o,{color:s.color,textAlign:l,textBaseline:"middle"})}}function Ec(t,e,n,i){const{ctx:r}=t;if(n)r.arc(t.xCenter,t.yCenter,e,0,kt);else{let n=t.getPointPosition(0,e);r.moveTo(n.x,n.y);for(let s=1;s<i;s++)n=t.getPointPosition(s,e),r.lineTo(n.x,n.y)}}function Tc(t,e,n,i,r){const s=t.ctx,o=e.circular,{color:a,lineWidth:c}=e;!o&&!i||!a||!c||n<0||(s.save(),s.strokeStyle=a,s.lineWidth=c,s.setLineDash(r.dash),s.lineDashOffset=r.dashOffset,s.beginPath(),Ec(t,n,o,i),s.closePath(),s.stroke(),s.restore())}function Sc(t,e,n){return pn(t,{label:n,index:e,type:"pointLabel"})}o(lc,"id","logarithmic"),o(lc,"defaults",{ticks:{callback:Re.formatters.logarithmic,major:{enabled:!0}}});class Ic extends ec{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=un(uc(this.options)/2),e=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(e,n)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=it(t)&&!isNaN(t)?t:0,this.max=it(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/uc(this.options))}generateTickLabels(t){ec.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const n=ct(this.options.pointLabels.callback,[t,e],this);return n||0===n?n:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?fc(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,n,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((n-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,n,i))}getIndexAngle(t){const e=kt/(this._pointLabels.length||1),n=this.options.startAngle||0;return Gt(t*e+zt(n))}getDistanceFromCenterForValue(t){if(tt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(tt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const n=e[t];return Sc(this.getContext(),t,n)}}getPointPosition(t,e,n=0){const i=this.getIndexAngle(t)-Rt+n;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:n,right:i,bottom:r}=this._pointLabelItems[t];return{left:e,top:n,right:i,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const n=this.ctx;n.save(),n.beginPath(),Ec(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:n,grid:i,border:r}=e,s=this._pointLabels.length;let o,a,c;if(e.pointLabels.display&&xc(this,s),i.display&&this.ticks.forEach(((t,e)=>{if(0!==e||0===e&&this.min<0){a=this.getDistanceFromCenterForValue(t.value);const n=this.getContext(e),o=i.setContext(n),c=r.setContext(n);Tc(this,o,a,s,c)}})),n.display){for(t.save(),o=s-1;o>=0;o--){const i=n.setContext(this.getPointLabelContext(o)),{color:r,lineWidth:s}=i;s&&r&&(t.lineWidth=s,t.strokeStyle=r,t.setLineDash(i.borderDash),t.lineDashOffset=i.borderDashOffset,a=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),c=this.getPointPosition(o,a),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,n=e.ticks;if(!n.display)return;const i=this.getIndexAngle(0);let r,s;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((i,o)=>{if(0===o&&this.min>=0&&!e.reverse)return;const a=n.setContext(this.getContext(o)),c=hn(a.font);if(r=this.getDistanceFromCenterForValue(this.ticks[o].value),a.showLabelBackdrop){t.font=c.string,s=t.measureText(i.label).width,t.fillStyle=a.backdropColor;const e=un(a.backdropPadding);t.fillRect(-s/2-e.left,-r-c.size/2-e.top,s+e.width,c.size+e.height)}tn(t,i.label,0,-r,c,{color:a.color,strokeColor:a.textStrokeColor,strokeWidth:a.textStrokeWidth})})),t.restore()}drawTitle(){}}o(Ic,"id","radialLinear"),o(Ic,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Re.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),o(Ic,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),o(Ic,"descriptors",{angleLines:{_fallback:"grid"}});const kc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Cc=Object.keys(kc);function Ac(t,e){return t-e}function Oc(t,e){if(tt(e))return null;const n=t._adapter,{parser:i,round:r,isoWeekday:s}=t._parseOpts;let o=e;return"function"===typeof i&&(o=i(o)),it(o)||(o="string"===typeof i?n.parse(o,i):n.parse(o)),null===o?null:(r&&(o="week"!==r||!Ut(s)&&!0!==s?n.startOf(o,r):n.startOf(o,"isoWeek",s)),+o)}function Rc(t,e,n,i){const r=Cc.length;for(let s=Cc.indexOf(t);s<r-1;++s){const t=kc[Cc[s]],r=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((n-e)/(r*t.size))<=i)return Cc[s]}return Cc[r-1]}function Mc(t,e,n,i,r){for(let s=Cc.length-1;s>=Cc.indexOf(n);s--){const n=Cc[s];if(kc[n].common&&t._adapter.diff(r,i,n)>=e-1)return n}return Cc[n?Cc.indexOf(n):0]}function Pc(t){for(let e=Cc.indexOf(t)+1,n=Cc.length;e<n;++e)if(kc[Cc[e]].common)return Cc[e]}function Dc(t,e,n){if(n){if(n.length){const{lo:i,hi:r}=Zt(n,e),s=n[i]>=e?n[i]:n[r];t[s]=!0}}else t[e]=!0}function Nc(t,e,n,i){const r=t._adapter,s=+r.startOf(e[0].value,i),o=e[e.length-1].value;let a,c;for(a=s;a<=o;a=+r.add(a,1,i))c=n[a],c>=0&&(e[c].major=!0);return e}function Lc(t,e,n){const i=[],r={},s=e.length;let o,a;for(o=0;o<s;++o)a=e[o],r[a]=o,i.push({value:a,major:!1});return 0!==s&&n?Nc(t,i,r,n):i}class Fc extends $s{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const n=t.time||(t.time={}),i=this._adapter=new kr._date(t.adapters.date);i.init(e),gt(n.displayFormats,i.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Oc(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,n=t.time.unit||"day";let{min:i,max:r,minDefined:s,maxDefined:o}=this.getUserBounds();function a(t){s||isNaN(t.min)||(i=Math.min(i,t.min)),o||isNaN(t.max)||(r=Math.max(r,t.max))}s&&o||(a(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||a(this.getMinMax(!1))),i=it(i)&&!isNaN(i)?i:+e.startOf(Date.now(),n),r=it(r)&&!isNaN(r)?r:+e.endOf(Date.now(),n)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],n=t[t.length-1]),{min:e,max:n}}buildTicks(){const t=this.options,e=t.time,n=t.ticks,i="labels"===n.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,s=this.max,o=ne(i,r,s);return this._unit=e.unit||(n.autoSkip?Rc(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):Mc(this,o.length,e.minUnit,this.min,this.max)),this._majorUnit=n.major.enabled&&"year"!==this._unit?Pc(this._unit):void 0,this.initOffsets(i),t.reverse&&o.reverse(),Lc(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map((t=>+t.value)))}initOffsets(t=[]){let e,n,i=0,r=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),i=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,n=this.getDecimalForValue(t[t.length-1]),r=1===t.length?n:(n-this.getDecimalForValue(t[t.length-2]))/2);const s=t.length<3?.5:.25;i=Yt(i,0,s),r=Yt(r,0,s),this._offsets={start:i,end:r,factor:1/(i+1+r)}}_generate(){const t=this._adapter,e=this.min,n=this.max,i=this.options,r=i.time,s=r.unit||Rc(r.minUnit,e,n,this._getLabelCapacity(e)),o=st(i.ticks.stepSize,1),a="week"===s&&r.isoWeekday,c=Ut(a)||!0===a,l={};let u,h,d=e;if(c&&(d=+t.startOf(d,"isoWeek",a)),d=+t.startOf(d,c?"day":s),t.diff(n,e,s)>1e5*o)throw new Error(e+" and "+n+" are too far apart with stepSize of "+o+" "+s);const f="data"===i.ticks.source&&this.getDataTimestamps();for(u=d,h=0;u<n;u=+t.add(u,o,s),h++)Dc(l,u,f);return u!==n&&"ticks"!==i.bounds&&1!==h||Dc(l,u,f),Object.keys(l).sort(Ac).map((t=>+t))}getLabelForValue(t){const e=this._adapter,n=this.options.time;return n.tooltipFormat?e.format(t,n.tooltipFormat):e.format(t,n.displayFormats.datetime)}format(t,e){const n=this.options,i=n.time.displayFormats,r=this._unit,s=e||i[r];return this._adapter.format(t,s)}_tickFormatFunction(t,e,n,i){const r=this.options,s=r.ticks.callback;if(s)return ct(s,[t,e,n],this);const o=r.time.displayFormats,a=this._unit,c=this._majorUnit,l=a&&o[a],u=c&&o[c],h=n[e],d=c&&u&&h&&h.major;return this._adapter.format(t,i||(d?u:l))}generateTickLabels(t){let e,n,i;for(e=0,n=t.length;e<n;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+n)*e.factor)}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,n=this.ctx.measureText(t).width,i=zt(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(i),s=Math.sin(i),o=this._resolveTickFontOptions(0).size;return{w:n*r+o*s,h:n*s+o*r}}_getLabelCapacity(t){const e=this.options.time,n=e.displayFormats,i=n[e.unit]||n.millisecond,r=this._tickFormatFunction(t,0,Lc(this,[t],this._majorUnit),i),s=this._getLabelSize(r),o=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return o>0?o:1}getDataTimestamps(){let t,e,n=this._cache.data||[];if(n.length)return n;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(t=0,e=i.length;t<e;++t)n=n.concat(i[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(n)}getLabelTimestamps(){const t=this._cache.labels||[];let e,n;if(t.length)return t;const i=this.getLabels();for(e=0,n=i.length;e<n;++e)t.push(Oc(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return oe(t.sort(Ac))}}function Vc(t,e,n){let i,r,s,o,a=0,c=t.length-1;n?(e>=t[a].pos&&e<=t[c].pos&&({lo:a,hi:c}=te(t,"pos",e)),({pos:i,time:s}=t[a]),({pos:r,time:o}=t[c])):(e>=t[a].time&&e<=t[c].time&&({lo:a,hi:c}=te(t,"time",e)),({time:i,pos:s}=t[a]),({time:r,pos:o}=t[c]));const l=r-i;return l?s+(o-s)*(e-i)/l:s}o(Fc,"id","time"),o(Fc,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});class Uc extends Fc{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Vc(e,this.min),this._tableRange=Vc(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:n}=this,i=[],r=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;++s)c=t[s],c>=e&&c<=n&&i.push(c);if(i.length<2)return[{time:e,pos:0},{time:n,pos:1}];for(s=0,o=i.length;s<o;++s)l=i[s+1],a=i[s-1],c=i[s],Math.round((l+a)/2)!==c&&r.push({time:c,pos:s/(o-1)});return r}_generate(){const t=this.min,e=this.max;let n=super.getDataTimestamps();return n.includes(t)&&n.length||n.splice(0,0,t),n.includes(e)&&1!==n.length||n.push(e),n.sort(((t,e)=>t-e))}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),n=this.getLabelTimestamps();return t=e.length&&n.length?this.normalize(e.concat(n)):e.length?e:n,t=this._cache.all=t,t}getDecimalForValue(t){return(Vc(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return Vc(this._table,n*this._tableRange+this._minPos,!0)}}o(Uc,"id","timeseries"),o(Uc,"defaults",Fc.defaults)},6400:function(t,e,n){n.d(e,{Wp:function(){return i.Wp}});var i=n(6540),r="firebase",s="10.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KO)(r,s,"app")},2621:function(t,e,n){n.d(e,{HF:function(){return Ee},eJ:function(){return Le},xI:function(){return Ji},hg:function(){return ze},x9:function(){return Fe},df:function(){return zn},CI:function(){return $e},r7:function(){return Ue}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4603),n(7566),n(8721);var i=n(6540),r=n(4046),s=n(1363);function o(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(t,...e){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${i.MF}): ${t}`,...e)}function f(t,...e){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${i.MF}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw b(t,...e)}function g(t,...e){return b(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},l()),{[e]:n}),s=new r.FA("auth","Firebase",i);return s.create(e,{appName:t.name})}function y(t){return m(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&p(t,"argument-error"),m(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function b(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return u.create(t,...e)}function _(t,e,...n){if(!t)throw b(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function x(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function T(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,e){this.shortDelay=t,this.longDelay=e,x(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){x(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},M=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,i,s={}){return N(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),O.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function N(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),e);try{const e=new U(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(s){if(s instanceof r.g)throw s;p(t,"network-request-failed",{message:String(s)})}}async function L(t,e,n,i,r={}){const s=await D(t,e,n,i,r);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?A(t.config,r):`${t.config.apiScheme}://${r}`}function V(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),M.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=g(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return void 0!==t&&void 0!==t.enterprise}class z{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return V(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(t,e){return D(t,"GET","/v2/recaptchaConfig",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e){return D(t,"POST","/v1/accounts:delete",e)}async function W(t,e){return D(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e=!1){const n=(0,r.Ku)(t),i=await n.getIdToken(e),s=Q(i);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:q(G(s.auth_time)),issuedAtTime:q(G(s.iat)),expirationTime:q(G(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(t){return 1e3*Number(t)}function Q(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.u)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Y(t){const e=Q(t);return _(e,"internal-error"),_("undefined"!==typeof e.exp,"internal-error"),_("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.g&&J(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function J({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t){var e;const n=t.auth,i=await t.getIdToken(),r=await X(t,W(n,{idToken:i}));_(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?rt(s.providerUserInfo):[],a=it(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tt(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function nt(t){const e=(0,r.Ku)(t);await et(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function it(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function rt(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(t,e){const n=await N(t,{},(async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ot(t,e){return D(t,"POST","/v2/accounts:revokeToken",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_(t.idToken,"internal-error"),_("undefined"!==typeof t.idToken,"internal-error"),_("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Y(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){_(0!==t.length,"internal-error");const e=Y(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(_(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await st(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new at;return n&&(_("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(_("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(_("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new at,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e){_("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class lt{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new tt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await X(this,this.stsTokenManager.getToken(this.auth,t));return _(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return K(this,t)}reload(){return nt(this)}_assign(t){this!==t&&(_(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new lt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await et(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,i.xZ)(this.auth.app))return Promise.reject(y(this.auth));const t=await this.getIdToken();return await X(this,H(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:E}=e;_(v&&E,t,"internal-error");const T=at.fromJSON(this.name,E);_("string"===typeof v,t,"internal-error"),ct(u,t.name),ct(h,t.name),_("boolean"===typeof b,t,"internal-error"),_("boolean"===typeof w,t,"internal-error"),ct(d,t.name),ct(f,t.name),ct(p,t.name),ct(g,t.name),ct(m,t.name),ct(y,t.name);const S=new lt({uid:v,auth:t,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return x&&Array.isArray(x)&&(S.providerData=x.map((t=>Object.assign({},t)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const i=new at;i.updateFromServerResponse(e);const r=new lt({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await et(r),r}static async _fromGetAccountInfoResponse(t,e,n){const i=e.users[0];_(void 0!==i.localId,"internal-error");const r=void 0!==i.providerUserInfo?rt(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length),o=new at;o.updateFromIdToken(n);const a=new lt({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new tt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Map;function ht(t){x(t instanceof Function,"Expected a class definition");let e=ut.get(t);return e?(x(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ut.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}dt.type="NONE";const ft=dt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e,n){return`firebase:${t}:${e}:${n}`}class gt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=pt(this.userKey,i.apiKey,r),this.fullPersistenceKey=pt("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?lt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new gt(ht(ft),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||ht(ft);const s=pt(n,t.config.apiKey,t.name);let o=null;for(const l of e)try{const e=await l._get(s);if(e){const n=lt._fromJSON(t,e);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(c){}}))),new gt(r,t,n)):new gt(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_t(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xt(e))return"Blackberry";if(Et(e))return"Webos";if(vt(e))return"Safari";if((e.includes("chrome/")||bt(e))&&!e.includes("edge/"))return"Chrome";if(wt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function yt(t=(0,r.ZQ)()){return/firefox\//i.test(t)}function vt(t=(0,r.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bt(t=(0,r.ZQ)()){return/crios\//i.test(t)}function _t(t=(0,r.ZQ)()){return/iemobile/i.test(t)}function wt(t=(0,r.ZQ)()){return/android/i.test(t)}function xt(t=(0,r.ZQ)()){return/blackberry/i.test(t)}function Et(t=(0,r.ZQ)()){return/webos/i.test(t)}function Tt(t=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function St(t=(0,r.ZQ)()){var e;return Tt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function It(){return(0,r.lT)()&&10===document.documentMode}function kt(t=(0,r.ZQ)()){return Tt(t)||wt(t)||Et(t)||xt(t)||/windows phone/i.test(t)||_t(t)}function Ct(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e=[]){let n;switch(t){case"Browser":n=mt((0,r.ZQ)());break;case"Worker":n=`${mt((0,r.ZQ)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{const i=t(e);n(i)}catch(r){i(r)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(t,e={}){return D(t,"GET","/v2/passwordPolicy",P(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=6;class Pt{constructor(t){var e,n,i,r;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:Mt,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=t.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,i,r,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let i=0;i<t.length;i++)n=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lt(this),this.idTokenSubscription=new Lt(this),this.beforeStateQueue=new Ot(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ht(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await gt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await W(this,{idToken:t}),n=await lt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if((0,i.xZ)(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await et(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if((0,i.xZ)(this.app))return Promise.reject(y(this));const e=t?(0,r.Ku)(t):null;return e&&_(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&_(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(0,i.xZ)(this.app)?Promise.reject(y(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return(0,i.xZ)(this.app)?Promise.reject(y(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ht(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Rt(this),e=new Pt(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await ot(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ht(t)||this._popupRedirectResolver;_(e,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[ht(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(o,this,"internal-error"),o.then((()=>{s||r(this.currentUser)})),"function"===typeof e){const r=t.addObserver(e,n,i);return()=>{s=!0,r()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=At(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&d(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Nt(t){return(0,r.Ku)(t)}class Lt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.tD)((t=>this.observer=t))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vt(t){Ft=t}function Ut(t){return Ft.loadJS(t)}function jt(){return Ft.recaptchaEnterpriseScript}function Bt(){return Ft.gapiScript}function zt(t){return`__${t}${Math.floor(1e6*Math.random())}`}const $t="recaptcha-enterprise",Ht="NO_RECAPTCHA";class Wt{constructor(t){this.type=$t,this.auth=Nt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{$(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new z(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function i(e,n,i){const r=window.grecaptcha;B(r)?r.enterprise.ready((()=>{r.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Ht)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,r)=>{n(this.auth).then((n=>{if(!e&&B(window.grecaptcha))i(n,t,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let e=jt();0!==e.length&&(e+=n),Ut(e).then((()=>{i(n,t,r)})).catch((t=>{r(t)}))}})).catch((t=>{r(t)}))}))}}async function qt(t,e,n,i=!1){const r=new Wt(t);let s;try{s=await r.verify(n)}catch(a){s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Kt(t,e,n,i){var r;if(null===(r=t._getRecaptchaConfig())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await qt(t,e,n,"getOobCode"===n);return i(t,r)}return i(t,e).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await qt(t,e,n,"getOobCode"===n);return i(t,r)}return Promise.reject(r)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(t,e){const n=(0,i.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function Qt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ht);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Yt(t,e,n){const i=Nt(t);_(i._canInitEmulator,i,"emulator-config-failed"),_(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Xt(e),{host:o,port:a}=Jt(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||te()}function Xt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jt(t){const e=Xt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Zt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Zt(e)}}}function Zt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function te(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(t,e){return D(t,"POST","/v1/accounts:signUp",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e){return L(t,"POST","/v1/accounts:signInWithPassword",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function re(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}async function se(t,e){return L(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends ee{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new oe(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new oe(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kt(t,e,"signInWithPassword",ie);case"emailLink":return re(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kt(t,n,"signUpPassword",ne);case"emailLink":return se(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(t,e){return L(t,"POST","/v1/accounts:signInWithIdp",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="http://localhost";class le extends ee{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new le(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=o(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new le(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return ae(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ae(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ae(t,e)}buildRequest(){const t={requestUri:ce,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.Am)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",P(t,e))}async function he(t,e){return L(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e))}async function de(t,e){const n=await L(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const fe={["USER_NOT_FOUND"]:"user-not-found"};async function pe(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return L(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,n),fe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends ee{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ge({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ge({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return he(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return de(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return pe(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new ge({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ye(t){const e=(0,r.I9)((0,r.hp)(t))["link"],n=e?(0,r.I9)((0,r.hp)(e))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(t))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||e||t}class ve{constructor(t){var e,n,i,s,o,a;const c=(0,r.I9)((0,r.hp)(t)),l=null!==(e=c["apiKey"])&&void 0!==e?e:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=me(null!==(i=c["mode"])&&void 0!==i?i:null);_(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ye(t);try{return new ve(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(){this.providerId=be.PROVIDER_ID}static credential(t,e){return oe._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ve.parseLink(e);return _(n,"argument-error"),oe._fromEmailAndCode(t,n.code,n.tenantId)}}be.PROVIDER_ID="password",be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends _e{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe extends we{constructor(){super("facebook.com")}static credential(t){return le._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xe.credentialFromTaggedObject(t)}static credentialFromError(t){return xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return xe.credential(t.oauthAccessToken)}catch(e){return null}}}xe.FACEBOOK_SIGN_IN_METHOD="facebook.com",xe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee extends we{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return le._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ee.credentialFromTaggedObject(t)}static credentialFromError(t){return Ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Ee.credential(e,n)}catch(i){return null}}}Ee.GOOGLE_SIGN_IN_METHOD="google.com",Ee.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te extends we{constructor(){super("github.com")}static credential(t){return le._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Te.credentialFromTaggedObject(t)}static credentialFromError(t){return Te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Te.credential(t.oauthAccessToken)}catch(e){return null}}}Te.GITHUB_SIGN_IN_METHOD="github.com",Te.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends we{constructor(){super("twitter.com")}static credential(t,e){return le._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Se.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ie(t,e){return L(t,"POST","/v1/accounts:signUp",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se.TWITTER_SIGN_IN_METHOD="twitter.com",Se.PROVIDER_ID="twitter.com";class ke{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await lt._fromIdTokenResponse(t,n,i),s=Ce(n),o=new ke({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Ce(n);return new ke({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Ce(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae extends r.g{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ae.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Ae(t,e,n,i)}}function Oe(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ae._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(t,e,n=!1){const i=await X(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ke._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(t,e,n=!1){const{auth:r}=t;if((0,i.xZ)(r.app))return Promise.reject(y(r));const s="reauthenticate";try{const i=await X(t,Oe(r,s,e,t),n);_(i.idToken,r,"internal-error");const o=Q(i.idToken);_(o,r,"internal-error");const{sub:a}=o;return _(t.uid===a,r,"user-mismatch"),ke._forOperation(t,s,i)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(t,e,n=!1){if((0,i.xZ)(t.app))return Promise.reject(y(t));const r="signIn",s=await Oe(t,r,e),o=await ke._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}async function De(t,e){return Pe(Nt(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ne(t){const e=Nt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Le(t,e,n){if((0,i.xZ)(t.app))return Promise.reject(y(t));const r=Nt(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},o=Kt(r,s,"signUpPassword",Ie),a=await o.catch((e=>{throw"auth/password-does-not-meet-requirements"===e.code&&Ne(t),e})),c=await ke._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Fe(t,e,n){return(0,i.xZ)(t.app)?Promise.reject(y(t)):De((0,r.Ku)(t),be.credential(e,n)).catch((async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&Ne(t),e}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ve(t,e){return D(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const i=(0,r.Ku)(t),s=await i.getIdToken(),o={idToken:s,displayName:e,photoUrl:n,returnSecureToken:!0},a=await X(i,Ve(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:t})=>"password"===t));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function je(t,e,n,i){return(0,r.Ku)(t).onIdTokenChanged(e,n,i)}function Be(t,e,n){return(0,r.Ku)(t).beforeAuthStateChanged(e,n)}function ze(t,e,n,i){return(0,r.Ku)(t).onAuthStateChanged(e,n,i)}function $e(t){return(0,r.Ku)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",P(t,e))}function We(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",P(t,e))}function qe(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",P(t,e))}function Ke(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",P(t,e))}new WeakMap;const Ge="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ge,"1"),this.storage.removeItem(Ge),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){const t=(0,r.ZQ)();return vt(t)||Tt(t)}const Xe=1e3,Je=10;class Ze extends Qe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ye()&&Ct(),this.fallbackToPolling=kt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);It()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Je):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Xe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ze.type="LOCAL";const tn=Ze;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Qe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}en.type="SESSION";const nn=en;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new sn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await rn(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.receivers=[];class an{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=on("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function ln(t){cn().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return"undefined"!==typeof cn()["WorkerGlobalScope"]&&"function"===typeof cn()["importScripts"]}async function hn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function dn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function fn(){return un()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="firebaseLocalStorageDb",gn=1,mn="firebaseLocalStorage",yn="fbase_key";class vn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function bn(t,e){return t.transaction([mn],e?"readwrite":"readonly").objectStore(mn)}function _n(){const t=indexedDB.deleteDatabase(pn);return new vn(t).toPromise()}function wn(){const t=indexedDB.open(pn,gn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(mn,{keyPath:yn})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(mn)?e(n):(n.close(),await _n(),e(await wn()))}))}))}async function xn(t,e,n){const i=bn(t,!0).put({[yn]:e,value:n});return new vn(i).toPromise()}async function En(t,e){const n=bn(t,!1).get(e),i=await new vn(n).toPromise();return void 0===i?null:i.value}function Tn(t,e){const n=bn(t,!0).delete(e);return new vn(n).toPromise()}const Sn=800,In=3;class kn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await wn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>In)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return un()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sn._getInstance(fn()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await hn(),!this.activeServiceWorker)return;this.sender=new an(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&dn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await wn();return await xn(t,Ge,"1"),await Tn(t,Ge),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>xn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>En(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Tn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=bn(t,!1).getAll();return new vn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Sn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}kn.type="LOCAL";const Cn=kn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",P(t,e))}function On(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",P(t,e))}function Rn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
zt("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mn="recaptcha";async function Pn(t,e,n){var i;const r=await n.verify();try{let s;if(_("string"===typeof r,t,"argument-error"),_(n.type===Mn,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){_("enroll"===e.type,t,"internal-error");const n=await He(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{_("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;_(n,t,"missing-multi-factor-info");const o=await An(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await ue(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn{constructor(t){this.providerId=Dn.PROVIDER_ID,this.auth=Nt(t)}verifyPhoneNumber(t,e){return Pn(this.auth,t,(0,r.Ku)(e))}static credential(t,e){return ge._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Dn.credentialFromTaggedObject(e)}static credentialFromError(t){return Dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ge._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nn(t,e){return e?ht(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.PROVIDER_ID="phone",Dn.PHONE_SIGN_IN_METHOD="phone";class Ln extends ee{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ae(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ae(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ae(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Fn(t){return Pe(t.auth,new Ln(t),t.bypassAuthState)}function Vn(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Me(n,new Ln(t),t.bypassAuthState)}async function Un(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Re(n,new Ln(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Fn;case"linkViaPopup":case"linkViaRedirect":return Un;case"reauthViaPopup":case"reauthViaRedirect":return Vn;default:p(this.auth,"internal-error")}}resolve(t){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){x(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new C(2e3,1e4);async function zn(t,e,n){if((0,i.xZ)(t.app))return Promise.reject(g(t,"operation-not-supported-in-this-environment"));const r=Nt(t);v(t,e,_e);const s=Nn(r,n),o=new $n(r,"signInViaPopup",e,s);return o.executeNotNull()}class $n extends jn{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _(t,this.auth,"internal-error"),t}async onExecution(){x(1===this.filter.length,"Popup operations only handle one event");const t=on();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Bn.get())};t()}}$n.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn="pendingRedirect",Wn=new Map;class qn extends jn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Wn.get(this.auth._key());if(!t){try{const e=await Kn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Wn.set(this.auth._key(),t)}return this.bypassAuthState||Wn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Kn(t,e){const n=Yn(e),i=Qn(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function Gn(t,e){Wn.set(t._key(),e)}function Qn(t){return ht(t._redirectPersistence)}function Yn(t){return pt(Hn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(t,e,n=!1){if((0,i.xZ)(t.app))return Promise.reject(y(t));const r=Nt(t),s=Nn(r,e),o=new qn(r,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jn=6e5;class Zn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!ni(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!ei(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Jn&&this.cachedEventUids.clear(),this.cachedEventUids.has(ti(t))}saveEventToCache(t){this.cachedEventUids.add(ti(t)),this.lastProcessedEventTime=Date.now()}}function ti(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function ei({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function ni(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ei(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e={}){return D(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,si=/^https?/;async function oi(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ii(t);for(const i of e)try{if(ai(i))return}catch(n){}p(t,"unauthorized-domain")}function ai(t){const e=E(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!si.test(n))return!1;if(ri.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new C(3e4,6e4);function li(){const t=cn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function ui(t){return new Promise(((e,n)=>{var i,r,s;function o(){li(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{li(),n(g(t,"network-request-failed"))},timeout:ci.get()})}if(null===(r=null===(i=cn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=cn().gapi)||void 0===s?void 0:s.load)){const e=zt("iframefcb");return cn()[e]=()=>{gapi.load?o():n(g(t,"network-request-failed"))},Ut(`${Bt()}?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw hi=null,t}))}let hi=null;function di(t){return hi=hi||ui(t),hi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new C(5e3,15e3),pi="__/auth/iframe",gi="emulator/auth/iframe",mi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vi(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?A(e,gi):`https://${t.config.authDomain}/${pi}`,s={apiKey:e.apiKey,appName:t.name,v:i.MF},o=yi.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.Am)(s).slice(1)}`}async function bi(t){const e=await di(t),n=cn().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:vi(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mi,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=g(t,"network-request-failed"),s=cn().setTimeout((()=>{i(r)}),fi.get());function o(){cn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wi=500,xi=600,Ei="_blank",Ti="http://localhost";class Si{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Ii(t,e,n,i=wi,s=xi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},_i),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.ZQ)().toLowerCase();n&&(c=bt(u)?Ei:n),yt(u)&&(e=e||Ti,l.scrollbars="yes");const h=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(St(u)&&"_self"!==c)return ki(e||"",c),new Si(null);const d=window.open(e||"",c,h);_(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Si(d)}function ki(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="__/auth/handler",Ai="emulator/auth/handler",Oi=encodeURIComponent("fac");async function Ri(t,e,n,s,o,a){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.MF,eventId:o};if(e instanceof _e){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.Im)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof we){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];const u=await t._getAppCheckToken(),h=u?`#${Oi}=${encodeURIComponent(u)}`:"";return`${Mi(t)}?${(0,r.Am)(l).slice(1)}${h}`}function Mi({config:t}){return t.emulator?A(t,Ai):`https://${t.authDomain}/${Ci}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="webStorageSupport";class Di{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nn,this._completeRedirectFn=Xn,this._overrideRedirectResult=Gn}async _openPopup(t,e,n,i){var r;x(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await Ri(t,e,n,E(),i);return Ii(t,s,on())}async _openRedirect(t,e,n,i){await this._originValidation(t);const r=await Ri(t,e,n,E(),i);return ln(r),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(x(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await bi(t),n=new Zn(t);return e.register("authEvent",(e=>{_(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Pi,{type:Pi},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Pi];void 0!==r&&e(!!r),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=oi(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return kt()||vt()||Tt()}}const Ni=Di;class Li{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class Fi extends Li{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Fi(t)}_finalizeEnroll(t,e,n){return We(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return On(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Vi{constructor(){}static assertion(t){return Fi._fromCredential(t)}}Vi.FACTOR_ID="phone";class Ui{static assertionForEnrollment(t,e){return ji._fromSecret(t,e)}static assertionForSignIn(t,e){return ji._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;_("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const i=await qe(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Bi._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}Ui.FACTOR_ID="totp";class ji extends Li{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new ji(e,void 0,t)}static _fromEnrollmentId(t,e){return new ji(e,t)}async _finalizeEnroll(t,e,n){return _("undefined"!==typeof this.secret,t,"argument-error"),Ke(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){_(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return Rn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Bi{constructor(t,e,n,i,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Bi(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let i=!1;return(zi(t)||zi(e))&&(i=!0),i&&(zi(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),zi(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function zi(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var $i="@firebase/auth",Hi="1.7.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ki(t){(0,i.om)(new a.uA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:At(t)},l=new Dt(i,r,s,c);return Qt(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,i.om)(new a.uA("auth-internal",(t=>{const e=Nt(t.getProvider("auth").getImmediate());return(t=>new Wi(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)($i,Hi,qi(t)),(0,i.KO)($i,Hi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=300,Qi=(0,r.XA)("authIdTokenMaxAge")||Gi;let Yi=null;const Xi=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Qi)return;const r=null===n||void 0===n?void 0:n.token;Yi!==r&&(Yi=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ji(t=(0,i.Sx)()){const e=(0,i.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gt(t,{popupRedirectResolver:Ni,persistence:[Cn,tn,nn]}),s=(0,r.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const t=new URL(s,location.origin);if(location.origin===t.origin){const e=Xi(t.toString());Be(n,e,(()=>e(n.currentUser))),je(n,(t=>e(t)))}}const o=(0,r.Tj)("auth");return o&&Yt(n,`http://${o}`),n}function Zi(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}Vt({loadJS(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",Zi().appendChild(i)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Ki("Browser")},9675:function(t,e,n){n.d(e,{gS:function(){return dd},rJ:function(){return ph},kd:function(){return hd},H9:function(){return gh},x7:function(){return ad},GG:function(){return ld},aU:function(){return vh},P:function(){return Gh},BN:function(){return ud}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4979);var i,r=n(6540),s=n(852),o=n(1363),a=n(4046),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},u=u||{},h=c||self;function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function f(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,b.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function w(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function x(){this.s=this.s,this.o=this.o}var E=0;x.prototype.s=!1,x.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==E)||p(this)},x.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function I(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(d(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let r=0;r<i;r++)t[n+r]=e[r]}else t.push(e)}}function k(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};h.addEventListener("test",t,e),h.removeEventListener("test",t,e)}catch(n){}return t}();function A(t){return/^[\s\xa0]*$/.test(t)}function O(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function R(t){return-1!=O().indexOf(t)}function M(t){return M[" "](t),t}function P(t,e){var n=_i;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}M[" "]=function(){};var D,N,L=R("Opera"),F=R("Trident")||R("MSIE"),V=R("Edge"),U=V||F,j=R("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!R("Edge"))&&!(R("Trident")||R("MSIE"))&&!R("Edge"),B=-1!=O().toLowerCase().indexOf("webkit")&&!R("Edge");function z(){var t=h.document;return t?t.documentMode:void 0}t:{var $="",H=function(){var t=O();return j?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):B?/WebKit\/(\S+)/.exec(t):L?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(H&&($=H?H[1]:""),F){var W=z();if(null!=W&&W>parseFloat($)){D=String(W);break t}}D=$}if(h.document&&F){var q=z();N=q||(parseInt(D,10)||void 0)}else N=void 0;var K=N;function G(t,e){if(k.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(j){t:{try{M(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&G.$.h.call(this)}}w(G,k);var Q={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++X,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const it="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<it.length;e++)n=it[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=T(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}st.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new J(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),lt={};function ut(t,e,n,i,r){if(i&&i.once)return ft(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ut(t,e[s],n,i,r);return null}return n=_t(n),t&&t[Y]?t.O(e,n,f(i)?!!i.capture:!!i,r):ht(t,e,n,!1,i,r)}function ht(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=f(r)?!!r.capture:!!r,a=vt(t);if(a||(t[ct]=a=new st(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=dt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)C||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(mt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function dt(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function ft(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ft(t,e[s],n,i,r);return null}return n=_t(n),t&&t[Y]?t.P(e,n,f(i)?!!i.capture:!!i,r):ht(t,e,n,!0,i,r)}function pt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,i,r);else i=f(i)?!!i.capture:!!i,n=_t(n),t&&t[Y]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,i,r),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,i,r)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Y])ot(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(mt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):Z(t)}}}function mt(t){return t in lt?lt[t]:lt[t]="on"+t}function yt(t,e){if(t.fa)t=!0;else{e=new G(e,this);var n=t.listener,i=t.la||t.src;t.ia&&gt(t),t=n.call(i,e)}return t}function vt(t){return t=t[ct],t instanceof st?t:null}var bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function _t(t){return"function"===typeof t?t:(t[bt]||(t[bt]=function(e){return t.handleEvent(e)}),t[bt])}function wt(){x.call(this),this.i=new st(this),this.S=this,this.J=null}function xt(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"===typeof e)e=new k(e,t);else if(e instanceof k)e.target=e.target||t;else{var r=e;e=new k(i,t),rt(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Et(o,i,!0,e)&&r}if(o=e.g=t,r=Et(o,i,!0,e)&&r,r=Et(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Et(o,i,!1,e)&&r}function Et(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ot(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}w(wt,x),wt.prototype[Y]=!0,wt.prototype.removeEventListener=function(t,e,n,i){pt(this,t,e,n,i)},wt.prototype.N=function(){if(wt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Z(n[i]);delete e.g[t],e.h--}}this.J=null},wt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},wt.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Tt=h.JSON.stringify;class St{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function It(){var t=Dt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kt{constructor(){this.h=this.g=null}add(t,e){const n=Ct.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Ct=new St((()=>new At),(t=>t.reset()));class At{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Rt(t){h.setTimeout((()=>{throw t}),0)}let Mt,Pt=!1,Dt=new kt,Nt=()=>{const t=h.Promise.resolve(void 0);Mt=()=>{t.then(Lt)}};var Lt=()=>{for(var t;t=It();){try{t.h.call(t.g)}catch(n){Rt(n)}var e=Ct;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pt=!1};function Ft(t,e){wt.call(this),this.h=t||1,this.g=e||h,this.j=b(this.qb,this),this.l=Date.now()}function Vt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ut(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function jt(t){t.g=Ut((()=>{t.g=null,t.i&&(t.i=!1,jt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}w(Ft,wt),i=Ft.prototype,i.ga=!1,i.T=null,i.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xt(this,"tick"),this.ga&&(Vt(this),this.start()))}},i.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.N=function(){Ft.$.N.call(this),Vt(this),delete this.g};class Bt extends x{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:jt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(t){x.call(this),this.h=t,this.g={}}w(zt,x);var $t=[];function Ht(t,e,n,i){Array.isArray(n)||(n&&($t[0]=n.toString()),n=$t);for(var r=0;r<n.length;r++){var s=ut(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Wt(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}function qt(){this.g=!0}function Kt(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Gt(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Qt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Xt(t,n)+(i?" "+i:"")}))}function Yt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Xt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Tt(n)}catch(a){return e}}zt.prototype.N=function(){zt.$.N.call(this),Wt(this)},zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},qt.prototype.Ea=function(){this.g=!1},qt.prototype.info=function(){};var Jt={},Zt=null;function te(){return Zt=Zt||new wt}function ee(t){k.call(this,Jt.Ta,t)}function ne(t){const e=te();xt(e,new ee(e))}function ie(t,e){k.call(this,Jt.STAT_EVENT,t),this.stat=e}function re(t){const e=te();xt(e,new ie(e,t))}function se(t,e){k.call(this,Jt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}Jt.Ta="serverreachability",w(ee,k),Jt.STAT_EVENT="statevent",w(ie,k),Jt.Ua="timingevent",w(se,k);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ce={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function le(){}function ue(t){return t.h||(t.h=t.i())}function he(){}le.prototype.h=null;var de,fe={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){k.call(this,"d")}function ge(){k.call(this,"c")}function me(){}function ye(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new zt(this),this.P=be,t=U?125:void 0,this.V=new Ft(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}w(pe,k),w(ge,k),w(me,le),me.prototype.g=function(){return new XMLHttpRequest},me.prototype.i=function(){return{}},de=new me;var be=45e3,_e={},we={};function xe(t,e,n){t.L=1,t.A=He(Ue(e)),t.u=n,t.S=!0,Ee(t,null)}function Ee(t,e){t.G=Date.now(),ke(t),t.B=Ue(t.A);var n=t.B,i=t.W;Array.isArray(i)||(i=[String(i)]),rn(n.i,"t",i),t.o=0,n=t.l.J,t.h=new ve,t.g=li(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Bt(b(t.Pa,t,t.g),t.O)),Ht(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ne(),Kt(t.j,t.v,t.B,t.m,t.W,t.u)}function Te(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function Se(t,e,n){let i,r=!0;for(;!t.J&&t.o<n.length;){if(i=Ie(t,n),i==we){4==e&&(t.s=4,re(14),r=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(i==_e){t.s=4,re(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Qt(t.j,t.m,i,null),Me(t,i)}Te(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,re(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ei(e),e.M=!0,re(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),Re(t),Oe(t))}function Ie(t,e){var n=t.o,i=e.indexOf("\n",n);return-1==i?we:(n=Number(e.substring(n,i)),isNaN(n)?_e:(i+=1,i+n>e.length?we:(e=e.slice(i,i+n),t.o=i+n,e)))}function ke(t){t.Y=Date.now()+t.P,Ce(t,t.P)}function Ce(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=oe(b(t.lb,t),e)}function Ae(t){t.C&&(h.clearTimeout(t.C),t.C=null)}function Oe(t){0==t.l.H||t.J||ri(t.l,t)}function Re(t){Ae(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Vt(t.V),Wt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Me(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||dn(n.i,t)))if(!t.K&&dn(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;ii(n),qn(n)}ti(n),re(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(b(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(l){}n.oa=void 0}}else oi(n,11)}else if((t.K||n.g==t)&&ii(n),!A(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const e=l[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=l[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(fn(s,s.h),s.h=null))}if(i.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,$e(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=ci(i,i.J?i.pa:null,i.Y),o.K){pn(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.C&&(Ae(a),ke(a)),i.g=o}else Zn(i);0<n.j.length&&Gn(n)}else"stop"!=l[0]&&"close"!=l[0]||oi(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?oi(n,7):Wn(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}ne(4)}catch(l){}}function Pe(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function De(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(d(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Ne(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=De(t),i=Pe(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}i=ye.prototype,i.setTimeout=function(t){this.P=t},i.nb=function(t){t=t.target;const e=this.M;e&&3==Vn(t)?e.l():this.Pa(t)},i.Pa=function(t){try{if(t==this.g)t:{const u=Vn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(3!=u||U||this.g&&(this.h.h||this.g.ja()||Un(this.g)))){this.J||4!=u||7==e||ne(8==e||0>=d?3:2),Ae(this);var n=this.g.da();this.ca=n;e:if(Te(this)){var i=Un(this.g);t="";var r=i.length,s=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Re(this),Oe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Gt(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.s=3,re(12),Re(this),Oe(this);break t}Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Me(this,n)}this.S?(Se(this,u,o),U&&this.i&&3==u&&(Ht(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),Me(this,o)),4==u&&Re(this),this.i&&!this.J&&(4==u?ri(this.l,this):(this.i=!1,ke(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,re(12)):(this.s=0,re(13)),Re(this),Oe(this)}}}catch(u){}},i.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.o<e.length&&(Ae(this),Se(this,t,e),this.i&&4!=t&&ke(this))}},i.cancel=function(){this.J=!0,Re(this)},i.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Yt(this.j,this.B),2!=this.L&&(ne(),re(17)),Re(this),this.s=2,Oe(this)):Ce(this,this.Y-t)};var Le=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ve(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ve){this.h=t.h,je(this,t.j),this.s=t.s,this.g=t.g,Be(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ze(this,n),this.o=t.o}else t&&(e=String(t).match(Le))?(this.h=!1,je(this,e[1]||"",!0),this.s=We(e[2]||""),this.g=We(e[3]||"",!0),Be(this,e[4]),this.l=We(e[5]||"",!0),ze(this,e[6]||"",!0),this.o=We(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function Ue(t){return new Ve(t)}function je(t,e,n){t.j=n?We(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ze(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=qe(e,Xe)),t.i=new Ze(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function He(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function We(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ke),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ke(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ve.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qe(e,Ge,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(qe(e,Ge,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(qe(n,"/"==n.charAt(0)?Ye:Qe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qe(n,Je)),t.join("")};var Ge=/[#\/\?@]/g,Qe=/[#\?:]/g,Ye=/[#\?]/g,Xe=/[#\?@]/g,Je=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Fe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=sn(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),S(n)),t.h+=n.length)}function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))}),t)),t.j=e}i=Ze.prototype,i.add=function(t,e){tn(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){tn(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},i.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},i.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return tn(this),this.i=null,t=sn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function cn(t){this.l=t||ln,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ln=10;function un(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function dn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function fn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return S(t.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var mn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function yn(){this.g=new mn}function vn(t,e,n){const i=n||"";try{Ne(t,(function(t,n){let r=t;f(t)&&(r=Tt(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function bn(t,e){const n=new qt;if(h.Image){const i=new Image;i.onload=_(_n,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_(_n,n,i,"TestLoadImage: error",!1,e),i.onabort=_(_n,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_(_n,n,i,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function _n(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function wn(t){this.l=t.ec||null,this.j=t.ob||!1}function xn(t,e){wt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=En,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}w(wn,le),wn.prototype.g=function(){return new xn(this.l,this.j)},wn.prototype.i=function(t){return function(){return t}}({}),w(xn,wt);var En=0;function Tn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,In(t)}function In(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=xn.prototype,i.open=function(t,e){if(this.readyState!=En)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,In(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=En},i.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},i.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):In(this),3==this.readyState&&Tn(this)}},i.Za=function(t){this.g&&(this.response=this.responseText=t,Sn(this))},i.Ya=function(t){this.g&&(this.response=t,Sn(this))},i.ka=function(){this.g&&Sn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var kn=h.JSON.parse;function Cn(t){wt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=An,this.L=this.M=!1}w(Cn,wt);var An="",On=/^https?$/i,Rn=["POST","PUT"];function Mn(t){return F&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Pn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Dn(t),Ln(t)}function Dn(t){t.F||(t.F=!0,xt(t,"complete"),xt(t,"error"))}function Nn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Vn(t)||2!=t.da()))if(t.v&&4==Vn(t))Ut(t.La,0,t);else if(xt(t,"readystatechange"),4==Vn(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.I).match(Le)[1]||null;!r&&h.self&&h.self.location&&(r=h.self.location.protocol.slice(0,-1)),i=!On.test(r?r.toLowerCase():"")}n=i}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",Dn(t)}}finally{Ln(t)}}}function Ln(t,e){if(t.g){Fn(t);const i=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||xt(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function Fn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}function Un(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case An:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Yi){return null}}function jn(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(A(t[i]))continue;var n=Ot(t[i]);const r=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}et(e,(function(t){return t.join(", ")}))}function Bn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Bn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):$e(t,e,n))}function $n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hn(t){this.Ga=0,this.j=[],this.l=new qt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$n("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$n("baseRetryDelayMs",5e3,t),this.hb=$n("retryDelaySeedMs",1e4,t),this.eb=$n("forwardChannelMaxRetries",2,t),this.xa=$n("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(t&&t.concurrentRequestLimit),this.Ja=new yn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Wn(t){if(Kn(t),3==t.H){var e=t.W++,n=Ue(t.I);if($e(n,"SID",t.K),$e(n,"RID",e),$e(n,"TYPE","terminate"),Xn(t,n),e=new ye(t,t.l,e),e.L=2,e.A=He(Ue(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.A.toString(),"")}catch(i){}!n&&h.Image&&((new Image).src=e.A,n=!0),n||(e.g=li(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ke(e)}ai(t)}function qn(t){t.g&&(ei(t),t.g.cancel(),t.g=null)}function Kn(t){qn(t),t.u&&(h.clearTimeout(t.u),t.u=null),ii(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Gn(t){if(!un(t.i)&&!t.m){t.m=!0;var e=t.Na;Mt||Nt(),Pt||(Mt(),Pt=!0),Dt.add(e,t),t.C=0}}function Qn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(b(t.Na,t,e),si(t,t.C)),t.C++,!0))}function Yn(t,e){var n;n=e?e.m:t.W++;const i=Ue(t.I);$e(i,"SID",t.K),$e(i,"RID",n),$e(i,"AID",t.V),Xn(t,i),t.o&&t.s&&zn(i,t.o,t.s),n=new ye(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Jn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),fn(t.i,n),xe(n,i,e)}function Xn(t,e){t.na&&tt(t.na,(function(t,n){$e(e,n,t)})),t.h&&Ne({},(function(t,n){$e(e,n,t)}))}function Jn(t,e,n){n=Math.min(t.j.length,n);var i=t.h?b(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].g;const c=r[a].map;if(n-=e,0>n)e=Math.max(0,r[a].g-100),o=!1;else try{vn(c,t,"req"+n+"_")}catch(s){i&&i(c)}}if(o){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Mt||Nt(),Pt||(Mt(),Pt=!0),Dt.add(e,t),t.A=0}}function ti(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(b(t.Ma,t),si(t,t.A)),t.A++,!0)}function ei(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ni(t){t.g=new ye(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Ue(t.wa);$e(e,"RID","rpc"),$e(e,"SID",t.K),$e(e,"AID",t.V),$e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&$e(e,"TO",t.qa),$e(e,"TYPE","xmlhttp"),Xn(t,e),t.o&&t.s&&zn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=He(Ue(e)),n.u=null,n.S=!0,Ee(n,t)}function ii(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ri(t,e){var n=null;if(t.g==e){ii(t),ei(t),t.g=null;var i=2}else{if(!dn(t.i,e))return;n=e.F,pn(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;i=te(),xt(i,new se(i,n)),Gn(t)}else Zn(t);else if(r=e.s,3==r||0==r&&0<e.ca||!(1==i&&Qn(t,e)||2==i&&ti(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:oi(t,5);break;case 4:oi(t,10);break;case 3:oi(t,6);break;default:oi(t,2)}}function si(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function oi(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=b(t.pb,t);n||(n=new Ve("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||je(n,"https"),He(n)),bn(n.toString(),i)}else re(2);t.H=0,t.h&&t.h.za(e),ai(t),Kn(t)}function ai(t){if(t.H=0,t.ma=[],t.h){const e=gn(t.i);0==e.length&&0==t.j.length||(I(t.ma,e),I(t.ma,t.j),t.i.i.length=0,S(t.j),t.j.length=0),t.h.ya()}}function ci(t,e,n){var i=n instanceof Ve?Ue(n):new Ve(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Be(i,i.m);else{var r=h.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Ve(null);i&&je(s,i),e&&(s.g=e),r&&Be(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&$e(i,n,e),$e(i,"VER",t.ra),Xn(t,i),i}function li(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Cn(new wn({ob:n})):new Cn(t.va),e.Oa(t.J),e}function ui(){}function hi(){if(F&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function di(t,e){wt.call(this),this.g=new Hn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gi(this)}function fi(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pi(){ge.call(this),this.status=1}function gi(t){this.g=t}function mi(){this.blockSize=-1}function yi(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vi(t,e,n){n||(n=0);var i=Array(16);if("string"===typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function bi(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}i=Cn.prototype,i.Oa=function(t){this.M=t},i.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():de.g(),this.C=this.u?ue(this.u):ue(de),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Pn(this,s)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=h.FormData&&t instanceof h.FormData,!(0<=T(Rn,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=Mn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=Ut(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Pn(this,s)}},i.ua=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),Ln(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ln(this,!0)),Cn.$.N.call(this)},i.La=function(){this.s||(this.G||this.v||this.l?Nn(this):this.kb())},i.kb=function(){Nn(this)},i.isActive=function(){return!!this.g},i.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch(t){return-1}},i.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),kn(e)}},i.Ia=function(){return this.m},i.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Hn.prototype,i.ra=8,i.H=1,i.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new ye(this,this.l,t);let s=this.s;if(this.U&&(s?(s=nt(s),rt(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Jn(this,r,e),n=Ue(this.I),$e(n,"RID",t),$e(n,"CVER",22),this.F&&$e(n,"X-HTTP-Session-Id",this.F),Xn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Bn(s)))+"&"+e:this.o&&zn(n,this.o,s)),fn(this.i,r),this.bb&&$e(n,"TYPE","init"),this.P?($e(n,"$req",e),$e(n,"SID","null"),r.aa=!0,xe(r,n,null)):xe(r,n,e),this.H=2}}else 3==this.H&&(t?Yn(this,t):0==this.j.length||un(this.i)||Yn(this))},i.Ma=function(){if(this.u=null,ni(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(b(this.jb,this),t)}},i.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,re(10),qn(this),ni(this))},i.ib=function(){null!=this.v&&(this.v=null,qn(this),ti(this),re(19))},i.pb=function(t){t?(this.l.info("Successfully pinged google.com"),re(2)):(this.l.info("Failed to ping google.com"),re(1))},i.isActive=function(){return!!this.h&&this.h.isActive(this)},i=ui.prototype,i.Ba=function(){},i.Aa=function(){},i.za=function(){},i.ya=function(){},i.isActive=function(){return!0},i.Va=function(){},hi.prototype.g=function(t,e){return new di(t,e)},w(di,wt),di.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;re(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ci(t,null,t.Y),Gn(t)},di.prototype.close=function(){Wn(this.g)},di.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tt(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Gn(e)},di.prototype.N=function(){this.g.h=null,delete this.j,Wn(this.g),delete this.g,di.$.N.call(this)},w(fi,pe),w(pi,ge),w(gi,ui),gi.prototype.Ba=function(){xt(this.g,"a")},gi.prototype.Aa=function(t){xt(this.g,new fi(t))},gi.prototype.za=function(t){xt(this.g,new pi)},gi.prototype.ya=function(){xt(this.g,"b")},w(yi,mi),yi.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yi.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)vi(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){vi(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){vi(this,i),r=0;break}}this.h=r,this.i+=e},yi.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var _i={};function wi(t){return-128<=t&&128>t?P(t,(function(t){return new bi([0|t],0>t?-1:0)})):new bi([0|t],0>t?-1:0)}function xi(t){if(isNaN(t)||!isFinite(t))return Si;if(0>t)return Oi(xi(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Ti;return new bi(e,0)}function Ei(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Oi(Ei(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xi(Math.pow(e,8)),i=Si,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=xi(Math.pow(e,s)),i=i.R(s).add(xi(o))):(i=i.R(n),i=i.add(xi(o)))}return i}var Ti=4294967296,Si=wi(0),Ii=wi(1),ki=wi(16777216);function Ci(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Ai(t){return-1==t.h}function Oi(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new bi(n,~t.h).add(Ii)}function Ri(t,e){return t.add(Oi(e))}function Mi(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Pi(t,e){this.g=t,this.h=e}function Di(t,e){if(Ci(e))throw Error("division by zero");if(Ci(t))return new Pi(Si,Si);if(Ai(t))return e=Di(Oi(t),e),new Pi(Oi(e.g),Oi(e.h));if(Ai(e))return e=Di(t,Oi(e)),new Pi(Oi(e.g),e.h);if(30<t.g.length){if(Ai(t)||Ai(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ii,i=e;0>=i.X(t);)n=Ni(n),i=Ni(i);var r=Li(n,1),s=Li(i,1);for(i=Li(i,2),n=Li(n,2);!Ci(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=Li(i,1),n=Li(n,1)}return e=Ri(t,r.R(e)),new Pi(r,e)}for(r=Si;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=xi(n),o=s.R(e);Ai(o)||0<o.X(t);)n-=i,s=xi(n),o=s.R(e);Ci(s)&&(s=Ii),r=r.add(s),t=Ri(t,o)}return new Pi(r,t)}function Ni(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new bi(n,t.h)}function Li(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new bi(r,t.h)}i=bi.prototype,i.ea=function(){if(Ai(this))return-Oi(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Ti+i)*e,e*=Ti}return t},i.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ci(this))return"0";if(Ai(this))return"-"+Oi(this).toString(t);for(var e=xi(Math.pow(t,6)),n=this,i="";;){var r=Di(n,e).g;n=Ri(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Ci(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},i.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},i.X=function(t){return t=Ri(this,t),Ai(t)?-1:Ci(t)?0:1},i.abs=function(){return Ai(this)?Oi(this):this},i.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new bi(n,-2147483648&n[n.length-1]?-1:0)},i.R=function(t){if(Ci(this)||Ci(t))return Si;if(Ai(this))return Ai(t)?Oi(this).R(Oi(t)):Oi(Oi(this).R(t));if(Ai(t))return Oi(this.R(Oi(t)));if(0>this.X(ki)&&0>t.X(ki))return xi(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,c=65535&t.D(r);n[2*i+2*r]+=o*c,Mi(n,2*i+2*r),n[2*i+2*r+1]+=s*c,Mi(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,Mi(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,Mi(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new bi(n,0)},i.gb=function(t){return Di(this,t).h},i.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new bi(n,this.h&t.h)},i.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new bi(n,this.h|t.h)},i.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new bi(n,this.h^t.h)},hi.prototype.createWebChannel=hi.prototype.g,di.prototype.send=di.prototype.u,di.prototype.open=di.prototype.m,di.prototype.close=di.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ce.COMPLETE="complete",he.EventType=fe,fe.OPEN="a",fe.CLOSE="b",fe.ERROR="c",fe.MESSAGE="d",wt.prototype.listen=wt.prototype.O,Cn.prototype.listenOnce=Cn.prototype.P,Cn.prototype.getLastError=Cn.prototype.Sa,Cn.prototype.getLastErrorCode=Cn.prototype.Ia,Cn.prototype.getStatus=Cn.prototype.da,Cn.prototype.getResponseJson=Cn.prototype.Wa,Cn.prototype.getResponseText=Cn.prototype.ja,Cn.prototype.send=Cn.prototype.ha,Cn.prototype.setWithCredentials=Cn.prototype.Oa,yi.prototype.digest=yi.prototype.l,yi.prototype.reset=yi.prototype.reset,yi.prototype.update=yi.prototype.j,bi.prototype.add=bi.prototype.add,bi.prototype.multiply=bi.prototype.R,bi.prototype.modulo=bi.prototype.gb,bi.prototype.compare=bi.prototype.X,bi.prototype.toNumber=bi.prototype.ea,bi.prototype.toString=bi.prototype.toString,bi.prototype.getBits=bi.prototype.D,bi.fromNumber=xi,bi.fromString=Ei;var Fi=l.createWebChannelTransport=function(){return new hi},Vi=l.getStatEventTarget=function(){return te()},Ui=l.ErrorCode=ae,ji=l.EventType=ce,Bi=l.Event=Jt,zi=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$i=l.FetchXmlHttpFactory=wn,Hi=l.WebChannel=he,Wi=l.XhrIo=Cn,qi=l.Md5=yi,Ki=l.Integer=bi;const Gi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qi.UNAUTHENTICATED=new Qi(null),Qi.GOOGLE_CREDENTIALS=new Qi("google-credentials-uid"),Qi.FIRST_PARTY=new Qi("first-party-uid"),Qi.MOCK_USER=new Qi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Yi="10.11.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new o.Vy("@firebase/firestore");function Ji(){return Xi.logLevel}function Zi(t,...e){if(Xi.logLevel<=o.$b.DEBUG){const n=e.map(nr);Xi.debug(`Firestore (${Yi}): ${t}`,...n)}}function tr(t,...e){if(Xi.logLevel<=o.$b.ERROR){const n=e.map(nr);Xi.error(`Firestore (${Yi}): ${t}`,...n)}}function er(t,...e){if(Xi.logLevel<=o.$b.WARN){const n=e.map(nr);Xi.warn(`Firestore (${Yi}): ${t}`,...n)}}function nr(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t="Unexpected state"){const e=`FIRESTORE (${Yi}) INTERNAL ASSERTION FAILED: `+t;throw tr(e),new Error(e)}function rr(t,e){t||ir()}function sr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ar extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ur{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Qi.UNAUTHENTICATED)))}shutdown(){}}class hr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class dr{constructor(t){this.t=t,this.currentUser=Qi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new cr,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Zi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Zi("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new cr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Zi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(rr("string"==typeof e.accessToken),new lr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return rr(null===t||"string"==typeof t),new Qi(t)}}class fr{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Qi.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pr{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new fr(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Qi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mr{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Zi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Zi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Zi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Zi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(rr("string"==typeof t.token),this.R=t.token,new gr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=yr(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function br(t,e){return t<e?-1:t>e?1:0}function _r(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ar(or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ar(or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ar(or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ar(or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return wr.fromMillis(Date.now())}static fromDate(t){return wr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new wr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?br(this.nanoseconds,t.nanoseconds):br(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new xr(t)}static min(){return new xr(new wr(0,0))}static max(){return new xr(new wr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e,n){void 0===e?e=0:e>t.length&&ir(),void 0===n?n=t.length-e:n>t.length-e&&ir(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Er.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Er?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Tr extends Er{construct(t,e,n){return new Tr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ar(or.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Tr(e)}static emptyPath(){return new Tr([])}}const Sr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ir extends Er{construct(t,e,n){return new Ir(t,e,n)}static isValidIdentifier(t){return Sr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ir.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ir(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new ar(or.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new ar(or.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ar(or.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new ar(or.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ir(e)}static emptyPath(){return new Ir([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t){this.path=t}static fromPath(t){return new kr(Tr.fromString(t))}static fromName(t){return new kr(Tr.fromString(t).popFirst(5))}static empty(){return new kr(Tr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Tr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Tr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new kr(new Tr(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Cr.UNKNOWN_ID=-1;function Ar(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=xr.fromTimestamp(1e9===i?new wr(n+1,0):new wr(n,i));return new Rr(r,kr.empty(),e)}function Or(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Rr(xr.min(),kr.empty(),-1)}static max(){return new Rr(xr.max(),kr.empty(),-1)}}function Mr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=kr.comparator(t.documentKey,e.documentKey),0!==n?n:br(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const Pr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(t){if(t.code!==or.FAILED_PRECONDITION||t.message!==Pr)throw t;Zi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ir(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Lr(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Lr?e:Lr.resolve(e)}catch(t){return Lr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Lr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Lr.reject(e)}static resolve(t){return new Lr(((e,n)=>{e(t)}))}static reject(t){return new Lr(((e,n)=>{n(t)}))}static waitFor(t){return new Lr(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=Lr.resolve(!1);for(const n of t)e=e.next((t=>t?Lr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new Lr(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new Lr(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function jr(t){return null==t}function Br(t){return 0===t&&1/t==-1/0}function zr(t){return"number"==typeof t&&Number.isInteger(t)&&!Br(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur.oe=-1;const $r=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Hr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Wr=Hr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,e){this.comparator=t,this.root=e||Xr.EMPTY}insert(t,e){return new Qr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xr.BLACK,null,null))}remove(t){return new Qr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yr(this.root,t,this.comparator,!0)}}class Yr{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xr{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Xr.RED,this.left=null!=i?i:Xr.EMPTY,this.right=null!=r?r:Xr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Xr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Xr.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ir();if(this.right.isRed())throw ir();const t=this.left.check();if(t!==this.right.check())throw ir();return t+(this.isRed()?0:1)}}Xr.EMPTY=null,Xr.RED=!0,Xr.BLACK=!1,Xr.EMPTY=new class{constructor(){this.size=0}get key(){throw ir()}get value(){throw ir()}get color(){throw ir()}get left(){throw ir()}get right(){throw ir()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Xr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr{constructor(t){this.comparator=t,this.data=new Qr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Zr(this.data.getIterator())}getIteratorFrom(t){return new Zr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Jr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Jr(this.comparator);return e.data=t,e}}class Zr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(t){this.fields=t,t.sort(Ir.comparator)}static empty(){return new ts([])}unionWith(t){let e=new Jr(Ir.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ts(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _r(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new es("Invalid base64 string: "+t):t}}(t);return new ns(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ns(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return br(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ns.EMPTY_BYTE_STRING=new ns("");const is=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(t){if(rr(!!t),"string"==typeof t){let e=0;const n=is.exec(t);if(rr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ss(t.seconds),nanos:ss(t.nanos)}}function ss(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function os(t){return"string"==typeof t?ns.fromBase64String(t):ns.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function cs(t){const e=t.mapValue.fields.__previous_value__;return as(e)?cs(e):e}function ls(t){const e=rs(t.mapValue.fields.__local_write_time__.timestampValue);return new wr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e,n,i,r,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class hs{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new hs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof hs&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?as(t)?4:ks(t)?9007199254740991:10:ir()}function ps(t,e){if(t===e)return!0;const n=fs(t);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ls(t).isEqual(ls(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=rs(t.timestampValue),i=rs(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return os(t.bytesValue).isEqual(os(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ss(t.geoPointValue.latitude)===ss(e.geoPointValue.latitude)&&ss(t.geoPointValue.longitude)===ss(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ss(t.integerValue)===ss(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ss(t.doubleValue),i=ss(e.doubleValue);return n===i?Br(n)===Br(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return _r(t.arrayValue.values||[],e.arrayValue.values||[],ps);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(qr(n)!==qr(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!ps(n[r],i[r])))return!1;return!0}(t,e);default:return ir()}}function gs(t,e){return void 0!==(t.values||[]).find((t=>ps(t,e)))}function ms(t,e){if(t===e)return 0;const n=fs(t),i=fs(e);if(n!==i)return br(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return br(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ss(t.integerValue||t.doubleValue),i=ss(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return ys(t.timestampValue,e.timestampValue);case 4:return ys(ls(t),ls(e));case 5:return br(t.stringValue,e.stringValue);case 6:return function(t,e){const n=os(t),i=os(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=br(n[r],i[r]);if(0!==t)return t}return br(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=br(ss(t.latitude),ss(e.latitude));return 0!==n?n:br(ss(t.longitude),ss(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=ms(n[r],i[r]);if(t)return t}return br(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ds.mapValue&&e===ds.mapValue)return 0;if(t===ds.mapValue)return 1;if(e===ds.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=br(i[o],s[o]);if(0!==t)return t;const e=ms(n[i[o]],r[s[o]]);if(0!==e)return e}return br(i.length,s.length)}(t.mapValue,e.mapValue);default:throw ir()}}function ys(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return br(t,e);const n=rs(t),i=rs(e),r=br(n.seconds,i.seconds);return 0!==r?r:br(n.nanos,i.nanos)}function vs(t){return bs(t)}function bs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=rs(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return os(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return kr.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=bs(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${bs(t.fields[r])}`;return n+"}"}(t.mapValue):ir()}function _s(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ws(t){return!!t&&"integerValue"in t}function xs(t){return!!t&&"arrayValue"in t}function Es(t){return!!t&&"nullValue"in t}function Ts(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ss(t){return!!t&&"mapValue"in t}function Is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Kr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Is(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Is(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ks(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{constructor(t){this.value=t}static empty(){return new Cs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ss(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Is(e)}setAll(t){let e=Ir.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Is(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Ss(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ps(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Ss(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Kr(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new Cs(Is(this.value))}}function As(t){const e=[];return Kr(t.fields,((t,n)=>{const i=new Ir([t]);if(Ss(n)){const t=As(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new ts(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Os{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Os(t,0,xr.min(),xr.min(),xr.min(),Cs.empty(),0)}static newFoundDocument(t,e,n,i){return new Os(t,1,e,xr.min(),n,i,0)}static newNoDocument(t,e){return new Os(t,2,e,xr.min(),xr.min(),Cs.empty(),0)}static newUnknownDocument(t,e){return new Os(t,3,e,xr.min(),xr.min(),Cs.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(xr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Cs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Cs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Os&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Os(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,e){this.position=t,this.inclusive=e}}function Ms(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?kr.comparator(kr.fromName(o.referenceValue),n.key):ms(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Ps(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ps(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ns(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{}class Fs extends Ls{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ws(t,e,n):"array-contains"===e?new Qs(t,n):"in"===e?new Ys(t,n):"not-in"===e?new Xs(t,n):"array-contains-any"===e?new Js(t,n):new Fs(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new qs(t,n):new Ks(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ms(e,this.value)):null!==e&&fs(this.value)===fs(e)&&this.matchesComparison(ms(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ir()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vs extends Ls{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Vs(t,e)}matches(t){return Us(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Us(t){return"and"===t.op}function js(t){return Bs(t)&&Us(t)}function Bs(t){for(const e of t.filters)if(e instanceof Vs)return!1;return!0}function zs(t){if(t instanceof Fs)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(js(t))return t.filters.map((t=>zs(t))).join(",");{const e=t.filters.map((t=>zs(t))).join(",");return`${t.op}(${e})`}}function $s(t,e){return t instanceof Fs?function(t,e){return e instanceof Fs&&t.op===e.op&&t.field.isEqual(e.field)&&ps(t.value,e.value)}(t,e):t instanceof Vs?function(t,e){return e instanceof Vs&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&$s(n,e.filters[i])),!0)}(t,e):void ir()}function Hs(t){return t instanceof Fs?function(t){return`${t.field.canonicalString()} ${t.op} ${vs(t.value)}`}(t):t instanceof Vs?function(t){return t.op.toString()+" {"+t.getFilters().map(Hs).join(" ,")+"}"}(t):"Filter"}class Ws extends Fs{constructor(t,e,n){super(t,e,n),this.key=kr.fromName(n.referenceValue)}matches(t){const e=kr.comparator(t.key,this.key);return this.matchesComparison(e)}}class qs extends Fs{constructor(t,e){super(t,"in",e),this.keys=Gs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ks extends Fs{constructor(t,e){super(t,"not-in",e),this.keys=Gs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Gs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>kr.fromName(t.referenceValue)))}class Qs extends Fs{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return xs(e)&&gs(e.arrayValue,this.value)}}class Ys extends Fs{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&gs(this.value.arrayValue,e)}}class Xs extends Fs{constructor(t,e){super(t,"not-in",e)}matches(t){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!gs(this.value.arrayValue,e)}}class Js extends Fs{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!xs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>gs(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ue=null}}function to(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Zs(t,e,n,i,r,s,o)}function eo(t){const e=sr(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>zs(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),jr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>vs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>vs(t))).join(",")),e.ue=t}return e.ue}function no(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ns(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$s(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ps(t.startAt,e.startAt)&&Ps(t.endAt,e.endAt)}function io(t){return kr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function so(t,e,n,i,r,s,o,a){return new ro(t,e,n,i,r,s,o,a)}function oo(t){return new ro(t)}function ao(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function co(t){return null!==t.collectionGroup}function lo(t){const e=sr(t);if(null===e.ce){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new Jr(Ir.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);i.forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ds(i,n))})),t.has(Ir.keyField().canonicalString())||e.ce.push(new Ds(Ir.keyField(),n))}return e.ce}function uo(t){const e=sr(t);return e.le||(e.le=ho(e,lo(t))),e.le}function ho(t,e){if("F"===t.limitType)return to(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Ds(t.field,e)}));const n=t.endAt?new Rs(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Rs(t.startAt.position,t.startAt.inclusive):null;return to(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function fo(t,e){const n=t.filters.concat([e]);return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function po(t,e,n){return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function go(t,e){return no(uo(t),uo(e))&&t.limitType===e.limitType}function mo(t){return`${eo(uo(t))}|lt:${t.limitType}`}function yo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Hs(t))).join(", ")}]`),jr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>vs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>vs(t))).join(",")),`Target(${e})`}(uo(t))}; limitType=${t.limitType})`}function vo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):kr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of lo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Ms(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,lo(t),e))&&!(t.endAt&&!function(t,e,n){const i=Ms(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,lo(t),e))}(t,e)}function bo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _o(t){return(e,n)=>{let i=!1;for(const r of lo(t)){const t=wo(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function wo(t,e,n){const i=t.field.isKeyField()?kr.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?ms(i,r):ir()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ir()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Kr(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return Gr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Qr(kr.comparator);function To(){return Eo}const So=new Qr(kr.comparator);function Io(...t){let e=So;for(const n of t)e=e.insert(n.key,n);return e}function ko(t){let e=So;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Co(){return Oo()}function Ao(){return Oo()}function Oo(){return new xo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ro=new Qr(kr.comparator),Mo=new Jr(kr.comparator);function Po(...t){let e=Mo;for(const n of t)e=e.add(n);return e}const Do=new Jr(br);function No(){return Do}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(e)?"-0":e}}function Fo(t){return{integerValue:""+t}}function Vo(t,e){return zr(e)?Fo(e):Lo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this._=void 0}}function jo(t,e,n){return t instanceof $o?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&as(e)&&(e=cs(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ho?Wo(t,e):t instanceof qo?Ko(t,e):function(t,e){const n=zo(t,e),i=Qo(n)+Qo(t.Pe);return ws(n)&&ws(t.Pe)?Fo(i):Lo(t.serializer,i)}(t,e)}function Bo(t,e,n){return t instanceof Ho?Wo(t,e):t instanceof qo?Ko(t,e):n}function zo(t,e){return t instanceof Go?function(t){return ws(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class $o extends Uo{}class Ho extends Uo{constructor(t){super(),this.elements=t}}function Wo(t,e){const n=Yo(e);for(const i of t.elements)n.some((t=>ps(t,i)))||n.push(i);return{arrayValue:{values:n}}}class qo extends Uo{constructor(t){super(),this.elements=t}}function Ko(t,e){let n=Yo(e);for(const i of t.elements)n=n.filter((t=>!ps(t,i)));return{arrayValue:{values:n}}}class Go extends Uo{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Qo(t){return ss(t.integerValue||t.doubleValue)}function Yo(t){return xs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ho&&e instanceof Ho||t instanceof qo&&e instanceof qo?_r(t.elements,e.elements,ps):t instanceof Go&&e instanceof Go?ps(t.Pe,e.Pe):t instanceof $o&&e instanceof $o}(t.transform,e.transform)}class Jo{constructor(t,e){this.version=t,this.transformResults=e}}class Zo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zo}static exists(t){return new Zo(void 0,t)}static updateTime(t){return new Zo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ta(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ea{}function na(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new da(t.key,Zo.none()):new aa(t.key,t.data,Zo.none());{const n=t.data,i=Cs.empty();let r=new Jr(Ir.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new ca(t.key,i,new ts(r.toArray()),Zo.none())}}function ia(t,e,n){t instanceof aa?function(t,e,n){const i=t.value.clone(),r=ua(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof ca?function(t,e,n){if(!ta(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=ua(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(la(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ra(t,e,n,i){return t instanceof aa?function(t,e,n,i){if(!ta(t.precondition,e))return n;const r=t.value.clone(),s=ha(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof ca?function(t,e,n,i){if(!ta(t.precondition,e))return n;const r=ha(t.fieldTransforms,i,e),s=e.data;return s.setAll(la(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return ta(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function sa(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=zo(i.transform,t||null);null!=r&&(null===n&&(n=Cs.empty()),n.set(i.field,r))}return n||null}function oa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&_r(t,e,((t,e)=>Xo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class aa extends ea{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ca extends ea{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function la(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function ua(t,e,n){const i=new Map;rr(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Bo(o,a,n[r]))}return i}function ha(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,jo(t,s,e))}return i}class da extends ea{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fa extends ea{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&ia(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ra(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ra(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ao();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=na(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(xr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Po())}isEqual(t){return this.batchId===t.batchId&&_r(this.mutations,t.mutations,((t,e)=>oa(t,e)))&&_r(this.baseMutations,t.baseMutations,((t,e)=>oa(t,e)))}}class ga{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){rr(t.mutations.length===n.length);let i=function(){return Ro}();const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new ga(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ya{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var va,ba;function _a(t){switch(t){default:return ir();case or.CANCELLED:case or.UNKNOWN:case or.DEADLINE_EXCEEDED:case or.RESOURCE_EXHAUSTED:case or.INTERNAL:case or.UNAVAILABLE:case or.UNAUTHENTICATED:return!1;case or.INVALID_ARGUMENT:case or.NOT_FOUND:case or.ALREADY_EXISTS:case or.PERMISSION_DENIED:case or.FAILED_PRECONDITION:case or.ABORTED:case or.OUT_OF_RANGE:case or.UNIMPLEMENTED:case or.DATA_LOSS:return!0}}function wa(t){if(void 0===t)return tr("GRPC error has no .code"),or.UNKNOWN;switch(t){case va.OK:return or.OK;case va.CANCELLED:return or.CANCELLED;case va.UNKNOWN:return or.UNKNOWN;case va.DEADLINE_EXCEEDED:return or.DEADLINE_EXCEEDED;case va.RESOURCE_EXHAUSTED:return or.RESOURCE_EXHAUSTED;case va.INTERNAL:return or.INTERNAL;case va.UNAVAILABLE:return or.UNAVAILABLE;case va.UNAUTHENTICATED:return or.UNAUTHENTICATED;case va.INVALID_ARGUMENT:return or.INVALID_ARGUMENT;case va.NOT_FOUND:return or.NOT_FOUND;case va.ALREADY_EXISTS:return or.ALREADY_EXISTS;case va.PERMISSION_DENIED:return or.PERMISSION_DENIED;case va.FAILED_PRECONDITION:return or.FAILED_PRECONDITION;case va.ABORTED:return or.ABORTED;case va.OUT_OF_RANGE:return or.OUT_OF_RANGE;case va.UNIMPLEMENTED:return or.UNIMPLEMENTED;case va.DATA_LOSS:return or.DATA_LOSS;default:return ir()}}(ba=va||(va={}))[ba.OK=0]="OK",ba[ba.CANCELLED=1]="CANCELLED",ba[ba.UNKNOWN=2]="UNKNOWN",ba[ba.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ba[ba.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ba[ba.NOT_FOUND=5]="NOT_FOUND",ba[ba.ALREADY_EXISTS=6]="ALREADY_EXISTS",ba[ba.PERMISSION_DENIED=7]="PERMISSION_DENIED",ba[ba.UNAUTHENTICATED=16]="UNAUTHENTICATED",ba[ba.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ba[ba.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ba[ba.ABORTED=10]="ABORTED",ba[ba.OUT_OF_RANGE=11]="OUT_OF_RANGE",ba[ba.UNIMPLEMENTED=12]="UNIMPLEMENTED",ba[ba.INTERNAL=13]="INTERNAL",ba[ba.UNAVAILABLE=14]="UNAVAILABLE",ba[ba.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let xa=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Ki([4294967295,4294967295],0);function Sa(t){const e=Ea().encode(t),n=new qi;return n.update(e),new Uint8Array(n.digest())}function Ia(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ki([n,i],0),new Ki([r,s],0)]}class ka{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ca(`Invalid padding: ${e}`);if(n<0)throw new Ca(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Ca(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Ca(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ki.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(Ki.fromNumber(n)));return 1===i.compare(Ta)&&(i=new Ki([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ie)return!1;const e=Sa(t),[n,i]=Ia(e);for(let r=0;r<this.hashCount;r++){const t=this.Ee(n,i,r);if(!this.de(t))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),s=new ka(r,i,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Ie)return;const e=Sa(t),[n,i]=Ia(e);for(let r=0;r<this.hashCount;r++){const t=this.Ee(n,i,r);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Oa.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Aa(xr.min(),i,new Qr(br),To(),Po())}}class Oa{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Oa(n,e,Po(),Po(),Po())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class Ma{constructor(t,e){this.targetId=t,this.me=e}}class Pa{constructor(t,e,n=ns.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Da{constructor(){this.fe=0,this.ge=Fa(),this.pe=ns.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=Po(),e=Po(),n=Po();return this.ge.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:ir()}})),new Oa(this.pe,this.ye,t,e,n)}ve(){this.we=!1,this.ge=Fa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,rr(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Na{constructor(t){this.Le=t,this.Be=new Map,this.ke=To(),this.qe=La(),this.Qe=new Qr(br)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:ir()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.ze(n)&&e(n)}))}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const r=i.target;if(io(r))if(0===n){const t=new kr(r.path);this.Ue(e,t,Os.newNoDocument(t,xr.min()))}else rr(1===n);else{const i=this.Ye(e);if(i!==n){const n=this.Ze(t),r=n?this.Xe(n,t,i):1;if(0!==r){this.je(e);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,t)}null==xa||xa.et(function(t,e,n,i,r){var s,o,a,c,l,u;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(h.bloomFilter={applied:0===r,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(u=null===(l=null==d?void 0:d.bits)||void 0===l?void 0:l.padding)&&void 0!==u?u:0,mightContain:t=>{var e;return null!==(e=null==i?void 0:i.mightContain(t))&&void 0!==e&&e}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,t.me,this.Le.tt(),n,r))}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:r=0}=e;let s,o;try{s=os(n).toUint8Array()}catch(t){if(t instanceof es)return er("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new ka(s,i,r)}catch(t){return er(t instanceof Ca?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ie?null:o}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const r=this.Le.tt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.Ue(e,n,null),i++)})),i}rt(t){const e=new Map;this.Be.forEach(((n,i)=>{const r=this.Je(i);if(r){if(n.current&&io(r.target)){const e=new kr(r.target.path);null!==this.ke.get(e)||this.it(i,e)||this.Ue(i,e,Os.newNoDocument(e,t))}n.be&&(e.set(i,n.Ce()),n.ve())}}));let n=Po();this.qe.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Je(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const i=new Aa(t,e,this.Qe,this.ke,n);return this.ke=To(),this.qe=La(),this.Qe=new Qr(br),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Da,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Jr(br),this.qe=this.qe.insert(t,e)),e}ze(t){const e=null!==this.Je(t);return e||Zi("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Da),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function La(){return new Qr(kr.comparator)}function Fa(){return new Qr(kr.comparator)}const Va=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Ua=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),ja=(()=>{const t={and:"AND",or:"OR"};return t})();class Ba{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function za(t,e){return t.useProto3Json||jr(e)?e:{value:e}}function $a(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ha(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Wa(t,e){return $a(t,e.toTimestamp())}function qa(t){return rr(!!t),xr.fromTimestamp(function(t){const e=rs(t);return new wr(e.seconds,e.nanos)}(t))}function Ka(t,e){return Ga(t,e).canonicalString()}function Ga(t,e){const n=function(t){return new Tr(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Qa(t){const e=Tr.fromString(t);return rr(vc(e)),e}function Ya(t,e){return Ka(t.databaseId,e.path)}function Xa(t,e){const n=Qa(e);if(n.get(1)!==t.databaseId.projectId)throw new ar(or.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ar(or.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new kr(ec(n))}function Ja(t,e){return Ka(t.databaseId,e)}function Za(t){const e=Qa(t);return 4===e.length?Tr.emptyPath():ec(e)}function tc(t){return new Tr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ec(t){return rr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function nc(t,e,n){return{name:Ya(t,e),fields:n.value.mapValue.fields}}function ic(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ir()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(rr(void 0===e||"string"==typeof e),ns.fromBase64String(e||"")):(rr(void 0===e||e instanceof Buffer||e instanceof Uint8Array),ns.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?or.UNKNOWN:wa(t.code);return new ar(e,t.message||"")}(o);n=new Pa(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Xa(t,i.document.name),s=qa(i.document.updateTime),o=i.document.createTime?qa(i.document.createTime):xr.min(),a=new Cs({mapValue:{fields:i.document.fields}}),c=Os.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Ra(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Xa(t,i.document),s=i.readTime?qa(i.readTime):xr.min(),o=Os.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Ra([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Xa(t,i.document),s=i.removedTargetIds||[];n=new Ra([],s,r,null)}else{if(!("filter"in e))return ir();{e.filter;const t=e.filter;t.targetId;const{count:i=0,unchangedNames:r}=t,s=new ya(i,r),o=t.targetId;n=new Ma(o,s)}}return n}function rc(t,e){let n;if(e instanceof aa)n={update:nc(t,e.key,e.value)};else if(e instanceof da)n={delete:Ya(t,e.key)};else if(e instanceof ca)n={update:nc(t,e.key,e.data),updateMask:yc(e.fieldMask)};else{if(!(e instanceof fa))return ir();n={verify:Ya(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof $o)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ho)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof qo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Go)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw ir()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Wa(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ir()}(t,e.precondition)),n}function sc(t,e){return t&&t.length>0?(rr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?qa(t.updateTime):qa(e);return n.isEqual(xr.min())&&(n=qa(e)),new Jo(n,t.transformResults||[])}(t,e)))):[]}function oc(t,e){return{documents:[Ja(t,e.path)]}}function ac(t,e){const n={structuredQuery:{}},i=e.path;let r;null!==e.collectionGroup?(r=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Ja(t,r);const s=function(t){if(0!==t.length)return mc(Vs.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:pc(t.field),direction:hc(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=za(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{_t:n,parent:r}}function cc(t){let e=Za(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){rr(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=uc(t);return e instanceof Vs&&js(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Ds(gc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,jr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Rs(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new Rs(n,e)}(n.endAt)),so(e,r,o,s,a,"F",c,l)}function lc(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ir()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function uc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=gc(t.unaryFilter.field);return Fs.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=gc(t.unaryFilter.field);return Fs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gc(t.unaryFilter.field);return Fs.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=gc(t.unaryFilter.field);return Fs.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ir()}}(t):void 0!==t.fieldFilter?function(t){return Fs.create(gc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ir()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Vs.create(t.compositeFilter.filters.map((t=>uc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ir()}}(t.compositeFilter.op))}(t):ir()}function hc(t){return Va[t]}function dc(t){return Ua[t]}function fc(t){return ja[t]}function pc(t){return{fieldPath:t.canonicalString()}}function gc(t){return Ir.fromServerFormat(t.fieldPath)}function mc(t){return t instanceof Fs?function(t){if("=="===t.op){if(Ts(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NAN"}};if(Es(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ts(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NOT_NAN"}};if(Es(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pc(t.field),op:dc(t.op),value:t.value}}}(t):t instanceof Vs?function(t){const e=t.getFilters().map((t=>mc(t)));return 1===e.length?e[0]:{compositeFilter:{op:fc(t.op),filters:e}}}(t):ir()}function yc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function vc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t,e,n,i,r=xr.min(),s=xr.min(),o=ns.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new bc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t){this.ut=t}}function wc(t){const e=cc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?po(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){}ht(t,e){this.Pt(t,e),e.It()}Pt(t,e){if("nullValue"in t)this.Tt(e,5);else if("booleanValue"in t)this.Tt(e,10),e.Et(t.booleanValue?1:0);else if("integerValue"in t)this.Tt(e,15),e.Et(ss(t.integerValue));else if("doubleValue"in t){const n=ss(t.doubleValue);isNaN(n)?this.Tt(e,13):(this.Tt(e,15),Br(n)?e.Et(0):e.Et(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Tt(e,20),"string"==typeof n&&(n=rs(n)),e.dt(`${n.seconds||""}`),e.Et(n.nanos||0)}else if("stringValue"in t)this.At(t.stringValue,e),this.Rt(e);else if("bytesValue"in t)this.Tt(e,30),e.Vt(os(t.bytesValue)),this.Rt(e);else if("referenceValue"in t)this.ft(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Tt(e,45),e.Et(n.latitude||0),e.Et(n.longitude||0)}else"mapValue"in t?ks(t)?this.Tt(e,Number.MAX_SAFE_INTEGER):(this.gt(t.mapValue,e),this.Rt(e)):"arrayValue"in t?(this.yt(t.arrayValue,e),this.Rt(e)):ir()}At(t,e){this.Tt(e,25),this.wt(t,e)}wt(t,e){e.dt(t)}gt(t,e){const n=t.fields||{};this.Tt(e,55);for(const i of Object.keys(n))this.At(i,e),this.Pt(n[i],e)}yt(t,e){const n=t.values||[];this.Tt(e,50);for(const i of n)this.Pt(i,e)}ft(t,e){this.Tt(e,37),kr.fromName(t).path.forEach((t=>{this.Tt(e,60),this.wt(t,e)}))}Tt(t,e){t.Et(e)}Rt(t){t.Et(2)}}xc.St=new xc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(){this.on=new Tc}addToCollectionParentIndex(t,e){return this.on.add(e),Lr.resolve()}getCollectionParents(t,e){return Lr.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return Lr.resolve()}deleteFieldIndex(t,e){return Lr.resolve()}deleteAllFieldIndexes(t){return Lr.resolve()}createTargetIndexes(t,e){return Lr.resolve()}getDocumentsMatchingTarget(t,e){return Lr.resolve(null)}getIndexType(t,e){return Lr.resolve(0)}getFieldIndexes(t,e){return Lr.resolve([])}getNextCollectionGroupToUpdate(t){return Lr.resolve(null)}getMinOffset(t,e){return Lr.resolve(Rr.min())}getMinOffsetFromCollectionGroup(t,e){return Lr.resolve(Rr.min())}updateCollectionGroup(t,e,n){return Lr.resolve()}updateIndexEntries(t,e){return Lr.resolve()}}class Tc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Jr(Tr.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Jr(Tr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Sc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Sc(t,Sc.DEFAULT_COLLECTION_PERCENTILE,Sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sc.DEFAULT_COLLECTION_PERCENTILE=10,Sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sc.DEFAULT=new Sc(41943040,Sc.DEFAULT_COLLECTION_PERCENTILE,Sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sc.DISABLED=new Sc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Ic(0)}static Nn(){return new Ic(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(){this.changes=new xo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Os.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Lr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ra(n.mutation,t,ts.empty(),wr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Po()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Po()){const i=Co();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Io();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Co();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Po())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=To();const s=Oo(),o=function(){return Oo()}();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof ca)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),ra(o.mutation,e,o.mutation.getFieldMask(),wr.now())):s.set(e.key,ts.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Cc(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Oo();let i=new Qr(((t,e)=>t-e)),r=Po();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||ts.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||Po()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=Ao();c.forEach((t=>{if(!r.has(t)){const i=na(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return Lr.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return kr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):co(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):Lr.resolve(Co());let o=-1,a=r;return s.next((e=>Lr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Lr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Po()))).next((t=>({batchId:o,changes:ko(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new kr(e)).next((t=>{let e=Io();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=Io();return this.indexManager.getCollectionParents(t,r).next((o=>Lr.forEach(o,(o=>{const a=function(t,e){return new ro(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,Os.newInvalidDocument(i)))}));let n=Io();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&ra(s.mutation,i,ts.empty(),wr.now()),vo(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return Lr.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(t){return{id:t.id,version:t.version,createTime:qa(t.createTime)}}(e)),Lr.resolve()}getNamedQuery(t,e){return Lr.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(t){return{name:t.name,query:wc(t.bundledQuery),readTime:qa(t.readTime)}}(e)),Lr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.overlays=new Qr(kr.comparator),this.lr=new Map}getOverlay(t,e){return Lr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Co();return Lr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.lt(t,e,i)})),Lr.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.lr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.lr.delete(n)),Lr.resolve()}getOverlaysForCollection(t,e,n){const i=Co(),r=e.length+1,s=new kr(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Lr.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Qr(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Co(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Co(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return Lr.resolve(o)}lt(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.lr.get(i.largestBatchId).delete(n.key);this.lr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ma(e,n));let r=this.lr.get(e);void 0===r&&(r=Po(),this.lr.set(e,r)),this.lr.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.hr=new Jr(Pc.Pr),this.Ir=new Jr(Pc.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const n=new Pc(t,e);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.dr(new Pc(t,e))}Ar(t,e){t.forEach((t=>this.removeReference(t,e)))}Rr(t){const e=new kr(new Tr([])),n=new Pc(e,t),i=new Pc(e,t+1),r=[];return this.Ir.forEachInRange([n,i],(t=>{this.dr(t),r.push(t.key)})),r}Vr(){this.hr.forEach((t=>this.dr(t)))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new kr(new Tr([])),n=new Pc(e,t),i=new Pc(e,t+1);let r=Po();return this.Ir.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Pc(t,0),n=this.hr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Pc{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return kr.comparator(t.key,e.key)||br(t.gr,e.gr)}static Tr(t,e){return br(t.gr,e.gr)||kr.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new Jr(Pc.Pr)}checkEmpty(t){return Lr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new pa(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this.yr=this.yr.add(new Pc(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Lr.resolve(s)}lookupMutationBatch(t,e){return Lr.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Sr(n),r=i<0?0:i;return Lr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Lr.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(t){return Lr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Pc(e,0),i=new Pc(e,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([n,i],(t=>{const e=this.wr(t.gr);r.push(e)})),Lr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Jr(br);return e.forEach((t=>{const e=new Pc(t,0),i=new Pc(t,Number.POSITIVE_INFINITY);this.yr.forEachInRange([e,i],(t=>{n=n.add(t.gr)}))})),Lr.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;kr.isDocumentKey(r)||(r=r.child(""));const s=new Pc(new kr(r),0);let o=new Jr(br);return this.yr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.gr)),!0)}),s),Lr.resolve(this.br(o))}br(t){const e=[];return t.forEach((t=>{const n=this.wr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){rr(0===this.Dr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return Lr.forEach(e.mutations,(i=>{const r=new Pc(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.yr=n}))}Fn(t){}containsKey(t,e){const n=new Pc(e,0),i=this.yr.firstAfterOrEqual(n);return Lr.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Lr.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t){this.Cr=t,this.docs=function(){return new Qr(kr.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Lr.resolve(n?n.document.mutableCopy():Os.newInvalidDocument(e))}getEntries(t,e){let n=To();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Os.newInvalidDocument(t))})),Lr.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=To();const s=e.path,o=new kr(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Mr(Or(o),n)<=0||(i.has(o.key)||vo(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Lr.resolve(r)}getAllFromCollectionGroup(t,e,n,i){ir()}vr(t,e){return Lr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Lc(this)}getSize(t){return Lr.resolve(this.size)}}class Lc extends kc{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(n)})),Lr.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t){this.persistence=t,this.Fr=new xo((t=>eo(t)),no),this.lastRemoteSnapshotVersion=xr.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Mc,this.targetCount=0,this.Nr=Ic.On()}forEachTarget(t,e){return this.Fr.forEach(((t,n)=>e(n))),Lr.resolve()}getLastRemoteSnapshotVersion(t){return Lr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Lr.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),Lr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Mr&&(this.Mr=e),Lr.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new Ic(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,Lr.resolve()}updateTargetData(t,e){return this.kn(e),Lr.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,Lr.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Fr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),Lr.waitFor(r).next((()=>i))}getTargetCount(t){return Lr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fr.get(e)||null;return Lr.resolve(n)}addMatchingKeys(t,e,n){return this.Or.Er(e,n),Lr.resolve()}removeMatchingKeys(t,e,n){this.Or.Ar(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),Lr.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),Lr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Or.mr(e);return Lr.resolve(n)}containsKey(t,e){return Lr.resolve(this.Or.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e){this.Lr={},this.overlays={},this.Br=new Ur(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Fc(this),this.indexManager=new Ec,this.remoteDocumentCache=function(t){return new Nc(t)}((t=>this.referenceDelegate.Qr(t))),this.serializer=new _c(e),this.Kr=new Oc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Rc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Lr[t.toKey()];return n||(n=new Dc(e,this.referenceDelegate),this.Lr[t.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,n){Zi("MemoryPersistence","Starting transaction:",t);const i=new Uc(this.Br.next());return this.referenceDelegate.$r(),n(i).next((t=>this.referenceDelegate.Ur(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Wr(t,e){return Lr.or(Object.values(this.Lr).map((n=>()=>n.containsKey(t,e))))}}class Uc extends Dr{constructor(t){super(),this.currentSequenceNumber=t}}class jc{constructor(t){this.persistence=t,this.Gr=new Mc,this.zr=null}static jr(t){return new jc(t)}get Hr(){if(this.zr)return this.zr;throw ir()}addReference(t,e,n){return this.Gr.addReference(n,e),this.Hr.delete(n.toString()),Lr.resolve()}removeReference(t,e,n){return this.Gr.removeReference(n,e),this.Hr.add(n.toString()),Lr.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),Lr.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach((t=>this.Hr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Lr.forEach(this.Hr,(n=>{const i=kr.fromPath(n);return this.Jr(t,i).next((t=>{t||e.removeEntry(i,xr.min())}))})).next((()=>(this.zr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Jr(t,e).next((t=>{t?this.Hr.delete(e.toString()):this.Hr.add(e.toString())}))}Qr(t){return 0}Jr(t,e){return Lr.or([()=>Lr.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bc{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.ki=n,this.qi=i}static Qi(t,e){let n=Po(),i=Po();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Bc(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return(0,a.nr)()?8:Fr((0,a.ZQ)())>0?6:4}()}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.zi(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.ji(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new zc;return this.Hi(t,e,n).next((i=>{if(r.result=i,this.$i)return this.Ji(t,e,n,i.size)}))})).next((()=>r.result))}Ji(t,e,n,i){return n.documentReadCount<this.Ui?(Ji()<=o.$b.DEBUG&&Zi("QueryEngine","SDK will not create cache indexes for query:",yo(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),Lr.resolve()):(Ji()<=o.$b.DEBUG&&Zi("QueryEngine","Query:",yo(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Wi*i?(Ji()<=o.$b.DEBUG&&Zi("QueryEngine","The SDK decides to create cache indexes for query:",yo(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,uo(e))):Lr.resolve())}zi(t,e){if(ao(e))return Lr.resolve(null);let n=uo(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=po(e,null,"F"),n=uo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=Po(...i);return this.Gi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Yi(e,i);return this.Zi(e,s,r,n.readTime)?this.zi(t,po(e,null,"F")):this.Xi(t,s,e,n)}))))})))))}ji(t,e,n,i){return ao(e)||i.isEqual(xr.min())?Lr.resolve(null):this.Gi.getDocuments(t,n).next((r=>{const s=this.Yi(e,r);return this.Zi(e,s,n,i)?Lr.resolve(null):(Ji()<=o.$b.DEBUG&&Zi("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yo(e)),this.Xi(t,s,e,Ar(i,-1)).next((t=>t)))}))}Yi(t,e){let n=new Jr(_o(t));return e.forEach(((e,i)=>{vo(t,i)&&(n=n.add(i))})),n}Zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Hi(t,e,n){return Ji()<=o.$b.DEBUG&&Zi("QueryEngine","Using full collection scan to execute query:",yo(e)),this.Gi.getDocumentsMatchingQuery(t,e,Rr.min(),n)}Xi(t,e,n,i){return this.Gi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,e,n,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new Qr(br),this.ns=new xo((t=>eo(t)),no),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(n)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ac(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ts)))}}function Wc(t,e,n,i){return new Hc(t,e,n,i)}async function qc(t,e){const n=sr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.os(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=Po();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({_s:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function Kc(t,e){const n=sr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=Lr.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);rr(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Po();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}function Gc(t){const e=sr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qr.getLastRemoteSnapshotVersion(t)))}function Qc(t,e){const n=sr(t),i=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.qr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.qr.addMatchingKeys(t,s.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?l=l.withResumeToken(ns.EMPTY_BYTE_STRING,xr.min()).withLastLimboFreeSnapshotVersion(xr.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,s)&&o.push(n.qr.updateTargetData(t,l))}));let a=To(),c=Po();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(Yc(t,s,e.documentUpdates).next((t=>{a=t.us,c=t.cs}))),!i.isEqual(xr.min())){const e=n.qr.getLastRemoteSnapshotVersion(t).next((e=>n.qr.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return Lr.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.ts=r,t)))}function Yc(t,e,n){let i=Po(),r=Po();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=To();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(xr.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):Zi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{us:i,cs:r}}))}function Xc(t,e){const n=sr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Jc(t,e){const n=sr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.qr.getTargetData(t,e).next((r=>r?(i=r,Lr.resolve(i)):n.qr.allocateTargetId(t).next((r=>(i=new bc(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.qr.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.ts.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(t.targetId,t),n.ns.set(e,t.targetId)),t}))}async function Zc(t,e,n){const i=sr(t),r=i.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Vr(t))throw t;Zi("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.ts=i.ts.remove(e),i.ns.delete(r.target)}function tl(t,e,n){const i=sr(t);let r=xr.min(),s=Po();return i.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const i=sr(t),r=i.ns.get(n);return void 0!==r?Lr.resolve(i.ts.get(r)):i.qr.getTargetData(e,n)}(i,t,uo(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.es.getDocumentsMatchingQuery(t,e,n?r:xr.min(),n?s:Po()))).next((t=>(el(i,bo(e),t),{documents:t,ls:s})))))}function el(t,e,n){let i=t.rs.get(e)||xr.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.rs.set(e,i)}class nl{constructor(){this.activeTargetIds=No()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class il{constructor(){this.eo=new nl,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,n){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new nl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{ro(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Zi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){Zi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol=null;function al(){return null===ol?ol=function(){return 268435456+Math.round(2147483648*Math.random())}():ol++,"0x"+ol.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const cl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.lo()}send(t){this.co(t)}Vo(){this.Po()}mo(){this.To()}fo(t){this.Ao(t)}po(t){this.Ro(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="WebChannelConnection";class hl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=e+"://"+t.host,this.wo=`projects/${n}/databases/${i}`,this.So="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get bo(){return!1}Do(t,e,n,i,r){const s=al(),o=this.Co(t,e.toUriEncodedString());Zi("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(a,i,r),this.Fo(t,o,a,n).then((e=>(Zi("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw er("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Mo(t,e,n,i,r,s){return this.Do(t,e,n,i,r)}vo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Co(t,e){const n=cl[t];return`${this.yo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Fo(t,e,n,i){const r=al();return new Promise(((s,o)=>{const a=new Wi;a.setWithCredentials(!0),a.listenOnce(ji.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ui.NO_ERROR:const e=a.getResponseJson();Zi(ul,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case Ui.TIMEOUT:Zi(ul,`RPC '${t}' ${r} timed out`),o(new ar(or.DEADLINE_EXCEEDED,"Request time out"));break;case Ui.HTTP_ERROR:const n=a.getStatus();if(Zi(ul,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(or).indexOf(e)>=0?e:or.UNKNOWN}(e.status);o(new ar(t,e.message))}else o(new ar(or.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ar(or.UNAVAILABLE,"Connection failed."));break;default:ir()}}finally{Zi(ul,`RPC '${t}' ${r} completed.`)}}));const c=JSON.stringify(i);Zi(ul,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",c,n,15)}))}xo(t,e,n){const i=al(),r=[this.yo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Fi(),o=Vi(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new $i({})),this.vo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const l=r.join("");Zi(ul,`Creating RPC '${t}' stream ${i}: ${l}`,a);const u=s.createWebChannel(l,a);let h=!1,d=!1;const f=new ll({co:e=>{d?Zi(ul,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(h||(Zi(ul,`Opening RPC '${t}' stream ${i} transport.`),u.open(),h=!0),Zi(ul,`RPC '${t}' stream ${i} sending:`,e),u.send(e))},lo:()=>u.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,Hi.EventType.OPEN,(()=>{d||(Zi(ul,`RPC '${t}' stream ${i} transport opened.`),f.Vo())})),p(u,Hi.EventType.CLOSE,(()=>{d||(d=!0,Zi(ul,`RPC '${t}' stream ${i} transport closed`),f.fo())})),p(u,Hi.EventType.ERROR,(e=>{d||(d=!0,er(ul,`RPC '${t}' stream ${i} transport errored:`,e),f.fo(new ar(or.UNAVAILABLE,"The operation could not be completed")))})),p(u,Hi.EventType.MESSAGE,(e=>{var n;if(!d){const r=e.data[0];rr(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Zi(ul,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=va[t];if(void 0!==e)return wa(e)}(e),r=o.message;void 0===n&&(n=or.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),d=!0,f.fo(new ar(n,r)),u.close()}else Zi(ul,`RPC '${t}' stream ${i} received:`,r),f.po(r)}})),p(o,Bi.STAT_EVENT,(e=>{e.stat===zi.PROXY?Zi(ul,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===zi.NOPROXY&&Zi(ul,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.mo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){return new Ba(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e,n=1e3,i=1.5,r=6e4){this.si=t,this.timerId=e,this.Oo=n,this.No=i,this.Lo=r,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(t){this.cancel();const e=Math.floor(this.Bo+this.$o()),n=Math.max(0,Date.now()-this.qo),i=Math.max(0,e-n);i>0&&Zi("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,i,(()=>(this.qo=Date.now(),t()))),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){null!==this.ko&&(this.ko.skipDelay(),this.ko=null)}cancel(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t,e,n,i,r,s,o,a){this.si=t,this.Wo=n,this.Go=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new pl(t,e)}Yo(){return 1===this.state||5===this.state||this.Zo()}Zo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&null===this.jo&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,(()=>this.n_())))}r_(t){this.i_(),this.stream.send(t)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(t,e){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,4!==t?this.Jo.reset():e&&e.code===or.RESOURCE_EXHAUSTED?(tr(e.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):e&&e.code===or.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.o_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(e)}o_(){}auth(){this.state=1;const t=this.__(this.zo),e=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.zo===e&&this.a_(t,n)}),(e=>{t((()=>{const t=new ar(or.UNKNOWN,"Fetching auth token failed: "+e.message);return this.u_(t)}))}))}a_(t,e){const n=this.__(this.zo);this.stream=this.c_(t,e),this.stream.ho((()=>{n((()=>this.listener.ho()))})),this.stream.Io((()=>{n((()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,(()=>(this.Zo()&&(this.state=3),Promise.resolve()))),this.listener.Io())))})),this.stream.Eo((t=>{n((()=>this.u_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Xo(){this.state=5,this.Jo.Ko((async()=>{this.state=0,this.start()}))}u_(t){return Zi("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}__(t){return e=>{this.si.enqueueAndForget((()=>this.zo===t?e():(Zi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ml extends gl{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}c_(t,e){return this.connection.xo("Listen",t,e)}onMessage(t){this.Jo.reset();const e=ic(this.serializer,t),n=function(t){if(!("targetChange"in t))return xr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?xr.min():e.readTime?qa(e.readTime):xr.min()}(t);return this.listener.l_(e,n)}h_(t){const e={};e.database=tc(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;if(n=io(i)?{documents:oc(t,i)}:{query:ac(t,i)._t},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Ha(t,e.resumeToken);const i=za(t,e.expectedCount);null!==i&&(n.expectedCount=i)}else if(e.snapshotVersion.compareTo(xr.min())>0){n.readTime=$a(t,e.snapshotVersion.toTimestamp());const i=za(t,e.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,t);const n=lc(this.serializer,t);n&&(e.labels=n),this.r_(e)}P_(t){const e={};e.database=tc(this.serializer),e.removeTarget=t,this.r_(e)}}class yl extends gl{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(t,e){return this.connection.xo("Write",t,e)}onMessage(t){if(rr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.I_){this.Jo.reset();const e=sc(t.writeResults,t.commitTime),n=qa(t.commitTime);return this.listener.d_(n,e)}return rr(!t.writeResults||0===t.writeResults.length),this.I_=!0,this.listener.A_()}R_(){const t={};t.database=tc(this.serializer),this.r_(t)}E_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>rc(this.serializer,t)))};this.r_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.V_=!1}m_(){if(this.V_)throw new ar(or.FAILED_PRECONDITION,"The client has already been terminated.")}Do(t,e,n,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Do(t,Ga(e,n),i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===or.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ar(or.UNKNOWN,t.toString())}))}Mo(t,e,n,i,r){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Mo(t,Ga(e,n),i,s,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===or.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ar(or.UNKNOWN,t.toString())}))}terminate(){this.V_=!0,this.connection.terminate()}}class bl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){0===this.g_&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve()))))}D_(t){"Online"===this.state?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,"Online"===t&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(tr(e),this.y_=!1):Zi("OnlineStateTracker",e)}C_(){null!==this.p_&&(this.p_.cancel(),this.p_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=r,this.O_.ro((t=>{n.enqueueAndForget((async()=>{Al(this)&&(Zi("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=sr(t);e.M_.add(4),await xl(e),e.N_.set("Unknown"),e.M_.delete(4),await wl(e)}(this))}))})),this.N_=new bl(n,i)}}async function wl(t){if(Al(t))for(const e of t.x_)await e(!0)}async function xl(t){for(const e of t.x_)await e(!1)}function El(t,e){const n=sr(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Cl(n)?kl(n):Gl(n).Zo()&&Sl(n,e))}function Tl(t,e){const n=sr(t),i=Gl(n);n.F_.delete(e),i.Zo()&&Il(n,e),0===n.F_.size&&(i.Zo()?i.t_():Al(n)&&n.N_.set("Unknown"))}function Sl(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xr.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gl(t).h_(e)}function Il(t,e){t.L_.xe(e),Gl(t).P_(e)}function kl(t){t.L_=new Na({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Gl(t).start(),t.N_.w_()}function Cl(t){return Al(t)&&!Gl(t).Yo()&&t.F_.size>0}function Al(t){return 0===sr(t).M_.size}function Ol(t){t.L_=void 0}async function Rl(t){t.N_.set("Online")}async function Ml(t){t.F_.forEach(((e,n)=>{Sl(t,e)}))}async function Pl(t,e){Ol(t),Cl(t)?(t.N_.D_(e),kl(t)):t.N_.set("Unknown")}async function Dl(t,e,n){if(t.N_.set("Online"),e instanceof Pa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.F_.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.F_.delete(i),t.L_.removeTarget(i))}(t,e)}catch(n){Zi("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Nl(t,n)}else if(e instanceof Ra?t.L_.Ke(e):e instanceof Ma?t.L_.He(e):t.L_.We(e),!n.isEqual(xr.min()))try{const e=await Gc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.L_.rt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.F_.get(i);r&&t.F_.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const i=t.F_.get(e);if(!i)return;t.F_.set(e,i.withResumeToken(ns.EMPTY_BYTE_STRING,i.snapshotVersion)),Il(t,e);const r=new bc(i.target,e,n,i.sequenceNumber);Sl(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zi("RemoteStore","Failed to raise snapshot:",e),await Nl(t,e)}}async function Nl(t,e,n){if(!Vr(e))throw e;t.M_.add(1),await xl(t),t.N_.set("Offline"),n||(n=()=>Gc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Zi("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await wl(t)}))}function Ll(t,e){return e().catch((n=>Nl(t,n,e)))}async function Fl(t){const e=sr(t),n=Ql(e);let i=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Vl(e);)try{const t=await Xc(e.localStore,i);if(null===t){0===e.v_.length&&n.t_();break}i=t.batchId,Ul(e,t)}catch(t){await Nl(e,t)}jl(e)&&Bl(e)}function Vl(t){return Al(t)&&t.v_.length<10}function Ul(t,e){t.v_.push(e);const n=Ql(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function jl(t){return Al(t)&&!Ql(t).Yo()&&t.v_.length>0}function Bl(t){Ql(t).start()}async function zl(t){Ql(t).R_()}async function $l(t){const e=Ql(t);for(const n of t.v_)e.E_(n.mutations)}async function Hl(t,e,n){const i=t.v_.shift(),r=ga.from(i,e,n);await Ll(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Fl(t)}async function Wl(t,e){e&&Ql(t).T_&&await async function(t,e){if(function(t){return _a(t)&&t!==or.ABORTED}(e.code)){const n=t.v_.shift();Ql(t).e_(),await Ll(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Fl(t)}}(t,e),jl(t)&&Bl(t)}async function ql(t,e){const n=sr(t);n.asyncQueue.verifyOperationInProgress(),Zi("RemoteStore","RemoteStore received new credentials");const i=Al(n);n.M_.add(3),await xl(n),i&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await wl(n)}async function Kl(t,e){const n=sr(t);e?(n.M_.delete(2),await wl(n)):e||(n.M_.add(2),await xl(n),n.N_.set("Unknown"))}function Gl(t){return t.B_||(t.B_=function(t,e,n){const i=sr(t);return i.m_(),new ml(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{ho:Rl.bind(null,t),Io:Ml.bind(null,t),Eo:Pl.bind(null,t),l_:Dl.bind(null,t)}),t.x_.push((async e=>{e?(t.B_.e_(),Cl(t)?kl(t):t.N_.set("Unknown")):(await t.B_.stop(),Ol(t))}))),t.B_}function Ql(t){return t.k_||(t.k_=function(t,e,n){const i=sr(t);return i.m_(),new yl(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:zl.bind(null,t),Eo:Wl.bind(null,t),A_:$l.bind(null,t),d_:Hl.bind(null,t)}),t.x_.push((async e=>{e?(t.k_.e_(),await Fl(t)):(await t.k_.stop(),t.v_.length>0&&(Zi("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))}))),t.k_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Yl{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Yl(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ar(or.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xl(t,e){if(tr("AsyncQueue",`${e}: ${t}`),Vr(t))return new ar(or.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t){this.comparator=t?(e,n)=>t(e,n)||kr.comparator(e.key,n.key):(t,e)=>kr.comparator(t.key,e.key),this.keyedMap=Io(),this.sortedSet=new Qr(this.comparator)}static emptySet(t){return new Jl(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Jl))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Jl;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.q_=new Qr(kr.comparator)}track(t){const e=t.doc.key,n=this.q_.get(e);n?0!==t.type&&3===n.type?this.q_=this.q_.insert(e,t):3===t.type&&1!==n.type?this.q_=this.q_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.q_=this.q_.remove(e):1===t.type&&2===n.type?this.q_=this.q_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):ir():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class tu{constructor(t,e,n,i,r,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new tu(t,e,Jl.emptySet(e),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&go(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some((t=>t.G_()))}}class nu{constructor(){this.queries=new xo((t=>mo(t)),go),this.onlineState="Unknown",this.z_=new Set}}async function iu(t,e){const n=sr(t);let i=3;const r=e.query;let s=n.queries.get(r);s?!s.W_()&&e.G_()&&(i=2):(s=new eu,i=e.G_()?0:1);try{switch(i){case 0:s.K_=await n.onListen(r,!0);break;case 1:s.K_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(t){const n=Xl(t,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&au(n)}async function ru(t,e){const n=sr(t),i=e.query;let r=3;const s=n.queries.get(i);if(s){const t=s.U_.indexOf(e);t>=0&&(s.U_.splice(t,1),0===s.U_.length?r=e.G_()?0:1:!s.W_()&&e.G_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function su(t,e){const n=sr(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.U_)t.H_(r)&&(i=!0);e.K_=r}}i&&au(n)}function ou(t,e,n){const i=sr(t),r=i.queries.get(e);if(r)for(const s of r.U_)s.onError(n);i.queries.delete(e)}function au(t){t.z_.forEach((t=>{t.next()}))}var cu,lu;(lu=cu||(cu={})).J_="default",lu.Cache="cache";class uu{constructor(t,e,n){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new tu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache)return!0;if(!this.G_())return!0;const n="Offline"!==e;return(!this.options.ra||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}na(t){t=tu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==cu.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hu{constructor(t){this.key=t}}class du{constructor(t){this.key=t}}class fu{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Po(),this.mutatedKeys=Po(),this.Ia=_o(t),this.Ta=new Jl(this.Ia)}get Ea(){return this.la}da(t,e){const n=e?e.Aa:new Zl,i=e?e.Ta:this.Ta;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=vo(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Ra(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ia(u,a)>0||c&&this.Ia(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Ta:s,Aa:n,Zi:o,mutatedKeys:r}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const r=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const s=t.Aa.Q_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ir()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ia(t.doc,e.doc))),this.Va(n),i=null!=i&&i;const o=e&&!i?this.ma():[],a=0===this.Pa.size&&this.current&&!i?1:0,c=a!==this.ha;return this.ha=a,0!==s.length||c?{snapshot:new tu(this.query,t.Ta,r,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:o}:{fa:o}}j_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Zl,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach((t=>this.la=this.la.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.la=this.la.delete(t))),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=Po(),this.Ta.forEach((t=>{this.ga(t.key)&&(this.Pa=this.Pa.add(t.key))}));const e=[];return t.forEach((t=>{this.Pa.has(t)||e.push(new du(t))})),this.Pa.forEach((n=>{t.has(n)||e.push(new hu(n))})),e}pa(t){this.la=t.ls,this.Pa=Po();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return tu.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,0===this.ha,this.hasCachedResults)}}class pu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class gu{constructor(t){this.key=t,this.wa=!1}}class mu{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new xo((t=>mo(t)),go),this.Da=new Map,this.Ca=new Set,this.va=new Qr(kr.comparator),this.Fa=new Map,this.Ma=new Mc,this.xa={},this.Oa=new Map,this.Na=Ic.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return!0===this.La}}async function yu(t,e,n=!0){const i=Uu(t);let r;const s=i.ba.get(e);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ya()):r=await bu(i,e,n,!0),r}async function vu(t,e){const n=Uu(t);await bu(n,e,!0,!1)}async function bu(t,e,n,i){const r=await Jc(t.localStore,uo(e)),s=r.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return i&&(a=await _u(t,e,s,"current"===o,r.resumeToken)),t.isPrimaryClient&&n&&El(t.remoteStore,r),a}async function _u(t,e,n,i,r){t.Ba=(e,n,i)=>async function(t,e,n,i){let r=e.view.da(n);r.Zi&&(r=await tl(t.localStore,e.query,!1).then((({documents:t})=>e.view.da(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=i&&null!=i.targetMismatches.get(e.targetId),a=e.view.applyChanges(r,t.isPrimaryClient,s,o);return Pu(t,e.targetId,a.fa),a.snapshot}(t,e,n,i);const s=await tl(t.localStore,e,!0),o=new fu(e,s.ls),a=o.da(s.documents),c=Oa.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),l=o.applyChanges(a,t.isPrimaryClient,c);Pu(t,n,l.fa);const u=new pu(e,n,o);return t.ba.set(e,u),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),l.snapshot}async function wu(t,e,n){const i=sr(t),r=i.ba.get(e),s=i.Da.get(r.targetId);if(s.length>1)return i.Da.set(r.targetId,s.filter((t=>!go(t,e)))),void i.ba.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Zc(i.localStore,r.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(r.targetId),n&&Tl(i.remoteStore,r.targetId),Ru(i,r.targetId)})).catch(Nr)):(Ru(i,r.targetId),await Zc(i.localStore,r.targetId,!0))}async function xu(t,e){const n=sr(t),i=n.ba.get(e),r=n.Da.get(i.targetId);n.isPrimaryClient&&1===r.length&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Tl(n.remoteStore,i.targetId))}async function Eu(t,e,n){const i=ju(t);try{const t=await function(t,e){const n=sr(t),i=wr.now(),r=e.reduce(((t,e)=>t.add(e.key)),Po());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=To(),c=Po();return n.ss.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=sa(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new ca(t.key,e,As(e.value.mapValue),Zo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:ko(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.xa[t.currentUser.toKey()];i||(i=new Qr(br)),i=i.insert(e,n),t.xa[t.currentUser.toKey()]=i}(i,t.batchId,n),await Lu(i,t.changes),await Fl(i.remoteStore)}catch(t){const e=Xl(t,"Failed to persist write");n.reject(e)}}async function Tu(t,e){const n=sr(t);try{const t=await Qc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Fa.get(e);i&&(rr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.wa=!0:t.modifiedDocuments.size>0?rr(i.wa):t.removedDocuments.size>0&&(rr(i.wa),i.wa=!1))})),await Lu(n,t,e)}catch(t){await Nr(t)}}function Su(t,e,n){const i=sr(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ba.forEach(((n,i)=>{const r=i.view.j_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=sr(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.U_)r.j_(e)&&(i=!0)})),i&&au(n)}(i.eventManager,e),t.length&&i.Sa.l_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Iu(t,e,n){const i=sr(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Fa.get(e),s=r&&r.key;if(s){let t=new Qr(kr.comparator);t=t.insert(s,Os.newNoDocument(s,xr.min()));const n=Po().add(s),r=new Aa(xr.min(),new Map,new Qr(br),t,n);await Tu(i,r),i.va=i.va.remove(s),i.Fa.delete(e),Nu(i)}else await Zc(i.localStore,e,!1).then((()=>Ru(i,e,n))).catch(Nr)}async function ku(t,e){const n=sr(t),i=e.batch.batchId;try{const t=await Kc(n.localStore,e);Ou(n,i,null),Au(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Lu(n,t)}catch(t){await Nr(t)}}async function Cu(t,e,n){const i=sr(t);try{const t=await function(t,e){const n=sr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(rr(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Ou(i,e,n),Au(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Lu(i,t)}catch(n){await Nr(n)}}function Au(t,e){(t.Oa.get(e)||[]).forEach((t=>{t.resolve()})),t.Oa.delete(e)}function Ou(t,e,n){const i=sr(t);let r=i.xa[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.xa[i.currentUser.toKey()]=r}}function Ru(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Da.get(e))t.ba.delete(i),n&&t.Sa.ka(i,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach((e=>{t.Ma.containsKey(e)||Mu(t,e)}))}function Mu(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);null!==n&&(Tl(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Nu(t))}function Pu(t,e,n){for(const i of n)i instanceof hu?(t.Ma.addReference(i.key,e),Du(t,i)):i instanceof du?(Zi("SyncEngine","Document no longer in limbo: "+i.key),t.Ma.removeReference(i.key,e),t.Ma.containsKey(i.key)||Mu(t,i.key)):ir()}function Du(t,e){const n=e.key,i=n.path.canonicalString();t.va.get(n)||t.Ca.has(i)||(Zi("SyncEngine","New document in limbo: "+n),t.Ca.add(i),Nu(t))}function Nu(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new kr(Tr.fromString(e)),i=t.Na.next();t.Fa.set(i,new gu(n)),t.va=t.va.insert(n,i),El(t.remoteStore,new bc(uo(oo(n.path)),i,"TargetPurposeLimboResolution",Ur.oe))}}async function Lu(t,e,n){const i=sr(t),r=[],s=[],o=[];i.ba.isEmpty()||(i.ba.forEach(((t,a)=>{o.push(i.Ba(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=Bc.Qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Sa.l_(r),await async function(t,e){const n=sr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Lr.forEach(e,(e=>Lr.forEach(e.ki,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Lr.forEach(e.qi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Vr(t))throw t;Zi("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.ts.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.ts=n.ts.insert(t,r)}}}(i.localStore,s))}async function Fu(t,e){const n=sr(t);if(!n.currentUser.isEqual(e)){Zi("SyncEngine","User change. New user:",e.toKey());const t=await qc(n.localStore,e);n.currentUser=e,function(t,e){t.Oa.forEach((t=>{t.forEach((t=>{t.reject(new ar(or.CANCELLED,e))}))})),t.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Lu(n,t._s)}}function Vu(t,e){const n=sr(t),i=n.Fa.get(e);if(i&&i.wa)return Po().add(i.key);{let t=Po();const i=n.Da.get(e);if(!i)return t;for(const e of i){const i=n.ba.get(e);t=t.unionWith(i.view.Ea)}return t}}function Uu(t){const e=sr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Iu.bind(null,e),e.Sa.l_=su.bind(null,e.eventManager),e.Sa.ka=ou.bind(null,e.eventManager),e}function ju(t){const e=sr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ku.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Cu.bind(null,e),e}class Bu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=fl(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Wc(this.persistence,new $c,t.initialUser,this.serializer)}createPersistence(t){return new Vc(jc.jr,this.serializer)}createSharedClientState(t){return new il}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Su(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fu.bind(null,this.syncEngine),await Kl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new nu}()}createDatastore(t){const e=fl(t.databaseInfo.databaseId),n=function(t){return new hl(t)}(t.databaseInfo);return function(t,e,n,i){return new vl(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new _l(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>Su(this.syncEngine,t,0)),function(){return sl.D()?new sl:new rl}())}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new mu(t,e,n,i,r,s);return o&&(a.La=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(t){const e=sr(t);Zi("RemoteStore","RemoteStore shutting down."),e.M_.add(5),await xl(e),e.O_.shutdown(),e.N_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $u{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):tr("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hu{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Qi.UNAUTHENTICATED,this.clientId=vr.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Zi("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Zi("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ar(or.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Xl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Wu(t,e){t.asyncQueue.verifyOperationInProgress(),Zi("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await qc(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function qu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Gu(t);Zi("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>ql(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ql(e.remoteStore,n))),t._onlineComponents=e}function Ku(t){return"FirebaseError"===t.name?t.code===or.FAILED_PRECONDITION||t.code===or.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Gu(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Zi("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ku(n))throw n;er("Error using user provided cache. Falling back to memory cache: "+n),await Wu(t,new Bu)}}else Zi("FirestoreClient","Using default OfflineComponentProvider"),await Wu(t,new Bu);return t._offlineComponents}async function Qu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Zi("FirestoreClient","Using user provided OnlineComponentProvider"),await qu(t,t._uninitializedComponentsProvider._online)):(Zi("FirestoreClient","Using default OnlineComponentProvider"),await qu(t,new zu))),t._onlineComponents}function Yu(t){return Qu(t).then((t=>t.syncEngine))}async function Xu(t){const e=await Qu(t),n=e.eventManager;return n.onListen=yu.bind(null,e.syncEngine),n.onUnlisten=wu.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vu.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xu.bind(null,e.syncEngine),n}function Ju(t,e,n={}){const i=new cr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new $u({next:s=>{e.enqueueAndForget((()=>ru(t,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new ar(or.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new ar(or.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:t=>r.reject(t)}),o=new uu(oo(n.path),s,{includeMetadataChanges:!0,ra:!0});return iu(t,o)}(await Xu(t),t.asyncQueue,e,n,i))),i.promise}function Zu(t,e,n={}){const i=new cr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new $u({next:n=>{e.enqueueAndForget((()=>ru(t,o))),n.fromCache&&"server"===i.source?r.reject(new ar(or.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new uu(n,s,{includeMetadataChanges:!0,ra:!0});return iu(t,o)}(await Xu(t),t.asyncQueue,e,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function th(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const eh=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t,e,n){if(!n)throw new ar(or.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ih(t,e,n,i){if(!0===e&&!0===i)throw new ar(or.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rh(t){if(!kr.isDocumentKey(t))throw new ar(or.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sh(t){if(kr.isDocumentKey(t))throw new ar(or.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oh(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ir()}function ah(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ar(or.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oh(t);throw new ar(or.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ch{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ar(or.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ar(or.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ih("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=th(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lh{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ch({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ar(or.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ar(or.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ch(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ur;switch(t.type){case"firstParty":return new pr(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ar(or.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=eh.get(t);e&&(Zi("ComponentProvider","Removing Datastore"),eh.delete(t),e.terminate())}(this),Promise.resolve()}}function uh(t,e,n,i={}){var r;const s=(t=ah(t,lh))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Qi.MOCK_USER;else{e=(0,a.Fy)(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new ar(or.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Qi(s)}t._authCredentials=new hr(new lr(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new hh(this.firestore,t,this._query)}}class dh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dh(this.firestore,t,this._key)}}class fh extends hh{constructor(t,e,n){super(t,e,oo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dh(this.firestore,null,new kr(t))}withConverter(t){return new fh(this.firestore,t,this._path)}}function ph(t,e,...n){if(t=(0,a.Ku)(t),nh("collection","path",e),t instanceof lh){const i=Tr.fromString(e,...n);return sh(i),new fh(t,null,i)}{if(!(t instanceof dh||t instanceof fh))throw new ar(or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Tr.fromString(e,...n));return sh(i),new fh(t.firestore,null,i)}}function gh(t,e,...n){if(t=(0,a.Ku)(t),1===arguments.length&&(e=vr.newId()),nh("doc","path",e),t instanceof lh){const i=Tr.fromString(e,...n);return rh(i),new dh(t,null,new kr(i))}{if(!(t instanceof dh||t instanceof fh))throw new ar(or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Tr.fromString(e,...n));return rh(i),new dh(t.firestore,t instanceof fh?t.converter:null,new kr(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mh{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new pl(this,"async_queue_retry"),this.hu=()=>{const t=dl();t&&Zi("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Jo.Uo()};const t=dl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=dl();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise((()=>{}));const e=new cr;return this.Iu((()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.su.push(t),this.Tu())))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(t){if(!Vr(t))throw t;Zi("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Jo.Ko((()=>this.Tu()))}}Iu(t){const e=this.iu.then((()=>(this.uu=!0,t().catch((t=>{this.au=t,this.uu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw tr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.uu=!1,t))))));return this.iu=e,e}enqueueAfterDelay(t,e,n){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=Yl.createAndSchedule(this,t,e,n,(t=>this.Eu(t)));return this._u.push(i),i}Pu(){this.au&&ir()}verifyOperationInProgress(){}async du(){let t;do{t=this.iu,await t}while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then((()=>{this._u.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._u)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.du()}))}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class yh extends lh{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=function(){return new mh}(),this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_h(this),this._firestoreClient.terminate()}}function vh(t,e){const n="object"==typeof t?t:(0,r.Sx)(),i="string"==typeof t?t:e||"(default)",s=(0,r.j6)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=(0,a.yU)("firestore");t&&uh(s,...t)}return s}function bh(t){return t._firestoreClient||_h(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _h(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new us(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,th(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Hu(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wh(ns.fromBase64String(t))}catch(t){throw new ar(or.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new wh(ns.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ar(or.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ir(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eh{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ar(or.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ar(or.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return br(this._lat,t._lat)||br(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=/^__.*__$/;class Ih{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ca(t,this.data,this.fieldMask,e,this.fieldTransforms):new aa(t,this.data,e,this.fieldTransforms)}}function kh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ir()}}class Ch{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.mu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Ch(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.gu({path:n,yu:!1});return i.wu(t),i}Su(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.gu({path:n,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return jh(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(0===t.length)throw this.Du("Document fields must not be empty");if(kh(this.fu)&&Sh.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Ah{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||fl(t)}Fu(t,e,n,i=!1){return new Ch({fu:t,methodName:e,vu:n,path:Ir.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oh(t){const e=t._freezeSettings(),n=fl(t._databaseId);return new Ah(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rh(t,e,n,i,r,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,r);Lh("Data must be an object, but it was:",o,i);const a=Dh(i,o);let c,l;if(s.merge)c=new ts(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Fh(e,i,n);if(!o.contains(r))throw new ar(or.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Bh(t,r)||t.push(r)}c=new ts(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new Ih(new Cs(a),c,l)}function Mh(t,e,n,i=!1){return Ph(n,t.Fu(i?4:3,e))}function Ph(t,e){if(Nh(t=(0,a.Ku)(t)))return Lh("Unsupported field value:",e,t),Dh(t,e);if(t instanceof Eh)return function(t,e){if(!kh(e.fu))throw e.Du(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Du(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&4!==e.fu)throw e.Du("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Ph(r,e.bu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Vo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=wr.fromDate(t);return{timestampValue:$a(e.serializer,n)}}if(t instanceof wr){const n=new wr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:$a(e.serializer,n)}}if(t instanceof Th)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof wh)return{bytesValue:Ha(e.serializer,t._byteString)};if(t instanceof dh){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Du(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ka(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Du(`Unsupported field value: ${oh(t)}`)}(t,e)}function Dh(t,e){const n={};return Gr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kr(t,((t,i)=>{const r=Ph(i,e.pu(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Nh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof wr||t instanceof Th||t instanceof wh||t instanceof dh||t instanceof Eh)}function Lh(t,e,n){if(!Nh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=oh(n);throw"an object"===i?e.Du(t+" a custom object"):e.Du(t+" "+i)}}function Fh(t,e,n){if((e=(0,a.Ku)(e))instanceof xh)return e._internalPath;if("string"==typeof e)return Uh(t,e);throw jh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Vh=new RegExp("[~\\*/\\[\\]]");function Uh(t,e,n){if(e.search(Vh)>=0)throw jh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xh(...e.split("."))._internalPath}catch(w){throw jh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jh(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new ar(or.INVALID_ARGUMENT,a+t+c)}function Bh(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new dh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new $h(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Hh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class $h extends zh{data(){return super.data()}}function Hh(t,e){return"string"==typeof e?Uh(t,e):e instanceof xh?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ar(or.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qh{}class Kh extends qh{}function Gh(t,e,...n){let i=[];e instanceof qh&&i.push(e),i=i.concat(n),function(t){const e=t.filter((t=>t instanceof Yh)).length,n=t.filter((t=>t instanceof Qh)).length;if(e>1||e>0&&n>0)throw new ar(or.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i);for(const r of i)t=r._apply(t);return t}class Qh extends Kh{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Qh(t,e,n)}_apply(t){const e=this._parse(t);return Zh(t._query,e),new hh(t.firestore,t.converter,fo(t._query,e))}_parse(t){const e=Oh(t.firestore),n=function(t,e,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ar(or.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Jh(o,s);const e=[];for(const n of o)e.push(Xh(i,t,n));a={arrayValue:{values:e}}}else a=Xh(i,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Jh(o,s),a=Mh(n,e,o,"in"===s||"not-in"===s);return Fs.create(r,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class Yh extends qh{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Yh(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Vs.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const i=e.getFlattenedFilters();for(const r of i)Zh(n,r),n=fo(n,r)}(t._query,e),new hh(t.firestore,t.converter,fo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Xh(t,e,n){if("string"==typeof(n=(0,a.Ku)(n))){if(""===n)throw new ar(or.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!co(e)&&-1!==n.indexOf("/"))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(Tr.fromString(n));if(!kr.isDocumentKey(i))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return _s(t,new kr(i))}if(n instanceof dh)return _s(t,n._key);throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(n)}.`)}function Jh(t,e){if(!Array.isArray(t)||0===t.length)throw new ar(or.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zh(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ar(or.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ar(or.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class td{convertValue(t,e="none"){switch(fs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ss(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(os(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ir()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Kr(t,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Th(ss(t.latitude),ss(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=cs(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ls(t));default:return null}}convertTimestamp(t){const e=rs(t);return new wr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Tr.fromString(t);rr(vc(n));const i=new hs(n.get(1),n.get(3)),r=new kr(n.popFirst(5));return i.isEqual(e)||tr(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nd{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class id extends zh{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Hh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class rd extends id{data(t={}){return super.data(t)}}class sd{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new nd(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new rd(this._firestore,this._userDataWriter,n.key,n,new nd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ar(or.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new rd(t._firestore,t._userDataWriter,n.doc.key,n.doc,new nd(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new rd(t._firestore,t._userDataWriter,e.doc.key,e.doc,new nd(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:od(e.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function od(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ir()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ad(t){t=ah(t,dh);const e=ah(t.firestore,yh);return Ju(bh(e),t._key).then((n=>pd(e,t,n)))}class cd extends td{constructor(t){super(),this.firestore=t}convertBytes(t){return new wh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new dh(this.firestore,null,e)}}function ld(t){t=ah(t,hh);const e=ah(t.firestore,yh),n=bh(e),i=new cd(e);return Wh(t._query),Zu(n,t._query).then((n=>new sd(e,i,t,n)))}function ud(t,e,n){t=ah(t,dh);const i=ah(t.firestore,yh),r=ed(t.converter,e,n);return fd(i,[Rh(Oh(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Zo.none())])}function hd(t){return fd(ah(t.firestore,yh),[new da(t._key,Zo.none())])}function dd(t,e){const n=ah(t.firestore,yh),i=gh(t),r=ed(t.converter,e);return fd(n,[Rh(Oh(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,Zo.exists(!1))]).then((()=>i))}function fd(t,e){return function(t,e){const n=new cr;return t.asyncQueue.enqueueAndForget((async()=>Eu(await Yu(t),e,n))),n.promise}(bh(t),e)}function pd(t,e,n){const i=n.docs.get(e._key),r=new cd(t);return new id(t,r,e._key,i,new nd(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Yi=t}(r.MF),(0,r.om)(new s.uA("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new yh(new dr(t.getProvider("auth-internal")),new mr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ar(or.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(Gi,"4.6.1",t),(0,r.KO)(Gi,"4.6.1","esm2017")}()},7530:function(t,e,n){n.d(e,{dG:function(){return Pe},gf:function(){return De},xD:function(){return Ne}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(4979),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var i=n(6540),r=n(852),s=n(4046),o=n(8071);const a="@firebase/installations",c="0.6.6",l=1e4,u=`w:${c}`,h="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",f=36e5,p="installations",g="Installations",m={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new s.FA(p,g,m);function v(t){return t instanceof s.g&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b({projectId:t}){return`${d}/projects/${t}/installations`}function _(t){return{token:t.token,requestStatus:2,expiresIn:S(t.expiresIn),creationTime:Date.now()}}async function w(t,e){const n=await e.json(),i=n.error;return y.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function x({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function E(t,{refreshToken:e}){const n=x(t);return n.append("Authorization",I(e)),n}async function T(t){const e=await t();return e.status>=500&&e.status<600?t():e}function S(t){return Number(t.replace("s","000"))}function I(t){return`${h} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=b(t),r=x(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}const o={fid:n,authVersion:h,appId:t.appId,sdkVersion:u},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await T((()=>fetch(i,a)));if(c.ok){const t=await c.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:_(t.authToken)};return e}throw await w("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=/^[cdef][\w-]{21}$/,R="";function M(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=P(t);return O.test(n)?n:R}catch(t){return R}}function P(t){const e=A(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=new Map;function L(t,e){const n=D(t);F(n,e),V(n,e)}function F(t,e){const n=N.get(t);if(n)for(const i of n)i(e)}function V(t,e){const n=j();n&&n.postMessage({key:t,fid:e}),B()}let U=null;function j(){return!U&&"BroadcastChannel"in self&&(U=new BroadcastChannel("[Firebase] FID Change"),U.onmessage=t=>{F(t.data.key,t.data.fid)}),U}function B(){0===N.size&&U&&(U.close(),U=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="firebase-installations-database",$=1,H="firebase-installations-store";let W=null;function q(){return W||(W=(0,o.P2)(z,$,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(H)}}})),W}async function K(t,e){const n=D(t),i=await q(),r=i.transaction(H,"readwrite"),s=r.objectStore(H),o=await s.get(n);return await s.put(e,n),await r.done,o&&o.fid===e.fid||L(t,e.fid),e}async function G(t){const e=D(t),n=await q(),i=n.transaction(H,"readwrite");await i.objectStore(H).delete(e),await i.done}async function Q(t,e){const n=D(t),i=await q(),r=i.transaction(H,"readwrite"),s=r.objectStore(H),o=await s.get(n),a=e(o);return void 0===a?await s.delete(n):await s.put(a,n),await r.done,!a||o&&o.fid===a.fid||L(t,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){let e;const n=await Q(t.appConfig,(n=>{const i=X(n),r=J(t,i);return e=r.registrationPromise,r.installationEntry}));return n.fid===R?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function X(t){const e=t||{fid:M(),registrationStatus:0};return nt(e)}function J(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(y.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Z(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:tt(t)}:{installationEntry:e}}async function Z(t,e){try{const n=await k(t,e);return K(t.appConfig,n)}catch(n){throw v(n)&&409===n.customData.serverCode?await G(t.appConfig):await K(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tt(t){let e=await et(t.appConfig);while(1===e.registrationStatus)await C(100),e=await et(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Y(t);return n||e}return e}function et(t){return Q(t,(t=>{if(!t)throw y.create("installation-not-found");return nt(t)}))}function nt(t){return it(t)?{fid:t.fid,registrationStatus:0}:t}function it(t){return 1===t.registrationStatus&&t.registrationTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt({appConfig:t,heartbeatServiceProvider:e},n){const i=st(t,n),r=E(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}const o={installation:{sdkVersion:u,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await T((()=>fetch(i,a)));if(c.ok){const t=await c.json(),e=_(t);return e}throw await w("Generate Auth Token",c)}function st(t,{fid:e}){return`${b(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(t,e=!1){let n;const i=await Q(t.appConfig,(i=>{if(!ut(i))throw y.create("not-registered");const r=i.authToken;if(!e&&ht(r))return i;if(1===r.requestStatus)return n=at(t,e),i;{if(!navigator.onLine)throw y.create("app-offline");const e=ft(i);return n=lt(t,e),e}})),r=n?await n:i.authToken;return r}async function at(t,e){let n=await ct(t.appConfig);while(1===n.authToken.requestStatus)await C(100),n=await ct(t.appConfig);const i=n.authToken;return 0===i.requestStatus?ot(t,e):i}function ct(t){return Q(t,(t=>{if(!ut(t))throw y.create("not-registered");const e=t.authToken;return pt(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}async function lt(t,e){try{const n=await rt(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await K(t.appConfig,i),n}catch(n){if(!v(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await K(t.appConfig,n)}else await G(t.appConfig);throw n}}function ut(t){return void 0!==t&&2===t.registrationStatus}function ht(t){return 2===t.requestStatus&&!dt(t)}function dt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+f}function ft(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function pt(t){return 1===t.requestStatus&&t.requestTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t){const e=t,{installationEntry:n,registrationPromise:i}=await Y(e);return i?i.catch(console.error):ot(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t,e=!1){const n=t;await yt(n);const i=await ot(n,e);return i.token}async function yt(t){const{registrationPromise:e}=await Y(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(t){if(!t||!t.options)throw bt("App Configuration");if(!t.name)throw bt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bt(t){return y.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="installations",wt="installations-internal",xt=t=>{const e=t.getProvider("app").getImmediate(),n=vt(e),r=(0,i.j6)(e,"heartbeat"),s={app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()};return s},Et=t=>{const e=t.getProvider("app").getImmediate(),n=(0,i.j6)(e,_t).getImmediate(),r={getId:()=>gt(n),getToken:t=>mt(n,t)};return r};function Tt(){(0,i.om)(new r.uA(_t,xt,"PUBLIC")),(0,i.om)(new r.uA(wt,Et,"PRIVATE"))}Tt(),(0,i.KO)(a,c),(0,i.KO)(a,c,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const St="/firebase-messaging-sw.js",It="/firebase-cloud-messaging-push-scope",kt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ct="https://fcmregistrations.googleapis.com/v1",At="google.c.a.c_id",Ot="google.c.a.c_l",Rt="google.c.a.ts",Mt="google.c.a.e";var Pt,Dt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(t){const e=new Uint8Array(t),n=btoa(String.fromCharCode(...e));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Lt(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["DATA_MESSAGE"]=1]="DATA_MESSAGE",t[t["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(Pt||(Pt={})),function(t){t["PUSH_RECEIVED"]="push-received",t["NOTIFICATION_CLICKED"]="notification-clicked"}(Dt||(Dt={}));const Ft="fcm_token_details_db",Vt=5,Ut="fcm_token_object_Store";async function jt(t){if("databases"in indexedDB){const t=await indexedDB.databases(),e=t.map((t=>t.name));if(!e.includes(Ft))return null}let e=null;const n=await(0,o.P2)(Ft,Vt,{upgrade:async(n,i,r,s)=>{var o;if(i<2)return;if(!n.objectStoreNames.contains(Ut))return;const a=s.objectStore(Ut),c=await a.index("fcmSenderId").get(t);if(await a.clear(),c)if(2===i){const t=c;if(!t.auth||!t.p256dh||!t.endpoint)return;e={token:t.fcmToken,createTime:null!==(o=t.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:t.auth,p256dh:t.p256dh,endpoint:t.endpoint,swScope:t.swScope,vapidKey:"string"===typeof t.vapidKey?t.vapidKey:Nt(t.vapidKey)}}}else if(3===i){const t=c;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:Nt(t.auth),p256dh:Nt(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:Nt(t.vapidKey)}}}else if(4===i){const t=c;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:Nt(t.auth),p256dh:Nt(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:Nt(t.vapidKey)}}}}});return n.close(),await(0,o.MR)(Ft),await(0,o.MR)("fcm_vapid_details_db"),await(0,o.MR)("undefined"),Bt(e)?e:null}function Bt(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return"number"===typeof t.createTime&&t.createTime>0&&"string"===typeof t.token&&t.token.length>0&&"string"===typeof e.auth&&e.auth.length>0&&"string"===typeof e.p256dh&&e.p256dh.length>0&&"string"===typeof e.endpoint&&e.endpoint.length>0&&"string"===typeof e.swScope&&e.swScope.length>0&&"string"===typeof e.vapidKey&&e.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="firebase-messaging-database",$t=1,Ht="firebase-messaging-store";let Wt=null;function qt(){return Wt||(Wt=(0,o.P2)(zt,$t,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ht)}}})),Wt}async function Kt(t){const e=Qt(t),n=await qt(),i=await n.transaction(Ht).objectStore(Ht).get(e);if(i)return i;{const e=await jt(t.appConfig.senderId);if(e)return await Gt(t,e),e}}async function Gt(t,e){const n=Qt(t),i=await qt(),r=i.transaction(Ht,"readwrite");return await r.objectStore(Ht).put(e,n),await r.done,e}function Qt({appConfig:t}){return t.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Xt=new s.FA("messaging","Messaging",Yt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Jt(t,e){const n=await ne(t),i=ie(e),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{const e=await fetch(ee(t.appConfig),r);s=await e.json()}catch(o){throw Xt.create("token-subscribe-failed",{errorInfo:null===o||void 0===o?void 0:o.toString()})}if(s.error){const t=s.error.message;throw Xt.create("token-subscribe-failed",{errorInfo:t})}if(!s.token)throw Xt.create("token-subscribe-no-token");return s.token}async function Zt(t,e){const n=await ne(t),i=ie(e.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{const n=await fetch(`${ee(t.appConfig)}/${e.token}`,r);s=await n.json()}catch(o){throw Xt.create("token-update-failed",{errorInfo:null===o||void 0===o?void 0:o.toString()})}if(s.error){const t=s.error.message;throw Xt.create("token-update-failed",{errorInfo:t})}if(!s.token)throw Xt.create("token-update-no-token");return s.token}async function te(t,e){const n=await ne(t),i={method:"DELETE",headers:n};try{const n=await fetch(`${ee(t.appConfig)}/${e}`,i),r=await n.json();if(r.error){const t=r.error.message;throw Xt.create("token-unsubscribe-failed",{errorInfo:t})}}catch(r){throw Xt.create("token-unsubscribe-failed",{errorInfo:null===r||void 0===r?void 0:r.toString()})}}function ee({projectId:t}){return`${Ct}/projects/${t}/registrations`}async function ne({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ie({p256dh:t,auth:e,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:e,p256dh:t}};return i!==kt&&(r.web.applicationPubKey=i),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=6048e5;async function se(t){const e=await ce(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Nt(e.getKey("auth")),p256dh:Nt(e.getKey("p256dh"))},i=await Kt(t.firebaseDependencies);if(i){if(le(i.subscriptionOptions,n))return Date.now()>=i.createTime+re?oe(t,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await te(t.firebaseDependencies,i.token)}catch(r){console.warn(r)}return ae(t.firebaseDependencies,n)}return ae(t.firebaseDependencies,n)}async function oe(t,e){try{const n=await Zt(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Gt(t.firebaseDependencies,i),n}catch(n){throw n}}async function ae(t,e){const n=await Jt(t,e),i={token:n,createTime:Date.now(),subscriptionOptions:e};return await Gt(t,i),i.token}async function ce(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Lt(e)})}function le(t,e){const n=e.vapidKey===t.vapidKey,i=e.endpoint===t.endpoint,r=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&i&&r&&s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return he(e,t),de(e,t),fe(e,t),e}function he(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const i=e.notification.body;i&&(t.notification.body=i);const r=e.notification.image;r&&(t.notification.image=r);const s=e.notification.icon;s&&(t.notification.icon=s)}function de(t,e){e.data&&(t.data=e.data)}function fe(t,e){var n,i,r,s,o;if(!e.fcmOptions&&!(null===(n=e.notification)||void 0===n?void 0:n.click_action))return;t.fcmOptions={};const a=null!==(r=null===(i=e.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==r?r:null===(s=e.notification)||void 0===s?void 0:s.click_action;a&&(t.fcmOptions.link=a);const c=null===(o=e.fcmOptions)||void 0===o?void 0:o.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t){return"object"===typeof t&&!!t&&At in t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t,e){const n=[];for(let i=0;i<t.length;i++)n.push(t.charAt(i)),i<e.length&&n.push(e.charAt(i));return n.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){if(!t||!t.options)throw ye("App Configuration Object");if(!t.name)throw ye("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const i of e)if(!n[i])throw ye(i);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ye(t){return Xt.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),ge("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class ve{constructor(t,e,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=me(t);this.firebaseDependencies={app:t,appConfig:i,installations:e,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(t){try{t.swRegistration=await navigator.serviceWorker.register(St,{scope:It}),t.swRegistration.update().catch((()=>{}))}catch(e){throw Xt.create("failed-service-worker-registration",{browserErrorMessage:null===e||void 0===e?void 0:e.message})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(t,e){if(e||t.swRegistration||await be(t),e||!t.swRegistration){if(!(e instanceof ServiceWorkerRegistration))throw Xt.create("invalid-sw-registration");t.swRegistration=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=kt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(t,e){if(!navigator)throw Xt.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Xt.create("permission-blocked");return await we(t,null===e||void 0===e?void 0:e.vapidKey),await _e(t,null===e||void 0===e?void 0:e.serviceWorkerRegistration),se(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(t,e,n){const i=Te(e),r=await t.firebaseDependencies.analyticsProvider.get();r.logEvent(i,{message_id:n[At],message_name:n[Ot],message_time:n[Rt],message_device_time:Math.floor(Date.now()/1e3)})}function Te(t){switch(t){case Dt.NOTIFICATION_CLICKED:return"notification_open";case Dt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Dt.PUSH_RECEIVED&&("function"===typeof t.onMessageHandler?t.onMessageHandler(ue(n)):t.onMessageHandler.next(ue(n)));const i=n.data;pe(i)&&"1"===i[Mt]&&await Ee(t,n.messageType,i)}const Ie="@firebase/messaging",ke="0.12.8",Ce=t=>{const e=new ve(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(t=>Se(e,t))),e},Ae=t=>{const e=t.getProvider("messaging").getImmediate(),n={getToken:t=>xe(e,t)};return n};function Oe(){(0,i.om)(new r.uA("messaging",Ce,"PUBLIC")),(0,i.om)(new r.uA("messaging-internal",Ae,"PRIVATE")),(0,i.KO)(Ie,ke),(0,i.KO)(Ie,ke,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(){try{await(0,s.eX)()}catch(t){return!1}return"undefined"!==typeof window&&(0,s.zW)()&&(0,s.dM)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(t,e){if(!navigator)throw Xt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t=(0,i.Sx)()){return Re().then((t=>{if(!t)throw Xt.create("unsupported-browser")}),(t=>{throw Xt.create("indexed-db-unsupported")})),(0,i.j6)((0,s.Ku)(t),"messaging").getImmediate()}async function De(t,e){return t=(0,s.Ku)(t),xe(t,e)}function Ne(t,e){return t=(0,s.Ku)(t),Me(t,e)}Oe()},7844:function(t,e,n){n.d(e,{qk:function(){return ie},c7:function(){return se},KR:function(){return re},D:function(){return ne}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4979);var i=n(6540),r=n(4046),s=n(852);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,l=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u extends r.g{constructor(t,e,n=0){super(f(t),`Firebase Storage: ${e} (${f(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return f(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,d;function f(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new u(h.UNKNOWN,t)}function g(t){return new u(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m(t){return new u(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new u(h.UNAUTHENTICATED,t)}function v(){return new u(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function b(t){return new u(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _(){return new u(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w(){return new u(h.CANCELED,"User canceled the upload/download.")}function x(t){return new u(h.INVALID_URL,"Invalid URL '"+t+"'.")}function E(t){return new u(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function T(){return new u(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function S(){return new u(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function I(){return new u(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function k(t){return new u(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function C(t){return new u(h.INVALID_ARGUMENT,t)}function A(){return new u(h.APP_DELETED,"The Firebase app was deleted.")}function O(t){return new u(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function R(t,e){return new u(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function M(t){throw new u(h.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class P{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=P.makeFromUrl(t,e)}catch(i){return new P(t,"")}if(""===n.path)return n;throw E(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),c={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",y=new RegExp(`^https?://${g}/${i}/${m}`,"i"),v={bucket:1,path:2},b=[{regex:a,indices:c,postModify:r},{regex:f,indices:p,postModify:l},{regex:y,indices:v,postModify:l}];for(let o=0;o<b.length;o++){const e=b[o],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let r=i[e.indices.path];r||(r=""),n=new P(t,r),e.postModify(n);break}}if(null==n)throw x(t);return n}}class D{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function h(e){r=setTimeout((()=>{r=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(l)return void d();if(t)return d(),void u.call(null,t,...e);const n=c()||o;if(n)return d(),void u.call(null,t,...e);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let p=!1;function g(t){p||(p=!0,d(),l||(null!==r?(t||(a=2),clearTimeout(r),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function L(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return void 0!==t}function V(t){return"object"===typeof t&&!Array.isArray(t)}function U(t){return"string"===typeof t||t instanceof String}function j(t){return B()&&t instanceof Blob}function B(){return"undefined"!==typeof Blob}function z(t,e,n,i){if(i<e)throw C(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw C(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function H(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t,e){const n=t>=500&&t<600,i=[408,429],r=-1!==i.indexOf(t),s=-1!==e.indexOf(t);return n||r||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(d||(d={}));class q{constructor(t,e,n,i,r,s,o,a,c,l,u,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new K(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===d.NO_ERROR,r=n.getStatus();if(!e||W(r,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===d.ABORT;return void t(!1,new K(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new K(s,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());F(t)?n(t):n()}catch(s){i(s)}else if(null!==r){const t=p();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){const t=this.appDelete_?A():w();i(t)}else{const t=_();i(t)}};this.canceled_?e(!1,new K(!1,null,!0)):this.backoffId_=N(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&L(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class K{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function G(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Y(t,e){e&&(t["X-Firebase-GMPID"]=e)}function X(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function J(t,e,n,i,r,s,o=!0){const a=H(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Y(l,e),G(l,n),Q(l,s),X(l,i),new q(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(B())return new Blob(t);throw new u(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){if("undefined"===typeof atob)throw k("base-64");return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rt{constructor(t,e){this.data=t,this.contentType=e||null}}function st(t,e){switch(t){case it.RAW:return new rt(ot(e));case it.BASE64:case it.BASE64URL:return new rt(ct(t,e));case it.DATA_URL:return new rt(ut(e),ht(e))}throw p()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(r){const r=i,s=t.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320===(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw R(it.DATA_URL,"Malformed data URL.")}return ot(e)}function ct(t,e){switch(t){case it.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){const e=n?"-":"_";throw R(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case it.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){const e=n?"+":"/";throw R(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(r){if(r.message.includes("polyfill"))throw r;throw R(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class lt{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw R(it.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=dt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function ut(t){const e=new lt(t);return e.base64?ct(it.BASE64,e.rest):at(e.rest)}function ht(t){const e=new lt(t);return e.contentType}function dt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,e){let n=0,i="";j(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(j(this.data_)){const n=this.data_,i=et(n,t,e);return null===i?null:new ft(i)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ft(n,!0)}}static getBlob(...t){if(B()){const e=t.map((t=>t instanceof ft?t.data_:t));return new ft(tt.apply(null,e))}{const e=t.map((t=>U(t)?st(it.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const i=new Uint8Array(n);let r=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)i[r++]=t[e]})),new ft(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return V(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function mt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function yt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return e}class bt{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||vt}}let _t=null;function wt(t){return!U(t)||t.length<2?t:yt(t)}function xt(){if(_t)return _t;const t=[];function e(t,e){return wt(e)}t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));const n=new bt("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new bt("size");return r.xform=i,t.push(r),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),_t=t,_t}function Et(t,e){function n(){const n=t["bucket"],i=t["fullPath"],r=new P(n,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function Tt(t,e,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const t=n[s];i[t.local]=t.xform(i,e[t.server])}return Et(i,t),i}function St(t,e,n){const i=pt(e);if(null===i)return null;const r=i;return Tt(t,r,n)}function It(t,e,n,i){const r=pt(e);if(null===r)return null;if(!U(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const r=t["bucket"],s=t["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=$(a,n,i),l=H({alt:"media",token:e});return c+l}));return c[0]}function kt(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){if(!t)throw p()}function Ot(t,e){function n(n,i){const r=St(t,i,e);return At(null!==r),r}return n}function Rt(t,e){function n(n,i){const r=St(t,i,e);return At(null!==r),It(r,i,t.host,t._protocol)}return n}function Mt(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():y():402===e.getStatus()?m(t.bucket):403===e.getStatus()?b(t.path):n,i.status=e.getStatus(),i.serverResponse=n.serverResponse,i}return e}function Pt(t){const e=Mt(t);function n(n,i){let r=e(n,i);return 404===n.getStatus()&&(r=g(t.path)),r.serverResponse=i.serverResponse,r}return n}function Dt(t,e,n){const i=e.fullServerUrl(),r=$(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Ct(r,s,Rt(t,n),o);return a.errorHandler=Pt(e),a}function Nt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Lt(t,e,n){const i=Object.assign({},n);return i["fullPath"]=t.path,i["size"]=e.size(),i["contentType"]||(i["contentType"]=Nt(null,e)),i}function Ft(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Lt(e,i,r),u=kt(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ft.getBlob(h,i,d);if(null===f)throw S();const p={name:l["fullPath"]},g=$(s,t.host,t._protocol),m="POST",y=t.maxUploadRetryTime,v=new Ct(g,m,Ot(t,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Mt(e),v}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Vt=null;class Ut{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=d.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=d.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=d.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw M("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw M("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw M("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw M("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw M("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class jt extends Ut{initXhr(){this.xhr_.responseType="text"}}function Bt(){return Vt?Vt():new jt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(t,e){this._service=t,this._location=e instanceof P?e:P.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new zt(t,e)}get root(){const t=new P(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yt(this._location.path)}get storage(){return this._service}get parent(){const t=gt(this._location.path);if(null===t)return null;const e=new P(this._location.bucket,t);return new zt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw O(t)}}function $t(t,e,n){t._throwIfRoot("uploadBytes");const i=Ft(t.storage,t._location,xt(),new ft(e,!0),n);return t.storage.makeRequestWithTokens(i,Bt).then((e=>({metadata:e,ref:t})))}function Ht(t){t._throwIfRoot("getDownloadURL");const e=Dt(t.storage,t._location,xt());return t.storage.makeRequestWithTokens(e,Bt).then((t=>{if(null===t)throw I();return t}))}function Wt(t,e){const n=mt(t._location.path,e),i=new P(t._location.bucket,n);return new zt(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){return/^[A-Za-z]+:\/\//.test(t)}function Kt(t,e){return new zt(t,e)}function Gt(t,e){if(t instanceof Jt){const n=t;if(null==n._bucket)throw T();const i=new zt(n,n._bucket);return null!=e?Gt(i,e):i}return void 0!==e?Wt(t,e):t}function Qt(t,e){if(e&&qt(e)){if(t instanceof Jt)return Kt(t,e);throw C("To use ref(service, url), the first argument must be a Storage instance.")}return Gt(t,e)}function Yt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:P.makeFromBucketSpec(n,t)}function Xt(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken="string"===typeof s?s:(0,r.Fy)(s,t.app.options.projectId))}class Jt{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?P.makeFromBucketSpec(i,this._host):Yt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=P.makeFromBucketSpec(this._url,t):this._bucket=Yt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){z("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){z("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new zt(this,t)}_makeRequest(t,e,n,i,r=!0){if(this._deleted)return new D(A());{const s=J(t,this._appId,n,i,e,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const Zt="@firebase/storage",te="0.12.4",ee="storage";function ne(t,e,n){return t=(0,r.Ku)(t),$t(t,e,n)}function ie(t){return t=(0,r.Ku)(t),Ht(t)}function re(t,e){return t=(0,r.Ku)(t),Qt(t,e)}function se(t=(0,i.Sx)(),e){t=(0,r.Ku)(t);const n=(0,i.j6)(t,ee),s=n.getImmediate({identifier:e}),o=(0,r.yU)("storage");return o&&oe(s,...o),s}function oe(t,e,n,i={}){Xt(t,e,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Jt(n,r,s,e,i.MF)}function ce(){(0,i.om)(new s.uA(ee,ae,"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(Zt,te,""),(0,i.KO)(Zt,te,"esm2017")}ce()},8071:function(t,e,n){n.d(e,{MR:function(){return x},P2:function(){return w}});n(4979);const i=(t,e)=>e.some((e=>t instanceof e));let r,s;function o(){return r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap;function f(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(b(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&c.set(e,t)})).catch((()=>{})),d.set(e,t),e}function p(t){if(l.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));l.set(t,e)}let g={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return l.get(t);if("objectStoreNames"===e)return t.objectStoreNames||u.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function m(t){g=t(g)}function y(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(t)?function(...e){return t.apply(_(this),e),b(c.get(this))}:function(...e){return b(t.apply(_(this),e))}:function(e,...n){const i=t.call(_(this),e,...n);return u.set(i,e.sort?e.sort():[e]),b(i)}}function v(t){return"function"===typeof t?y(t):(t instanceof IDBTransaction&&p(t),i(t,o())?new Proxy(t,g):t)}function b(t){if(t instanceof IDBRequest)return f(t);if(h.has(t))return h.get(t);const e=v(t);return e!==t&&(h.set(t,e),d.set(e,t)),e}const _=t=>d.get(t);function w(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=b(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(b(o.result),t.oldVersion,t.newVersion,b(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}function x(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",(t=>e(t.oldVersion,t))),b(n).then((()=>{}))}const E=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],S=new Map;function I(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(S.get(e))return S.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=T.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!E.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return S.set(e,s),s}m((t=>({...t,get:(e,n,i)=>I(e,n)||t.get(e,n,i),has:(e,n)=>!!I(e,n)||t.has(e,n)})))},1010:function(t,e,n){n.d(e,{Fq:function(){return v}});n(4114);var i=n(6912),r=n(6768),s=n(144);const o={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},a={ariaLabel:{type:String},ariaDescribedby:{type:String}},c={type:{type:String,required:!0},destroyDelay:{type:Number,default:0},...o,...a},l="2"===r.rE[0]?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function u(t){return(0,s.ju)(t)?(0,s.ux)(t):t}function h(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return(0,s.ju)(e)?new Proxy(t,{}):t}function d(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function f(t,e){t.labels=e}function p(t,e,n){const i=[];t.datasets=e.map((e=>{const r=t.datasets.find((t=>t[n]===e[n]));return r&&e.data&&!i.includes(r)?(i.push(r),Object.assign(r,e),r):{...e}}))}function g(t,e){const n={labels:[],datasets:[]};return f(n,t.labels),p(n,t.datasets,e),n}const m=(0,r.pM)({props:c,setup(t,e){let{expose:n,slots:o}=e;const a=(0,s.KR)(null),c=(0,s.IJ)(null);n({chart:c});const l=()=>{if(!a.value)return;const{type:e,data:n,options:r,plugins:s,datasetIdKey:o}=t,l=g(n,o),u=h(l,n);c.value=new i.t1(a.value,{type:e,data:u,options:{...r},plugins:s})},m=()=>{const e=(0,s.ux)(c.value);e&&(t.destroyDelay>0?setTimeout((()=>{e.destroy(),c.value=null}),t.destroyDelay):(e.destroy(),c.value=null))},y=e=>{e.update(t.updateMode)};return(0,r.sV)(l),(0,r.hi)(m),(0,r.wB)([()=>t.options,()=>t.data],((e,n)=>{let[i,o]=e,[a,l]=n;const h=(0,s.ux)(c.value);if(!h)return;let g=!1;if(i){const t=u(i),e=u(a);t&&t!==e&&(d(h,t),g=!0)}if(o){const e=u(o.labels),n=u(l.labels),i=u(o.datasets),r=u(l.datasets);e!==n&&(f(h.config.data,e),g=!0),i&&i!==r&&(p(h.config.data,i,t.datasetIdKey),g=!0)}g&&(0,r.dY)((()=>{y(h)}))}),{deep:!0}),()=>(0,r.h)("canvas",{role:"img",ariaLabel:t.ariaLabel,ariaDescribedby:t.ariaDescribedby,ref:a},[(0,r.h)("p",{},[o.default?o.default():""])])}});function y(t,e){return i.t1.register(e),(0,r.pM)({props:o,setup(e,n){let{expose:i}=n;const o=(0,s.IJ)(null),a=t=>{o.value=t?.chart};return i({chart:o}),()=>(0,r.h)(m,l({ref:a},{type:t,...e}))}})}const v=y("pie",i.P$)},1387:function(t,e,n){n.d(e,{Bt:function(){return at},aE:function(){return ne},lq:function(){return se},rd:function(){return re}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var i=n(6768),r=n(144);
/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const i in e){const r=e[i];n[i]=u(r)?r.map(t):t(r)}return n}const l=()=>{},u=Array.isArray;const h=/#/g,d=/&/g,f=/\//g,p=/=/g,g=/\?/g,m=/\+/g,y=/%5B/g,v=/%5D/g,b=/%5E/g,_=/%60/g,w=/%7B/g,x=/%7C/g,E=/%7D/g,T=/%20/g;function S(t){return encodeURI(""+t).replace(x,"|").replace(y,"[").replace(v,"]")}function I(t){return S(t).replace(w,"{").replace(E,"}").replace(b,"^")}function k(t){return S(t).replace(m,"%2B").replace(T,"+").replace(h,"%23").replace(d,"%26").replace(_,"`").replace(w,"{").replace(E,"}").replace(b,"^")}function C(t){return k(t).replace(p,"%3D")}function A(t){return S(t).replace(h,"%23").replace(g,"%3F")}function O(t){return null==t?"":A(t).replace(f,"%2F")}function R(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}const M=/\/$/,P=t=>t.replace(M,"");function D(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=z(null!=i?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:R(o)}}function N(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function L(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function F(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&V(e.matched[i],n.matched[r])&&U(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function V(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function U(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!j(t[n],e[n]))return!1;return!0}function j(t,e){return u(t)?B(t,e):u(e)?B(e,t):t===e}function B(t,e){return u(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function z(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];".."!==r&&"."!==r||i.push("");let s,o,a=n.length-1;for(s=0;s<i.length;s++)if(o=i[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+i.slice(s).join("/")}var $,H;(function(t){t["pop"]="pop",t["push"]="push"})($||($={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(H||(H={}));function W(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),P(t)}const q=/^[^#]+#/;function K(t,e){return t.replace(q,"#")+e}function G(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Q=()=>({left:window.scrollX,top:window.scrollY});function Y(t){let e;if("el"in t){const n=t.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=G(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.scrollX,null!=e.top?e.top:window.scrollY)}function X(t,e){const n=history.state?history.state.position-e:-1;return n+t}const J=new Map;function Z(t,e){J.set(t,e)}function tt(t){const e=J.get(t);return J.delete(t),e}let et=()=>location.protocol+"//"+location.host;function nt(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let e=r.includes(t.slice(s))?t.slice(s).length:1,n=r.slice(e);return"/"!==n[0]&&(n="/"+n),L(n,"")}const o=L(n,t);return o+i+r}function it(t,e,n,i){let r=[],s=[],o=null;const c=({state:s})=>{const a=nt(t,location),c=n.value,l=e.value;let u=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else i(a);r.forEach((t=>{t(n.value,c,{delta:u,type:$.pop,direction:u?u>0?H.forward:H.back:H.unknown})}))};function l(){o=n.value}function u(t){r.push(t);const e=()=>{const e=r.indexOf(t);e>-1&&r.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:Q()}),"")}function d(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function rt(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Q():null}}function st(t){const{history:e,location:n}=window,i={value:nt(t,n)},r={value:e.state};function s(i,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+i:et()+t+i;try{e[o?"replaceState":"pushState"](s,"",c),r.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,rt(r.value.back,t,r.value.forward,!0),n,{position:r.value.position});s(t,o,!0),i.value=t}function c(t,n){const o=a({},r.value,e.state,{forward:t,scroll:Q()});s(o.current,o,!0);const c=a({},rt(i.value,t,null),{position:o.position+1},n);s(t,c,!1),i.value=t}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:c,replace:o}}function ot(t){t=W(t);const e=st(t),n=it(t,e.state,e.location,e.replace);function i(t,e=!0){e||n.pauseListeners(),history.go(t)}const r=a({location:"",base:t,go:i,createHref:K.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function at(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ot(t)}function ct(t){return"string"===typeof t||t&&"object"===typeof t}function lt(t){return"string"===typeof t||"symbol"===typeof t}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ht=Symbol("");var dt;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(dt||(dt={}));function ft(t,e){return a(new Error,{type:t,[ht]:!0},e)}function pt(t,e){return t instanceof Error&&ht in t&&(null==e||!!(t.type&e))}const gt="[^/]+?",mt={sensitive:!1,strict:!1,start:!0,end:!0},yt=/[.+*?^${}()[\]/\\]/g;function vt(t,e){const n=a({},mt,e),i=[];let r=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(r+="/");for(let e=0;e<a.length;e++){const i=a[e];let o=40+(n.sensitive?.25:0);if(0===i.type)e||(r+="/"),r+=i.value.replace(yt,"\\$&"),o+=40;else if(1===i.type){const{value:t,repeatable:n,optional:c,regexp:l}=i;s.push({name:t,repeatable:n,optional:c});const u=l||gt;if(u!==gt){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;e||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),r+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}t.push(o)}i.push(t)}if(n.strict&&n.end){const t=i.length-1;i[t][i[t].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let i=1;i<e.length;i++){const t=e[i]||"",r=s[i-1];n[r.name]=t&&r.repeatable?t.split("/"):t}return n}function l(e){let n="",i=!1;for(const r of t){i&&n.endsWith("/")||(n+="/"),i=!1;for(const t of r)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(u(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=l}}return n||"/"}return{re:o,score:i,keys:s,parse:c,stringify:l}}function bt(t,e){let n=0;while(n<t.length&&n<e.length){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function _t(t,e){let n=0;const i=t.score,r=e.score;while(n<i.length&&n<r.length){const t=bt(i[n],r[n]);if(t)return t;n++}if(1===Math.abs(r.length-i.length)){if(wt(i))return 1;if(wt(r))return-1}return r.length-i.length}function wt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const xt={type:0,value:""},Et=/[a-zA-Z0-9_]/;function Tt(t){if(!t)return[[]];if("/"===t)return[[xt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${l}": ${t}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:Et.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:e("Unknown state");break}else i=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function St(t,e,n){const i=vt(Tt(t.path),n);const r=a(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf===!e.record.aliasOf&&e.children.push(r),r}function It(t,e){const n=[],i=new Map;function r(t){return i.get(t)}function s(t,n,i){const r=!i,c=Ct(t);c.aliasOf=i&&i.record;const h=Mt(e,t),d=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(a({},c,{components:i?i.record.components:c.components,path:t,aliasOf:i?i.record:c}))}let f,p;for(const e of d){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,i="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&i+a)}if(f=St(e,n,h),i?i.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),r&&t.name&&!Ot(f)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)s(t[e],f,i&&i.children[e])}i=i||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{o(p)}:l}function o(t){if(lt(t)){const e=i.get(t);e&&(i.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&i.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function u(t){let e=0;while(e<n.length&&_t(t,n[e])>=0&&(t.record.path!==n[e].record.path||!Pt(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!Ot(t)&&i.set(t.record.name,t)}function h(t,e){let r,s,o,c={};if("name"in t&&t.name){if(r=i.get(t.name),!r)throw ft(1,{location:t});0,o=r.record.name,c=a(kt(e.params,r.keys.filter((t=>!t.optional)).concat(r.parent?r.parent.keys.filter((t=>t.optional)):[]).map((t=>t.name))),t.params&&kt(t.params,r.keys.map((t=>t.name)))),s=r.stringify(c)}else if(null!=t.path)s=t.path,r=n.find((t=>t.re.test(s))),r&&(c=r.parse(s),o=r.record.name);else{if(r=e.name?i.get(e.name):n.find((t=>t.re.test(e.path))),!r)throw ft(1,{location:t,currentLocation:e});o=r.record.name,c=a({},e.params,t.params),s=r.stringify(c)}const l=[];let u=r;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:s,params:c,matched:l,meta:Rt(l)}}return e=Mt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:r}}function kt(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Ct(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:At(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function At(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]="object"===typeof n?n[i]:n;return e}function Ot(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function Mt(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Pt(t,e){return e.children.some((e=>e===t||Pt(t,e)))}function Dt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],i=(n?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const t=i[r].replace(m," "),n=t.indexOf("="),s=R(n<0?t:t.slice(0,n)),o=n<0?null:R(t.slice(n+1));if(s in e){let t=e[s];u(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Nt(t){let e="";for(let n in t){const i=t[n];if(n=C(n),null==i){void 0!==i&&(e+=(e.length?"&":"")+n);continue}const r=u(i)?i.map((t=>t&&k(t))):[i&&k(i)];r.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Lt(t){const e={};for(const n in t){const i=t[n];void 0!==i&&(e[n]=u(i)?i.map((t=>null==t?null:""+t)):null==i?i:""+i)}return e}const Ft=Symbol(""),Vt=Symbol(""),Ut=Symbol(""),jt=Symbol(""),Bt=Symbol("");function zt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $t(t,e,n,i,r,s=(t=>t())){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((a,c)=>{const l=t=>{!1===t?c(ft(4,{from:n,to:e})):t instanceof Error?c(t):ct(t)?c(ft(2,{from:e,to:t})):(o&&i.enterCallbacks[r]===o&&"function"===typeof t&&o.push(t),a())},u=s((()=>t.call(i&&i.instances[r],e,n,l)));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch((t=>c(t)))}))}function Ht(t,e,n,i,r=(t=>t())){const s=[];for(const a of t){0;for(const t in a.components){let c=a.components[t];if("beforeRouteEnter"===e||a.instances[t])if(Wt(c)){const o=c.__vccOpts||c,l=o[e];l&&s.push($t(l,n,i,a,t,r))}else{let l=c();0,s.push((()=>l.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${a.path}"`));const c=o(s)?s.default:s;a.components[t]=c;const l=c.__vccOpts||c,u=l[e];return u&&$t(u,n,i,a,t,r)()}))))}}}return s}function Wt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function qt(t){const e=(0,i.WQ)(Ut),n=(0,i.WQ)(jt);const s=(0,i.EW)((()=>{const n=(0,r.R1)(t.to);return e.resolve(n)})),o=(0,i.EW)((()=>{const{matched:t}=s.value,{length:e}=t,i=t[e-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(V.bind(null,i));if(o>-1)return o;const a=Xt(t[e-2]);return e>1&&Xt(i)===a&&r[r.length-1].path!==a?r.findIndex(V.bind(null,t[e-2])):o})),a=(0,i.EW)((()=>o.value>-1&&Yt(n.params,s.value.params))),c=(0,i.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&U(n.params,s.value.params)));function u(n={}){return Qt(n)?e[(0,r.R1)(t.replace)?"replace":"push"]((0,r.R1)(t.to)).catch(l):Promise.resolve()}return{route:s,href:(0,i.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:u}}const Kt=(0,i.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qt,setup(t,{slots:e}){const n=(0,r.Kh)(qt(t)),{options:s}=(0,i.WQ)(Ut),o=(0,i.EW)((()=>({[Jt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Jt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=e.default&&e.default(n);return t.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Gt=Kt;function Qt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yt(t,e){for(const n in e){const i=e[n],r=t[n];if("string"===typeof i){if(i!==r)return!1}else if(!u(r)||r.length!==i.length||i.some(((t,e)=>t!==r[e])))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,i.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,i.WQ)(Bt),o=(0,i.EW)((()=>t.route||s.value)),c=(0,i.WQ)(Vt,0),l=(0,i.EW)((()=>{let t=(0,r.R1)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),u=(0,i.EW)((()=>o.value.matched[l.value]));(0,i.Gt)(Vt,(0,i.EW)((()=>l.value+1))),(0,i.Gt)(Ft,u),(0,i.Gt)(Bt,o);const h=(0,r.KR)();return(0,i.wB)((()=>[h.value,u.value,t.name]),(([t,e,n],[i,r,s])=>{e&&(e.instances[n]=t,r&&r!==e&&t&&t===i&&(e.leaveGuards.size||(e.leaveGuards=r.leaveGuards),e.updateGuards.size||(e.updateGuards=r.updateGuards))),!t||!e||r&&V(e,r)&&i||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const r=o.value,s=t.name,c=u.value,l=c&&c.components[s];if(!l)return te(n.default,{Component:l,route:r});const d=c.props[s],f=d?!0===d?r.params:"function"===typeof d?d(r):d:null,p=t=>{t.component.isUnmounted&&(c.instances[s]=null)},g=(0,i.h)(l,a({},f,e,{onVnodeUnmounted:p,ref:h}));return te(n.default,{Component:g,route:r})||g}}});function te(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ee=Zt;function ne(t){const e=It(t.routes,t),n=t.parseQuery||Dt,o=t.stringifyQuery||Nt,h=t.history;const d=zt(),f=zt(),p=zt(),g=(0,r.IJ)(ut);let m=ut;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=c.bind(null,(t=>""+t)),v=c.bind(null,O),b=c.bind(null,R);function _(t,n){let i,r;return lt(t)?(i=e.getRecordMatcher(t),r=n):r=t,e.addRoute(r,i)}function w(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function x(){return e.getRoutes().map((t=>t.record))}function E(t){return!!e.getRecordMatcher(t)}function T(t,i){if(i=a({},i||g.value),"string"===typeof t){const r=D(n,t,i.path),s=e.resolve({path:r.path},i),o=h.createHref(r.fullPath);return a(r,s,{params:b(s.params),hash:R(r.hash),redirectedFrom:void 0,href:o})}let r;if(null!=t.path)r=a({},t,{path:D(n,t.path,i.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];r=a({},t,{params:v(e)}),i.params=v(i.params)}const s=e.resolve(r,i),c=t.hash||"";s.params=y(b(s.params));const l=N(o,a({},t,{hash:I(c),path:s.path})),u=h.createHref(l);return a({fullPath:l,hash:c,query:o===Nt?Lt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:u})}function S(t){return"string"===typeof t?D(n,t,g.value.path):a({},t)}function k(t,e){if(m!==t)return ft(8,{from:e,to:t})}function C(t){return P(t)}function A(t){return C(a(S(t),{replace:!0}))}function M(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let i="function"===typeof n?n(t):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=S(i):{path:i},i.params={}),a({query:t.query,hash:t.hash,params:null!=i.path?{}:t.params},i)}}function P(t,e){const n=m=T(t),i=g.value,r=t.state,s=t.force,c=!0===t.replace,l=M(n);if(l)return P(a(S(l),{state:"object"===typeof l?a({},r,l.state):r,force:s,replace:c}),e||n);const u=n;let h;return u.redirectedFrom=e,!s&&F(o,i,n)&&(h=ft(16,{to:u,from:i}),nt(i,i,!0,!1)),(h?Promise.resolve(h):U(u,i)).catch((t=>pt(t)?pt(t,2)?t:et(t):G(t,u,i))).then((t=>{if(t){if(pt(t,2))return P(a({replace:c},S(t.to),{state:"object"===typeof t.to?a({},r,t.to.state):r,force:s}),e||u)}else t=B(u,i,!0,c,r);return j(u,i,t),t}))}function L(t,e){const n=k(t,e);return n?Promise.reject(n):Promise.resolve()}function V(t){const e=st.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function U(t,e){let n;const[i,r,s]=ie(t,e);n=Ht(i.reverse(),"beforeRouteLeave",t,e);for(const a of i)a.leaveGuards.forEach((i=>{n.push($t(i,t,e))}));const o=L.bind(null,t,e);return n.push(o),at(n).then((()=>{n=[];for(const i of d.list())n.push($t(i,t,e));return n.push(o),at(n)})).then((()=>{n=Ht(r,"beforeRouteUpdate",t,e);for(const i of r)i.updateGuards.forEach((i=>{n.push($t(i,t,e))}));return n.push(o),at(n)})).then((()=>{n=[];for(const i of s)if(i.beforeEnter)if(u(i.beforeEnter))for(const r of i.beforeEnter)n.push($t(r,t,e));else n.push($t(i.beforeEnter,t,e));return n.push(o),at(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Ht(s,"beforeRouteEnter",t,e,V),n.push(o),at(n)))).then((()=>{n=[];for(const i of f.list())n.push($t(i,t,e));return n.push(o),at(n)})).catch((t=>pt(t,8)?t:Promise.reject(t)))}function j(t,e,n){p.list().forEach((i=>V((()=>i(t,e,n)))))}function B(t,e,n,i,r){const o=k(t,e);if(o)return o;const c=e===ut,l=s?history.state:{};n&&(i||c?h.replace(t.fullPath,a({scroll:c&&l&&l.scroll},r)):h.push(t.fullPath,r)),g.value=t,nt(t,e,n,c),et()}let z;function H(){z||(z=h.listen(((t,e,n)=>{if(!ot.listening)return;const i=T(t),r=M(i);if(r)return void P(a(r,{replace:!0}),i).catch(l);m=i;const o=g.value;s&&Z(X(o.fullPath,n.delta),Q()),U(i,o).catch((t=>pt(t,12)?t:pt(t,2)?(P(t.to,i).then((t=>{pt(t,20)&&!n.delta&&n.type===$.pop&&h.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),G(t,i,o)))).then((t=>{t=t||B(i,o,!1),t&&(n.delta&&!pt(t,8)?h.go(-n.delta,!1):n.type===$.pop&&pt(t,20)&&h.go(-1,!1)),j(i,o,t)})).catch(l)})))}let W,q=zt(),K=zt();function G(t,e,n){et(t);const i=K.list();return i.length?i.forEach((i=>i(t,e,n))):console.error(t),Promise.reject(t)}function J(){return W&&g.value!==ut?Promise.resolve():new Promise(((t,e)=>{q.add([t,e])}))}function et(t){return W||(W=!t,H(),q.list().forEach((([e,n])=>t?n(t):e())),q.reset()),t}function nt(e,n,r,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!r&&tt(X(e.fullPath,0))||(o||!r)&&history.state&&history.state.scroll||null;return(0,i.dY)().then((()=>a(e,n,c))).then((t=>t&&Y(t))).catch((t=>G(t,e,n)))}const it=t=>h.go(t);let rt;const st=new Set,ot={currentRoute:g,listening:!0,addRoute:_,removeRoute:w,hasRoute:E,getRoutes:x,resolve:T,options:t,push:C,replace:A,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:K.add,isReady:J,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",ee),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.R1)(g)}),s&&!rt&&g.value===ut&&(rt=!0,C(h.location).catch((t=>{0})));const n={};for(const r in ut)Object.defineProperty(n,r,{get:()=>g.value[r],enumerable:!0});t.provide(Ut,e),t.provide(jt,(0,r.Gc)(n)),t.provide(Bt,g);const i=t.unmount;st.add(t),t.unmount=function(){st.delete(t),st.size<1&&(m=ut,z&&z(),z=null,g.value=ut,rt=!1,W=!1),i()}}};function at(t){return t.reduce(((t,e)=>t.then((()=>V(e)))),Promise.resolve())}return ot}function ie(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>V(t,s)))?i.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>V(t,a)))||r.push(a))}return[n,i,r]}function re(){return(0,i.WQ)(Ut)}function se(){return(0,i.WQ)(jt)}}}]);
//# sourceMappingURL=chunk-vendors.86046639.js.map