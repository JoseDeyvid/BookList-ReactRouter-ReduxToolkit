// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1CAtai585PYirkfnT3VJPKiF4diTXgeo",
  authDomain: "booklist-dbf5d.firebaseapp.com",
  projectId: "booklist-dbf5d",
  storageBucket: "booklist-dbf5d.firebasestorage.app",
  messagingSenderId: "119898736826",
  appId: "1:119898736826:web:a439fee6cd3caa88421a83"
};

// Initialize Firebase
export const app:FirebaseApp = initializeApp(firebaseConfig);