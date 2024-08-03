// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtaQ-CtxxdiA0Z0OvIFArbVc4KeEk1Zao",
    authDomain: "formait-d9d40.firebaseapp.com",
    projectId: "formait-d9d40",
    storageBucket: "formait-d9d40.appspot.com",
    messagingSenderId: "602342721783",
    appId: "1:602342721783:web:3fdfc09a3aa9b69632ebf2",
    measurementId: "G-J81R8NRCDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app, auth};