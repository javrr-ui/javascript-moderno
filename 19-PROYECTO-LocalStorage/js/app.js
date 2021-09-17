const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

eventListeners();

function eventListeners() {
    formulario.addEventListener("submit", agregarTweet);
}




function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.querySelector("#tweet").value;

    if (tweet === "") {
        mostrarError("Textfield cannot be empty!");
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //Agrega tweets
    tweets.push(tweetObj)

    console.log(tweets);
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();

}


function mostrarError(error) {
    const mensajeError = document.createElement("p");
    mensajeError.textContent = error;
    mensajeError.classList.add("error");

    const contenido = document.querySelector("#contenido");
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000)
}


//Muestra un listado de los tweets
function crearHTML() {
    limpiarHTML();

    if (tweets.length) {
        tweets.forEach(tweet => {
            const li = document.createElement("li");
            li.textContent = tweet.tweet;


            listaTweets.appendChild(li);

        })
    }
}

function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}