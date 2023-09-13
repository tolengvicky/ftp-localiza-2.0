import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDavbyW0yQNcOZjtloyUasjkTNYHQ3cbuc',
  authDomain: 'localizabaruerioficial.firebaseapp.com',
  projectId: 'localizabaruerioficial',
  storageBucket: 'localizabaruerioficial.appspot.com',
  messagingSenderId: '1033318934925',
  appId: '1:1033318934925:web:bd2deaba2f0670c1d535c4',
}

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
