//Convertir strings a numeros
const num1 = "30";
const num2 = "20.2";
const num3 = "uno";
const num4 = 20;

console.log("num1 uno es: "+num1 + " tipo de dato es: " + typeof num1);
console.log(Number.parseInt(num1));

console.log(Number.parseFloat(num2));

//Revisar si un numero es entero
console.log(Number.isInteger(num1));