export default () => {
  const viewDifferent = `
  <div class='BoxErrorMon'>
    <div class='BoxErrorSon'>
      <h1>404 Error Page</h1>
      <p class='zoom-area'>This page has a loading error. Please try again later or notify ECOGRAM.</p>
      <section class='error-container'> <hr>
        <span>•4</span>
        <span><span class='screen-reader-text'>0</span></span>
        <span>4•</span>
      </section><hr>
    <div>
  <div>
  `;

  const divElemt = document.createElement('div');
  divElemt.setAttribute('id', 'message');
  divElemt.innerHTML = viewDifferent;
  return divElemt;
};
