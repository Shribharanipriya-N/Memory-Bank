// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcX78i9yZt5EBIt5HkOQwLbzxJQsq1Pjg",
  authDomain: "fir-7ac1c.firebaseapp.com",
  projectId: "fir-7ac1c",
  storageBucket: "fir-7ac1c.appspot.com",
  messagingSenderId: "76450124463",
  appId: "1:76450124463:web:0b7a47c1ce18e83b183a5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);

