import { components } from "../pages/index.js";
// import { createUser } from '../firebase/index.js';
// Import the functions you need from the SDKs you need


export const changeTmp = (hash) => {
  const id = hash.split("/")[1];
  const sectionMain = document.getElementById("container");
  sectionMain.innerHTML = "";

  switch (hash) {
    case "":
    case "#":
    case "#/": {
      return sectionMain.appendChild(components.welcome());
    }
    case "#/signin":{
      sectionMain.appendChild(components.signin());
    }
    case "#/signup": {
      sectionMain.appendChild(components.signup());
    }
    case "#/home": {
      return sectionMain.appendChild(components.home());
    }
    default:
      return sectionMain.appendChild(components.different());
  }
};
