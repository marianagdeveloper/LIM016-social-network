import {
  createUserWithEmailAndPassword,
  auth,
  sendEmailVerification,
  doc, setDoc, db,
} from '../utils/firebaseconfig.js';

// Add a new document in collection "users"
async function createNewUser(name, email, uid) {
  await setDoc(doc(db, 'users', uid), {
    uid: uid,
    name: name,
    email: email,
  });
}

const cleanModal = () => {
  const check = document.getElementById('modalCheck');
  const nameI = document.getElementById('modalName');
  const errorSU = document.getElementById('modalSignUp');

  if (check) {
    document
      .getElementById('modalCheck')
      .classList.replace('alertmodalCheck', 'modalCheck');
  }

  if (nameI) {
    document
      .getElementById('modalName')
      .classList.replace('alertmodalName', 'modalName');
  }

  if (errorSU) {
    document
      .getElementById('modalSignUp')
      .classList.replace('alertMessageSignUp', 'modalSignUp');
  }
};

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

  console.log(name);

  if (name !== '') {
    // alert(`Created User ${user}`);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Add new user
        // Usar userCredential para crear un nuevo usuario y que el id sea el uid
        // revisar en el caso de Google para la creacion del usuario
        console.log('userCredential:', userCredential);
        const emailFS = userCredential.user.email;
        const uidFS = userCredential.user.uid;
        createNewUser(name, emailFS, uidFS);
        // const user = userCredential.user;
        // user.displayname = name;
        // eslint-disable-next-line no-console
        // console.log(user.displayname);
        // eslint-disable-next-line no-alert
        cleanModal();
        // Print notification: User created
        document
          .getElementById('modalCheck')
          .classList.replace('modalCheck', 'alertmodalCheck');
        handleSenEmailVerification();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-console
        console.log('error en signup', errorMessage, errorCode);
        // eslint-disable-next-line no-alert
        // alert(`Notification: ${errorMessage}`);
        cleanModal();
        document
          .getElementById('modalSignUp')
          .classList.replace('modalSignUp', 'alertMessageSignUp');

        document.getElementById('errormessage').innerHTML = errorCode;
      });
  } else if (name === '' || name == null) {
    cleanModal();
    document
      .getElementById('modalName')
      .classList.replace('modalName', 'alertmodalName');
  }
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
            maxlength="8"
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
          </div>
          <div id="modalSignUp" class="modalSignUp">
            <img src="img/Icons/Alert2.png" class="Alert" alt="Alert" />
            <p id="errormessage"> Error </p>
          </div>
          <div id="modalCheck" class="modalCheck">
            <img src="img/Icons/Verify.png" class="Check" alt="User Created" />
            <p id="CheckMessage"> Your username was created successfully. Check your email.</p>
          </div>
          <div id="modalName" class="modalName">
            <img src="img/Icons/Alert2.png" class="Alert" alt="You need enter your name" />
            <p id="nameMessage"> Required your name </p>
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
