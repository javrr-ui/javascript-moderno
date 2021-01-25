//Crear codigo HTML con javascript

const enlace = document.createElement("a");
//añadiendo texto
enlace.textContent = "Nuevo enlace";

console.log(enlace);
//añadiendo h ref
enlace.href = "nuevo-enlace";


const navegacion = document.querySelector(".navegacion");
// navegacion.appendChild(enlace);
console.log(navegacion.children);

// insertar antes de
navegacion.insertBefore(enlace, navegacion.children[1]);


//creando un card

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria","concierto");


const parrafo2 = document.createElement("p");
parrafo2.textContent = "Zoé CDMX";
parrafo2.classList.add("titulo");


const parrafo3 = document.createElement("p");
parrafo3.textContent = "$1200 zona vip";
parrafo3.classList.add("precio");

//Crear div con la clase info
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear img
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

//crear card
const card = document.createElement("div");
card.classList.add("card");
card.appendChild(imagen);
card.appendChild(info);


const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.insertBefore(card,contenedor.children[0]);


console.log(contenedor.children);


