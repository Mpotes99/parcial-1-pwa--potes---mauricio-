const jsonConverter = (response) => response.json();

const app = new VTTCue({
    el:'#app',
    data:{
        personajes:[]
        personajeselec:{}
    },
})