// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDa1wrYQe4TPPkr_cOW2aqF9twDaNBpl0I",
  authDomain: "ratemyconcordiacourses.firebaseapp.com",
  projectId: "ratemyconcordiacourses",
  storageBucket: "ratemyconcordiacourses.appspot.com",
  messagingSenderId: "1043692169209",
  appId: "1:1043692169209:web:1c23d8cc3607b686867f28",

};

// Initialize Firebase

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
// const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

export const loginInfo = {
  email: ''
}

export function setLoginInfo(info) {
  loginInfo.email = info.email
}