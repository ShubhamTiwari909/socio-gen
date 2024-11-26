// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB259XpCPxBEFlzXWu_T2sTaE7U0xDIlDA",
  authDomain: "sociogen-38240.firebaseapp.com",
  projectId: "sociogen-38240",
  storageBucket: "sociogen-38240.firebasestorage.app",
  messagingSenderId: "531849759021",
  appId: "1:531849759021:web:1b24a8d2d6d9a273606ba4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);