import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDAb-RLJ3xiHjYf-admj-i5rgOtU7lybzc",
  authDomain: "fhealth-sphere---login.firebaseapp.com",
  projectId: "fhealth-sphere---login",
  storageBucket: "fhealth-sphere---login.appspot.com", // Sửa lại chỗ này
  messagingSenderId: "44086127203",
  appId: "1:44086127203:web:444374eafa3a617d8aa656",
  measurementId: "G-YN8ZXTDCQX",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); // Thêm Firestore

setPersistence(auth, browserLocalPersistence);

export { auth, googleProvider, signInWithPopup, signOut, db };
