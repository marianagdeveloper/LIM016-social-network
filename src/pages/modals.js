// Objeto que crea de forma dinámica los modales para Registro

export const modalRegistro = {

  correoInvalido: () => {
    const errorMensaje = `
      <div class= "modalError" id="modalCorreoInvalido">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Ingresaste un correo inválido.</p>
      </div>
    `;
    return errorMensaje;
  },

  correoExistente: () => {
    const exitoMensaje = `
      <div class= "modalError" id="modalCorreoExistente">
        <i class="fas fa-check-circle"></i>
        <p>Ya tienes un cuenta existente.</p>
      </div>
    `;
    return exitoMensaje;
  },

  contraseñaDebil: () => {
    const exitoMensaje = `
      <div class= "modalError" id="modalContraseñaDebil">
        <i class="fas fa-check-circle"></i>
        <p>La contraseña debe contener al menos 6 carácteres.</p>
      </div>
    `;
    return exitoMensaje;
  },

  exito: () => {
    const exitoMensaje = `
      <div class= "modalExito" id="modalExito">
        <i class="fas fa-check-circle"></i>
        <p>Revisa tu correo elétronico para confirmar registro.</p>
      </div>
    `;
    return exitoMensaje;
  },
};

// Objeto que crea de forma dinámica los modales para Inicio de Sesión
export const modalInicioSesion = {
  confirmar: () => {
    const errorMensaje = `
      <div class= "modalError" id="modalConfirmar">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Revisa tu bandeja de entrada y confirma tu cuenta porfavor.</p>
      </div>
    `;
    return errorMensaje;
  },

  datosInvalidos: () => {
    const errorMensaje = `
      <div class= "modalError" id="modalDatosInvalidos">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Ingresaste correo o contraseña inválidos.</p>
      </div>
    `;
    return errorMensaje;
  },

  usuarioInvalido: () => {
    const errorMensaje = `
      <div class= "modalError" id="modalUsuarioInvalido">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Aún no estas registrado.</p>
      </div>
    `;

    return errorMensaje;
  },
};
