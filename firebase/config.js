// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Для роботи із firebase обовʼязково треба ініціалізувати проект
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcpChQNpc5Ndn2--LStmKA0o-Q1XO4qoY",
  authDomain: "rn-project-4c31e.firebaseapp.com",
  projectId: "rn-project-4c31e",
  storageBucket: "rn-project-4c31e.appspot.com",
  messagingSenderId: "729483069601",
  appId: "1:729483069601:web:1233dffa2043b3b80408e0",
  measurementId: "G-2T76WSJ3GJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
