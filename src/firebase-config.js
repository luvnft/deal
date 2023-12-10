import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbsufZZUa-E_HAFadDOrSaZBEWpWZVlJ4",
  authDomain: "deal-8c155.firebaseapp.com",
  projectId: "deal-8c155",
  storageBucket: "deal-8c155.appspot.com",
  messagingSenderId: "717992905860",
  appId: "1:717992905860:web:a7804404790f0d8eb786d1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);