
export default () => {
  const viewCatalogue = `
  <h2 class="text-center">Sign Up</h2>
  <input type="text" id="name">Full Name</input>
  <br>
  <input type="text" id="email">email</input>
  <br>
  <input type="text" id="pass">password</input>
  <br>
  <button id="signup">Sign Un</button>
  <br>
  `;
  // <a type="submit" href="#/home">Send</a>
  const divElemt = document.createElement("div");
  divElemt.classList.add("position");
  divElemt.innerHTML = viewCatalogue;
  return divElemt;
};
