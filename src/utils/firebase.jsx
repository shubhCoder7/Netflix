// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0zOeekwpiiuqP29jwdJ7WpuSt1uH74qw",
  authDomain: "netflixgpt-33ed7.firebaseapp.com",
  projectId: "netflixgpt-33ed7",
  storageBucket: "netflixgpt-33ed7.firebasestorage.app",
  messagingSenderId: "143935571878",
  appId: "1:143935571878:web:31ee81bfafab4aa0f4f167",
  measurementId: "G-42XHK12FSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
