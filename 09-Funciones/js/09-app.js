//Añadir funciones en un objeto

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id: ${id}`);
    },
    pausar: function(){
        console.log("pausando...");
    }


}

reproductor.reproducir(20);
reproductor.pausar();


reproductor.borrar = function(id){
    console.log(`Borrando cancion con id ${id}`);
}

reproductor.borrar(20);