// for in


const pendientes = ["Tarea","Comer","Estudiar"];

// for in itera sobre objetos

const automovil = {
    nombre: "camaro",
    año: 2000,
    color: "negro",
}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
}

for(let [llave, valor] of Object.entries(automovil) ){
    console.log(`${llave}:${valor}`);   
}
