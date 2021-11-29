export default () => {
  const viewCatalogue = `
  <div class="BoxSignUp">
    <div class="BoxWelcome1">
        <div class="Logo1">
            <img src="/src/img/Logos/LogoG1.png" class="logoSignIn" alt="logoKMS" />
        </div>
        <p class="kmr">
            KMR
        </p>
    </div>
    <div class="BoxFormSignUp">
      <form>
        <div class="containerSignUp">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <div class="containerLogin">
          <label for="name"><b>Name</b></label>
          <input
            class="inputSignUp"
            id="name"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />

          <label for="email"><b>Email</b></label>
          <input
            class="inputSignUp"
            id="email"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label for="psw"><b>Password</b></label>
          <input
            class="inputSignUp"
            id="password"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input
            class="inputSignUp"
            id="passwordRepeat"
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />

          <label>
            <input
              class="inputCheck"
              type="checkbox"
              checked="checked"
              name="remember"
              style="margin-bottom: 15px"
            />
            Remember me
          </label>

          <p>
            By creating an account you agree to our
            <a href="#" style="color: dodgerblue">Terms & Privacy</a>.
          </p>

          <p id="verify-message" class="verify-message"></p>
          <div class="clearfix">
            <button type="submit" id="btn-welcome-signup" id="signUp" class="signupbtn">Sign Up</button>
          </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  `;
  // <a type="submit" href="#/home">Send</a>
  const divElemt = document.createElement("div");
  divElemt.classList.add("position");
  divElemt.innerHTML = viewCatalogue;

  return divElemt;
};
