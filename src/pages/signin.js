import {
  signInWithEmailAndPassword,
  provider,
  auth,
  signInWithPopup,
  // doc,
  // getDoc,
  // db,
} from '../utils/firebaseconfig.js';

const handleError = (error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log('error en signin', errorMessage, errorCode);
  // const errorModal = '333';
  document
    .getElementById('modalSignIn')
    .classList.replace('modalSignIn', 'alertMessageSignIn');

  document.getElementById('errormessage').innerHTML = errorCode;
};

export const handleCurrent = () => {
  const user = auth.currentUser;
  if (user !== null) {
    user.providerData.forEach((profile) => {
      // console.log(`Sign-in provider: ${profile.providerId}`);
      // console.log(`Provider-specific UID: ${profile.uid}`);
      // console.log(`Name: ${profile.displayName}`);
      // console.log(`Email: ${profile.email}`);
      // console.log(`Photo URL: ${profile.photoURL}`);
      // console.log(`uid: ${profile.uid}`);
    });
    // console.log(displayName, email, photoURL, emailVerified, uid);
  }
  return user;
};

export const handleSignin = (e) => {
  e.preventDefault();
  const email = e.target.closest('form').querySelector('#email').value;
  const password = e.target.closest('form').querySelector('#password').value;
  const a = e.target.closest('form').querySelector('#btn-signin-signin');

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user.uid;
      console.log('user', user);
      // Save data to sessionStorage
      sessionStorage.setItem('key', user);
      console.log('userCredential.user.uid:', userCredential.user.uid);

      a.href = '#/home';
      window.location.href = a.href;
      // handleCurrent(userCredential.user);
    })
    .catch(handleError);
};

export const handleSigninGoogle = (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user.displayName);
      window.location.href = '#/home';
    })
    .catch(handleError);
};

const SignIn = () => {
  const viewAccessories = `
  <div class="BoxContainerSignIn">
    <div class="BoxLogin">
      <div class="BoxWelcome1">
        <div class="Logo1">
            <img src="img/Logos/LogoG1.png" class="logoSignIn" alt="logoKMS" />
        </div>
        <br>
        <p class="text-home">
            It is a social network focused on creating a community interested in
            the preservation of our only home "🌎The Planet Earth".
          </p>
        <p class="kmr">
            KMR
        </p>
      </div>
      <div class="BoxFormLogin">
        <form>
          <div class="containerSignIn">
            <h1>Login</h1>
            <hr />
          <div class="containerLogin">
            <label for="uname"><b>Email</b></label>
            <input
              class="inputSignIn"
              id="email"
              type="text"
              placeholder="Enter your email"
              name="uname"
              required
            />

            <label for="psw"><b>Password</b></label>
            <input
              class="inputSignIn"
              id="password"
              type="password"
              placeholder="Enter your Password"
              name="psw"
              required
            />

            <label class="label-checkbox">
              <input
                class="inputCheck"
                type="checkbox"
                checked="checked"
                name="remember"
                style="margin-bottom: 15px"
              />
              Remember me
            </label>

            <div class="clearfix">
              <button id="btn-signin-signin" class="Loginbtn">Login</button>

              
            </div>            
            <div id="modalSignIn" class="modalSignIn">
              <img src="img/Icons/Alert2.png" class="Alert" alt="Alert" />
              <p id="errormessage"> Error </p>
            </div><hr>
            </div> 
              <p>
              You do not have an account?
                <a href="#/signup" style="color: dodgerblue">Sign up</a>.
              </p>
              <p>
              Forgot your password?
                <a id="forgotPassw" href="#/forgotPassw" style="color: dodgerblue">Get it back here</a>.
              </p>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  </div>
  `;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewAccessories;

  divElemt
    .querySelector('#btn-signin-signin')
    .addEventListener('click', handleSignin);

  // Sign In with Google
  divElemt
    .querySelector('#btn-signin-google');
  // .addEventListener('click', handleSigninGoogle);

  return divElemt;
};

export default SignIn;

// Boton para iniciar sesion con Google - Linea 122
/*<button type="submit" id="btn-signin-google" class="LoginGooglebtn">*/
/*Continue with Google</button>*/ 
