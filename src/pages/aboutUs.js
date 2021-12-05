/* eslint-disable operator-linebreak */
const AboutUs = () => {
  const viewAboutUs =
    // eslint-disable-next-line no-unused-expressions
    `
    <!-- ABOUT US PAGE -->
      <section id="AboutUs" class="Box">
        <div class="LogoLargeDiv">
          <img class="LogoLarge" src="/src/img/Logos/LogoG7.png" alt="Ecogram">
        </div><br>
        <div class="AboutUsText">
          <h1>ECOGRAM</h1>
          <h3>EVERONMENTAL SOCIAL NETWORK</h3><br>
          <p>It is a social network created for pro-environmental purposes. You will meet people from different countries with similar interests in caring for our only home "Planet Earth". If you don"t take care of it, who will? </p>
          <br>
          <h1>WHAT WILL YOU FIND IN ECOGRAM?</h1>
          <h3>On this platform you can find the following sections:</h3><br>
          <ul>
            <li>
            Search for users with the same interest and from other countries.
            </li>
            <li>
            See publications, referring to the environment, of all users.
            </li>
            <li>
            Publish tips, images, events, among other pro-environmental resources.
            </li>
            <li>
            Edit and manage your profile as you wish.
            </li>
            <li>
            Have your own pro environmental galery.
            </li>
          </ul>
        </div>
        <div class="FounderImg">
          <h1>FOUNDERS:</h1>
          <img src="/src/img/Logos/KMR4.png" alt="Founders">
        </div><br>

        <div class="Founders-Box">
          <div class="Founder-Box-Box">
            <a target="_blank" href="https://github.com/KaterinT">
              <img src="/src/img/RedesSociales/github-120.png" class="redSocial" alt="Github">
            </a>
            <a target="_blank" href="mailto:tellourakaterin@gmail.com">
              <img src="/src/img/RedesSociales/gmail-120.png" class="redSocial" alt="Gmail">
            </a>
            <a target="_blank" href=""><img src="/src/img/RedesSociales/linkedin-120.png" class="redSocial" alt="LinkenIn"></a>
            <p>Katerin Tello</p>
          </div>
          <div class="Founder-Box-Box">
            <a target="_blank" href="https://github.com/marianagdeveloper">
              <img src="/src/img/RedesSociales/github-120.png" class="redSocial" alt="Github">
            </a>
            <a target="_blank" href="mailto:">
              <img src="/src/img/RedesSociales/gmail-120.png" class="redSocial" alt="Gmail">
            </a>
            <a target="_blank" href="">
              <img src="/src/img/RedesSociales/linkedin-120.png" class="redSocial" alt="LinkenIn">
            </a>
            <p>Mariana Guanda</p>
          </div>
          <div class="Founder-Box-Box">
            <a target="_blank" href="https://github.com/RJRCH123">
              <img src="/src/img/RedesSociales/github-120.png" class="redSocial" alt="Github">
            </a>
            <a target="_blank" href="mailto:rous9716@gmail.com">
              <img src="/src/img/RedesSociales/gmail-120.png" class="redSocial" alt="Gmail">
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/rosamaria-rodriguez-6904a1191/">
              <img src="/src/img/RedesSociales/linkedin-120.png" class="redSocial" alt="LinkenIn">
            </a>
            <p>Rosamaria Rodriguez</p>
          </div>
        </div>    
      </section>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewAboutUs;

  return divElemt;
};

export default AboutUs;
