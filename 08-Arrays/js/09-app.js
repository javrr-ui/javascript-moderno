// .foreach para iterar un array


const carrito = [
    {nombre: "playstation", precio: 500},
    {nombre: "monitor", precio: 200},
    {nombre: "pc", precio: 500},
    {nombre: "telefono", precio: 5000},
    {nombre: "television", precio: 600},
    {nombre: "tablet", precio: 700}
]


for(let i=0;i<carrito.length; i++){
    console.log(carrito[i].nombre);
}

carrito.forEach( function(producto){
    console.log(`El precio de ${producto.nombre} es ${producto.precio}`);
})