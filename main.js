const jsonConverter = (response) => response.json();

const app = new VTTCue({
    el:'#app',
    data:{
        personajes:[],
        personajeselec:{}
    },
    methods:{
        obtenerPersonajes(){
            fetch('https://rickandmortyapi.com/api/character/?status=alive')
            .then(respuesta => respuesta.json())
            .then(data => {
                this.personajes = data.results;
            })
            .catch(error => {
                console.error('Error', error);
            })
        },
    mostrarDetalles(personaje){
        this.personajeSeleccionado = personaje;
        this.mostrasModal = true;
    },
    cerrarModal(){
        this.mostrarModal = false;
    }

    },
    mounted(){
        this.obtenerPersonajes();
    }
})