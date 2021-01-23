//Congelar un objeto para no poderlo modificar

//activar modo stricto 
"use strict";
const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//Congelar un objeto

Object.freeze(producto);

// producto.nombre = "celular"; //provoca un error

//saber si un objeto está congelado
console.log(Object.isFrozen(producto));