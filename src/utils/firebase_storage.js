import {
  storage, ref, uploadBytesResumable, getDownloadURL, uploadBytes,
} from './firebaseconfig.js';

/* eslint-disable import/no-unresolved */
export const storageRef = (file) => ref(storage, `post/images/${file.name}`);
export const uploadBytes1 = (storageRef1, file) => uploadBytes(storageRef1, file);
// eslint-disable-next-line max-len
export const uploadTask = (storageRef1, file) => uploadBytesResumable(storageRef1, file);
export const getFileURL = (task) => getDownloadURL(task);

export default { storageRef, getFileURL, uploadBytes1 };
