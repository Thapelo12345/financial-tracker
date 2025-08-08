// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMnkZO_HxQixmcwGHsljVEAxxYhz0gzZg",
  authDomain: "financial-tracker-849d0.firebaseapp.com",
  projectId: "financial-tracker-849d0",
  storageBucket: "financial-tracker-849d0.firebasestorage.app",
  messagingSenderId: "270425307406",
  appId: "1:270425307406:web:678705ca97bcf0c634ff5f",
  measurementId: "G-W3PQQYJ3T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);