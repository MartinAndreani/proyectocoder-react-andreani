// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo6hRppa24kuX1BGF7ggW1txVA07kcPgg",
  authDomain: "pf-coderhouse-andreani.firebaseapp.com",
  projectId: "pf-coderhouse-andreani",
  storageBucket: "pf-coderhouse-andreani.appspot.com",
  messagingSenderId: "44988407128",
  appId: "1:44988407128:web:fd15a1c92bc0f0d064592d",
  measurementId: "G-KELM7HXRWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)