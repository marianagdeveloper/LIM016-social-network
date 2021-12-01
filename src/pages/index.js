import Welcome from './welcome.js';
import Signin from './signin.js';
import Signup from './signup.js';
import ForgotPassw from './forgotPassw.js';
import ForgotPassw2 from './forgotPassw2.js';
// import Home from './welcome.js';
import Different from './404.js';

const components = {
  welcome: Welcome,
  signin: Signin,
  signup: Signup,
  forgotPassw: ForgotPassw,
  forgotPassw2: ForgotPassw2,

  // home: Home,
  different: Different,
};

export { components };
