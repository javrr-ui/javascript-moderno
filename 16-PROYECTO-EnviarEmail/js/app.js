//Variables

const btnEnviar = document.querySelector("#enviar");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

eventListeners()
//eventListeners
function eventListeners(){
    //cuando la app arranca
    document.addEventListener("DOMContentLoaded", iniciarApp );
    btnEnviar.addEventListener("click", () => {});

    email.addEventListener("blur", validarFormulario);
    asunto.addEventListener("blur", validarFormulario);
    mensaje.addEventListener("blur", validarFormulario);
}



//funciones
function iniciarApp(){
   // btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed","opacity-50");
}


//valida el formulario
function validarFormulario(e){
    
    if(e.target.value.length > 0){
        //console.log("si hay algo");
        e.target.style.borderBottomColor = "";
        e.target.classList.remove("border","border-red-500");
        console.log("no hay algo");
    }else{
        //e.target.style.borderBottomColor = "red";
        e.target.classList.add("border","border-red-500");
        console.log("no hay algo");
    }
   
}