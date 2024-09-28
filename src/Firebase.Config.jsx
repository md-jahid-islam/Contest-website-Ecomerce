// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpAz8udg8k20RmJHKPnY1XJTrWkQNjg7Q",
  authDomain: "ecomerce-contest-website.firebaseapp.com",
  databaseURL: "https://ecomerce-contest-website-default-rtdb.firebaseio.com",
  projectId: "ecomerce-contest-website",
  storageBucket: "ecomerce-contest-website.appspot.com",
  messagingSenderId: "851953016701",
  appId: "1:851953016701:web:e52d1da6d22d10217cf614",
  measurementId: "G-H0DZD4TLC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getAnalytics(app);
export default database;