import { userSignUp, verifyEmail } from '../firebase/firebasefunction';

export const signUpController = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const passwordRepeat = document.querySelector('#passwordRepeat').value;
  const msgverify = document.querySelector('#verify-message');
  userSignUp(name, email, password, passwordRepeat)
    .then(() => {
      verifyEmail();
      msgverify.textContent = 'Please, revise su email';
    }).catch((verify) => {
      msgverify.classList.add('verify-message');
      msgverify.textContent = verify.message;
    });
};

// eslint-disable-next-line import/no-unresolved
// import { createUserWithEmailAndPassword, getAuth } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

// export const signInController = (e) => {
//   e.preventDefault();
//   const name = document.querySelector('#name').value;
//   const email = document.querySelector('#email').value;
//   const password = document.querySelector('#password').value;
//   const passwordRepeat = document.querySelector('#passwordRepeat').value;
//   const msgverify = document.querySelector('#verify-message');

//   createUserWithEmailAndPassword(name, getAuth, email, password, passwordRepeat)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log('created')
//       msgverify.textContent = 'Please, revise su email';
//     }).catch((verify) => {
//       msgverify.classList.add('verify-message');
//       msgverify.textContent = verify.message;
//     });
// };
