// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

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
const auth = getAuth(app)