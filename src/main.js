// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { changeTmp } from './view-controller/router.js';
import { viewPreBienv } from './pages/preBienvenida.js';

viewPreBienv();
myFunction();
const init = () => {
  changeTmp(window.location.hash);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash));
};

window.addEventListener('load', init);
