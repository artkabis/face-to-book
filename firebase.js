import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArXFnkX7dw_mmt3DASFxNAm4Py8noUbIg",
  authDomain: "face-to-book.firebaseapp.com",
  projectId: "face-to-book",
  storageBucket: "face-to-book.appspot.com",
  messagingSenderId: "791730787323",
  appId: "1:791730787323:web:dc8446c078928cfad9315e",
  measurementId: "G-D5H1Q1H54W",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
