// .findindex para encontrar la posicion de un elemento en un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//metodo manual para encontrar un elemento 
let mesito = 'Julio';
meses.forEach((mes,index) => {
    if(mes === mesito){
        console.log(`Mes de ${mesito} encontrado en el índice ${index}.`);
    }

})


//encontrar el indice de abril

const indice = meses.findIndex( mes => mes === 'Enero');
console.log(indice);

//Encontrar un indice de un arreglo de objetos
const indice2 = carrito.findIndex(producto => producto.nombre === 'Tablet');
console.log(indice2);