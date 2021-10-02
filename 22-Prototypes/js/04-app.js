function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function (){
    let tipo;
    if(this.saldo > 10000){
        tipo = "Platinum";
    }else if (this.saldo > 5000){
        tipo = "Gold";
    } else {
        tipo = "Normal";
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){ 
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

const javier = new Persona("Javier", 5000, 343234324);
console.log(javier);

Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta pesona es ${this.telefono}`;
}

console.log(javier.mostrarTelefono());