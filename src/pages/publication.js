/* eslint-disable no-inner-declarations */
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
          <img class='btnLikePublication' id='imgHeartLike' src='img/Icons/WhiteBorder/Heart1.png' data-like='${idPublication}' alt=''>
        </div>
      </div>
    </div>`;
  console.log(idPublication);
  // publication
  const divElemt = document.createElement('div');
  divElemt.innerHTML += componetPublication;

  console.log(likesForPublication);

  const btnsEditAndDeletePost = `
  <img title='Edit your post' id='btnEditPost' class='btnEditPost' data-edit='${idPublication}' src='img/Icons/Pencil.png' alt=''>
  <img title='Delete your post' id='btnDelete' class='btnDelete' data-ref='${idPublication}' src='img/Icons/Delete.png' alt=''>`;

  const btnsContainer = divElemt.querySelector('.editPost');

  if (myPost) {
    btnsContainer.innerHTML += btnsEditAndDeletePost;
  }

  // *******************************likes****************************************
  // let activo = true;
  let likeRef;
  const element = divElemt.querySelector('.btnLikePublication');
  const uidPostLikes = element.dataset.like;
  const pLikePublication = divElemt.querySelector('.pLikePublication');
  const imgHeartLike = divElemt.querySelector('#imgHeartLike');

  const userCurrent = sessionStorage.getItem('key');

  // *****retorna el total de likes por post ****
  async function lengthArrayLikes() {
    const docSnap = await getDoc(likeRef);
    const totalLikesPorUidPost = docSnap.data().idUserLike.length;
    pLikePublication.textContent = totalLikesPorUidPost;
    console.log(pLikePublication);
    return totalLikesPorUidPost;
  }

  // remover elemento array
  async function subtractLikePost(likeReferenc, arrayLikes) {
    await updateDoc(likeReferenc, {
      idUserLike: arrayRemove(...arrayLikes),
    });
  }

  // agregar elemento array
  async function addLikePost(likeReferenc, arrayLikes) {
    await updateDoc(likeReferenc, {
      idUserLike: arrayUnion(...arrayLikes),
    });
  }

  element.addEventListener('click', () => {
    // ****se agrega o quita likes del usuario de acuerdo a la condicion****
    const arrayLikes = [];
    arrayLikes.push(userCurrent);
    likeRef = doc(db, 'publications', uidPostLikes);
    async function btnLikes() {
      const docSnap = await getDoc(likeRef);
      console.log('🚀 ~ file: publication.js ~ line 107 ~ btnLikes ~ docSnap', docSnap.data().idUserLike);
      if (docSnap.data().idUserLike.includes(userCurrent)) {
        imgHeartLike.src = 'img/Icons/WhiteTotal/Heart2.png';
        subtractLikePost(likeRef, arrayLikes);
      } else {
        imgHeartLike.src = 'img/Icons/WhiteBorder/Heart1.png';
        addLikePost(likeRef, arrayLikes);
      }
    }
    btnLikes();
    lengthArrayLikes();
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
