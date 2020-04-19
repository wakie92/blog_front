import * as firebase from  'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLXvVQTnFPYwECmKot63Ww0nTElbPDyfQ",
  authDomain: "myblog-672d0.firebaseapp.com",
  databaseURL: "https://myblog-672d0.firebaseio.com",
  projectId: "myblog-672d0",
  storageBucket: "myblog-672d0.appspot.com",
  messagingSenderId: "899979036711",
  appId: "1:899979036711:web:cd2980d7e7741bc55a6602",
  measurementId: "G-B068HWHPHP"
}
export function firebaseDB() {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }
  return firebase;
}
export const provider = new firebase.auth.GoogleAuthProvider();
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();