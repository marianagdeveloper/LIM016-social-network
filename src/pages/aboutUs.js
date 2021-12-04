/* eslint-disable operator-linebreak */
const AboutUs = () => {
  const viewAboutUs =
  // eslint-disable-next-line no-unused-expressions
  `
    <!-- ABOUT US PAGE -->
      <section id='AboutUs' class='Box'>
          <div class='AboutUsContent'>
            <div class='LogoLargeDiv'>
              <img class='LogoLarge' src='/src/img/Logos/LogoG7.png' alt='Ecogram'>
            </div>
            <br>
            <div class='AboutUsText'>
              <h1>ECOGRAM</h1>
              <h3>EVERONMENTAL SOCIAL NETWORK
              </h3><br>
              <p>Es una red social creada con fines pro ambientales. Conocerás personas de diversos países con intereses afines al cuidado de nuestro único hogar 'El Planeta Tierra'. Si tú no lo cuidas, ¿Quién lo hará?</p>
              <br>
              <h1>¿QUÉ ENCONTRARÁS EN ECOGRAM?</h1>
              <h3>En esta plataforma podrás encontrar las siguientes secciones:
              </h3><br>
              <ul>
                <li>
                  Buscar usuarios con el mismo interés y de otros países.
                </li>
                <li>
                  Ver publicaciones, referentes al medio ambente,de todos los usuarios.
                </li>
                <li>
                  Publicar tips, imágenes, eventos, entre otros recursos pro ambientales.
                </li>
                <li>
                  Editar y gestionar tu perfil como desees.
                </li>
                <li>
                  Tener tu propia gelria de fotos pro ambientales.
                </li>
              </ul>
            <br>
            <h1>FOUNDERS:</h1>
          </div>
          <div class='FounderImg'>
            <img src='/src/img/Logos/KMR4.png' alt='Founders'>
          </div><br>
          <div class='FounderRedSocial-Box'>
            <div class='FounderRedSocial-Box1'>
              <div>
                <h3>Katerin Tello</h3>
              </div>
              <div class='FRS-div1'>
                <div class='RedSocialContainerImg'>
                  <img src='/src/img/RedesSociales/icons8-gmail-32.png' alt='Gmail'>
                </div>
                <div class='RedSocialContainerImg'>
                  <img src='/src/img/RedesSociales/icons8-github-30.png' alt='GitHub'>
                </div>
                <div class='RedSocialContainerImg'>
                  <img src='/src/img/RedesSociales/icons8-linkedin-30.png' alt='LinkedIn'>
                </div>
              </div>
            </div>
            <div class='FounderRedSocial-Box1'>
              <div>
                <h3>Mariana Guanda</h3>
              </div>
              <div class='FRS-div1'>
                <div class='RedSocialContainerImg'>
                  <img src='/src/img/RedesSociales/icons8-gmail-32.png' alt='Gmail'>
                </div>
                <div class='RedSocialContainerImg'>
                  <img src='/src/img/RedesSociales/icons8-github-30.png' alt='GitHub'>
                </div>
                <div class='RedSocialContainerImg'>
                  <img src='/src/img/RedesSociales/icons8-linkedin-30.png' alt='LinkedIn'>
                </div>
              </div>
            </div>
            <div class='FounderRedSocial-Box1'>
              <div>
                <h3>Rosamaria Rodriguez</h3>
              </div>
              <div class='FRS-div1'>
                <div class='RedSocialContainerImg'>
                  <img src='/src/img/RedesSociales/icons8-gmail-32.png' alt='Gmail'>
                </div>
                <div class='RedSocialContainerImg'>
                  <img src='/src/img/RedesSociales/icons8-github-30.png' alt='GitHub'>
                </div>
                <div class='RedSocialContainerImg'>
                  <img src='/src/img/RedesSociales/icons8-linkedin-30.png' alt='LinkedIn'>
                </div>
              </div>
            </div>
          </div>

          </div>
      </section>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewAboutUs;

  return divElemt;
};

export default AboutUs;
