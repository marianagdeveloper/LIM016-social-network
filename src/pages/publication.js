/* eslint-disable no-inner-declarations */
// const uidSS = sessionStorage.getItem('user');
// console.log('uidSS: ', uidSS);
import {
  db, doc, updateDoc, arrayUnion, arrayRemove, getDoc,
} from '../utils/firebaseconfig.js';

export function publicationComponent(nameUser,
  myPost,
  idPublication,
  publicationText,
  photo,
  likes,
  likesForPublication) {
  const componetPublication = `
    <div class='boxPublicationsN' id='${idPublication}'>
      <div class='boxPhotoandNameN'>
        <div class='boxInternoPhotoandNameN'>
          <div class='photoPerfilN'>
            <img class='Avatar-img' src='${photo}' alt='Avatar Profile'>
          </div>

          <div class="userNameN">
            <h2>${nameUser}</h2>
          </div>
        </div>

        <div id='editPost' class='editPost'>

        </div>

      </div>

      <div class='publicationN'>
        <div >
          <textArea class='contentPublicationN' data-texto='${publicationText}' disabled>${publicationText}
          </textArea>
        </div>
      </div>

      <div class='FlexBoxEditbtns'>
        <div id='btnsEditContainer' class='hide btnsEditContainer'>
          <button id='btnSaveEdit' class='btnSaveEdit' data-save='${idPublication}'>SAVE</button>
          <button id='btnCancelEdit' class='btnCancelEdit' data-cancel='${idPublication}'>CANCEL</button>
        </div>
        <div class='saveN'>
          <p class = 'pLikePublication' data-totalLike='${idPublication}'>${likes}</p>
          <img class='btnLikePublication' id='btnLikePublication' src='img/Icons/WhiteTotal/Heart2.png' data-like='${idPublication}' alt=''>
        </div>
      </div>
    </div>`;
  console.log(idPublication);
  // publication
  const divElemt = document.createElement('div');
  divElemt.innerHTML += componetPublication;

  console.log(likesForPublication);

  const btnsEditAndDeletePost = `
  <img id='btnEditPost' class='btnEditPost' data-edit='${idPublication}' src='img/Icons/Pencil.png' alt=''>
  <img id='btnDelete' class='btnDelete' data-ref='${idPublication}' src='img/Icons/Delete.png' alt=''>`;

  const btnsContainer = divElemt.querySelector('.editPost');

  if (myPost) {
    btnsContainer.innerHTML += btnsEditAndDeletePost;
  }

  // *******************************likes****************************************
  let activo = true;
  let likeRef;
  const element = divElemt.querySelector('.btnLikePublication');
  const uidPostLikes = divElemt.querySelector('.btnLikePublication').dataset.like;
  const pLikePublication = divElemt.querySelector('.pLikePublication');

  const userCurrent = sessionStorage.getItem('key');

  // *****retorna el total de likes por post ****
  async function lengthArrayLikes() {
    const docSnap = await getDoc(likeRef);
    // contLikes(docSnap);
    const totalLikesPorUidPost = docSnap.data().idUserLike.length;
    console.log('totalLikesPorUidPost', totalLikesPorUidPost);
    return totalLikesPorUidPost;
  }

  element.addEventListener('click', () => {
    // ****se agrega o quita likes del usuario de acuerdo a la condicion****
    const arrayLikes = [];
    arrayLikes.push(userCurrent);
    if (activo) {
      likeRef = doc(db, 'publications', uidPostLikes);
      // eslint-disable-next-line no-inner-declarations
      async function arrayFirebase() {
        await updateDoc(likeRef, {
          idUserLike: arrayUnion(...arrayLikes),
        });
      }
      arrayFirebase()
        .then(
          console.log('se ejecutó el agregar firebase'),
        );
      activo = false;
    } else if (activo === false) {
      activo = true;
      likeRef = doc(db, 'publications', uidPostLikes);
      async function arrayRemoveFirebase() {
        await updateDoc(likeRef, {
          idUserLike: arrayRemove(...arrayLikes),
        });
      }
      arrayRemoveFirebase()
      // lengthArrayLikes()
        .then(console.log('se ejecutó la removida'));
    }
    lengthArrayLikes()
      .then((result) => {
        pLikePublication.textContent = result;
        console.log(result);
      });
  });

  // ***************************************************************************
  // print date time publicated
  const today = new Date();
  const m = today.getMonth() + 1;
  // eslint-disable-next-line prefer-template
  const mm = (m < 10) ? '0' + m : m;
  const dd = today.getDate();
  const year = today.getFullYear();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const dateconcatTemplate = `
  <p class:"date">${dd}/${mm}/${year}</p>
  <p class:"date">${hour}h ${minutes}min</p>
  `;
  const dateconcat = divElemt.querySelector('.userNameN');
  dateconcat.innerHTML += dateconcatTemplate;

  return divElemt;
}
