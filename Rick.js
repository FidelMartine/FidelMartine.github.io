// Función para buscar al dar clic en Enter
document.getElementById("personaje").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    buscarPersonaje();
  }
});

function buscarPersonaje() {
  var nombre = document.getElementById("personaje").value;
  var url = "https://rickandmortyapi.com/api/character/?name=" + nombre;

  // Petición a la API
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      mostrarResultado(data);
    })
    .catch(function(error) {
      console.log(error);
      mostrarError(error);
    });
}
