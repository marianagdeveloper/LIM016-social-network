export default () => {
  const viewDifferent = ` 
  <div class='BoxErrorMon'>
  <hr> <br>
    <div class="Logo1"> 
      <img src="img/Logos/LogoG1.png" class="logoSignIn" alt="logoKMS" />
    </div>
    <div class='BoxErrorSon'>
      <h1>404 Error Page</h1>
      <p class='zoom-area'>This page has a loading error. Please try again later or notify ECOGRAM.</p> <hr>
      <section class='error-container'> 
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
