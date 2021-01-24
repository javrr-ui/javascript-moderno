// querySelector
// retorna solo un elemento que cumpla con el selector y solo retorna el primero que encuentre

const card = document.querySelector('.card');
console.log(card);

//podemos tener selectores especificos como en css

const info = document.querySelector(".premium .info");
console.log(info);


//Seleccionar el segundo card de hospedaje

const segundoCard = document.querySelector(".hospedaje .card:nth-child(2)");
console.log(segundoCard);


//seleccionar el formulario

const formulario = document.querySelector("#formulario");
console.log(formulario);

//seleccionar elemento por su etiqueta html

const navegacion = document.querySelector('nav');
console.log(navegacion);