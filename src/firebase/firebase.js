import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_wyyDA7iCa9OIw8n6mjSziRjPU1mPaIk",
    authDomain: "central-tcg.firebaseapp.com",
    projectId: "central-tcg",
    storageBucket: "central-tcg.appspot.com",
    messagingSenderId: "679104429610",
    appId: "1:679104429610:web:9dc8d0e0b444a95acc4d53",
    measurementId: "G-23X42NSBX4"
  };

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);