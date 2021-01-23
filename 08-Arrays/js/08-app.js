//Destructuring de arrays


const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}



// const nombre = producto.nombre;

//destructuring
const { nombre } = producto;
console.log(nombre);


//destructuring con arreglos
const numeros = [10,20,30,40,50];

//los nombres de las variables los asigna uno mismo
const [primero, segundo, tercero] = numeros;

//si solo se quiere acceder a una cierta posicion...
const [, , , cuarto] = numeros;

console.log(primero);
console.log(cuarto);