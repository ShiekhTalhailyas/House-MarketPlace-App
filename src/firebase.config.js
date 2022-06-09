// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhcFQaKpAGkouNkk-Rs8dJsXkDhQyKPDA",
  authDomain: "housemarketplace-66bcf.firebaseapp.com",
  projectId: "housemarketplace-66bcf",
  storageBucket: "housemarketplace-66bcf.appspot.com",
  messagingSenderId: "453550391960",
  appId: "1:453550391960:web:8ea1565a94d158e4e006ed"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const  db = getFirestore() 