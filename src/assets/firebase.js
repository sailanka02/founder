// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGsdLNWZ3csxOgF4UCicPdakV_RgASP6o",
  authDomain: "founder-fddca.firebaseapp.com",
  projectId: "founder-fddca",
  storageBucket: "founder-fddca.firebasestorage.app",
  messagingSenderId: "176113466208",
  appId: "1:176113466208:web:74155ad211300d22bf3c05",
  measurementId: "G-EEKTYSSGFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };