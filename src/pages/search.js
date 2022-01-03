/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-extend-native */
import {
  getDocs,
  collection,
  db,
  query,
  where,
} from '../utils/firebaseconfig.js';
import { countries } from '../utils/countries.js';

// import { dataInterests } from '../utils/interests.js';
import { nameInterests } from '../utils/interests.js';


String.prototype.capitalize = function () {
// console.log(this.charAt(0).toUpperCase() + this.slice(1));
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Function - Get Users data from Firestore
async function usersInFirestore() {
  const usersData = await getDocs(collection(db, 'users'));
  return usersData;
}

// Template View Search Users
const Search = () => {
  const viewSearch = `      
    <div class='container'>
      <div class='caja1'>
        <div class='input'>
          <input type='text' id='fname' name='firstname' placeholder='🔍 User name..'>
        </div>
        <div class='filtros'>
          <div class='filtro1'>
              <select class='selectCountry' name='select'>
                <option value='Country'>Country</option>
              </select>
          </div>
          <div class='filtro2'>
            <select  class='selectInterest' name='select'>
              <option value='Interest'>Interest</opcion>
            </select>
          </div>
        </div>
      </div>
      <div class='caja2'></div>
      </div>
`;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewSearch;

  // Clear
  const clearCards = () => {
    while (divCardUser.firstChild) {
      divCardUser.firstChild.remove();
    }
  };

  // Divs querySelector
  const divCardUser = divElemt.querySelector('.caja2');
  const divInputName = divElemt.querySelector('#fname');
  const divSelectCountry = divElemt.querySelector('.selectCountry');
  const divSelectInterest = divElemt.querySelector('.selectInterest');

  // Filter
  async function filterUsers(key, divElem) {
    clearCards();
    const filterInfo = divElem;
    let q = query(collection(db, 'users'));

    if (key == 'username') {
      console.log('filterInfo.value: ', filterInfo.value);
      q = query(collection(db, 'users'),
        where('name', '>=', filterInfo.value.capitalize()),
        where('name', '<=', `${filterInfo.value.capitalize()}\uf8ff`));
    }
    if (key == 'country') {
      q = query(collection(db, 'users'), where('country', '==', filterInfo.value));
    }
    if (key == 'interests') {
      q = query(collection(db, 'users'), where('interests', 'array-contains', filterInfo.value));
    }
    const querySnapshot = await getDocs(q);
    printDataUsers(querySnapshot);
  }

  // Show input - filter Name
  divInputName.addEventListener('keyup', () => { filterUsers('username', divInputName); });

  // Show countries
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in countries) {
    divSelectCountry.innerHTML += `
    <option value='${prop}:${countries[prop]}'>
      ${countries[prop]}
    </option>`;
  }
  divSelectCountry.addEventListener('change', () => { filterUsers('country', divSelectCountry); });

  // Show Select Interest
  // eslint-disable-next-line no-restricted-syntax

//   for (const prop in dataInterests) {
//     divSelectInterest.innerHTML += `
//     <option value='${dataInterests[prop]}'>

  for (const prop in nameInterests) {
    divSelectInterest.innerHTML += `
    <option value='${nameInterests[prop]}'>
      ${prop}
    </option>`;
  }

  // Select interest
  divSelectInterest.addEventListener('change', () => {
    // console.log('divSelectInterest:', divSelectInterest.value);
    filterUsers('interests', divSelectInterest);
  });

  // Print Users -> for user
  function printDataUsers(data) {
    // console.log('data: ', data);
    const dataUsers = data;
    dataUsers.forEach((doc) => {
      // Print One User
      let user; let photo; let fullname; let country; let interests; let bio;
      user = doc.data();
      photo = user.photo;
      fullname = user.name;
      country = user.country.split(':')[1];
      interests = user.interests;
      bio = user.bio;
      printUser(photo, fullname, country, interests, bio);
    });
  }

  // Print One card user
  function printUser(photo, fullname, country, interests, bio) {
    divCardUser.innerHTML += `
        <div class='search'>
          <div class='perfil'>
          <img class='imgPerfil' src='${photo}' alt=''>
          <button id="btnSeeUserPost" class="btnSeeUserPost">
            <a id="btnSeeUser" href="#/home" data-ref='${fullname}'>See Posts</a>
          </button></div>
          <div class='caracteres'>
            <div class='nombre'>${fullname}</div>
            <div class='pais'>${country}</div>
            <div class='intereses'>
              <div class='imgCaracteres'><img src='${interests[0]}' alt=''></div>
              <div class='imgCaracteres'><img src='${interests[1]}' alt=''></div>
              <div class='imgCaracteres'><img src='${interests[2]}' alt=''></div>
            </div>
            <div class='flexBtn'>
              <p id="txtBioPost" class="txtBioPost">${bio}</p>
            </div>
          </div>  
        </div>
  `;

    // Button See Post
    const btnSeeUserPosts = divCardUser.querySelectorAll('#btnSeeUser');

    btnSeeUserPosts.forEach((element) => {
      element.addEventListener('click', (e) => {
        let userSearch = e.target.dataset.ref;
        let objName = {
          name: `${userSearch}`,
        };
        sessionStorage.setItem('userSearch', (JSON.stringify(objName)));
      });
    });
  }

  // Users in Firestore and print
  const infoUsers = () => {
    usersInFirestore()
      .then((querySnapshot) => {
        const data = querySnapshot;
        // Print
        printDataUsers(data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };

  // Users
  infoUsers();

  return divElemt;
};

export default Search;
