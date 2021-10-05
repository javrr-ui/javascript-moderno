//Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return "Bienvenido";
    }
}

const javier = new Cliente("Javier", 5000);
console.log(javier);
console.log(javier.mostrarInformacion());
console.log(Cliente.bienvenida());
// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}


const javier2 = new Cliente("Javier", 5000);
console.log(javier2);
console.log(javier2.mostrarInformacion());