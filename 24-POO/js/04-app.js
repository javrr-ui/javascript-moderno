//Class declaration
class Cliente {

    //Atributo privado
    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return "Bienvenido";
    }

    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
}

const javier = new Cliente("Javier", 5000);
// console.log(javier.#nombre);
console.log(javier.saldo);
console.log(javier.mostrarInformacion());

console.log(javier.getNombre());
javier.setNombre("Arturo");
console.log(javier.getNombre());