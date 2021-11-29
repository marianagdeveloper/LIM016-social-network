import { userSignUp, verifyEmail } from '../firebase/firebasefunction';
// import { createUser } from '../firebase/data-base.js';

export const signUpUser = (e) => {
  e.preventDefault(); // cancela el evento de reinicio del formulario
  const name = document.querySelector('#nombres').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password1').value;
  const msgerr = document.querySelector('#error-message');

  userSignUp(email, password, name)
    .then(() => {
      verifyEmail();
      msgerr.textContent = 'Por favor revise su bandeja de entrada para verificar su cuenta';
    }).catch((error) => {
      msgerr.classList.add('error-message');
      msgerr.textContent = error.message;
    });
};