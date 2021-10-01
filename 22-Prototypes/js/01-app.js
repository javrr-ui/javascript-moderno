//Object literal

const cliente = {
    nombre: "javier",
    saldo: 400
}

console.log(cliente);

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const javier = new Cliente("Javier", 4000);
console.log(javier);