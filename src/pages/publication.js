/* eslint-disable no-inner-declarations */
import {
  db, doc, updateDoc, getDoc,
} from '../utils/firebaseconfig.js';

export function publicationComponent(nameUser,
  myPost,
  idPublication,
  publicationText,
  photo,
  publicationDate,
  publicationTime,
  urls) {
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
      <div class='preview'></div> 
      <div class='FlexBoxEditbtns'>
        <div id='btnsEditContainer' class='hide btnsEditContainer'>
          <button id='btnSaveEdit' class='btnSaveEdit' data-save='${idPublication}'>Save</button>
          <button id='btnCancelEdit' class='btnCancelEdit' data-cancel='${idPublication}'>Cancel</button>
        </div>
        <div class='saveN'>
          <p class = 'pLikePublication' data-totalLike='${idPublication}'></p>
          <img class='btnLikePublication' id='imgHeartLike' src='img/Icons/WhiteBorder/Heart1.png' data-like='${idPublication}' alt=''>
        </div>
      </div>
    </div>`;

  // publication
  const divElemt = document.createElement('div');
  divElemt.innerHTML += componetPublication;

  const dateconcatTemplate = `
    <p class:"date">${publicationDate}</p>
    <p class:"date">${publicationTime}</p>
    `;
  const dateconcat = divElemt.querySelector('.userNameN');
  dateconcat.innerHTML += dateconcatTemplate;

  let likeRef;
  const element = divElemt.querySelector('.btnLikePublication');
  const uidPostLikes = element.dataset.like;
  const pLikePublication = divElemt.querySelector('.pLikePublication');
  const imgHeartLike = divElemt.querySelector('#imgHeartLike');

  const userCurrent = sessionStorage.getItem('key');

  const btnsEditAndDeletePost = `
  <div id='AddPhotoPostEdit' class='hide AddPhotoPostEdit'>
    <input title='Add a photo' type='file' id='edit-file' class='inputFilePost' data-newImg='${idPublication}'/>
      <img class='inputFilePostIcon'
      src='img/Icons/cameraPost.png'
      title='Add a photo'
      alt='Add a photo'/>
  </div>
  <img title='Edit your post' id='btnEditPost' class='btnEditPost' data-edit='${idPublication}' src='img/Icons/Pencil.png' alt=''>
  <img title='Delete your post' id='btnDelete' class='btnDelete' data-ref='${idPublication}' src='img/Icons/Delete.png' alt=''>`;

  const btnsContainer = divElemt.querySelector('.editPost');

  if (myPost) {
    btnsContainer.innerHTML += btnsEditAndDeletePost;
  }

  // Images
  const divImages = divElemt.querySelector('.preview');
  console.log('urls en el componente publication:', urls);
  // Pre-view image in new post
  if (urls == []) {
    // btnsDeleteImgs.classList.add('hide');
    console.log('no hay imagen');
  }

  if (urls.length > 0) {
    urls.forEach(url => {
      divImages.innerHTML += `
      <div class='boxFlexbtnX'>
        <button title='Delete image' id='btnDeteleImgEdit' class='hide btnDeteleImgEdit''>X</button>
        <img src='${url}'/>
      </div>
    `;
    });
  } else {
    console.log('no hay imagen');
  }

  // ****agrega el array de likes por idUser´s al campo idUserLike ****
  async function addLikePost(likeReferenc, arrayLikes) {
    await updateDoc(likeReferenc, {
      idUserLike: arrayLikes,
    });
  }

  // **** total de likes por post ****
  async function lengthArrayLikes(arrayLikes) {
    pLikePublication.textContent = arrayLikes.length;
  }
  // ****evento que suma o resta likes de acuerdo a la condicion ****
  element.addEventListener('click', () => {
    async function btnLikes() {
      // ****se agrega o quita likes del usuario de acuerdo a la condicion***
      likeRef = doc(db, 'publications', uidPostLikes);
      const docSnap = await getDoc(likeRef).then((docs) => docs.data());
      if (docSnap.idUserLike.includes(userCurrent)) {
        imgHeartLike.src = 'img/Icons/WhiteBorder/Heart1.png';
        addLikePost(likeRef, docSnap.idUserLike.filter((i) => i !== userCurrent));
        lengthArrayLikes(docSnap.idUserLike.filter((i) => i !== userCurrent));
      } else {
        imgHeartLike.src = 'img/Icons/WhiteTotal/Heart2.png';
        addLikePost(likeRef, [...docSnap.idUserLike, userCurrent]);
        lengthArrayLikes([...docSnap.idUserLike, userCurrent]);
      }
      return docSnap;
    }
    btnLikes();
  });
  // ****ver los likes cuando el usuario ingresa al home*******
  async function viewLikesInSnapshot() {
    const likeeRef = doc(db, 'publications', uidPostLikes);
    const doocSnap = await getDoc(likeeRef).then((docs) => docs.data());
    if (doocSnap.idUserLike.includes(userCurrent)) {
      imgHeartLike.src = 'img/Icons/WhiteTotal/Heart2.png';
    } else {
      imgHeartLike.src = 'img/Icons/WhiteBorder/Heart1.png';
    }
    lengthArrayLikes(doocSnap.idUserLike);
  }
  viewLikesInSnapshot();

  return divElemt;
}
