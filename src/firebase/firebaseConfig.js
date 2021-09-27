import { GoogleAuthProvider } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAw9QHSy5AusRFS-2oxbnMKRD_AtVo8_CU",
    authDomain: "react-coder-3368e.firebaseapp.com",
    projectId: "react-coder-3368e",
    storageBucket: "react-coder-3368e.appspot.com",
    messagingSenderId: "930865358939",
    appId: "1:930865358939:web:2506bfc854f46e6b70f77e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleLogin = new GoogleAuthProvider();

export {
    db,
    app,
    googleLogin
}