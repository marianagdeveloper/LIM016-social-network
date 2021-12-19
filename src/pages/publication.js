export function publicationComponent(nameUser,
  myPost,
  idPublication,
  publicationText) {
  const componetPublication = `
    <div class='boxPublicationsN'>
      <div class='boxPhotoandNameN'>
        <div class='boxInternoPhotoandNameN'>
          <div class='photoPerfilN'>
            <img src='img/Avatares/Animals/AvatarA7.png' alt=''>
          </div>

          <div class="userNameN">
            <h2>${nameUser}</h2>
          </div>
        </div>

        <div id='editPost' class='editPost'>

        </div>

      </div>

      <div class='publicationN'>
        <div>
          <textArea class='contentPublicationN' data-texto='${publicationText}' disabled>${publicationText}
          </textArea>
        </div>
      </div>

      <div class='saveN'>
        <p>2</p>
        <img src='img/Icons/WhiteTotal/Heart2.png' alt=''>
      </div>
    </div>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML += componetPublication;

  const btnsEditAndDeletePost = `
  <img id='btnEditPost' class='btnEditPost' data-edit='${idPublication}' src='img/Icons/Pencil.png' alt=''>
  <img id='btnSavePost' class='hide btnSavePost' data-save='${idPublication}' src='img/Icons/Verify.png' alt=''>
  <img id='btnDelete' class='btnDelete' data-ref='${idPublication}' src='img/Icons/Delete.png' alt=''>`;

  const btnsContainer = divElemt.querySelector('.editPost');

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
