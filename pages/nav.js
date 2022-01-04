import {
  auth, signOut,
} from '../utils/firebaseconfig.js';

/* eslint-disable no-unused-expressions */
export const handleSignOut = (e) => {
  const a = e.target.closest('ul').querySelector('#signOutbtn');
  signOut(auth)
    .then(() => {
    // Sign-out successful.

      // Remove all saved data from sessionStorage
      sessionStorage.clear();
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
        <img class="logo" src="img/Logos/LogoG3.png" alt="Ecogram"></a>

      <ul class="nav-menu nav-menu_visible"  data-animation="center">

        <li class="nav-menu-item">
          <a href="#/home" class="nav-menu-link nav-link">
            <img src="img/Icons/WhiteBorder/Home1.png" alt="Home">
          </a>
        </li>

        <li class="nav-menu-item">
          <a  href="#/searchUser" class="nav-menu-link nav-link " >
            <img src="img/Icons/WhiteBorder/Search1.png" alt="Search Users">
          </a>
        </li>

        <li class="nav-menu-item">
          <a href="#/editProfile" class="nav-menu-link nav-link">
            <img src="img/Icons/WhiteBorder/Edit1.png" alt="Edit Profile">
          </a>
        </li>

        <li class="nav-menu-item">
          <a href="#/about" class="nav-menu-link nav-link">
            <img src="img/Icons/WhiteBorder/Inf1.png" alt="About Us">
          </a>
        </li>
        <li id="signOutbtn" class="nav-menu-item">
          <a class="nav-menu-link nav-link">
            <img src="img/Icons/WhiteBorder/SignOut.png" alt="Sign Out">
          </a>
        </li>
      </ul>
    </nav>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewNav;

  divElemt
    .querySelector('#signOutbtn')
    .addEventListener('click', handleSignOut);

  return divElemt;
};

export default NavHome;
