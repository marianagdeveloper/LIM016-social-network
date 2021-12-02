// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword } from '../utils/firebaseconfig.js';

export const signUpController = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // eslint-disable-next-line no-console
      console.log('created');
      // eslint-disable-next-line no-alert
      alert(`Created User ${user}`);
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
