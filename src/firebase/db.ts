// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZmO3p2OxTANlOfpRRi_9gxQVP91c6Drk",
  authDomain: "atlas-news-takehome.firebaseapp.com",
  projectId: "atlas-news-takehome",
  storageBucket: "atlas-news-takehome.appspot.com",
  messagingSenderId: "860905074278",
  appId: "1:860905074278:web:000c99261fa8d8c2b907a7",
  measurementId: "G-52RYMSR61W",
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
