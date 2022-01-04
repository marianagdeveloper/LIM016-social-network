const Terms = () => {
  const viewTerms = `
  <div class="Terms">
    <a href="#/signup"><i class="fas fa-arrow-left"></i></a>
    <div class="Terms-Text">
      <h1> Terms and Conditions of Use the ECOGRAM Social Network </h1>
      <br> 

      <h2>You agree not to use this site for: </h2>
      <br>

      <ul>
        <li>
        Post, email, transmit or make public any content that is illegal, harmful, threatening, abusive, harassing, devious, defamatory, vulgar, obscene, invasive of privacy and that involves or refers to any type of racial, ethnic or racial segregation of any other kind.

        </li><br> 
        <li>
        Do any kind of harm to minors;
        </li><br> 
        <li>
        Impersonate another person or entity;
        </li><br> 
        <li>
        Falsify headers or manipulate identifiers to disguise the origin of any content transmitted through the site.
        </li><br> 
        <li>
        Publish, email, transmit, or make available any content that you do not have the right to make public, under any law or under a contractual or fiduciary relationship (such as internal information, proprietary information or confidential information acquired or delivered as part of employment relationships or under confidentiality contracts);
        </li><br> 
        <li>
        Publish, email or make available any content that infringes a patent, trademark, trade secret, copy and / or reproduction rights, or proprietary rights of either party;
        </li><br> 
        <li>
        Post, email or make available any unsolicited or unauthorized content for advertisements, promotional material, "junk mail", "spam", "chain letters", "pyramid schemes", or any other form of publication ;
        </li><br> 
        <li>
        Publish, email or make available any material that contains computer viruses or any other programming code, files or programs designed to interrupt, destroy or limit the functionality of computers, software, hardware or telecommunications equipment;
        </li><br> 
        <li>
        Disrupting the normal flow of dialogue or acting in a way that negatively affects the ability of other users to bond and exchange information;
        </li><br> 
        <li>
        Interfere with or interrupt the site or the servers or networks connected to the site, or disobey any requirement, procedure or policy of regulation of the networks connected to the site;
        </li><br> 
        <li>
        Unintentionally or intentionally, violate or breach any local, state, national and / or international law;
        </li><br> 
        <li>
        Stalk or harass another; or
        </li><br> 
        <li>
        Collect or save personal data of other users.
        </li><br> 
      </ul>
      <div class="logoTerms">
      <img src="img/Logos/LogoG8.png" alt="ECOGRAM"/>
      </div>
    </div>
  </div>
  `;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewTerms;
  return divElemt;
};

export default Terms;
