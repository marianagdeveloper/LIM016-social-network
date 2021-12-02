import { signInWithGmail } from '../view-controller/signin-controller.js';
import { signInWithEmailAndPassword, provider, auth } from '../utils/firebaseconfig.js';

export const handleSignin = (e) => {
  e.preventDefault();
  const email = e.target.closest('form').querySelector('#email').value;
  const password = e.target.closest('form').querySelector('#password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error en signin', errorMessage, errorCode);
    });
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
              <button type="submit" id="btn-signin-signin" class="Loginbtn">Login</button>
              <button type="submit" id="btn-signin-google" class="LoginGooglebtn" href="#/google">Continue with Google</button>
            </div><hr>
            </div>
              <p>
              You do not have an account?
                <a href="#/signup" style="color: dodgerblue">Sign up</a>.
              </p>
              <p>
              Forgot your password?
                <a href="#/forgotPassw" style="color: dodgerblue">Get it back here</a>.
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
    .querySelector('#btn-signin-google')
    .addEventListener('click', () => {
      signInWithGmail(auth, provider);
    });
  return divElemt;
};

export default SignIn;
