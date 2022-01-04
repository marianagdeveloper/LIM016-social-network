/* eslint-disable import/no-duplicates */
import SignIn from '../../src/pages/signin';
import { handleCurrentUser } from '../../src/pages/signin';

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  handleError,
} from '../../src/utils/firebaseconfig.js';

jest.mock('../../src/utils/firebaseconfig.js');

describe('SignIn', () => {

  it('Click Sing In call function Sign In', () => {
    const signInElem = SignIn();
    signInElem.querySelector('#email').value = 'mariana.guanda@mail.com';
    signInElem.querySelector('#password').value = '123456';
    const btn = signInElem.querySelector('#btn-signin-signin');
    const evt = new Event('click');
    btn.dispatchEvent(evt);
    expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('mariana.guanda@mail.com');
    expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
  });
});

describe('SignIn with Google', () => {
  it('Click SignIn with Google call function Sign In with Google', () => {
    const signInElem = SignIn();
    const btn = signInElem.querySelector('#btn-signin-google');
    const evt = new Event('click');
    btn.dispatchEvent(evt);
    const id = '8cm4l6x9m8XLzHcQnUzoZUhciwk2';
    // console.log('signInWithPopup = ', signInWithPopup.mock.results[0].value);
    signInWithPopup.mock.results[0].value.then((data) => {
      // console.log('data', data);
      const uid = data.uid
      if(!uid){
        handleError();
      }
      expect(data.uid).toEqual(id);
  });
  });
});

describe('Validate current user', () => {
  it('Validate current user return user', () => {
    const currentUser = handleCurrentUser;
    expect(typeof currentUser).toBe('function');
  });
});
