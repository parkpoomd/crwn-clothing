// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-xik6RpAAE2k8ttWYFPQyKoxk_8-nR9Q',
  authDomain: 'crwn-db-9a385.firebaseapp.com',
  projectId: 'crwn-db-9a385',
  storageBucket: 'crwn-db-9a385.appspot.com',
  messagingSenderId: '180719466429',
  appId: '1:180719466429:web:6fc3fc4362a1daf9d984d4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const authStateChanged = onAuthStateChanged
export const authSignOut = signOut

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default app
