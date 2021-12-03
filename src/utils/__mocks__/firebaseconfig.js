const signInWithEmailAndPassword = jest.fn(() => Promise.resolve());
const signInWithPopup = jest.fn(() => Promise.resolve());
const auth = jest.fn();

export {
  signInWithEmailAndPassword,
  signInWithPopup,
  auth,
};
