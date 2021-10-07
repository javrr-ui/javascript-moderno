//Variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//Eventos

eventListeners();
function eventListeners() {
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
    formulario.addEventListener("submit", agregarGasto);
}

//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        const { presupuesto, restante } = cantidad;
        document.querySelector("#total").textContent = presupuesto;
        document.querySelector("#restante").textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert");

        if (tipo === "error") {
            divMensaje.classList.add("alert-danger");
        } else {
            divMensaje.classList.add("alert-success");
        }

        //mensaje
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector(".primario").insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    agregarGastoListado(gastos) {
        this.limpiarHTML();
        gastos.forEach(gasto => {
            const { cantidad, nombre, id } = gasto;

            const nuevoGasto = document.createElement("li");
            nuevoGasto.className = "list-group-item d-flex justify-content-between align-items-center";
            nuevoGasto.dataset.id = id;

            //Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>`;

            //Boton para borrar el gasto
            const btnBorrar = document.createElement("button");
            btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
            btnBorrar.innerHTML = "Borrar &times;";
            nuevoGasto.appendChild(btnBorrar);

            //Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }
}

//Instanciar
const ui = new UI();
let presupuesto;

//Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt("Cual es tu presupuesto?");
    Number(presupuestoUsuario);
    if (presupuestoUsuario === "" || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        preguntarPresupuesto();
        return;
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto);
}

//Añade gastos

function agregarGasto(e) {
    e.preventDefault();

    const nombre = document.querySelector("#gasto").value;
    const cantidad = Number(document.querySelector("#cantidad").value);

    if (nombre === "" || cantidad === "") {
        ui.imprimirAlerta("Ambos campos son obligatorios", "error");
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta("Cantidad no válida", "error");
        return;
    }

    //Object Literal Enhancement
    //Generar un objecto de gasto
    const gasto = { nombre, cantidad, id: Date.now() };

    //Añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);
    ui.imprimirAlerta("Gasto agregado correctamente");
    const { gastos } = presupuesto;
    ui.agregarGastoListado(gastos);
    formulario.reset();
}