//Detener la ejecucion de un if con una funcion

const autenticado = true;

if(autenticado){
    console.log("El usuario está autenticado");
}
const puntaje= 450;

function revisarPuntaje(){
    if(puntaje > 400){
        console.log("Excelente");
        return;
    }
    if(puntaje> 350){
        console.log("Buen puntaje");
        return;
    }
}

revisarPuntaje();