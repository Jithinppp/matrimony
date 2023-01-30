// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcCYIxXdwl3A6OQhSx-EKC6LQW2vDgYWs",
  authDomain: "matrimony-a7836.firebaseapp.com",
  projectId: "matrimony-a7836",
  storageBucket: "matrimony-a7836.appspot.com",
  messagingSenderId: "680797771777",
  appId: "1:680797771777:web:8e928e4232ca9bd2cf0800",
  measurementId: "G-L1XZQRGSW2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
