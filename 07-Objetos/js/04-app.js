//Destructuring de objetos

const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}



// const nombre = producto.nombre;

//destructuring
const { nombre } = producto;
console.log(nombre);

//destructuring a varias propiedades
const { precio, disponible} = producto;
console.log(precio);
console.log(disponible);

//Destructuring extrae el valor y crea la variable