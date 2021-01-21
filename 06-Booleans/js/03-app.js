//Buenas practicas al evaluar booleans

const autenticar = true;

//usar igualadores es una mala practica,
if(autenticar === true){
    console.log("usuario autenticado");
}else{
    console.log("usuario no autenticado");
}

//esta seria la manera correcta de escribir el codigo
if(autenticar){
    console.log("usuario autenticado");

}else{
    console.log("usuario no autenticado");
}