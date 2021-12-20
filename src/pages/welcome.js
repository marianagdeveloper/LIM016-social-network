import {
  // signInWithEmailAndPassword,
  provider,
  auth,
  signInWithPopup,
  doc,
  db,
  getDoc,
} from '../utils/firebaseconfig.js';

import { handleErrorVerificateGoogle, handleError } from './signin.js';
// acceder a la vista home con google.
export const handleSigninGoogle = (e) => {
  e.preventDefault();
  const a = e.target.closest('div').querySelector('#btn-welcome-google');

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // const email = user.email;
      const uid = user.uid;
      // eslint-disable-next-line no-shadow
      async function readUser(uid) {
        let data = '';
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);
        data = docSnap.data();
        if (docSnap.exists() && data.uid === uid) {
          sessionStorage.setItem('key', uid);
          // console.log('Document data:', docSnap.data());
          sessionStorage.setItem('user', JSON.stringify(data));
          a.href = '#/home';
          window.location.href = a.href;
        } else {
          handleErrorVerificateGoogle();
        }
        console.log(data);
        return data;
      }
      readUser(uid);
    })
    .catch(handleError);
};

export default () => {
  const viewHome = `
    <div class="hero-image">
        <div class="hero-text">
          <div class="Logo1">
            <img src="img/Logos/LogoG1.png" class="logoHome" alt="logoKMS" />
          </div>
          <h4>WELCOME</h4>
          <p class="text-home">
            It is a social network focused on creating a community interested in
            the preservation of our only home "🌎The Planet Earth".
          </p>
          <div class="ButtonBox1">
            <button id="btn-welcome-google" class="btn-welcome-google"><a>Continue with Google</a></button>
            <button id="btn-welcome-signin" class="btn-welcome-signin"><a href="#/signin">Sign In</a></button>
            <button id="btn-welcome-signup" class="btn-welcome-signup"><a href="#/signup">Sign Up</a></button>
          </div>
          <div id="modalSignIn" class="modalSignIn">
              <img src="img/Icons/Alert2.png" class="Alert" alt="Alert" />
              <p id="errormessage"> Error </p>
          </div>
          <p class="kmr">
            KMR
          </p>
        </div>
      </div>
  `;

  // <img class="image" src="http://olegif.com/bin/gifs/00/39/56.gif" alt="Conejo codeando">

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;

  // Sign In with Google
  divElemt
    .querySelector('#btn-welcome-google')
    .addEventListener('click', handleSigninGoogle);

  return divElemt;
};
