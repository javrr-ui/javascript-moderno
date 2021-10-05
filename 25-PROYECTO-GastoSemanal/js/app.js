//Variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//Eventos

eventListeners();
function eventListeners() {
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
}

//Clases



//Funciones

function preguntarPresupuesto() {
    const presupuesto = prompt("Cual es tu presupuesto?");
    Number(presupuesto);
    if (presupuesto === "" || presupuesto === null || isNaN(presupuesto) || presupuesto <= 0) {
        preguntarPresupuesto();
    }
}