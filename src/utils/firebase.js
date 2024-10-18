// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmtdM0PV9z-FacO8g82DJkCnl2JpfxMB4",
  authDomain: "netflixgpt-32e1b.firebaseapp.com",
  projectId: "netflixgpt-32e1b",
  storageBucket: "netflixgpt-32e1b.appspot.com",
  messagingSenderId: "218762098403",
  appId: "1:218762098403:web:d078c6380a34ceb4ecb7d6",
  measurementId: "G-R7BK12BCQQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
