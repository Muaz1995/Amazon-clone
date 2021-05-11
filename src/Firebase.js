import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiJp8krE2uLq-L3WZLA6sxImduQJSBzks",
  authDomain: "clone-63e86.firebaseapp.com",
  databaseURL: "https://clone-63e86.firebaseio.com",
  projectId: "clone-63e86",
  storageBucket: "clone-63e86.appspot.com",
  messagingSenderId: "906580777385",
  appId: "1:906580777385:web:a0d8d08984278cb1d78cb8",
  measurementId: "G-DF75YLP34B"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };