/* eslint-disable consistent-return */
import { components } from '../pages/index.js';
// eslint-disable-next-line import/no-unresolved
import { auth, createUserWithEmailAndPassword } from '../utils/firebaseconfig.js';

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
