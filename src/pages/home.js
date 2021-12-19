/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */

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
} from '../utils/firebaseconfig.js';

/* *************** Constantes para el modal "delete publication" *************** */

const cerrar = document.getElementById('close');
const modalC = document.getElementById('modal-container');
const btnModalConfirmDelete = document.getElementById('btn-modal-yes');
const btnModalCancel = document.getElementById('btn-modal-no');

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
          <img class='Avatar-img' src='img/Avatares/Animals/AvatarA7.png' alt='Avatar Profile'><br>
          <div class='linea2'>&nbsp;</div>
        </div>
        <div class='Bio'>
          <h3>Biography:</h3><br>
          <div>
            <p>Hola, soy amante del arte en reciclado. Hago muchas manualidades pro ambientales. Les invito a ver mi galeria. 🧮 </p>
          </div>
        </div>
        <div class='Inf'>
          <div class='Country'>
            <h3>Country:</h3>
            <p>Italia</p>
          </div>
          <div class='Email'>

          </div>
        </div>
        <div class='Interests'>
          <h3>
            Interests:
          </h3><br>
          <div class='Interests-Box'>
            <img src='img/Intereses/InteresesCN/AnimalCN.png' alt=''>
            <img src='img/Intereses/InteresesCN/SiembraCN.png' alt=''>
            <img src='img/Intereses/InteresesCN/ReciclajeCN.png' alt=''>
          </div>
        </div>
      </div>

      <div id='publications' class='Publications'>
        <div class='PublicationsContent'>
          <div class='btnPublic'>
            <img id="NewPost" class="NewPost" src='img/Icons/WhiteBorder/PlusCircle1.png' alt='Nex Publication'>
          </div>
          <div class='boxPublic'>
          <div id='boxPublications'class='NoneboxPublications'>
            <div class='boxPhotoandName'>
              <div class='boxInternoPhotoandName'>
                <div class='photoPerfil'>
                  <img src='img/Avatares/Animals/AvatarA7.png' alt=''>
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
            <div class='save'>
              <button id='btnSave' class='btnSave'>SAVE</button>
              <button id='btnCancel' class='btnCancel'>CANCEL</button>

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

    /* *************** evento de añadir publicación con save *************** */

    containerHome.querySelector('#btnSave').addEventListener('click', (e) => {
      e.preventDefault();
      const divPublicado = containerHome.querySelector('#publicado');
      const publication = containerHome.querySelector('#texta2').value;
      containerHome.querySelector('#texta2').value = containerHome.querySelector('#texta2').defaultValue;
      console.log(publication);

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

  const uid = () => {
    const uidSS = sessionStorage.getItem('key');
    return uidSS;
  };
  readUser(uid())
    .then((value) => { infoUser(value), reedPublications(value); })
    .catch((error) => console.log(error));

  /* ***** actualizacion tiempo real de publications ***** */

  function realOnSnapshot(documentFirebase) {
    const idPublication = documentFirebase.id;
    llenarPublications(documentFirebase, idPublication);
  }

  /* ***** publicaciones realizadas ***** */

  async function llenarPublications(documentFirebase, idPublication) {
    const userOfPublication = await getDoc(doc(db, 'users', documentFirebase.data().author));

    if (userOfPublication.exists()) {
      const divPublicado = containerHome.querySelector('#publicado');

      const nameUser = userOfPublication.data().name;
      const publicationText = documentFirebase.data().publication;

      /* ***** Only Delete or Edit Post for UserCurrent ***** */

      const authorPublication = userOfPublication.data().uid;
      const userCurrent = sessionStorage.getItem('key');
      const myPost = authorPublication === userCurrent;

      /* ***** add componet publication ***** */

      divPublicado.prepend(publicationComponent(nameUser,
        myPost,
        idPublication,
        publicationText));

      const textPublication = document.querySelector('textArea[data-texto]');
      const editsPublication = document.querySelector('img[data-edit]');
      const savePublication = document.querySelector('img[data-save]');

      editsPublication.addEventListener('click', (e) => {
        e.preventDefault();
        if (myPost) {
          savePublication.classList.remove('hide');
          editsPublication.classList.add('hide');

          textPublication.disabled = false;
          textPublication.select();
        }
      });
      // console.log(editsPublication);

      savePublication.addEventListener('click', (e) => {
        e.preventDefault();
        editsPublication.classList.remove('hide');
        savePublication.classList.add('hide');
        // editPublication(idPublication, publicationText);
        editPublication(idPublication, textPublication.value);
        textPublication.disabled = true;
      });

      /* ***** delete publication ***** */

      const publication = divPublicado.querySelectorAll('img[data-ref]');
      publication.forEach((element) => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          const idPublicationRef = element.dataset.ref;

          // INIT - Modal for Vericate Delete Publication
          let stateModal = false;

          // view modal
          modalC.style.opacity = '1';
          modalC.style.visibility = 'visible';

          // close modal
          cerrar.addEventListener('click', () => {
            modalC.style.opacity = '0';
            modalC.style.visibility = 'hidden';
            return stateModal;
          });

          // cancel modal
          btnModalCancel.addEventListener('click', () => {
            modalC.style.opacity = '0';
            modalC.style.visibility = 'hidden';
            return stateModal;
          });

          // confirm delete - YES
          btnModalConfirmDelete.addEventListener('click', () => {
            modalC.style.opacity = '0';
            modalC.style.visibility = 'hidden';
            stateModal = true;

            // Delete publication for Firebase
            deletePublication(idPublicationRef, divPublicado);

            // Delete box of publications
            const elementDelete = element.parentNode.parentNode.parentNode;
            elementDelete.remove();

            return stateModal;
          });
          // END - Modal for Vericate Delete Publication
        });
      });
    } else {
      console.log('No such document!');
    }
    return userOfPublication;
  }

  /* ***** leer datos desde Firebase de la colección Publicaciones y Usuarios ***** */

  async function reedPublications() {
    const querySnapshotPublications = await getDocs(collection(db, 'publications'));

    querySnapshotPublications.forEach((documentFirebase) => {
      realOnSnapshot(documentFirebase);
    });

    return querySnapshotPublications;
  }
  return containerHome;
};

export default Home;
