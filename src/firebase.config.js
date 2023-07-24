// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }  from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi7vxRCFD9pCMLqXGFzmuyTm933XWdMIc",
  authDomain: "proyectito-prueba.firebaseapp.com",
  projectId: "proyectito-prueba",
  storageBucket: "proyectito-prueba.appspot.com",
  messagingSenderId: "886202138652",
  appId: "1:886202138652:web:25d2c1a3aac664f0641fd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export { auth };