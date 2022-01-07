const newLocal = '8cm4l6x9m8XLzHcQnUzoZUhciwk0';

const signInWithEmailAndPassword = jest.fn(() => Promise.resolve(() => {
  const user = newLocal;
  return user;
}));
const signInWithPopup = jest.fn(() => Promise.resolve(newLocal));
// const signInWithPopup = jest.fn(() => Promise.resolve(() => {
//   const uid = newLocal;
//   return uid;
// }));
const auth = jest.fn();
const provider = jest.fn();

export {
  signInWithEmailAndPassword,
  signInWithPopup,
  auth,
  provider,
};
