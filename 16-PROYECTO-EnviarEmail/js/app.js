//Variables

const btnEnviar = document.querySelector("#enviar");
const btnResetear = document.querySelector("#resetBtn");
const formulario = document.querySelector("#enviar-mail");

const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners()
//eventListeners
function eventListeners(){
    //cuando la app arranca
    document.addEventListener("DOMContentLoaded", iniciarApp );
    btnEnviar.addEventListener("click", enviarEmail);
    btnResetear.addEventListener("click", reseteaFormulario);

    email.addEventListener("blur", validarFormulario);
    asunto.addEventListener("blur", validarFormulario);
    mensaje.addEventListener("blur", validarFormulario);

    //btnEnviar
   // formulario.addEventListener("submit", enviarEmail);
}



//funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed","opacity-50");
}


//valida el formulario
function validarFormulario(e){
    
    if(e.target.value.length > 0){
        
        
        //elimina los errores
        const error = document.querySelector("p.error");
        if(error){
            error.remove();
        }
                
        e.target.classList.remove("border","border-red-500");
        e.target.classList.add("border","border-green-500");
        
        
    }else{
        e.target.classList.remove("border","border-green-500");
        e.target.classList.add("border","border-red-500");
        //console.log("no hay algo");
        mostrarError("Todos los campos son obligatorios");
    }
    //console.log(e.target.type);
    if(e.target.type === "email"){
        
        const resultado = e.target.value.indexOf("@");

        if(er.test(e.target.value)){
            const error = document.querySelector("p.error");
            if(error){
                error.remove();
            }

            e.target.classList.add("border","border-green-500");
            console.log("email valido");
        }else{
            e.target.classList.remove("border","border-green-500");
            e.target.classList.add("border","border-red-500");
            console.log("email no valido")
            mostrarError("Email no válido");
        }
    }
    if(er.test(email.value) && asunto.value !=='' && mensaje.value !==''){
        console.log("pasaste la validacion");
        btnEnviar.disabled = false;
        btnEnviar.classList.remove("cursor-not-allowed","opacity-50");
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement("p");
    mensajeError.textContent =mensaje;
    mensajeError.classList.add("border","border-red-500","background-red-100","text-red-500","p-3","mt-5","text-center", "error");
    
    const errores = document.querySelectorAll(".error");
    if(errores.length ===0){
        formulario.appendChild(mensajeError);
    }
}

//envia el email
function enviarEmail(e){
    e.preventDefault();
    console.log("enviando...");


    const spinner = document.querySelector("#spinner");
    spinner.style.display = "flex";

    setTimeout(() => {
        spinner.style.display = "none";

        const parrafo = document.createElement("p");
        parrafo.textContent = "El email se envió correctamente";
        parrafo.classList.add("text-center","my-10","p-2")

        //inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();
            reseteaFormulario();
        }, 2500);

    }, 1700);
}

function reseteaFormulario(){
    formulario.reset();
    iniciarApp();
}