import { app } from './firebaseconfig';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,

} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

const auth = getAuth(app);

// export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => { // aquí en el then debería ir lo que sucede luego de registrarse
//     // Signed in
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//     // ..
//   });


//   // Método para loguear un usuario ya registrado

// export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//   // window.location.hash = '#/login';
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//   });

// export const provider = new GoogleAuthProvider();
// export const googleSignIn = () => {
// signInWithRedirect(auth, provider);
// };


// export const redirection = () => {
//   getRedirectResult(auth)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access Google APIs.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;

//       // The signed-in user info.
//       const user = result.user;
//       window.location.hash = '#/home';
//     }).catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// };