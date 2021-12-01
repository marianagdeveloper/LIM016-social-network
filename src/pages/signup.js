export default () => {
  const viewCatalogue = `
  <div class="BoxSignUp">
    <div class="BoxWelcome1">
        <div class="Logo1">
<<<<<<< HEAD
            <img src="img/Logos/LogoG1.png" class="logoSignUp" alt="logoKMS" />
=======
            <img src="../img/Logos/LogoG1.png" class="logoSignIn" alt="logoKMS" />
>>>>>>> d361de0f787adc6cdb1d6ed7dc1507f7de4f5b66
        </div>
        <br>
        <p class="text-home">
            It is a social network focused on creating a community interested in
            the preservation of our only home "🌎The Planet Earth".
          </p>
        <p class="kmr">
            KMR
        </p>
    </div>
    <div class="BoxFormSignUp">
    
      <form>
        <div class="containerSignUp">
          <h1>Sign Up</h1>
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
            <button type="submit" id="btn-welcome-signup" id="signup" class="signupbtn">Sign Up</button>
          </div><hr>
          </div> 
          <p>
          Do you already have an account?
            <a href="#/signin" style="color: dodgerblue">Sign In</a>.
          </p>
        </div>
      </form>
    </div>
  </div>
  `;
  // <a type="submit" href="#/home">Send</a>
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewCatalogue;

  return divElemt;
};
