export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra página!</h2>
  `;

  // <img class="image" src="http://olegif.com/bin/gifs/00/39/56.gif" alt="Conejo codeando">

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;
  return divElemt;
};
