const diaHoy = new Date();
const algunDia = new Date("3-10-1999");
let valor;

valor = diaHoy;
console.log(valor);
console.log(algunDia);

// getFullYear

valor = diaHoy.getFullYear();
console.log("getFullYear(): "+valor);

// get month

valor = diaHoy.getMonth();
// january = 1, february = 2, etc
console.log(valor);

// get hours
valor = diaHoy.getHours();
console.log(valor);

//get minutes
valor = diaHoy.getMinutes();
console.log(valor);