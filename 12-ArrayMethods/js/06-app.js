// .every

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];



//todos los elementos del array deben cumplir con la condicion, para que every regrese un true
const res = carrito.every( producto => producto.precio <1000);
console.log(res);

//por al menos un elemento debe de cumplir con la condicion
const res2 = carrito.some( producto => producto.precio <1000);
console.log(res2);