import { components } from "../pages/index.js";
// import { createUser } from '../firebase/index.js';
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk8ZsvxtMvGdSDjbG9qZwEtjRbW7ub9J4",
  authDomain: "ecogram-5151.firebaseapp.com",
  projectId: "ecogram-5151",
  storageBucket: "ecogram-5151.appspot.com",
  messagingSenderId: "477155575466",
  appId: "1:477155575466:web:a58327dc906a17f4ebb2d3",
  measurementId: "G-ETL5GSYXTL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const changeTmp = (hash) => {
  const id = hash.split("/")[1];
  const sectionMain = document.getElementById("container");
  sectionMain.innerHTML = "";

  switch (hash) {
    case "":
    case "#":
    case "#/": {
      return sectionMain.appendChild(components.signin());
    }
    case "#/signin":
    case "#/signup": {
      sectionMain.appendChild(components[id]());
      document.getElementById("signup").addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("pass").value;

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("created");
            alert("Created User")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log("Notification:" + errorCode + errorMessage);
            alert("Notification: " + errorMessage)
          });
      });
      return;
    }
    case "#/home": {
      return sectionMain.appendChild(components[id]());
    }
    default:
      return sectionMain.appendChild(components.different());
  }
};
