//Parametros y argumentos en funciones


function sumar(a,b){ //a y b son parametros
    console.log(a + b);
}

let nombre;

sumar(2,3); //2 y 3 son argumentos


function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Francisco", "Ramirez");