//mayor o igual y else if

const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;

if(dinero >= totalAPagar){
    console.log("si podemos pagar");
}else if(tarjeta){
    console.log("SI puede pagar porque tiene tarjeta");

} else{
    console.log("fondos insuficientes");
}