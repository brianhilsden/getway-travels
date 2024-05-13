// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs1ygVkUvPDAdjX4Zvsqev_u6TogSQ2Rg",
  authDomain: "getway-travels.firebaseapp.com",
  projectId: "getway-travels",
  storageBucket: "getway-travels.appspot.com",
  messagingSenderId: "641570389444",
  appId: "1:641570389444:web:a87b9ace21df493c65b891",
  measurementId: "G-NWGYVY7ZVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export default app
