const Home = () => {
  const viewHome = `

  <main>
    <!-- HOME PAGE -->
    <section id='Home' class='Box'>

      <div class='HomeBox'>
        <div class='UserName'>
          <h1>USER NAME</h1> 
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
<<<<<<< HEAD
          <p>ECOGRAM</p>
          <div class="input">
            <input type="text" id="fname" name="firstname" placeholder="Your name..">
          </div>
=======
>>>>>>> c01dc80640120620e6728d836f620b7dcba28cf0
        </div>
      </div>

    </section>
  </main>`;

  // <a type='submit' href='#/home'>Send</a>
  const divElemt = document.createElement('div');
  divElemt.classList.add('positionHome');
  divElemt.innerHTML = viewHome;

  return divElemt;
};

export default Home;
