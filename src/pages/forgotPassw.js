import {
  auth, sendPasswordResetEmail, signInWithPopup, provider, GoogleAuthProvider,
} from '../utils/firebaseconfig.js';

export const handleForgotPassw = (e) => {
  e.preventDefault();
  const email = e.target.closest('form').querySelector('#email').value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      document
        .getElementById('alertMessage')
        .classList.replace('ocultAlertMessage', 'alertMessage');
      // document.getElementById('alertMessage').classList.add('alertMessage');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log('error en password', errorMessage, errorCode);
      return errorMessage;
    });
};

export const handleSigninGoogle = (e) => {
  // document
  //   .getElementById('btn-signin-google')
  //   .addEventListener('click', (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(user.displayName + token);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode, errorMessage, email, credential);
    });
};

const forgotPass = () => {
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
        <div class="BoxFormLogin formForgotPass">
            <a href="#/signin"><i class="fas fa-arrow-left"></i></a>
            <form>
                <div class="containerSignIn containerSignInForgotPass">
                <h1>Recover your account</h1>
                <hr />
                <div class="containerLogin forgotPass" id="forgotPass">
                <label for="uname"><b>Enter your email associated with your account</b></label>
                <div class="clearfix clearfixForgotPass" id="clearfix clearfixForgotPass">
                    <input class="inputSignIn inputSignInForgotPass" id="email" type="text" placeholder="Enter your email" name="uname" required/>
                    <p id="alertMessage" class= "ocultAlertMessage">
                    A verification email has just been sent to complete your password change.</p> 
                    <button type="submit" id="btn-signin-signin" class="Loginbtn LoginbtnForgotPass"><a href="#/forgotPassw2">Continue</a></button>
                        <div class="entreLineas">
                            <div class="linea">&nbsp;</div>
                            <div class="o">or</div>
                            <div class="linea">&nbsp;</div>
                        </div>
                    <button type="submit" id="btn-signin-google" class="LoginGooglebtn LoginGooglebtnForgotPass" href="#/google">Sign in with Gmail</button>
                </div><hr>
                </div>
            </form>
        </div>
      </div>
    </div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewAccessories;
  // forgot password
  divElemt
    .querySelector('#btn-signin-signin')
    .addEventListener('click', handleForgotPassw);

  divElemt
    .querySelector('#btn-signin-google')
    .addEventListener('click', handleSigninGoogle);
  return divElemt;
};

export default forgotPass;
