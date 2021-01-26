//Eventos sobre los inputs
var texto ='';

const busqueda = document.querySelector(".busqueda");

//paste, blur, keyup, keydown, paste, cut, input
busqueda.addEventListener("keydown",() =>{
    //console.log("Escribiendo");
});


busqueda.addEventListener("input", (e) => {
    
    console.log(e.target.value);
});