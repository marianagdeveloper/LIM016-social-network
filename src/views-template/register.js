export const register = `
<header-general></header-general>
<section class="register-login-container">
    <img src=""/>
    <div class="container-form">
        <h2>Registrate!</h2>
        <button-action class="secondary" id="btn-google"><img src="./img/google-icon.svg" style="width: 20px; margin-right: 5px;" slot="image"/><span slot="title">Continuar con Google</span></button-action> 
        <hr class="divider"/>
        <input-group type="text" placeholder="Ingrese su nombre" id="name-register"><span slot="title">Nombre:</span></input-group>
        <input-group type="email" placeholder="Ingrese su correo" id="email-register"><span slot="title">Correo electronico:</span></input-group>
        <input-password id="pass-register"><span slot="title">Contraseña:</span></input-password>
        <button-action class="primary" id="btn-Register"><span slot="title">Registrate</span></button-action>  
        <button-view id="go-login" class="btn-underline"><span slot="title">¿Ya tienes cuenta? Inicia sesion</span></button-view>
        </div>
        <notification-toast class="error" id="error-toast"><img src="./img/errorIcon.svg" slot="image"/><span slot="title">Error</span></notification-toast>
        <notification-toast class="done" id="done-toast"><img src="./img/doneIcon.svg" slot="image"/><span slot="title">Bien hecho !</span></notification-toast>
        </section>`;