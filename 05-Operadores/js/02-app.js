const num1 = 20;
const num2 = "20";
const num3 = 30;


//Comparar 2 valores
console.log("num1 y num2 son iguales?:");
console.log(num1 == num2); //true


//Comparador estricto (se fija en que el valor sea igual y tambien el tipo de dato)
console.log(num1 === num2); //false
console.log(num1 === parseInt(num2)); //true


//Diferente que

const pass1 = "admin";
const pass2 = "Admin";

console.log(pass1 != pass2); //true
console.log(num1 != num2); //false
//"diferente que" estricto
console.log(num1 !== num2); //true