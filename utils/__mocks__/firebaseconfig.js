const newLocal = '8cm4l6x9m8XLzHcQnUzoZUhciwk0';

const userDataBase = {
  "photo":"https://firebasestorage.googleapis.com/v0/b/ecogram-5151.appspot.com/o/users%2F8cm4l6x9m8XLzHcQnUzoZUhciwk2%2Fimg%2FAvatares%2Favatar.jfif?alt=media&token=1a60c44c-1e8c-43cd-b259-dc5683b0231a",
  "email":"mariana.guanda@gmail.com",
  "uid":"8cm4l6x9m8XLzHcQnUzoZUhciwk2",
  "bio":"Hey, I'm using Ecogram 🌎  It's Great, share with your friends!! ",
  "country":"ve:Venezuela",
  "interests":["img/Intereses/Reciclaje.png","img/Intereses/Energia.png",
  "img/Intereses/Siembra.png"],"name":"Mariana Guanda"
}


const signInWithEmailAndPassword = jest.fn(() => Promise.resolve(() => {
  const user = newLocal;
  return user;
}));

// const signInWithPopup = jest.fn(() => Promise.resolve(newLocal));
const signInWithPopup = jest.fn(() => Promise.resolve(userDataBase));

const auth = jest.fn();
const provider = jest.fn();

const handleError = jest.fn(() => {
  throw new Error('¡Ups!')
});

export {
  signInWithEmailAndPassword,
  signInWithPopup,
  auth,
  provider,
  handleError,
};
