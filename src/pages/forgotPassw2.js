export default () => {
  const viewAccessories = `
    <div class="BoxContainerSignIn">
      <div class="BoxLogin">
        <div class="BoxWelcome1">
          <div class="Logo1">
            <img src="img/Logos/LogoG1.png" class="logoSignIn" alt="logoKMS" />
          </div>
          <br>
          <p class="text-home">
            It is a social network focused on creating a community interested in the preservation of our only home "🌎The Planet Earth".
          </p>
          <p class="kmr">
            KMR
          </p>
        </div>
        <div class="BoxFormLogin formForgotPass">
          <a href="#/forgotPassw"><i class="fas fa-arrow-left"></i></a>
          <form>
            <div class="containerSignIn containerSignInForgotPass">
              <h1>
                Create a secure password</h1>
              <hr />
              <div class="containerLogin forgotPass">
                <label for="uname"><b>
                  Password must be longer than six characters</b></label>
                <div class="clearfix clearfixForgotPass">
                  <input class="inputSignIn inputSignInForgotPass pass2" id="email" type="text" placeholder="New password" name="uname" required/>
                  <input class="inputSignIn inputSignInForgotPass pass2" id="email" type="text" placeholder="Repeat new password" name="uname" required/>
                  <button type="submit" id="btn-signin-signin" class="Loginbtn LoginbtnForgotPass pass2"><a href="#/signin">Restore password</a></button>
              </div><hr>
            </div>
          </form>
        </div>
      </div>
    </div>`;
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewAccessories;
  return divElemt;
};
