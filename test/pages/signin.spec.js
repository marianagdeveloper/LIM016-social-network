// importamos la funcion que vamos a testear
import SignIn from '../../src/pages/signin';

import { signInWithEmailAndPassword } from '../../src/utils/firebaseconfig.js';

jest.mock('../../src/utils/firebaseconfig.js');

describe('SignIn', () => {
  it('Al hacer click se llama func sign in', () => {
    const signInElem = SignIn();
    signInElem.querySelector('#email').value = 'correao@mail.com';
    signInElem.querySelector('#password').value = 'pwd';
    const btn = signInElem.querySelector('#btn-signin-signin');
    const evt = new Event('click');
    btn.dispatchEvent(evt);
    expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('correao@mail.com');
    expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('pwd');
  });
});
