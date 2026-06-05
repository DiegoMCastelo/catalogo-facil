import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCthL_yeCrZuBgNrSGPl2B0PjQYRKSsHJY",
  authDomain: "app-vivero-951b4.firebaseapp.com",
  projectId: "app-vivero-951b4",
  storageBucket: "app-vivero-951b4.firebasestorage.app",
  messagingSenderId: "381152434827",
  appId: "1:381152434827:web:0ab5c705880e7f30b4528e",
  measurementId: "G-RZSQ961KVL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };