/* eslint-disable import/named */
/* eslint-disable consistent-return */
import { components } from '../pages/index.js';
// eslint-disable-next-line import/no-unresolved
import { auth, provider, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from '../utils/firebaseconfig.js';

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
      document
        .getElementById('btn-signin-google')
        .addEventListener('click', () => {
          // signInWithRedirect(auth, provider);
          // getRedirectResult(auth)
          //   .then((result) => {
          //     // This gives you a Google Access Token. You can use it to access Google APIs.
          //     const credential = GoogleAuthProvider.credentialFromResult(result);
          //     const token = credential.accessToken;

          //     // The signed-in user info.
          //     const user = result.user;
          //   }).catch((error) => {
          //     // Handle Errors here.
          //     const errorCode = error.code;
          //     const errorMessage = error.message;
          //     // The email of the user's account used.
          //     const email = error.email;
          //     // The AuthCredential type that was used.
          //     const credential = GoogleAuthProvider.credentialFromError(error);
          //     // ...
          //   });
          signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              // ...
              console.log(user.displayName);
            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
              console.log(errorCode, errorMessage);
            });
        });

      break;
    }
    case '#/signup': {
      sectionMain.appendChild(components[id]());
      document
        .getElementById('btn-welcome-signup')
        .addEventListener('click', () => {
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              // eslint-disable-next-line no-console
              console.log('created');
              // eslint-disable-next-line no-alert
              alert(`Created User ${user}`);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // eslint-disable-next-line no-console
              console.log(`Notification:${errorCode}${errorMessage}`);
              // eslint-disable-next-line no-alert
              alert(`Notification: ${errorMessage}`);
            });
        });
      return;
    }
    case '#/forgotPassw': {
      return sectionMain.appendChild(components[id]());
    }
    case '#/forgotPassw2': {
      return sectionMain.appendChild(components[id]());
    }
    case '#/home': {
      return sectionMain.appendChild(components.home());
    }
    default:
      return sectionMain.appendChild(components.different());
  }
};
