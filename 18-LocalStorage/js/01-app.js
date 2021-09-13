

const producto = {

    nombre: "Monitor 24 pulgadas",
    precio: 3000
}

const productoString = JSON.stringify(producto);

localStorage.setItem("producto", productoString);

const meses = ["Enero", "Febrero", "Marzo"];
const mesesString = JSON.stringify(meses);
localStorage.setItem("meses", mesesString);