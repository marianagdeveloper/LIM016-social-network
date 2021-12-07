const EditProfile = () => {
  const viewEditProfile = ` 
  <body>
    <section id="EditProfile" class="Box">
      <div id="Profile">
        <div class="titleEditProfile">
          <h1>EDIT PROFILE</h1>
        </div>
        <div class="containerSection">
          <div class="bodyEditProfile">
            <div class="nameUser">
              <h3>ANDALUCÍA LOPEZ</h3>
            </div>
            <div class="profileAndInterest"></div>
            <div class="interests">
              <img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt="" />
              <img src="/src/img/Intereses/InteresesCN/SiembraCN.png" alt="" />
              <img src="/src/img/Intereses/InteresesCN/ReciclajeCN.png" alt="" />
            </div>
            <div class="photoProfile">
              <img
                src="../src/img/Avatares/Animals/AvatarA5.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="countryUser">
              <div class="countryUserFlex">
                <h3>Country:</h3>
                <select name="select">
                  <option value="value1">Value 1</option>
                  <option value="value2" selected>Value 2</option>
                  <option value="value3">Value 3</option>
                </select>
              </div>
            </div>
            <div class="titleWriteBio">
              <h3>Write your bio:</h3>
            </div>
            <div class="bioUser">
              <textarea name="comments" id="texta2"></textarea>
              <div class="buttonSave">
                <button>
                  <h2>SAVE</h2>
                </button>
              </div>
            </div>
          </div>
          <div class="selectProfile" class="Box">
            
            
          </div>
            
          </div>
        </div>
      </div>
    </section>
  </body>
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewEditProfile;

  return divElemt;
};

export default EditProfile;
