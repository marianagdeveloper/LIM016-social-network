const newLocal = '8cm4l6x9m8XLzHcQnUzoZUhciwk0';

const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({
  user: {
    uid: newLocal,
  },
}));
const signInWithPopup = jest.fn(() => Promise.resolve({
  user: {
    uid: newLocal,
  },
}));
const auth = jest.fn();
auth.currentUser = {
  emailVerified: true,
  providerData: [],
};
const provider = jest.fn();
const doc = jest.fn();
const getDoc = jest.fn();
const data = '';

// const handleError = jest.fn(() => {
//   throw new Error('¡Ups!')
// });

export {
  signInWithEmailAndPassword,
  signInWithPopup,
  auth,
  provider,
  doc,
  getDoc,
  data,
};
