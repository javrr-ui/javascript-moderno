//Variables

const btnEnviar = document.querySelector("#enviar");

eventListeners()
//eventListeners
function eventListeners(){
    document.addEventListener("DOMContentLoaded", iniciarApp );
    btnEnviar.addEventListener("click", () => {});
}



//funciones
function iniciarApp(){
   // btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed opacity-50");


}