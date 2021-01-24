// for loop

// for(let i=0;i<10;i++){
//     console.log(`Numero ${i}`);
// }


//Numeros pares e impares 

for(let i=1;i<20;i++){
    if(i%2===0){
        console.log(`el numero ${i} es par`);
    }else{
        console.log(`el numero ${i} es impar`);
    }
}


const carrito = [
    {nombre: "Playstation", precio: 500},
    {nombre: "Monitor", precio: 200},
    {nombre: "Pc", precio: 500},
    {nombre: "Telefono", precio: 5000},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 700}
]

for(let i=0; i<carrito.length;i++){
    console.log(`${carrito[i].nombre} cuesta ${carrito[i].precio}`);
}