//Eliminar elementos de un array

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
carrito.push(producto);
carrito.push(producto2);

//Agregar al inicio del arreglo
carrito.unshift(producto3);
console.table(carrito);

//Eliminar ultimo elemento de un arreglo
carrito.pop()
console.table(carrito);

//Eliminar al inicio del arreglo
carrito.shift()
console.table(carrito);

carrito.splice(0,1);
console.table(carrito);