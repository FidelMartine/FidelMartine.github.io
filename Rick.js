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
    });
}

function mostrarResultado(data) {
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  // Mostrar la información del personaje
  if (data.results.length > 0) {
    var personaje = data.results[0];
    resultado.innerHTML = `
      <img src="${personaje.image}" alt="${personaje.name}">
      <h2>${personaje.name}</h2>
      <p>Especie: ${personaje.species}</p>
      <p>Estatus: ${personaje.status}</p>
      <p>Origen: ${personaje.origin.name}</p>
    `;
  } else {
    resultado.innerHTML = "No se encontró el personaje";
  }
}

function limpiar() {
  document.getElementById("personaje").value = "";
  document.getElementById("resultado").innerHTML = "";
}
