// Validación de formulario de inicio de sesión

function validarFormulario() {
  // Obtenemos los valores de los campos de entrada
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validamos que los campos no estén vacíos
  if (username === "") {
    alert("El campo 'Usuario' está vacío.");
    return false;
  }

  if (password === "") {
    alert("El campo 'Contraseña' está vacío.");
    return false;
  }

  // Validamos que el nombre de usuario tenga al menos 6 caracteres
  if (username.length < 6) {
    alert("El nombre de usuario debe tener al menos 6 caracteres.");
    return false;
  }

  // Validamos que la contraseña tenga al menos 8 caracteres
  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return false;
  }

  // Los campos son válidos, por lo que podemos enviar el formulario
  return true;
}

// Escuchamos el evento "submit" del formulario
document.getElementById("loginForm").addEventListener("submit", validarFormulario);

