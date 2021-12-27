import { storage, ref, uploadBytesResumable, getDownloadURL, uploadBytes, } from '../utils/firebaseconfig.js';

/* eslint-disable import/no-unresolved */
export const storageRef = (file) => ref(storage, `post/images/${file.name}`);
export const uploadBytes1 = (storageRef1, file) => uploadBytes(storageRef1, file);
// eslint-disable-next-line max-len
export const uploadTask = (storageRef1, file) => uploadBytesResumable(storageRef1, file);
export const getFileURL = (task) => getDownloadURL(task);


// const imgStorage = (file) => {
// //Upload file and metadata to the object 'images/mountains.jpg'
// /** @type {any} */
// // const metadata = {
// //   contentType: 'image/jpeg'
// // };

// const storageRef = ref(storage, 'post/images/' + file.name);
// const uploadTask = uploadBytesResumable(storageRef, file);

// // Listen for state changes, errors, and completion of the upload.
// uploadTask.on('state_changed',
//   (snapshot) => {
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//     // A full list of error codes is available at
//     // https://firebase.google.com/docs/storage/web/handle-errors
//     switch (error.code) {
//       case 'storage/unauthorized':
//         // User doesn't have permission to access the object
//         break;
//       case 'storage/canceled':
//         // User canceled the upload
//         break;

//       // ...

//       case 'storage/unknown':
//         // Unknown error occurred, inspect error.serverResponse
//         break;
//     }
//   }, 
//   () => {
//     // Upload completed successfully, now we can get the download URL
//     getDownloadURL(uploadTask.snapshot.ref)
//     .then((downloadURL) => {
//       // urlVamos(downloadURL);
//       console.log('File available at', downloadURL);
//     });
//   }
// );

// }

// export const urlData = (file) => {

//   new Promise((resolver, rechazar) => {
//     console.log('Inicial');
    
//     resolver();
//   })
//    .then((res)=>{
//     imgStorage(file);
//    console.log(" ~ file: firebase_storage.js ~ line 60 ~ .then ~ res", res);
    
//    })
// } 

// function urlVamos(params) {
// console.log(" ~ file: firebase_storage.js ~ line 72 ~ urlVamos ~ urlVamos", params)
// }




export default {storageRef, getFileURL, uploadBytes1};