/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable consistent-return */
import { components } from '../pages/index.js';

// import { signUpController } from './signup-controller.js';
// eslint-disable-next-line import/no-unresolved
// import {
//   auth,
//   provider,
//   signInWithPopup,
//   GoogleAuthProvider,
//   sendPasswordResetEmail,
// } from '../utils/firebaseconfig.js';

export const changeTmp = (hash) => {
  const id = hash.split('/')[1];

  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = '';

  const headerNav = document.getElementById('headerNav');
  headerNav.innerHTML = '';

  // const publications = document.querySelector('#publications');
  // publications.innerHTML = '';

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
      break;
    }
    case '#/forgotPassw': {
      sectionMain.appendChild(components[id]());
      break;
    }
    // case '#/forgotPassw2': {
    //   return sectionMain.appendChild(components[id]());
    // }
    case '#/home': {
      headerNav.appendChild(components.nav());
      sectionMain.appendChild(components.home());
      break;
    }

    case '#/about': {
      headerNav.appendChild(components.nav());
      sectionMain.appendChild(components.about());
      break;
    }
    // case '#/publications': {
    //   publications.appendChild(components.publications());
    //   break;
    // }

    default:
      return sectionMain.appendChild(components.different());
  }
};
