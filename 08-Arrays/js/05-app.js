//Añadir nuevos elementos al inicio o al fin de un arreglo

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio", "Julio"];


//Agregar al final del arreglo
meses.push("Agosto");

console.table(meses);


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
