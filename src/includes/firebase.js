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
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  orderBy, 
  startAfter, 
  limit,  } from "firebase/firestore"
  
  import { 
    getStorage,
    ref as refFirebase,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject, } from "firebase/storage"

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
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

const usersCollection = collection(db, 'users')
const songsCollection = collection(db, 'songs')

/* const authService = {
  getAuth, 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
}

const firestoreService = {
  getFirestore, 
  collection, 
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
}

const storageService = {
  getStorage,
  refFirebase,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} */

/* export {
  authService,
  firestoreService,
  storageService,
} */

export {
    app,
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    usersCollection,
    songsCollection,
    addDoc,
    doc,
    setDoc,
    signInWithEmailAndPassword,
    signOut,
    storage,
    refFirebase,
    uploadBytesResumable,
    getDownloadURL,
    query,
    where,
    getDoc,
    getDocs,
    updateDoc,
    deleteObject,
    deleteDoc,
    orderBy, 
    startAfter, 
    limit,
}