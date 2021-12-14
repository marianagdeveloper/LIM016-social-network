const Search = () => {
  const viewSearch = `      
    <div class="container">
      <div class="caja1">
        <div class="input">
          <input type="text" id="fname" name="firstname" placeholder="Your name..">
        </div>
        <div class="filtros">
          <div class="filtro1">
              <select name="select">
                <option value="Country">Country</opcion>
                <option value="Peru">Perú</opcion>
                <option value="Mexico">México</opcion>
                <option value="Chile">Chile</opcion>
                <option value="Venezuela">Venezuela</opcion>
                <option value="Argentina">Argentina</opcion>
                <option value="Nicaragua">Nicaragua</opcion>
              </select>
          </div>
              

          <div class="filtro2">
            <select name="select">
              <option value="Interest">Interest</opcion>
              <option value="Energia">Energía</opcion>
              <option value="Agua">Agua</opcion>
              <option value="Reciclaje">Reciclaje</opcion>
              <option value="Siembra">Siembra</opcion>
              <option value="Argentina">Argentina</opcion>
              <option value="Nicaragua">Nicaragua</opcion>
            </select>
          </div>
        </div>
      </div>
      <div class="caja2">
        <div class="search">
          <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA1.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">JUANITO ARISTISABAL</div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div>  
        </div>
        <div class="search">
          <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA3.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">VICENTE VALERIO</div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div> 
        </div>
        <div class="search">
          <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA3.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">LUIS JIMENEZ</div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div> 
        </div>
        <div class="search">
          <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA3.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">ADRIANA LOPEZ</div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div> 
        </div>
        <div class="search">
          <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA5.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">CRISTIAN CASTRO</div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div> 
        </div>
        <div class="search">   <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA3.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">PEDRO SUAREZ</div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div> </div>
        <div class="search">   <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA6.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">DIEGO DOMINGUEZ</div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div> </div>
        <div class="search">   <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA3.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">ADRIÁN PLAZA</div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div> </div>
        <div class="search">   <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA9.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">MARC DUQUE </div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div> </div>
        <div class="search">   <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA3.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">PAULA SALA</div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div> </div>
        <div class="search">   <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA8.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">XAVIER FANER</div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div> </div>
        <div class="search">   <div class="perfil"><img class="imgPerfil" src="/src/img/Avatares/Animals/AvatarA3.png" alt=""></div>
          <div class="caracteres">
            <div class="nombre">MARGALIDA PERELLO</div>
            <div class="pais">Perú</div>
            <div class="intereses">
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AguaCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
              <div class="imgCaracteres"><img src="/src/img/Intereses/InteresesCN/AnimalCN.png" alt=""></div>
            </div>
          </div> </div>
        </div>
      </div>
`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewSearch;

  return divElemt;
};

export default Search;
