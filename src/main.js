// Este es el punto de entrada de tu aplicacion

// import { async } from 'regenerator-runtime';
import { myFunction } from './lib/index.js';
import { changeTmp } from './view-controller/router.js';

myFunction();
const init = () => {
  changeTmp(window.location.hash);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash));
};

window.addEventListener('load', init);
