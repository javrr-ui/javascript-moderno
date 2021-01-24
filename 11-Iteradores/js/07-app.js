//for of

const pendientes = ["Tarea","Comer","Estudiar"];


const carrito = [
    {nombre: "playstation", precio: 500},
    {nombre: "monitor", precio: 200},
    {nombre: "pc", precio: 500},
    {nombre: "telefono", precio: 5000},
    {nombre: "television", precio: 600},
    {nombre: "tablet", precio: 700}
]

for (let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto);
}