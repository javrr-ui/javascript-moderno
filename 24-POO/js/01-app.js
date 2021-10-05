//Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const javier = new Cliente("Javier", 5000);
console.log(javier);

// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}


const javier2 = new Cliente("Javier", 5000);
console.log(javier2);