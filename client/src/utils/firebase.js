import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8SvtRkdFiVr32oUwSO4U0nWodR0I4I-A",
  authDomain: "booking-ticket-online-fk.firebaseapp.com",
  projectId: "booking-ticket-online-fk",
  storageBucket: "booking-ticket-online-fk.appspot.com",
  messagingSenderId: "69008563804",
  appId: "1:69008563804:web:69c2cd1efed2a9a1bd9099",
  measurementId: "G-PED4D54F21",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
