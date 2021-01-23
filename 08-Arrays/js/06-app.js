//Crear un nuevo arreglo con spread operator


const carrito = [];

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
}

const producto2 = {
    nombre: "telefono",
    precio: 900,
}

const producto3 = {
    nombre: "teclado",
    precio: 30,
}

let resultado = [...carrito,producto];
resultado = [...resultado, producto2];
resultado = [producto3,...resultado];

console.table(resultado);
console.table(carrito);
