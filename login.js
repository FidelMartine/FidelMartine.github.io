const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Verificar usuario y contraseña (reemplaza 'verificarUsuario(username, password)' con tu lógica de verificación)
  if (verificarUsuario(username, password)) {
    // Login exitoso
    console.log("Login exitoso!");
    // Redirecciona a la página principal u otra página dependiendo de la lógica de tu aplicación
  } else {
    // Login fallido
    console.log("Usuario o contraseña incorrectos");
    // Muestra un mensaje de error al usuario
  }
});

function verificarUsuario(username, password) {
  // Reemplaza con tu lógica para verificar el usuario y la contraseña en tu base de datos
  // Por ejemplo, podrías hacer una llamada a una API o consultar una base de datos local
  return (username === "admin" && password === "123456"); // Ejemplo ficticio
}
