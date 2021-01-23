//Diferencia entre function expression y function declaration

//expresion de funcion, no funciona si primero se llama la funcion y despues se inicializa, en declaracion de funcion si funciona


// Declaracion de funcion (Function declaration)
sumar();
function sumar(){
    console.log(2 + 2);
}




//Expresión de función ( Function Expression)

sumar2();
const sumar2 = function(){
    console.log(3 + 3);
}

