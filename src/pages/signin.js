export default () => {
    const viewAccessories = `
  <h2 class="text-center">Sign In</h2>
  <input type="text" id="email">email</input>
  <br>
  <input type="text" id="password">password</input>
  <br>
  <a href="#/signup">Register</a>
  `;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewAccessories;
    return divElemt;
};