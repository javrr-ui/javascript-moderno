//.map para iterar un array

/* la diferencia es que .map hace un nuevo arreglo

*/

const carrito = [
    {nombre: "playstation", precio: 500},
    {nombre: "monitor", precio: 200},
    {nombre: "pc", precio: 500},
    {nombre: "telefono", precio: 5000},
    {nombre: "television", precio: 600},
    {nombre: "tablet", precio: 700}
]



carrito.forEach( function(producto){
    console.log(`El precio de ${producto.nombre} es ${producto.precio}`);
})


//creando un nuevo arreglo con el metodo .map

//productos que valen mas de 1000
const productos2 = carrito.map( function(producto){
        return `El precio de ${producto.nombre} es ${producto.precio}`;
})

console.log(productos2);