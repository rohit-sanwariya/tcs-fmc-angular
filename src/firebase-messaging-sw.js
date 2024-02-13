// Import the functions you need from the SDKs you need
 
import { initializeApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6p0arWRA4yvEB4LnVXc4Ux__cCnSk3zc",
  authDomain: "tcs-fcm-angular.firebaseapp.com",
  projectId: "tcs-fcm-angular",
  storageBucket: "tcs-fcm-angular.appspot.com",
  messagingSenderId: "573458737875",
  appId: "1:573458737875:web:f7c1b56c3bccacf7dec226",
  measurementId: "G-NYY6T7R1BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});
const analytics = getAnalytics(app);