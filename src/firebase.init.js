// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfRLZ_eKrDfQmQoZQb6uEwVinYdFbyH1Q",
  authDomain: "auth-integration-b3793.firebaseapp.com",
  projectId: "auth-integration-b3793",
  storageBucket: "auth-integration-b3793.firebasestorage.app",
  messagingSenderId: "835267214784",
  appId: "1:835267214784:web:3836091399515cc82c1c25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);