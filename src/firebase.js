// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDbO-b68wJ--59Ts4_dGbNHNYBh6PIrbNY",
    authDomain: "mamili-5c835.firebaseapp.com",
    projectId: "mamili-5c835",
    storageBucket: "mamili-5c835.appspot.com",
    messagingSenderId: "881989095667",
    appId: "1:881989095667:web:a4d0f4007109b7c47c2786",
    measurementId: "G-VBVWTF2ZNX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };