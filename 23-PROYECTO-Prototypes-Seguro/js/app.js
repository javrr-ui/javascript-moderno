//Constructores 
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.seguro = seguro;
    this.tipo = tipo;
}

function UI() { }

//Llena las opciones de los años 
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector("#year");

    for (let i = max; i > min; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = function (mensaje, tipo) {
    const div = document.createElement("div");

    if(tipo === "error") {
        div.classList.add("error");
    } else {
        div.classList.add("correcto");
    }
    div.classList.add("mensaje");
    div.textContent = mensaje;

    //Insertar en el HTML
    const form = document.querySelector("#cotizar-seguro");
    form.insertBefore(div, document.querySelector("#resultado"));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

//Instanciar UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
    ui.llenarOpciones();
})


eventListeners();
function eventListeners() {
    const form = document.querySelector("#cotizar-seguro");
    form.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector("#marca").value;

    //Leer año seleccionado
    const year = document.querySelector("#year").value;

    //Leer tipo seleccionado
    const tipo = document.querySelector("input[name='tipo']:checked").value;

    if (marca === "" || year === "" || tipo === "") {
        ui.mostrarMensaje("Todos los campos son obligatorios", "error");
    } else {
        ui.mostrarMensaje("Cotizando", "correcto");
    }
}