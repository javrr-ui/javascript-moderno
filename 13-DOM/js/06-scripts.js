//modificar textos o imagenes con js

const encabezado = document.querySelector(".contenido-hero h1"); // tambien se puede hacer chaining y agregar .textContent
console.log(encabezado);

console.log(encabezado.innerText); //si en el CSS visibility: hidden; no lo va a entontrar

console.log(encabezado.textContent); //si lo va a encontrar

console.log(encabezado.innerHTML); // se trae el html


// document.querySelector(".contenido-hero h1").textContent = "XDDDDDDD";

const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg";