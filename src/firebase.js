//firebase setup config
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "tresurehunt-d5dd1",
  storageBucket: "tresurehunt-d5dd1.appspot.com",
  messagingSenderId: "341344372424",
  appId: "1:341344372424:web:82bcb04eacfa3bdcdbc7fd",
  measurementId: "G-7PM3F8XFDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};