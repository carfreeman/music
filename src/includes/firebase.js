import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,  } from "firebase/auth"
import { 
  getFirestore, 
  collection, 
  //addDoc,
  doc,
  setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBoTFLAN1XbRC-dp3y-SQnftTgofpB5sqo",
    authDomain: "music-b7571.firebaseapp.com",
    projectId: "music-b7571",
    storageBucket: "music-b7571.appspot.com",
    //messagingSenderId: "636572046291",
    appId: "1:636572046291:web:3872007ca9252d39f79526"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

const usersCollection = collection(db, 'users')

export {
    app,
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    usersCollection,
    doc,
    setDoc,
    signInWithEmailAndPassword,
    signOut,
}