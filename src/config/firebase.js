import firebase from "firebase";
/*
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };
*/
  var firebaseConfig = {
    apiKey: "AIzaSyDxYqy4oKQpMyA03Xvq_Loux_J2xlD8ajc",
    authDomain: "qaforum-a1fd5.firebaseapp.com",
    projectId: "qaforum-a1fd5",
    storageBucket: "qaforum-a1fd5.appspot.com",
    messagingSenderId: "368258327109",
    appId: "1:368258327109:web:6b6bf5697186c031c5f92c",
    measurementId: "G-QXQ920M81K"
  };

const myApp = firebase.initializeApp(firebaseConfig);
export const auth = myApp.auth();
export const DatabaseReference = myApp.database();