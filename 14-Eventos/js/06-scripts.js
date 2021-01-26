// Event bubbling

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");


//Evitar event bubbling con stop progragation


cardDiv.addEventListener("click", e => {
    e.stopPropagation();
    console.log("diste click en card");
});

infoDiv.addEventListener("click", e => {
    e.stopPropagation();
    console.log("diste click en info");
});

titulo.addEventListener("click", e => {
    e.stopPropagation();
    console.log("diste click en titulo");
});