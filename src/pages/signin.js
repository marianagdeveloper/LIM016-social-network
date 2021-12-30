import {
  signInWithEmailAndPassword,
  provider,
  auth,
  signInWithPopup,
  doc,
  getDoc,
  db,
} from '../utils/firebaseconfig.js';
// message of errorCode
export const handleError = (error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log('error en signin', errorMessage, errorCode);
  document
    .getElementById('modalSignIn')
    .classList.replace('modalSignIn', 'alertMessageSignIn');

  document.getElementById('errormessage').innerHTML = errorCode;
};
// message of email not verified with google
export const handleErrorVerificateGoogle = () => {
  document
    .getElementById('modalSignIn')
    .classList.replace('modalSignIn', 'alertMessageSignIn');

  document.getElementById('errormessage').innerHTML = 'Email not verified.Sign Up with Google to continue';
};
// acceso a la vista home solo a usuarios con google verificado
export const handleCurrent = (a) => {
  const user = auth.currentUser;
  const emailVerified = auth.currentUser.emailVerified;
  if (user !== null && emailVerified === true) {
    user.providerData.forEach((profile) => {
      console.log(profile);
      // Search User
      const objName = { name: '' };
      sessionStorage.setItem('userSearch', (JSON.stringify(objName)));
      // eslint-disable-next-line no-param-reassign
      a.href = '#/home';
      window.location.href = a.href;
      // eslint-disable-next-line no-param-reassign
    });
  } else {
    // eslint-disable-next-line no-alert
    document
      .getElementById('modalSignIn')
      .classList.replace('modalSignIn', 'alertMessageSignIn');

    document.getElementById('errormessage').innerHTML = 'Email not verified. Please enter the verification link sent to your email to continue';
  }
};
// data del usuario extraido de firebase
export const handleCurrentUser = () => {
  const user = auth.currentUser;
  console.log(user);
  return user;
};
// Se ingresa informacion de email y password para acceder a la vista home
export const handleSignin = (e) => {
  e.preventDefault();
  const email = e.target.closest('form').querySelector('#email').value;
  const password = e.target.closest('form').querySelector('#password').value;
  const a = e.target.closest('form').querySelector('#btn-signin-signin');

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user.uid;
      // console.log('user:', user);
      // Save data to sessionStorage
      sessionStorage.setItem('key', user);
      // console.log('userCredential.user.uid:', userCredential.user.uid);
      handleCurrent(a);
    })
    .catch(handleError);
};
// acceder a la vista home con google.
export const handleSigninGoogle = (e) => {
  e.preventDefault();
  const a = e.target.closest('form').querySelector('#btn-signin-google');

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
          // Search User
          const objName = { name: '' };
          sessionStorage.setItem('userSearch', (JSON.stringify(objName)));
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
              <button type="submit" id="btn-signin-google" class="LoginGooglebtn">Sign In with Google</button>
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
    .querySelector('#btn-signin-google')
    .addEventListener('click', handleSigninGoogle);

  return divElemt;
};

export default SignIn;
