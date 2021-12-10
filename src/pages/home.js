import {
  db,
  collection,
  getDocs,
  getDoc,
  doc
} from '../utils/firebaseconfig.js';

// let uid = sessionStorage.getItem('key');
// let name = sessionStorage.getItem('name');
let nombre;

//Obtener un usuario
async function readUser(uid) {
  let data;
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    data = docSnap.data();
    console.log("Document data:", data);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return data
}

// async function readData() {
//   //firebase
//   const querySnapshot = await getDocs(collection(db, "users"));
//   // console.log('estamos leyendo los usuarios en firestore:');
//   querySnapshot.forEach((doc) => {
//     // console.log(`${doc.id} => ${doc.data()}`);
//   });
// }




const Home = () => {

  const user = sessionStorage.getItem('key');
  console.log('user:', user);
  // readUser(user)
  // .then
  // (val => 
  //   console.log('val:', val.name),
  //   console.log('val2:', val.name),
  //   // nombre = val.name,
  //   // sessionStorage.setItem('name', val.name),
  //   );

  (
    async () => {
       const data = await readUser(user);
       let nameUser = data.name;
       console.log(nameUser);
    }
)()
  
  
  
  const viewHome = `
  <main>
    <!-- HOME PAGE -->
    <section id='Home' class='Box'>

      <div class='HomeBox'>
        <div class='UserName'>
          <h1>USERNAME</h1> 
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
  console.log("Nombre:", name);
  //  console.log('este es el uid:', uid);

 
  return divElemt;
};





export default Home;
