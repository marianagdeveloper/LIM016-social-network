// const uidSS = sessionStorage.getItem('user');
// console.log('uidSS: ', uidSS);

export function publicationComponent(nameUser,
  myPost,
  idPublication,
  publicationText,
  photo) {
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
          <p>2</p>
          <img src='img/Icons/WhiteTotal/Heart2.png' alt=''>
        </div>
      </div>
    </div>`;

  // publication
  const divElemt = document.createElement('div');
  divElemt.innerHTML += componetPublication;

  const btnsEditAndDeletePost = `
  <img title='Edit your post' id='btnEditPost' class='btnEditPost' data-edit='${idPublication}' src='img/Icons/Pencil.png' alt=''>
  <img title='Delete your post' id='btnDelete' class='btnDelete' data-ref='${idPublication}' src='img/Icons/Delete.png' alt=''>`;

  const btnsContainer = divElemt.querySelector('.editPost');

  // photo
  // divElemt.querySelector(
  //   '.Avatar-img',
  // ).src = `${uidSS.photo}`;

  if (myPost) {
    //   componetPublication.querySelector('.editPost').innerHTML(btnsEditAndDeletePost);
    btnsContainer.innerHTML += btnsEditAndDeletePost;
  }

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
