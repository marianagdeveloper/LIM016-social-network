import Welcome from './welcome.js';
import Signin from './signin.js';
import NavHome from './nav.js';
// import Home from './home.js';
// import Publications from './publications.js';
import AboutUs from './aboutUs.js';
import Signup from './signup.js';
import ForgotPassw from './forgotPassw.js';
import ForgotPassw2 from './forgotPassw2.js';
import Home from './home.js';
import Publications from './publications.js';
import Different from './404.js';

const components = {
  welcome: Welcome,
  signin: Signin,
  signup: Signup,
  forgotPassw: ForgotPassw,
  forgotPassw2: ForgotPassw2,
  nav: NavHome,
  home: Home,
  about: AboutUs,
  publications: Publications,
  // publications: Publications,
  different: Different,
};

export { components };
