
"use strict";
const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//Congelar un objeto

Object.seal(producto);
/* Seal

No se pueden agregar ni eliminar propiedades
pero si se pueden editar las ya existentes
*/

// producto.nombre = "celular"; //provoca un error

//saber si un objeto está congelado
console.log(Object.isSealed(producto));