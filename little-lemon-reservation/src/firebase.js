
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCdt5Y3JNMKh7sW7LksWKLFGLMa5C_VSTg",
  authDomain: "little-lemon-reservation-d5afa.firebaseapp.com",
  projectId: "little-lemon-reservation-d5afa",
  storageBucket: "little-lemon-reservation-d5afa.firebasestorage.app",
  messagingSenderId: "780463782572",
  appId: "1:780463782572:web:cfae2b9b444c2d35ebbd09"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
