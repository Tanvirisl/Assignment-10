// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxC_V-czmhLi7ttRyqgy-X16vhMQlrjFc",
  authDomain: "assingment-10-e7487.firebaseapp.com",
  projectId: "assingment-10-e7487",
  storageBucket: "assingment-10-e7487.appspot.com",
  messagingSenderId: "1088816440722",
  appId: "1:1088816440722:web:07e9966c2002a6e6d44d4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;