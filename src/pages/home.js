import {
  db,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  onSnapshot,
} from '../utils/firebaseconfig.js';

// Obtener un usuario
async function readUser(uid) {
  let data = '';
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    data = docSnap.data();
    console.log('Document data:', data);
    localStorage.setItem('user', JSON.stringify(data));
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
  return data;
}

// agregar datos
async function addPublication(publication) {
  try {
    const docRef = await addDoc(collection(db, 'probando'), {
      author: sessionStorage.getItem('key'),
      publication,
    });

    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Export const Home
const Home = () => {
  const containerHome = document.createElement('div');

  containerHome.classList.add('positionHome');

  const viewHome = `
  <main>
    <!-- HOME PAGE -->
    <section id='Home' class='Box'>

      <div class='HomeBox'>
        <div class='UserName'>
        </div>
        
        <div class='Avatar'>
          
          <img class='Avatar-img' src='/src/img/Avatares/Animals/AvatarA7.png' alt='Avatar Profile'>
          <div class='linea2'>&nbsp;</div>
        </div>
        <div class='User'>
        </div>
        <div class='Country'>
          <h3>Country</h3>
          <p>Italia</p>
        </div>
  
        <div class='Bio'>
          <h3>Biography:</h3>
          <div>
            <p>Hola, soy amante del arte en reciclado. Hago muchas manualidades pro ambientales. Les invito a ver mi galeria. 🧮 </p>
          </div>
        </div>
        
        <div class='Interests'>
          <h3>
            Interests:
          </h3>
          <div class='Interests-Box'>
            <img src='/src/img/Intereses/InteresesCN/AnimalCN.png' alt=''>
            <img src='/src/img/Intereses/InteresesCN/SiembraCN.png' alt=''>
            <img src='/src/img/Intereses/InteresesCN/ReciclajeCN.png' alt=''>
          </div>
        </div>
        <div id="publications" class='Publications'>
          <div class="boxPublications">
            <div class="photoPerfil">
              <img src="/src/img/Avatares/Animals/AvatarA7.png" alt="">
            </div>
            <div class="userName">
              <p>KATERIN TELLO</p>
            </div>
            <div class="publication">
              <textarea name="comments" placeholder="Type something here..." id="texta2" clase="texta2"></textarea>
            </div>
            <div class="cancel">
              <!-- <button class="button">CANCEL</button> -->
            </div>
            <div class="save">
              <button id="btnSave" class="btnSave">SAVE</button>
              <button class="btnCancel">CANCEL</button>
            </div>
          </div>
        </div>
        <div id="publicado">
        </div >
      </div>

    </section>
  </main>`;
  containerHome.innerHTML = viewHome;

  const infoUser = (info) => {
    console.log(info);
    containerHome.querySelector('.UserName').innerHTML
    += `<h1>${info.name}</h1> 
    <div class='linea2'>&nbsp;</div>`;
    containerHome.querySelector('.User').innerHTML
    += `<h3>Email</h3>
    <p>${info.email}</p>`;
  };

  const uid = () => {
    const uidSS = sessionStorage.getItem('key');
    return uidSS;
  };

  readUser(uid()).then((value) => infoUser(value)).catch((error) => console.log(error));

  // actualizacion tiempo real
  function realOnSnapshot(doc1) {
    const unsub = onSnapshot(doc(db, 'probando', doc1.id), (doc3) => {
      const divPublicado = containerHome.querySelector('#publicado');
      console.log('Current data: ', doc3.data().publication);
      divPublicado.innerHTML
            += `<h3>${doc3.data().publication}</h3>`;
    });
    console.log(unsub);
  }

  // leer datos
  async function reedPublications() {
    const querySnapshot = await getDocs(collection(db, 'probando'));
    // console.log('visualizando esta linea: ', querySnapshot);
    querySnapshot.forEach((doc1) => {
      realOnSnapshot(doc1);
      // console.log('visualizando doc1:', doc1);
      // console.log(`${doc1.id} => ${JSON.stringify(doc1.data())}`);
    });
    return querySnapshot;
  }
  reedPublications();

  containerHome.querySelector('#btnSave').addEventListener('click', (e) => {
    e.preventDefault();
    const divPublicado = containerHome.querySelector('#publicado');
    const publication = containerHome.querySelector('#texta2').value;

    containerHome.querySelector('#texta2').value = containerHome.querySelector('#texta2').defaultValue;
    console.log(publication);
    addPublication(publication);

    while (divPublicado.firstChild) {
      divPublicado.removeChild(divPublicado.firstChild);
    }

    reedPublications();
  });

  return containerHome;
};

export default Home;
