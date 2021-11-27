// Este es el punto de entrada de tu aplicacion

// import { async } from 'regenerator-runtime';
import { myFunction } from './lib/index.js';
import { homeView } from './lib/home.js';

myFunction();
homeView();

const routes = {
  '/': homeView,
};

console.log(routes);

const router = async () => {
  const header = null || document.getElementById('header');

  header.innerHTML = await homeView();
};

window.addEventListener('load', router);
