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
        <p>${nameUser}</p>
      </div>
    </div>
  <div id='editPost' class='editPost'>             
  </div>
</div>
  <div class='publicationN'>
    <div class='contentPublicationN'><p>${publicationText}</p></div>
  </div>
  <div class='saveN'>
    <p>2</p>
    <img src='img/Icons/WhiteTotal/Heart2.png' alt=''>
  </div>
</div>`;

  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'parentDivPost');
  divElemt.innerHTML += componetPublication;

  const btnsEditAndDeletePost = `
  <img id='btnEditPost' class='btnEditPost' data-edit='${idPublication}' src='img/Icons/Pencil.png' alt=''>
  <img id='btnDelete' class='btnDelete' data-ref='${idPublication}' src='img/Icons/Delete.png' alt=''>`;

  const btnsContainer = divElemt.querySelector('.editPost');
  if (myPost) {
  //   componetPublication.querySelector('.editPost').innerHTML(btnsEditAndDeletePost);
    btnsContainer.innerHTML += btnsEditAndDeletePost;
  }
  return divElemt;
}
