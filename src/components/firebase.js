import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDcC_itvSD7cIPZXBx0cDqOMqH6QzB-5Qo",
    authDomain: "chatapp-7c78f.firebaseapp.com",
    projectId: "chatapp-7c78f",
    storageBucket: "chatapp-7c78f.appspot.com",
    messagingSenderId: "79139911303",
    appId: "1:79139911303:web:6c6003cd9a9e28d3982a22",
    measurementId: "G-B4HB05QJ7T",
  })
  .auth();
