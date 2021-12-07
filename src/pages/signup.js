import { createUserWithEmailAndPassword, auth, sendEmailVerification } from '../utils/firebaseconfig.js';

export const handleSenEmailVerification = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
      console.log('send email');
    });
};

export const handleSingUp = (e) => {
  e.preventDefault();
  const name = e.target.closest('form').querySelector('#name').value;
  const email = e.target.closest('form').querySelector('#email').value;
  const password = e.target.closest('form').querySelector('#password').value;
  createUserWithEmailAndPassword(auth, email, password, name)
    .then((userCredential) => {
      const user = userCredential.user;
      user.displayname = name;
      // eslint-disable-next-line no-console
      console.log(user.displayname);
      // eslint-disable-next-line no-alert
      alert(`Created User ${user}`);
      handleSenEmailVerification();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // eslint-disable-next-line no-console
      console.log(`Notification:${errorCode}${errorMessage}`);
      // eslint-disable-next-line no-alert
      alert(`Notification: ${errorMessage}`);
    });
};

const SignUp = () => {
  const viewCatalogue = `
  <div class="BoxSignUp">
    <div class="BoxWelcome1">
        <div class="Logo1">
            <img src="img/Logos/LogoG1.png" class="logoSignUp" alt="logoKMS" />
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
    <div class="BoxFormSignUp">
    
      <form>
        <div class="containerSignUp">
          <h1>Sign Up</h1>
          <hr />
          <div class="containerLogin">
          <label for="name"><b>Name</b></label>
          <input
            class="inputSignUp"
            id="name"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />

          <label for="email"><b>Email</b></label>
          <input
            class="inputSignUp"
            id="email"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label for="psw"><b>Password</b></label>
          <input
            class="inputSignUp"
            id="password"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label>
            <input
              class="inputCheck"
              type="checkbox"
              checked="checked"
              name="remember"
              style="margin-bottom: 15px"
            />
            Remember me
          </label>

          <p>
            By creating an account you agree to our
            <a href="#/terms" style="color: dodgerblue">Terms & Privacy</a>.
          </p>

          <p id="verify-message" class="verify-message"></p>
          <div class="clearfix">
            <button type="submit" id="btn-welcome-signup" id="signup" class="signupbtn">Sign Up</button>
          </div><hr>
          </div> 
          <p>
          Do you already have an account?
            <a href="#/signin" style="color: dodgerblue">Sign In</a>.
          </p>
        </div>
      </form>
    </div>
  </div>
  `;
  // <a type="submit" href="#/home">Send</a>
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewCatalogue;

  divElemt
    .querySelector('#btn-welcome-signup')
    .addEventListener('click', handleSingUp);
  return divElemt;
};

export default SignUp;
