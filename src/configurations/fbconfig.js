// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiHPjwQdF4p7uyCHsrYv5npShc0eznC84",
    authDomain: "mwad-ex-app-b2303.firebaseapp.com",
    databaseURL: "https://mwad-ex-app-b2303.firebaseio.com",
    projectId: "mwad-ex-app-b2303",
    storageBucket: "mwad-ex-app-b2303.appspot.com",
    messagingSenderId: "597034174683",
    appId: "1:597034174683:web:1d887aa9d03b1974e2a4fe",
    measurementId: "G-VZFW932M8T"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;