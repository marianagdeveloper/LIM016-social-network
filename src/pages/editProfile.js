import
{
  db,
  updateDoc,
  doc,
} from
  '../utils/firebaseconfig.js';

import countries from '../utils/countries.js';
// console.log('countries', Object.values(countries));

// Template View Edit Profile
const EditProfile = () => {
  const viewEditProfile = ` 
  <body>
    <section id='EditProfile' class='Box'>
      <div id='Profile'>
        <div class='titleEditProfile'>
          <h1>EDIT PROFILE</h1>
        </div>
        <div class='containerSection'>
          <div class='bodyEditProfile'>
            <div class='nameUser'>
            </div>
            <div class='profileAndInterest'></div>
            <div class='interests'>
            </div>
            <div class='photoProfile'>
              <img
                class='photo'
                src=''
                alt=''
                srcset=''
              />
            </div>
            <div class='countryUser'>
              <div class='countryUserFlex'>
                <h3>Country:</h3>
                <div class='flag'></div>
                <select class='selectCountry' name='select'>
                <option value='' selected>Select your Country</option>
                </select>
              </div>
            </div>
            <div class='titleWriteBio'>
              <h3>Write your bio:</h3>
            </div>
            <div class='bioUser'>
              <textarea name='comments' id='texta2' class='bio'></textarea>
              <div class='buttonSave'>
                <button>
                  <h2>SAVE</h2>
                </button>
              </div>
            </div>
          </div>
          <div class='selectProfile' class='Box'>
            <div id='selectPhoto' class='Box'>
              <h2>Choose your profile picture:</h2>
              <div id='photos' class='Box'>
                  <div class='img0'>
                    <img
                    src='img/Avatares/Animals/AvatarA1.png'
                    alt=''
                    srcset=''
                  />
                  </div>
                  <div class='img1'>
                    <img
                    src='img/Avatares/Animals/AvatarA2.png'
                    alt=''
                    srcset=''
                  />
                  </div>
                  <div class='img2'>
                    <img
                    src='img/Avatares/Animals/AvatarA3.png'
                    alt=''
                    srcset=''
                  />
                  </div>
                  <div class='img3'>
                    <img
                    src='img/Avatares/Animals/AvatarA4.png'
                    alt=''
                    srcset=''
                  />
                  </div>
                  <div class='img4'>
                    <img
                    src='img/Avatares/Animals/AvatarA5.png'
                    alt=''
                    srcset=''
                  />
                  </div>
                  <div class='img5'>
                    <img
                    src='img/Avatares/Animals/AvatarA6.png'
                    alt=''
                    srcset=''
                  />
                  </div>
                  <div class='img6'>
                    <img
                    src='img/Avatares/Animals/AvatarA7.png'
                    alt=''
                    srcset=''
                  />
                  </div>
                  <div class='img7'>
                    <img
                    src='img/Avatares/Animals/AvatarA8.png'
                    alt=''
                    srcset=''
                  />
                  </div>
                  <div class='img8'>
                    <img
                    src='img/Avatares/Animals/AvatarA9.png'
                    alt=''
                    srcset=''
                  />
                  </div>
                  <div class='img9'>
                    <img
                    src='img/Avatares/Animals/AvatarA10.png'
                    alt=''
                    srcset=''
                  />
                  </div>
                  <div class='img10'>
                    <img
                    src='img/Avatares/Animals/AvatarA11.png'
                    alt=''
                    srcset=''
                  />
                  </div>
                  
              </div>
          
          </div>
            <div id='selectInterest' class='Box'>
              <h2>Pick 3 of your interests:</h2>
              <div id='photos' class='Box'>
                <div class='img0' id='interest0'>
                  <img
                  src='img/Intereses/Agua.png'
                  alt=''
                  srcset=''
                />
                </div>
                <div class='img1' id='interest1'>
                  <img
                  src='img/Intereses/Animal.png'
                  alt=''
                  srcset=''
                />
                </div>
                <div class='img2' id='interest2'>
                  <img
                  src='img/Intereses/Clima.png'
                  alt=''
                  srcset=''
                />
                </div>
                <div class='img3' id='interest3'>
                  <img
                  src='img/Intereses/Energia.png'
                  alt=''
                  srcset=''
                />
                </div>
                <div class='img4' id='interest4'>
                  <img
                  src='img/Intereses/Energia2.png'
                  alt=''
                  srcset=''
                />
                </div>
                <div class='img5' id='interest5'>
                  <img
                  src='img/Intereses/Fabrica.png'
                  alt=''
                  srcset=''
                />
                </div>
                <div class='img6' id='interest6'>
                  <img
                  src='img/Intereses/Oceanos.png'
                  alt=''
                  srcset=''
                />
                </div>
                <div class='img7' id='interest7'>
                  <img
                  src='img/Intereses/Reciclaje.png'
                  alt=''
                  srcset=''
                />
                </div>
                <div class='img8' id='interest8'>
                  <img
                  src='img/Intereses/ResiduosTóxicos.png'
                  alt=''
                  srcset=''
                />
                </div>
                <div class='img9' id='interest9'>
                  <img
                  src='img/Intereses/Siembra.png'
                  alt=''
                  srcset=''
                />
                </div>
                <div class='img10' id='interest10'>
                  <img
                  src='img/Intereses/Tala.png'
                  alt=''
                  srcset=''
                />
                </div>
            </div>
            </div>
          </div>  
          </div>
        </div>
      </div>
    </section>
  </body>
  `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewEditProfile;

  // Funtion of Photo Profile
  function photoProfile(photo) {
    divElemt.querySelector('.photo').src = photo;
  }

  // Funtion of Interests Profile
  function interestsProfile(interests) {
    console.log(interests);
    const divInterestProfile = divElemt.querySelector('.interests');
    while (divInterestProfile.firstChild) {
      divInterestProfile.removeChild(divInterestProfile.firstChild);
    }

    interests.forEach((element) => {
      divInterestProfile.innerHTML += `<img src='${element}' alt='' />`;
    });
  }

  // Update info user
  function updateInfoUser(uid, bio, photo, interests, country) {
    const userUpdate = doc(db, 'users', uid);
    return updateDoc(userUpdate, {
      bio,
      photo,
      interests,
      country,
    });
  }

  // Add info of User
  const infoUser = (info) => {
    console.log('info: ', info);

    // User Name
    divElemt.querySelector('.nameUser').innerHTML += `<h3>${info.name}</h3>`;

    // User Bio
    divElemt.querySelector('.bio').innerHTML += `${info.bio}`;

    // User Photo of Profile
    photoProfile(info.photo);

    // User Interests
    let arrayInterests = info.interests;
    interestsProfile(arrayInterests);

    // User Country
    const country = info.country.split(':')[1];
    const flag = info.country.split(':')[0];
    // console.log('country:', country);
    // console.log('flag:', flag);
    if (country != '') {
      divElemt.querySelector('.flag').innerHTML = `
      <img
      src='https://flagcdn.com/40x30/${flag}.png'
      srcset='https://flagcdn.com/80x60/${flag}.png 2x,
        https://flagcdn.com/120x90/${flag}.png 3x'
      width='40'
      height='30'
      alt='${country}'>
    `;
    }

    // Show Select Country
    const arr = countries;
    for (const prop in arr) {
      const divElement = divElemt.querySelector('.selectCountry');
      divElement.innerHTML += `<option value='${prop}:${arr[prop]}'>${arr[prop]}</option>`;
    }

    // Change Country - Change Flag
    let code = flag;
    let nameCountry = country;
    const divFlag = divElemt.querySelector('.selectCountry');
    divFlag.addEventListener('change', (event) => {
      const countryData = event.target.value.split(':');
      code = countryData[0];
      nameCountry = countryData[1];
      // console.log(code, nameCountry);
      // Change Flag
      divElemt.querySelector('.flag').innerHTML = `
      <img
      src='https://flagcdn.com/40x30/${code}.png'
      srcset='httpscountrycdn.com/80x60/${code}.png 2x,
        https://flagcdn.com/120x90/${code}.png 3x'
      width='40'
      height='30'
      alt='${nameCountry}'>
    `;
    });

    // Select Photo Profile
    let newPhoto = info.photo;
    for (let index = 0; index < 11; index++) {
      const divAvatar = divElemt.querySelector(`.img${index}`);
      divAvatar.addEventListener('click', (event) => {
        newPhoto = event.target.attributes.src.value;
        console.log(`click en img${index}`, newPhoto);
        photoProfile(newPhoto);
      });
    }

    // Select Interest
    const arrayInterest = info.interests;
    console.log(arrayInterest);
    for (let index = 0; index < 11; index++) {
      const divInterestsProfile = divElemt.querySelector(`#interest${index}`);
      divInterestsProfile.addEventListener('click', (event) => {
        const newInterest = event.target.attributes.src.value;
        // console.log(`click en interest`, newInterest);
        const validateInterest = arrayInterest.includes(newInterest);

        if (!validateInterest) {
          arrayInterest.pop();
          arrayInterest.unshift(newInterest);
          arrayInterests = arrayInterest;
          interestsProfile(arrayInterest);
        }
      });
    }

    // Button Save
    const btnSave = divElemt.querySelector('.buttonSave');
    btnSave.addEventListener('click', () => {
      // console.log('save');
      let uid; let bio; let photo; let country; let
        interests;
      console.log('uidSS: ', sessionStorage.getItem('key'));
      uid = sessionStorage.getItem('key');
      bio = divElemt.querySelector('.bio').value;
      photo = newPhoto;
      console.log(uid, bio, photo);
      // country = divElemt.querySelector(".selectCountry").value;
      country = `${code}:${nameCountry}`;
      console.log(country.split(':'));
      interests = arrayInterests;
      updateInfoUser(uid, bio, photo, interests, country);
    });
  };

  const uid = () => {
    // const uidSS = sessionStorage.getItem('key');
    // console.log("uidSS: ", sessionStorage.getItem("user"));
    const uidSS = JSON.parse(sessionStorage.getItem('user'));

    return uidSS;
  };

  infoUser(uid());
  return divElemt;
};

export default EditProfile;
