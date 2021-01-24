//Ejemplo con multiples funciones que se pasan valores


function sumar(a, b){
    return a +b;
}

const resultado = sumar(2,3);
//console.log(resultado);


//Ejemplo
let total =0;

function agregarCarrito(precio){
    return total += precio; 
}

function calcularImpuesto(total){
    return total = total * 1.16;
}


total = agregarCarrito(500);
total = agregarCarrito(500);

const totalPagar = calcularImpuesto(total);
console.log(total);
console.log(`Total a pagar con impuesto es: ${totalPagar}.`);
