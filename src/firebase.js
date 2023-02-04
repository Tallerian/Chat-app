import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyDV9IeR2erNXuNJ8tmgfdAhnwMkx7OwVwQ",
    authDomain: "chat-app-f2421.firebaseapp.com",
    projectId: "chat-app-f2421",
    storageBucket: "chat-app-f2421.appspot.com",
    messagingSenderId: "804368419319",
    appId: "1:804368419319:web:f337ee6337ef7f927086f2",
    measurementId: "G-98SP1X9SNZ"
  })

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()