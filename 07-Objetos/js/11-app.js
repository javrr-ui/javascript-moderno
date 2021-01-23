//Funciones en objetos y acceder a sus valores

const producto = { 
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}
//Se usa la palabra reservada "this" para acceder a los valores del objeto y no los de afuera

producto.mostrarInfo();