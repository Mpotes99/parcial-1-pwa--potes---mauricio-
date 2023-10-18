new Vue({
    el: '#app',
    data: {
      personajes: [],
      personajeSeleccionado: null,
    },
    created() {
      this.obtenerPersonajes();
    },
    methods: {
      obtenerPersonajes() {
        const apiUrl = 'https://rickandmortyapi.com/api/character/?status=alive';
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            this.personajes = data.results.slice(0, 20).map(personaje => ({
              ...personaje,
              gender: this.traducirGenero(personaje.gender),
            }));
          })
          .catch(error => console.error('Error:', error));
      },
      abrirModal(personaje) {
        this.personajeSeleccionado = personaje;
      },
      cerrarModal() {
        this.personajeSeleccionado = null;
      },
      traducirGenero(generoEnIngles) {
        switch (generoEnIngles) {
          case 'Male':
            return 'Masculino';
          case 'Female':
            return 'Femenino';
          case 'unknown':
            return 'Desconocido';
          case 'Genderless':
            return 'Sin género';
          default:
            return generoEnIngles;
        }
      },
    },
  });
  