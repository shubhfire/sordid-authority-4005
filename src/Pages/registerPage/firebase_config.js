// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCqbHyr8MYM2J9lnueb05sCc_6D5T-_WI",
  authDomain: "milaap-auth.firebaseapp.com",
  projectId: "milaap-auth",
  storageBucket: "milaap-auth.appspot.com",
  messagingSenderId: "681956849935",
  appId: "1:681956849935:web:261f02ad6714fe3bbca67a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)