// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

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
  updateDoc,
  query,
  where,
  arrayUnion,
  arrayRemove,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';

import {
  getStorage, ref, uploadBytes, getDownloadURL,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js';

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
const storage = getStorage(app);
// const storageRef = ref(storage);

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
  updateDoc,
  arrayUnion,
  arrayRemove,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
};
