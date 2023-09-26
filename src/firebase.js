import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzIw7jQTc7xppFZ-Hq3nly-L5dkQPmMa8",
  authDomain: "chat-cddc0.firebaseapp.com",
  projectId: "chat-cddc0",
  storageBucket: "chat-cddc0.appspot.com",
  messagingSenderId: "179522500209",
  appId: "1:179522500209:web:cf84b01f7ed58413220dd0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
