import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqyjcguOqfJXHM2BzMe3E5NcRd_Zws9Ic",
  authDomain: "financial-tracker-d9a7a.firebaseapp.com",
  projectId: "financial-tracker-d9a7a",
  storageBucket: "financial-tracker-d9a7a.firebasestorage.app",
  messagingSenderId: "464067291177",
  appId: "1:464067291177:web:f664587c5c1e7dc09a9438",
  measurementId: "G-21N21FRZ1W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);