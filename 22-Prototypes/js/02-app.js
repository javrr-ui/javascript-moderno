//Object literal

const cliente = {
    nombre: "javier",
    saldo: 400
}

console.log(cliente);

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const javier = new Cliente("Javier", 4000);
console.log(javier);

function formatearCliente(cliente) {
    const { nombre, saldo } = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria de ${categoria}`;
}

console.log(formatearCliente(javier));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa("Codigo con Juan", 4000, "Cursos en linea");

console.log(formatearEmpresa(CCJ));