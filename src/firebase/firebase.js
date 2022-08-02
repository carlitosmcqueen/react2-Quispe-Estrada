import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDgr8EffHOlivngBtAVNyvzpUNQxqaytBc",
  authDomain: "mercadocoder.firebaseapp.com",
  projectId: "mercadocoder",
  storageBucket: "mercadocoder.appspot.com",
  messagingSenderId: "436663960820",
  appId: "1:436663960820:web:095ba76534d4a379b6caa1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)