// importamos la funcion que vamos a testear
import SignIn from '../../src/pages/signin';

import { signInWithEmailAndPassword, signInWithPopup } from '../../src/utils/firebaseconfig.js';

jest.mock('../../src/utils/firebaseconfig.js');

describe('SignIn', () => {
  it('Al hacer click se llama func sign in', () => {
    const signInElem = SignIn();
    signInElem.querySelector('#email').value = 'mariana.guanda@mail.com';
    signInElem.querySelector('#password').value = 'mariana2';
    // signInElem.user = '8cm4l6x9m8XLzHcQnUzoZUhciwk2';

    // Event click
    const btn = signInElem.querySelector('#btn-signin-signin');
    const evt = new Event('click');
    btn.dispatchEvent(evt);
    console.log(signInWithEmailAndPassword.mock);
    expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('mariana.guanda@mail.com');
    expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('mariana2');
  });
});

describe('SignIn with Google', () => {
  it('Al hacer click se llama func sign in with Google', () => {
    const signInElem = SignIn();
    // Event click
    const btn = signInElem.querySelector('#btn-signin-google');
    const evt = new Event('click');
    btn.dispatchEvent(evt);
    const uid = signInWithPopup.mock.results[0].value;
    console.log(uid);
    const newLocal = {
      uid: '8cm4l6x9m8XLzHcQnUzoZUhciwk2',
    };
    expect(uid).toBe(Promise.resolve(newLocal));
    // expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('mariana2');
  });
});
