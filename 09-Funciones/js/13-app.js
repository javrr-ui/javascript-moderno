//Arrow functions en reproductor

const reproductor = {
    reproducir: id => console.log(`Reproduciendo cancion con el id: ${id}`),

    pausar: () => console.log("pausando..."),

    borrar: id => console.log(`Borrando cancion con id ${id}`),

}

reproductor.reproducir(20);
reproductor.pausar();



reproductor.borrar(20);