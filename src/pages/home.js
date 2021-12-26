/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
import { publicationComponent } from './publication.js';

import {
  db,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  // onSnapshot,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
} from '../utils/firebaseconfig.js';

/* *************** Obtener un usuario de Firebase *************** */

async function readUser(uid) {
  let data = '';
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log('Document data:', docSnap.data());
    data = docSnap.data();
    console.log('User data:', data);
    sessionStorage.setItem('user', JSON.stringify(data));
  } else {
    // doc.data() will be undefined in this case
    console.log('No exist user!');
  }
  return data;
}

/* read text content of a publication */

async function readAPost(uid, elmtTextContentPost) {
  let data = '';
  const docRef = doc(db, 'publications', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    data = docSnap.data().publication;
    // eslint-disable-next-line no-param-reassign
    elmtTextContentPost.value = data;
    console.log('textPost:', elmtTextContentPost);
  } else {
    console.log('No exist post!');
  }
}

/* *************** Agregar publicacion a Firebase *************** */
async function addPublication(publication) {
  try {
    // eslint-disable-next-line no-unused-vars
    const docRef = await addDoc(collection(db, 'publications'), {
      author: sessionStorage.getItem('key'),
      publication,
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

/* *************** Eliminar publicacion de Firebase *************** */

// async function deletePublication(idPublicationRef) {
//   await deleteDoc(doc(db, 'publications', idPublicationRef));
// }

export const deletePublication = (idPublicationRef) => deleteDoc(doc(db, 'publications', idPublicationRef));

export const editPublication = (idPublicationRef, postEdit) => {
  const publiUpdate = doc(db, 'publications', idPublicationRef);
  return updateDoc(publiUpdate, {
    publication: postEdit,
  });
};

/* *************** Template del Home *************** */
const Home = () => {
  const containerHome = document.createElement('div');
  containerHome.classList.add('positionHome');
  const viewHome = `
  <main>
    <!-- HOME PAGE -->
    <section id='Home' class='Box Home'>

      <div class='HomeBox'>
        <div class='UserName'>
        </div>
        <div class='Avatar'>
          <img title='Your phofile picture' class='Avatar-img' src='img/Avatares/Animals/AvatarA7.png' alt='Avatar Profile'><br>
          <div class='linea2'>&nbsp;</div>
        </div>
        <div class='Bio'>
          <h3>Biography:</h3><br>
          <div>
            <p class='bioText' >Hola, soy amante del arte en reciclado. Hago muchas manualidades pro ambientales. Les invito a ver mi galeria. 🧮 </p>
          </div>
        </div>
        <div class='Inf'>
          <div class='Country'>
            <h3>Country:</h3>
            <div class='countryImg'>
            </div>
            <p class ='countryText'></p>
          </div>
          <div class='Email'>

          </div>
        </div>
        <div class='Interests'>
          <h3>
            Interests:
          </h3><br>
          <div class='Interests-Box'>
            <img title='Your interest' id='Interests-0' src='' alt=''>
            <img title='Your interest' id='Interests-1' src='' alt=''>
            <img title='Your interest' id='Interests-2' src='' alt=''>
          </div>
        </div>
      </div>

      <div id='publications' class='Publications'>
        <div class='PublicationsContent'>
          <div class='btnPublic'>
            <div class='btnsPublic'>
              <button id='btnAllPost' class='btnAllPost'>All Posts</button>
              <button id='btnMyPost' class='btnMyPost'>My Posts</button>
              <input type='text' id='SearchName' name='firstname' class='SearchName' placeholder='User Name..'>
            </div>
            <img id="NewPost" class="NewPost" src='img/Icons/WhiteBorder/PlusCircle1.png' alt='Nex Publication'>
          </div>
          <div class='boxPublic'>
          <div id='boxPublications'class='NoneboxPublications'>
            <div class='boxPhotoandName'>
              <div class='boxInternoPhotoandName'>
                <div class='photoPerfil'>
                  <img class='Avatar-img-Post' src='img/Avatares/Animals/AvatarA7.png' alt=''>
                </div>
                <div class="userNamePublication">

                </div>
              </div>
            </div>
            <div class='publication'>
              <textarea name='comments' placeholder='Type something here...' id='texta2' clase='texta2'></textarea>
              <div id="modalCheckPost" class="modalCheckPost">
                <img src="img/Icons/Verify.png"  alt="sent email" />
                <p>Your post was published successfully</p> 
              </div>
            </div>
            <div class='opcionAddPost'>
              <div class='AddPhotoPost'>
              <img title='Add a picture' src="img/Icons/cameraPost.png"  alt="Add photo" />
              </div>
              <div class='save'>
                <button id='btnSave' class='btnSave'>SAVE</button>
                <button id='btnCancel' class='btnCancel'>CANCEL</button>
              </div>
            </div>
          </div>
          <div id='publicado'>

          </div>
        </div>
        </div>
        <div class='SliderNews'>
          <div class='TittleEcoNews'>
            <h3> ECO NEWS </h3>
          </div>  
          <div class='NewsContainer'>
            <div class='News'>
              <img src='img/Notice/notice3.jpg'>
              <h2>COP26: Women are the most affected by climate change</h2>
              <a href='https://news.un.org/es/story/2021/11/1499772' target='_blank'>See more</a>
            </div><br>
            <div class='News'>
              <img src='img/Notice/notice2.jpg'>
              <h2>
              The era of fossil fuel-powered cars in the spotlight at COP26</h2>
              <a href='https://news.un.org/es/story/2021/11/1499832' target='_blank'>See more</a>
            </div><br>
            <div class='News'>
              <img src='img/Notice/notice1.jpg'>
              <h2>COP26: Promises 'ring hollow' when fossil fuels continue to receive trillions in subsidies, says Guterres</h2>
              <a href='https://news.un.org/es/story/2021/11/1499902' target='_blank'>See more</a>
            </div><br>
            <div class='News'>
              <img src='img/Notice/notice5.jpg'>
              <h2>Panela, a sweet bet for the indigenous people to continue living in the Sierra de Colombia</h2>
              <a href='https://news.un.org/es/story/2021/11/1500632' target='_blank'>See more</a>
            </div> <br>
          </div> 
        </div>
      </div>
    </section>
  </main>`;
  containerHome.innerHTML = viewHome;

  //Div - Filters
  const boxPosts = containerHome.querySelector('#publicado');
  const btnAllPost = containerHome.querySelector('.btnAllPost');
  const btnMyPost = containerHome.querySelector('.btnMyPost');
  const SearchName = containerHome.querySelector('.SearchName');

  //Clear Posts
  function clearBoxPosts() {
    while (boxPosts.firstChild) {
      boxPosts.firstChild.remove();
    }
    return
  }

  //Function - Filters
  function filterPost(filter) {
    clearBoxPosts();
    switch (filter) {
      case 'all':
        reedPublications();
        break;

      case 'my':
        reedPublications('my');
        break;
    
      case 'name':
        break;
    }
  }

   //Events - Filters
   btnAllPost.addEventListener('click', ()=>{filterPost('all')});
   btnMyPost.addEventListener('click', ()=>{filterPost('my')});
   SearchName.addEventListener('keyup', ()=>{filterPost('name')});

  /* *************** Notificaciones de "post publicated" *************** */

  const cleanModal = () => {
    const check = document.getElementById('modalCheckPost');
    if (check) {
      document
        .getElementById('modalCheckPost')
        .classList.replace('AlertmodalCheckPost', 'modalCheckPost');
    }
  };

  /* ***** Botón para mostrar la caja de agregar publicación ***** */

  containerHome.querySelector('.NewPost').addEventListener('click', (e) => {
    e.preventDefault();
    document
      .getElementById('boxPublications')
      .classList.replace('NoneboxPublications', 'boxPublications');
  });

  // Función para eliminar el contenido del input al momento de cancelar
  const deleteContentInput = () => {
    containerHome.querySelector('#texta2').value = '';
  };

  /* ***** Botón para ocultar la caja de agregar publicación ***** */
  containerHome.querySelector('.btnCancel').addEventListener('click', (e) => {
    e.preventDefault();
    document
      .getElementById('boxPublications')
      .classList.replace('boxPublications', 'NoneboxPublications');
    // eslint-disable-next-line no-unused-expressions
    containerHome.querySelector('#texta2').value;
    deleteContentInput();
    cleanModal();
  });

  /* *************** Agregars información sincronizada del usuario al perfil *************** */

  const infoUser = (info) => {
    containerHome.querySelector(
      '.UserName',
    ).innerHTML += `<br><h1>${info.name}</h1><br>
    <div class='linea2'>&nbsp;</div>`;
    containerHome.querySelector('.Email').innerHTML += `<h3>Email:</h3>
    <p>${info.email}</p>`;

    containerHome.querySelector(
      '.userNamePublication',
    ).innerHTML += `
    <p>${info.name}</p>`;

    // photo
    containerHome.querySelector(
      '.Avatar-img',
    ).src = `${info.photo}`;

    // photo
    containerHome.querySelector(
      '.Avatar-img-Post',
    ).src = `${info.photo}`;

    // Bio
    containerHome.querySelector(
      '.bioText',
    ).textContent = `${info.bio}`;

    // Country
    containerHome.querySelector(
      '.countryText',
    ).textContent = `${info.country.split(':')[1]}`;

    // Country title
    containerHome.querySelector(
      '.countryText',
    ).title = `${info.country.split(':')[1]}`;

    // Country flag
    containerHome.querySelector(
      '.countryImg',
    ).innerHTML += `
    <img
    title='${info.country.split(':')[1]}'
    src='https://flagcdn.com/40x30/${info.country.split(':')[0]}.png'
    srcset='httpscountrycdn.com/80x60/${info.country.split(':')[0]}.png 2x,
      https://flagcdn.com/120x90/${info.country.split(':')[0]}.png 3x'
    width='40'
    height='30'
    alt='${info.country.split(':')[1]}'>
  `;

    // Interests
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < 3; index++) {
      containerHome.querySelector(`#Interests-${index}`).src = info.interests[index];
      console.log(index);
    }

    /* *************** evento de añadir publicación con save *************** */

    containerHome.querySelector('#btnSave').addEventListener('click', (e) => {
      e.preventDefault();
      const divPublicado = containerHome.querySelector('#publicado');
      const publication = containerHome.querySelector('#texta2').value;
      containerHome.querySelector('#texta2').value = containerHome.querySelector('#texta2').defaultValue;
      // console.log(publication);

      while (divPublicado.firstChild) {
        divPublicado.removeChild(divPublicado.firstChild);
      }

      if (publication !== '') {
        document
          .getElementById('modalCheckPost')
          .classList.replace('modalCheckPost', 'AlertmodalCheckPost');
        addPublication(publication);
      }
      if (publication === '') {
        cleanModal();
      }
      // eslint-disable-next-line no-use-before-define
      reedPublications(info);
    });
  };
  // devuelve el uid del usuario que se encuentra en sesionStorage
  const uid = () => {
    const uidSS = sessionStorage.getItem('key');
    return uidSS;
  };
  readUser(uid())

    // eslint-disable-next-line no-sequences
    .then((value) => { infoUser(value), reedPublications(value); })
    .catch((error) => console.log(error));

  /* ***** actualizacion tiempo real de publications ***** */

  function realOnSnapshot(documentFirebase) {
    const idPublication = documentFirebase.id;
    llenarPublications(documentFirebase, idPublication);
  }

  /* ***** muestra publicaciones realizadas ***** */

  async function llenarPublications(documentFirebase, idPublication) {
    const userOfPublication = await getDoc(doc(db, 'users', documentFirebase.data().author));
    if (userOfPublication.exists()) {
      const divPublicado = containerHome.querySelector('#publicado');
      // const publicationsForUid = await getDoc(doc(db, 'publications', documentFirebase.data()));
      // log

      const nameUser = userOfPublication.data().name;
      console.log(nameUser);
      const publicationText = documentFirebase.data().publication;

      /* ***** Only Delete or Edit Post for UserCurrent ***** */
      const authorPublication = userOfPublication.data().uid;
      const userCurrent = sessionStorage.getItem('key');
      const myPost = authorPublication === userCurrent;
      const photo = userOfPublication.data().photo;
      const likes = documentFirebase.data().idUserLike.length;
      const likesForPublication = documentFirebase.data().idUserLike;
      console.log(likesForPublication);

      console.log('photo:', photo);
      /* ***** Agrega una nueva publicación por usuario de primera ***** */
      divPublicado.prepend(publicationComponent(nameUser,
        myPost,
        idPublication,
        publicationText,
        photo,
        likes,
        likesForPublication));

      const textPublication = document.querySelector('textArea[data-texto]');
      const editsPublication = document.querySelector('img[data-edit]');

      const savePublication = document.querySelector('button[data-save]');
      const cancelPublication = document.querySelector('button[data-cancel]');

      const btnsEditPostBox = document.querySelector('.btnsEditContainer');
      /* ***** Block btns of save and cancel edit publication ***** */
      editsPublication.addEventListener('click', (e) => {
        e.preventDefault();
        if (myPost) {
          btnsEditPostBox.classList.remove('hide');
          textPublication.disabled = false;
          textPublication.select();
        }
      });
      // console.log(editsPublication);

      /* ***** save edit publication ***** */
      savePublication.addEventListener('click', (e) => {
        e.preventDefault();
        // editPublication(idPublication, publicationText);
        editPublication(idPublication, textPublication.value);
        textPublication.disabled = true;
        btnsEditPostBox.classList.add('hide');
      });

      /* ***** cancel edit publication ***** */
      cancelPublication.addEventListener('click', (e) => {
        // e.preventDefault();
        // editPublication(idPublication, publicationText);
        textPublication.disabled = true;
        btnsEditPostBox.classList.add('hide');

        const cancelEdit = e.target.dataset.cancel;

        // eslint-disable-next-line eqeqeq
        if (cancelEdit == idPublication) {
          console.log('e.target', cancelEdit);
          readAPost(idPublication, textPublication);
        }
      });

      /* ***** delete publication ***** */
      // import modal
      const cerrar = document.getElementById('close');
      const modalC = document.getElementById('modal-container');
      const btnModalConfirmDelete = document.getElementById('btn-modal-yes');
      const btnModalCancel = document.getElementById('btn-modal-no');

      // delete
      divPublicado.querySelector('.btnDelete')
        .addEventListener('click', (event) => {
          let deleted = event.target.dataset.ref;
          // INIT - Modal for Vericate Delete Publication
          let stateModal = false;
          // view modal
          modalC.style.opacity = '1';
          modalC.style.visibility = 'visible';
          // close modal
          cerrar.addEventListener('click', () => {
            modalC.style.opacity = '0';
            modalC.style.visibility = 'hidden';
            deleted = '';
            return stateModal;
          });
          // cancel modal
          btnModalCancel.addEventListener('click', () => {
            modalC.style.opacity = '0';
            modalC.style.visibility = 'hidden';
            deleted = '';
            return stateModal;
          });
          // confirm delete - YES
          btnModalConfirmDelete.addEventListener('click', () => {
            modalC.style.opacity = '0';
            modalC.style.visibility = 'hidden';
            stateModal = true;
            // Delete publication for Firebase
            if (deleted !== '') {
              deletePublication(deleted);
              const removeDiv = divPublicado.querySelector(`#${deleted}`);

              // Delete div publication
              removeDiv.remove();
            }
            return stateModal;
          });
          // END - Modal for Vericate Delete Publication
        });

      // ****likes****
      // let activo = true;
      // let likeRef;
      // const arrayBtnLikes = divPublicado.querySelectorAll('.btnLikePublication');

      // // ****evento ocurrido por cada like de un usuario*****
      // arrayBtnLikes.forEach((element) => {
      //   element.addEventListener('click', (e) => {
      //     e.preventDefault();
      //     const uidPostLikes = e.target.dataset.like;
      //     // eslint-disable-next-line max-len
      //     // eslint-disable-next-line no-plusplus
      //     function contLikes(docSnap) {
      //       // eslint-disable-next-line no-plusplus
      //       const pDeLikePublication = divPublicado.querySelectorAll('.pLikePublication');
      //       // eslint-disable-next-line no-plusplus
      //       for (let i = 0; i < pDeLikePublication.length; i++) {
      //         if (pDeLikePublication[i].dataset.totallike === uidPostLikes) {
      //           pDeLikePublication[i].innerHTML = docSnap.data().idUserLike.length;
      //         } else {
      //           console.log('error wey');
      //         }
      //       }
      //     }
      //     // *****retorna el total de likes por post ****
      //     async function lengthArrayLikes() {
      //       const docSnap = await getDoc(likeRef);
      //       contLikes(docSnap);
      //       const totalLikesPorUidPost = docSnap.data().idUserLike.length;
      //       return totalLikesPorUidPost;
      //     }

      //     // ****se agrega o quita likes del usuario de acuerdo a la condicion****
      //     if (activo) {
      //       likeRef = doc(db, 'publications', uidPostLikes);
      //       async function arrayFirebase() {
      //         await updateDoc(likeRef, {
      //           idUserLike: arrayUnion(uid()),
      //         });
      //       }
      //       arrayFirebase()
      //         .then(
      //           // console.log('se ejecutó'),
      //         );
      //       activo = false;
      //       lengthArrayLikes()
      //         .then((result) => {
      //         });
      //     } else if (activo === false) {
      //       activo = true;
      //       likeRef = doc(db, 'publications', uidPostLikes);
      //       async function arrayRemoveFirebase() {
      //         await updateDoc(likeRef, {
      //           idUserLike: arrayRemove(uid()),
      //         });
      //       }
      //       arrayRemoveFirebase()
      //         .then(
      //           console.log('se ha eliminado jeje'),
      //         );
      //       lengthArrayLikes()
      //         .then((result) => {
      //         });
      //     }
      //   });
      // });
      // contLikes(docSnap);
    } else {
      console.log('No such document!');
    }
    return userOfPublication;
  }

  /* ***** leer datos desde Firebase de la colección Publicaciones y Usuarios ***** */

  async function reedPublications(filterMyPost) {
    let querySnapshotPublications = await getDocs(collection(db, 'publications'));

    if(filterMyPost == 'my'){
      let q = query(collection(db, "publications"), where("author", "==", '8cm4l6x9m8XLzHcQnUzoZUhciwk2'));
      querySnapshotPublications = await getDocs(q);
    }

    querySnapshotPublications.forEach((documentFirebase) => {
      realOnSnapshot(documentFirebase);
    });

    return querySnapshotPublications;
  }
  return containerHome;
};

export default Home;
