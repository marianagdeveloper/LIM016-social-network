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
          <h3>User</h3>
          <p>@User165</p>
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

          <nav class='nav-Publications'>
            <button class='tablink'  id='defaultOpen'><a href="#/publications">
              <img src='/src/img/Icons/WhiteBorder/Notice.png' alt='Notice'></a>
            </button>
            <button class='tablink' onclick='openBoxPublication('events', this, 'rgb(28, 70, 99)')'>
              <img src='/src/img/Icons/WhiteBorder/Event1.png' alt='Events'>
            </button>
            <button class='tablink' onclick='openBoxPublication('galery', this, 'rgb(102, 74, 31)')'>
              <img src='/src/img/Icons/WhiteBorder/Galery1.png' alt='Galery'>
            </button>
            <button class='tablink' onclick='openBoxPublication('historial', this, 'rgb(172, 35, 35)')'>
              <img src='/src/img/Icons/WhiteBorder/Heart.png' alt='Heart'>
            </button>
          </nav>
          
          <div id='publications' class='tabcontent'><br>
          </div>

          <div id='events' class='tabcontent'>
            <h1>EVENTS</h1>
            <p>All events</p>
          </div>
          
          <div id='galery' class='tabcontent'>
            <h1>MY GALLERY</h1>
            <p>Photos</p>
          </div>

          <div id='historial' class='tabcontent'>
            <h1>HISTORIAL</h1>
            <p>All likes</p>
          </div>

          <footer class='footer-Publications'>
            <button class='tablink' onclick='openBoxPublication('publications', this, 'rgb(26, 77, 33)')' id='defaultOpen'>
              <img src='/src/img/Icons/WhiteBorder/Notice.png' alt='Notice'>
            </button>
            <button class='tablink' onclick='openBoxPublication('events', this, 'rgb(28, 70, 99)')'>
              <img src='/src/img/Icons/WhiteBorder/Event1.png' alt='Events'>
            </button>
            <button class='tablink' onclick='openBoxPublication('galery', this, 'rgb(102, 74, 31)')'>
              <img src='/src/img/Icons/WhiteBorder/Galery1.png' alt='Galery'>
            </button>
            <button class='tablink' onclick='openBoxPublication('historial', this, 'rgb(172, 35, 35)')'>
              <img src='/src/img/Icons/WhiteBorder/Heart.png' alt='Heart'>
            </button>
          </footer> 
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
