//.forEach y .map


const pendientes = ["Tarea","Comer","Estudiar"];

pendientes.forEach( (pendiente, index) => console.log(`${index}: ${pendiente}`));

const nuevoArreglo = pendientes.map( (pendiente) => pendiente);

console.log(nuevoArreglo);