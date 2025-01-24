// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyClpc0gg57NA9IeBI3VudR4uzgpb36SNDo",
  authDomain: "student-dashboard-6259b.firebaseapp.com",
  projectId: "student-dashboard-6259b",
  storageBucket: "student-dashboard-6259b.firebasestorage.app",
  messagingSenderId: "856158526554",
  appId: "1:856158526554:web:66edfb5681fb6f5ae5cc63",
  measurementId: "G-B4LNWWZ45D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase Authentication
const analytics = getAnalytics(app); // Firebase Analytics (optional)

export { auth, analytics };
