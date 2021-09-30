const diaHoy = new Date();
const algunDia = new Date("3-10-1999");
let valor;

valor = diaHoy;
console.log(valor);
console.log(algunDia);

// getFullYear

valor = diaHoy.getFullYear();
console.log("getFullYear(): "+valor);