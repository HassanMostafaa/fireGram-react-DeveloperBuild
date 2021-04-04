import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCkVMbZ5aatS7BqirVk5U5uIKJldZ-TyHE",
  authDomain: "firegram-starter.firebaseapp.com",
  // databaseURL: "https://firegram-starter-default-rtdb.firebaseio.com",
  projectId: "firegram-starter",
  storageBucket: "firegram-starter.appspot.com",
  databaseURL: "https://firegram-starter-default-rtdb.firebaseio.com/",
  messagingSenderId: "582015984558",
  appId: "1:582015984558:web:a804d61386e7e7a60e9e3f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
