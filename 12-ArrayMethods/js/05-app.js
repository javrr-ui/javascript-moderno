// .find


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//con forEach
let resultado='';
carrito.forEach((producto, index) => {
    if(producto.nombre === "Tablet"){
        resultado = carrito[index];
    }
});
console.log(resultado);



//con .find
//solo asigna el primero elemento que encuentra en el array

const resultado2 = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado2);