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

//Herencia 
class Empresa extends Cliente {
    constructor(nombre,saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
}

const empresa1 = new Empresa("Empresa", 300, 2342343243, "Ventas en linea");
console.log(empresa1.mostrarInformacion())