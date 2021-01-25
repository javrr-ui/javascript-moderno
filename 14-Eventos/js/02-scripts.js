//Evento con el mouse

const nav = document.querySelector(".navegacion");

//Registar un evento

nav.addEventListener("click",()=>{
    console.log("click en nav");
});

nav.addEventListener("mouseenter", () => {
    console.log("ingreso a nav");
});

nav.addEventListener("mouseout", () => {
    console.log("salida de nav");
});

nav.addEventListener("dblclick", () => {
    console.log("double click");
});

document.addEventListener("keyup", (e)=> {
    console.log(e.code);
});