import { getDocs, collection, db } from '../utils/firebaseconfig.js';

//Function - Get Users data from Firestore
async function usersInFirestore() {
  const usersData = await getDocs(collection(db, 'users'));
  return usersData;
}

//Template View Search Users
const Search = () => {
  const viewSearch = `      
    <div class='container'>
      <div class='caja1'>
        <div class='input'>
          <input type='text' id='fname' name='firstname' placeholder='Your name..'>
        </div>
        <div class='filtros'>
          <div class='filtro1'>
              <select name='select'>
                <option value='Country'>Country</opcion>
                <option value='Peru'>Perú</opcion>
                <option value='Mexico'>México</opcion>
                <option value='Chile'>Chile</opcion>
                <option value='Venezuela'>Venezuela</opcion>
                <option value='Argentina'>Argentina</opcion>
                <option value='Nicaragua'>Nicaragua</opcion>
              </select>
          </div>
              

          <div class='filtro2'>
            <select name='select'>
              <option value='Interest'>Interest</opcion>
              <option value='Energia'>Energía</opcion>
              <option value='Agua'>Agua</opcion>
              <option value='Reciclaje'>Reciclaje</opcion>
              <option value='Siembra'>Siembra</opcion>
              <option value='Argentina'>Argentina</opcion>
              <option value='Nicaragua'>Nicaragua</opcion>
            </select>
          </div>
        </div>
      </div>
      <div class='caja2'></div>
      </div>
`;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewSearch;

  let dataUsers;

  //Print Users
  function printDataUsers(data) {
    dataUsers = data;
    dataUsers.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
      //Print One User
      let user, photo, fullname, country, interests;
      user = doc.data();
      photo = user.photo; 
      fullname = user.name; 
      country = user.country.split(':')[1]; 
      interests = user.interests;
      printUser(photo, fullname, country, interests);
    });
    return
  }

  //Print One card user
  function printUser(photo, fullname, country, interests){
    const divCardUser = divElemt.querySelector('.caja2')
  divCardUser.innerHTML += `
  <div class='search'>
          <div class='perfil'><img class='imgPerfil' src='${photo}' alt=''></div>
          <div class='caracteres'>
            <div class='nombre'>${fullname}</div>
            <div class='pais'>${country}</div>
            <div class='intereses'>
              <div class='imgCaracteres'><img src='${interests[0]}' alt=''></div>
              <div class='imgCaracteres'><img src='${interests[1]}' alt=''></div>
              <div class='imgCaracteres'><img src='${interests[2]}' alt=''></div>
            </div>
          </div>  
        </div>
  `;
  return
  };

  //Users in Firestore and print
  const infoUsers = () => {
    usersInFirestore()
      .then((querySnapshot) => {
        const data = querySnapshot;
        //Print
        printDataUsers(data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };

  //Users
  infoUsers();

  return divElemt;
};

export default Search;
