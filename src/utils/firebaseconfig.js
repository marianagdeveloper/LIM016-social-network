import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js';

// Import components of authtentication firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

// Import components of firestore
import {
  getFirestore,
  addDoc,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  onSnapshot,
  deleteDoc,
  query,
  where,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';

// Configuration key Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCk8ZsvxtMvGdSDjbG9qZwEtjRbW7ub9J4',
  authDomain: 'ecogram-5151.firebaseapp.com',
  projectId: 'ecogram-5151',
  storageBucket: 'ecogram-5151.appspot.com',
  messagingSenderId: '477155575466',
  appId: '1:477155575466:web:a58327dc906a17f4ebb2d3',
  measurementId: 'G-ETL5GSYXTL',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// export components of firestore
export {
  app,
  auth,
  provider,
  analytics,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
};

// export components of firestore
export {
  getFirestore,
  addDoc,
  db,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  onSnapshot,
  deleteDoc,
  query,
  where,
};
