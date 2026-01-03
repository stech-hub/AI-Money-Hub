
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bionurse-pro.firebaseapp.com",
  projectId: "bionurse-pro",
  storageBucket: "bionurse-pro.firebasestorage.app",
  messagingSenderId: "262309708872",
  appId: "1:262309708872:web:b26529e0283a17aafc447d"
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
