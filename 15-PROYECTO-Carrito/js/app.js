//variables


const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){

    listaCursos.addEventListener("click", agregarCurso);
}

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// lee el contenido del html

function leerDatosCurso(curso){
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
    
    //agrega elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.table(articulosCarrito);
    carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML(){

    //limpiar el html
    limpiarHTML();


    //recorre el carito y genera el html
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

function limpiarHTML(){
    //Forma lenta
    //contenedorCarrito.innerHTML = "";


    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
