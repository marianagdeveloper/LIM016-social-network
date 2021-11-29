import Signin from './signin.js';
import Signup from './signup.js';
import Home from './welcome.js';
import Different from './404.js';
import welcome from './welcome.js';


const components = {
    welcome: welcome,
    signin: Signin,
    signup: Signup,
    home: Home,
    different: Different
}

export { components }