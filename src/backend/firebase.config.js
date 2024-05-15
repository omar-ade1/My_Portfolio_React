import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-JhLs7siYI2VGREQffGH6QwJR9cIbiD8",
  authDomain: "airy-legacy-418314.firebaseapp.com",
  projectId: "airy-legacy-418314",
  // storageBucket: "airy-legacy-418314.appspot.com",
  messagingSenderId: "183730172918",
  appId: "1:183730172918:web:34a2e02495ab5af1d38dd7",
  storageBucket: "gs://airy-legacy-418314.appspot.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app, "gs://airy-legacy-418314.appspot.com");