/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable consistent-return */
import { components } from '../pages/index.js';

import { signUpController } from './signup-controller.js';
// eslint-disable-next-line import/no-unresolved
import {
  auth,
  provider,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from '../utils/firebaseconfig.js';

export const changeTmp = (hash) => {
  const id = hash.split('/')[1];

  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/welcome':
    case '#/': {
      return sectionMain.appendChild(components.welcome());
    }
    case '#/signin': {
      sectionMain.appendChild(components[id]());
      break;
    }
    case '#/signup': {
      sectionMain.appendChild(components[id]());
      document
        .getElementById('btn-welcome-signup')
        .addEventListener('click', (e) => {
          e.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          signUpController(auth, email, password);
        });
      return;
    }
    case '#/forgotPassw': {
      sectionMain.appendChild(components[id]());
      // forgot password
      document
        .getElementById('btn-signin-signin')
        .addEventListener('click', (e) => {
          e.preventDefault();

          const email = document.getElementById('email').value;
          sendPasswordResetEmail(auth, email)
            .then(() => {
              document.getElementById('alertMessage').classList.replace('ocultAlertMessage', 'alertMessage');
              // document.getElementById('alertMessage').classList.add('alertMessage');
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              return errorMessage;
            });
        });
      document
        .getElementById('btn-signin-google')
        .addEventListener('click', (e) => {
          e.preventDefault();
          signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              // ...
              console.log(user.displayName + token);
            })
            .catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
              console.log(errorCode, errorMessage, email, credential);
            });
        });
      break;
    }
    // case '#/forgotPassw2': {
    //   return sectionMain.appendChild(components[id]());
    // }
    case '#/home': {
      return sectionMain.appendChild(components.home());
    }
    default:
      return sectionMain.appendChild(components.different());
  }
};
