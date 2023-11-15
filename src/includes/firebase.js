import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBoTFLAN1XbRC-dp3y-SQnftTgofpB5sqo',
  authDomain: 'music-b7571.firebaseapp.com',
  projectId: 'music-b7571',
  storageBucket: 'music-b7571.appspot.com',
  //messagingSenderId: "636572046291",
  appId: '1:636572046291:web:3872007ca9252d39f79526'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth()

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore()

// Initialize Cloud Storage and get a reference to the service
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { 
  auth, 
  //db, 
  storage, 
  usersCollection, 
  songsCollection, 
  commentsCollection, 
}
