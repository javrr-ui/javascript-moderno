//Cómo se comunican las funciones

iniciarApp();

function iniciarApp(){
    console.log("Iniciando App...");
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde la segunda función");
    usuarioAutenticado();
}

function usuarioAutenticado(){
    console.log("Autenticando usuario...");
    console.log("Usuario autenticado exitosamente...");
}