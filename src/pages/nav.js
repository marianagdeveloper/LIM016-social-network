import {
  auth, signOut,
} from '../utils/firebaseconfig.js';

/* eslint-disable no-unused-expressions */
export const handleSignOut = (e) => {
  const a = e.target.closest('ul').querySelector('#signOutbtn');
  signOut(auth)
    .then(() => {
    // Sign-out successful.
      a.href = '#/welcome';
      window.location.href = a.href;
    }).catch((error) => {
    // An error happened.
      console.log(error);
    });
};

const NavHome = () => {
  const viewNav = ` <nav class="nav">

      <a id="OpenDefault" href="#/home">
        <img class="logo" src="/src/img/Logos/LogoG8.png" alt="Ecogram"></a>

      <button class="NavToggle" id= "NavToggle" area-label="Open menu" >
        <img class="MenuBar" src="/src/img/Icons/WhiteBorder/Menu.png" alt="Menu">
      </button>

      <ul class="nav-menu nav-menu_visible"  data-animation="center">

        <li class="nav-menu-item">
          <a href="#/home" class="nav-menu-link nav-link">
            <img src="/src/img/Icons/WhiteBorder/Home1.png" alt="Home">
            <p>Eco Home</p>
          </a>
        </li>

        <li class="nav-menu-item">
          <a  href="#/searchUser" class="nav-menu-link nav-link " >
            <img src="/src/img/Icons/WhiteBorder/Search1.png" alt="Search Users">
            <p>Search User</p>
          </a>
        </li>

        <li class="nav-menu-item">
          <a href="#/editProfile" class="nav-menu-link nav-link">
            <img src="/src/img/Icons/WhiteBorder/Edit1.png" alt="Edit Profile">
            <p>Edit Profile</p>
          </a>
        </li>

        <li class="nav-menu-item">
          <a href="#/about" class="nav-menu-link nav-link">
            <img src="/src/img/Icons/WhiteBorder/Inf1.png" alt="About Us">
            <p>About Us</p>
          </a>
        </li>
        <li id="signOutbtn" class="nav-menu-item">
          <a class="nav-menu-link nav-link">
            <img src="/src/img/Icons/WhiteBorder/SignOut.png" alt="Sign Out">
            <p>Sign Out</p>
          </a>
        </li>
      </ul>
    </nav>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewNav;

  // Event for Nav-Menu responsive

  const navToggle = divElemt.querySelector('.NavToggle');
  const navMenu = divElemt.querySelector('.nav-menu');

  // BAR NAVEGATION

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');

    // Event for area-label open and close menu

    if (navMenu.classList.contains('nav-menu_visible')) {
      navToggle.setAttribute('aria-label', 'Close menu');
    } else {
      navToggle.setAttribute('aria-label', 'Open menu');
    }
  });

  divElemt
    .querySelector('#signOutbtn')
    .addEventListener('click', handleSignOut);

  return divElemt;
};

export default NavHome;
