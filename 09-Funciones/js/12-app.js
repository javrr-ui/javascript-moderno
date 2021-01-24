// Arrow functions en un forEach y en map


const carrito = [
    {nombre: "playstation", precio: 500},
    {nombre: "monitor", precio: 200},
    {nombre: "pc", precio: 500},
    {nombre: "telefono", precio: 5000},
    {nombre: "television", precio: 600},
    {nombre: "tablet", precio: 700}
]


carrito.forEach( producto =>  console.log(`El precio de ${producto.nombre} es ${producto.precio}`));


//creando un nuevo arreglo con el metodo .map
const productos2 = carrito.map( producto => `El precio de ${producto.nombre} es ${producto.precio}`);

console.log(productos2);