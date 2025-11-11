// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCe9U6Shv2478xW0aI1QnjDZ_9CQUKPMQ8",
  authDomain: "skeptifact.firebaseapp.com",
  projectId: "skeptifact",
  storageBucket: "skeptifact.firebasestorage.app",
  messagingSenderId: "330436392035",
  appId: "1:330436392035:web:7deea9403e9eb030927456",
  measurementId: "G-ESK4MW8VBS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;