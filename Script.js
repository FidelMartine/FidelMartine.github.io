// Función para buscar al dar clic en Enter
document.getElementById("personaje").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    buscarPersonaje();
  }
});

// Función para buscar un personaje
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

// Función para mostrar el resultado de la búsqueda
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

      var p = document.createElement("p");
      p.textContent = "Especie: " + personaje.species;
      resultado.appendChild(p);

      var p = document.createElement("p");
      p.textContent = "Estatus: " + personaje.status;
      resultado.appendChild(p);

      var p = document.createElement("p");
      p.textContent = "Origen: " + personaje.origin.name;
      resultado.appendChild(p);
    };
  } else {
    resultado.innerHTML = "No se encontró el personaje";
  }
}

// Función para mostrar un mensaje de error
function mostrarError(error) {
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Error: " + error.message;
}

// Función para limpiar el campo de búsqueda y el resultado
function limpiar() {
  document.getElementById("personaje").value = "";
  document.getElementById("resultado").innerHTML = "";
}

