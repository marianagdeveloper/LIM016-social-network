import {
  db,
  collection,
  getDocs,
  getDoc,
  doc
} from '../utils/firebaseconfig.js';

let uid = sessionStorage.getItem('key');
let name = sessionStorage.getItem('name');

async function readData() {
  //firebase
  const querySnapshot = await getDocs(collection(db, "users"));
  // console.log('estamos leyendo los usuarios en firestore:');
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
  });
}


//Obtener un usuario
async function readUser(uid) {
  let data;
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    data = docSnap.data();
    // console.log("Document data:", data);
    let name = data.name;
    sessionStorage.setItem('name', name);

  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return data
}

const Home = () => {
  
  const viewHome = `
  <main>
    <!-- HOME PAGE -->
    <section id='Home' class='Box'>

      <div class='HomeBox'>
        <div class='UserName'>
          <h1>${name}</h1> 
          <div class='linea2'>&nbsp;</div>
        </div>
        
        <div class='Avatar'>
          
          <img class='Avatar-img' src='/src/img/Avatares/Animals/AvatarA7.png' alt='Avatar Profile'>
          <div class='linea2'>&nbsp;</div>
        </div>
        <div class='User'>
          <h3>Email</h3>
          <p>user@email.com</p>
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

  // <a type='submit' href='#/home'>Send</a>
  const divElemt = document.createElement('div');
  divElemt.classList.add('positionHome');
  divElemt.innerHTML = viewHome;

  // readData();

  //  console.log('este es el uid:', uid);
  readUser(uid);

  console.log("Nombre:", name);
  return divElemt;
};





export default Home;
