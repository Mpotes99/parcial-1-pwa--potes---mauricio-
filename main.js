
const app = new VTTCue({
    el:'#app',
    data:{
        personajes:[],
        personajeSeleccionado:{},
        mostrarModal:false
    },
    methods:{
        obtenerPersonajes() {
            fetch('https://rickandmortyapi.com/api/character/?status=alive')
                .then(response => response.json())
                .then(data => {
                    this.personajes = data.results;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        mostrarDetalles(personaje) {
            this.personajeSeleccionado = personaje;
            this.mostrarModal = true;
        },
        cerrarModal() {
            this.mostrarModal = false;
        }

    },
    mounted(){
        this.obtenerPersonajes();
    }
})