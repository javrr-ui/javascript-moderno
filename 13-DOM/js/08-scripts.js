//traversing the DOM

// const navegacion = document.querySelector(".navegacion");
// console.log(navegacion);
// console.log(navegacion.childNodes); //los espacios en blanco en el codigo son considerados elementos
// console.log(navegacion.children); //va a listar unicamente los elementos reales


const card = document.querySelector(".card");
console.log(card.children);
console.log(card.children[1]);
console.log(card.children[1].children[1].textContent);

card.children[1].children[1].textContent = ":OOOO";


//traversing del hijo al padre

console.log(card.parentElement.parentElement);

//traversing 

console.log(card.nextElementSibling);


const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard);