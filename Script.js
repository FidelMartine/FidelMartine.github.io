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

function mostrarResultado(data) {
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  // Mostrar la información del personaje
  if (data.results.length > 0) {
    var personaje = data.results[0];
    var imagen = document.createElement("img");
    imagen.src = personaje.image;
    imagen.onload = function() {
      // Ajustar el tamaño del resultado a la imagen
      resultado.style.width = imagen.width + "px";
      resultado.style.height = imagen.height + "px";
      resultado.appendChild(imagen);

      // Agregar la información del personaje
      var h2 = document.createElement("h2");
      h2.textContent = personaje.name;
      resultado.appendChild(h2);

      var p
