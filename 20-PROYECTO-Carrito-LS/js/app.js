//variables


const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // cuando agregas un curso presionando agregar curso
    listaCursos.addEventListener("click", agregarCurso);

    //elimina cursos cuando presionas la X
    carrito.addEventListener("click", eliminarCurso);

    //Muestra los cursos de LocalStorage
    document.addEventListener("DOMContentLoaded", () => {
        articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carritoHTML();
    })

    //vaciar el carrito
    vaciarCarrito.addEventListener("click", () => {
        articulosCarrito = [];
        limpiarHTML();
    });
}

function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//elimina un curso del crrito
function eliminarCurso(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains("borrar-curso")) {
        const cursoId = e.target.getAttribute("data-id");
        console.log(cursoId);

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        console.log(articulosCarrito);
        carritoHTML(); //iterar sobre el carrito y mostrar su HTML
    }
}

// lee el contenido del html

function leerDatosCurso(curso) {
    console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    }
    console.log(infoCurso);

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // Retorna el objeto actualizado
            } else {
                return curso; // Retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];

    } else {
        //agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    console.table(articulosCarrito);
    carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML() {

    //limpiar el html
    limpiarHTML();


    //recorre el carito y genera el html
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })

    //agregar el carrito de compras a localStorage
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}

function limpiarHTML() {
    //Forma lenta
    //contenedorCarrito.innerHTML = "";


    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
