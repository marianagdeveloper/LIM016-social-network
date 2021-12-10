import {
  db,
  // collection,
  // getDocs,
  getDoc,
  doc,
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
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
  return data;
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
        </div>
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

  return containerHome;
};

export default Home;
