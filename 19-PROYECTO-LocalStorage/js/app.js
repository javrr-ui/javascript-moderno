const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

eventListeners();

function eventListeners(){ 
    formulario.addEventListener("submit", agregarTweet);
}




function agregarTweet(e){
    e.preventDefault();
    const tweet = document.querySelector("#tweet").value;
    
    if(tweet ===""){
        mostrarError("Textfield cannot be empty!");
        return;
    }

    console.log(tweet);

}


function mostrarError(error) {
    const mensajeError = document.createElement("p");
    mensajeError.textContent = error;
    mensajeError.classList.add("error");

    const contenido = document.querySelector("#contenido");
    contenido.appendChild(mensajeError);

    setTimeout(()=>{
        mensajeError.remove();
    },3000)
}