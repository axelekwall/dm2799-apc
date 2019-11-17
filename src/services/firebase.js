// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbKO0BaP__-CiEXrcTZZSchQJe-hz3QLY',
  authDomain: 'dm2799-apc.firebaseapp.com',
  databaseURL: 'https://dm2799-apc.firebaseio.com',
  projectId: 'dm2799-apc',
  storageBucket: 'dm2799-apc.appspot.com',
  messagingSenderId: '697890787992',
  appId: '1:697890787992:web:16f705a9a1c2d0d80536ed',
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const auth = fb.auth();

const signOut = () => auth.signOut();

const signIn = () => {
  // TODO: sign in with github here
};

export { auth, signOut, signIn };
