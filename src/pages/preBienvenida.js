export const viewPreBienv = () => {
  window.addEventListener('load', () => {
    const contenedorLoader = document.querySelector('.contenedorLoader');
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden';
  });
};
