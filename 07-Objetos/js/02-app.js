//Como acceder a los valores de un objeto

const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto.precio);
console.log(producto.nombre);
console.log(producto.disponible);

//otra manera de acceder a un valor de un objeto
console.log(producto['nombre']);