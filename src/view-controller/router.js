/* eslint-disable import/named */
/* eslint-disable consistent-return */
import { components } from '../pages/index.js';
import { signIn, signInWithGmail } from './signin-controller.js';
import { signUpController } from './signup-controller.js';
// eslint-disable-next-line import/no-unresolved
import {
  auth, provider,
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
      document
        .getElementById('btn-signin-signin')
        .addEventListener('click', (e) => {
          e.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          signIn(auth, email, password);
        });

      // Sign In with Google
      document
        .getElementById('btn-signin-google')
        .addEventListener('click', () => {
          signInWithGmail(auth, provider);
        });

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
