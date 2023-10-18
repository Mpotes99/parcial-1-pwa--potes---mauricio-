new Vue({
    el: "#app",
    data: {
      personajes: [],
      personajeSeleccionado: null,
    },
    created() {
      this.obtenerPersonajes();
    },
    methods: {
      obtenerPersonajes() {
        const apiUrl = "https://rickandmortyapi.com/api/character/?status=alive";
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            this.personajes = data.results.slice(0, 20).map((personaje) => ({
              ...personaje,
              gender: this.traducirGenero(personaje.gender),
            }));
          })
          .catch((error) => console.error("Error:", error));
      },
      mostrarDetalles(personaje) {
        this.personajeSeleccionado = personaje;
  
        // Agregar el personaje al historial utilizando localStorage
        const historial = JSON.parse(localStorage.getItem("historial")) || [];
        historial.push(personaje);
        localStorage.setItem("historial", JSON.stringify(historial));
      },
      abrirModal(personaje) {
        this.personajeSeleccionado = personaje;
      },
      cerrarModal() {
        this.personajeSeleccionado = null;
      },
      traducirGenero(generoEnIngles) {
        switch (generoEnIngles) {
          case "Male":
            return "Masculino";
          case "Female":
            return "Femenino";
          case "unknown":
            return "Desconocido";
          case "Genderless":
            return "Sin género";
          default:
            return generoEnIngles;
        }
      },
    },
  });
  