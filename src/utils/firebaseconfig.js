/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
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

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
  app,
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
};
