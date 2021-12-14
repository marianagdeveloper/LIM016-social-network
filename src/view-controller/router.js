/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable consistent-return */
import { components } from '../pages/index.js';
import { handleCurrent } from '../pages/signin.js';

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
    case '#/terms': {
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
      // if (handleCurrent()) {
      headerNav.appendChild(components.nav());
      sectionMain.appendChild(components.home());
      // } else {
      // sectionMain.appendChild(components.signin());
      // }
      break;
    }

    case '#/searchUser': {
      if (handleCurrent()) {
        headerNav.appendChild(components.nav());
        sectionMain.appendChild(components.search());
      } else {
        sectionMain.appendChild(components.signin());
      }
      // headerNav.appendChild(components.nav());
      // sectionMain.appendChild(components.search());
      break;
    }

    case '#/editProfile': {
      if (handleCurrent()) {
        headerNav.appendChild(components.nav());
        sectionMain.appendChild(components.editProfile());
      } else {
        sectionMain.appendChild(components.signin());
      }
      break;
    }

    case '#/about': {
      if (handleCurrent()) {
        headerNav.appendChild(components.nav());
        sectionMain.appendChild(components.about());
      } else {
        sectionMain.appendChild(components.signin());
      }
      break;
    }
    // case '#/publications': {
    //   headerNav.appendChild(components.nav());
    //   publications.appendChild(components.publications());
    //   break;
    // }

    default:
      return sectionMain.appendChild(components.different());
  }
};
