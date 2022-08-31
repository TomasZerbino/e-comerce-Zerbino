// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDcAXrXxbbNCOw8xHKMDpW70miC6Hupwfg",
  authDomain: "react-e-comerce-46249.firebaseapp.com",
  projectId: "react-e-comerce-46249",
  storageBucket: "react-e-comerce-46249.appspot.com",
  messagingSenderId: "746532275055",
  appId: "1:746532275055:web:dbd1ea9f2f7220c0209e9a"
};

 
const app = initializeApp(firebaseConfig);
const fsDatabase = getFirestore(app)
export default fsDatabase;