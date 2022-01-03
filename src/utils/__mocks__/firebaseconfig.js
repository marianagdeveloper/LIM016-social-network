const signInWithEmailAndPassword = jest.fn(() => Promise.resolve());
const newLocal = {
  uid: '8cm4l6x9m8XLzHcQnUzoZUhciwk2',
};
const signInWithPopup = jest.fn(() => Promise.resolve(newLocal));
const auth = jest.fn();
const provider = jest.fn();

export {
  signInWithEmailAndPassword,
  signInWithPopup,
  auth,
  provider,
};
