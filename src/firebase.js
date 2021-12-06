// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getFirestore, getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

const main = document.getElementById('main');

const firebaseConfig = {
  apiKey: 'AIzaSyCk8ZsvxtMvGdSDjbG9qZwEtjRbW7ub9J4',
  authDomain: 'ecogram-5151.firebaseapp.com',
  projectId: 'ecogram-5151',
  storageBucket: 'ecogram-5151.appspot.com',
  messagingSenderId: '477155575466',
  appId: '1:477155575466:web:3ad053e41029cfd7ebb2d3',
  measurementId: 'G-0Y14YJN8Q0',
};

// Initialize Firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'users');

// get collection data

getDocs(colRef)
  .then((snapshot) => {
    const users = [];
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    // console.log(usuarios[0].title);
    main.innerHTML = users[0].title;
  });
// .catch(err => {
//   console.log(err.message)
// });
