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
        console.log("There cannot be empty strings!")
        return;
    }

    console.log(tweet);

}