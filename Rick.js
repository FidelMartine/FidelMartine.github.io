
        const API_URL = "https://rickandmortyapi.com/api/character/";

        const buscarPersonaje = (nombre) => {
            const url = `${API_URL}?name=${nombre}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const personajes = data.results;
                    mostrarResultados(personajes);
                });
        };

        const mostrarResultados = (personajes) => {
            const resultadosElement = document.getElementById("resultados");
            resultadosElement.innerHTML = "";

            if (personajes.length === 0) {
                resultadosElement.innerHTML = "<p>No se encontraron resultados</p>";
                return;
            }

            for (const personaje of personajes) {
                const tarjetaPersonaje = `
                <div class="tarjeta-personaje">
                    <img src="${personaje.image}" alt="${personaje.name}">
                    <h2>${personaje.name}</h2>
                    <p>Especie: ${personaje.species}</p>
                    <p>Estado: ${personaje.status}</p>
                </div>
                `;
                resultadosElement.innerHTML += tarjetaPersonaje;
            }
        };

        const inputNombre = document.getElementById("nombre-personaje");
        inputNombre.addEventListener("keydown", (evento) => {
          if (evento.keyCode === 13) {
            // Buscar el personaje
            const nombrePersonaje = inputNombre.value;
            buscarPersonaje(nombrePersonaje);
          }
        });

        const btnLimpiar = document.getElementById("btn-limpiar");
        btnLimpiar.addEventListener("click", () => {
            document.getElementById("nombre-personaje").value = "";
            document.getElementById("resultados").innerHTML = "";
        });

