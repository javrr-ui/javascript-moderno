//Remover item

// localStorage.removeItem("meses");

//Actualizar un registro

const mesesArray = JSON.parse(localStorage.getItem("meses"))
mesesArray.push("abril");
console.log(mesesArray);
localStorage.setItem("meses", JSON.stringify(mesesArray));


//Elimina todos los registros en localStorage

// localStorage.clear();
