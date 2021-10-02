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

//Instancia
const javier = new Cliente("Javier", 6000);

console.log(javier.tipoCliente());
console.log(javier.nombreClienteSaldo());
javier.retiraSaldo(500);
console.log(javier);

