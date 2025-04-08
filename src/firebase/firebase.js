// Import the functions you need from the SDKs you need
const fireapi = import.meta.env.VITE_FIREBASE_API_KEY
// console.log(fireapi)
// console.log(import.meta.env)
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: fireapi,
  authDomain: "prince-executive.firebaseapp.com",
  projectId: "prince-executive",
  storageBucket: "prince-executive.firebasestorage.app",
  messagingSenderId: "544429189860",
  appId: "1:544429189860:web:0383140a6edbf8c0c89af1",
  measurementId: "G-ZWWTDX1S9F"
};

// Prevent multiple initializations
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const analytics = getAnalytics(app);


export { db,analytics }