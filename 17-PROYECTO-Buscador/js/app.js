//variables

const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//contenedor para los resultados
const resultado = document.querySelector("#resultado");


const max = new Date().getFullYear();
const min = max - 10;

//generar un objeto con la busqueda
const datosBusqueda = {
    marca:"",
    year:"",
    minimo:"",
    maximo:"",
    puertas:"",
    transmision:"",
    color:"",

}



//eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos);

    //llena las opciones de años
    llenarSelect();

})

//event listener para los select
marca.addEventListener("change", e=>{
    console.log("marca cambió de estado")
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener("change", e=>{
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});

minimo.addEventListener("change", e=>{
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});
maximo.addEventListener("change", e=>{
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});
puertas.addEventListener("change", e=>{
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener("change", e=>{
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener("change", e=>{
    datosBusqueda.color = e.target.value;
});



//funciones
function mostrarAutos(autos){
    //limpia el HTML previo
    limpiarHTML();

    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement("p");

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        //insertar en el HTML
        resultado.appendChild(autoHTML);
    })
}

//limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}


function llenarSelect(){
    for(let i=max; i >= min; i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent=i;
        year.appendChild(opcion); //agrega cada año al select
        
    }
}

//funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo);

    //console.log(resultado);
    mostrarAutos(resultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
       return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}