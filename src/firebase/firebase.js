// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgr8EffHOlivngBtAVNyvzpUNQxqaytBc",
  authDomain: "mercadocoder.firebaseapp.com",
  projectId: "mercadocoder",
  storageBucket: "mercadocoder.appspot.com",
  messagingSenderId: "436663960820",
  appId: "1:436663960820:web:095ba76534d4a379b6caa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)