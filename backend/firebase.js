import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDa1wrYQe4TPPkr_cOW2aqF9twDaNBpl0I",
  authDomain: "ratemyconcordiacourses.firebaseapp.com",
  projectId: "ratemyconcordiacourses",
  storageBucket: "ratemyconcordiacourses.appspot.com",
  messagingSenderId: "1043692169209",
  appId: "1:1043692169209:web:1c23d8cc3607b686867f28",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };