//break y continue en un for loop


for(let i=0;i<10;i++){
    if(i===5){
        console.log(`este es el numero ${i}`);
        break;
    }
    console.log(`Numero ${i}`);
}

/*

La instrucción continue finaliza la ejecución de las instrucciones 
en la iteración actual del bucle actual o etiquetado, y continúa 
la ejecución del bucle con la siguiente iteración
*/
console.log("============================");
for(let i=0;i<10;i++){
    if(i===5){
        console.log(`este es el numero ${i}`);
        continue;
    }
    console.log(`Numero ${i}`);
}