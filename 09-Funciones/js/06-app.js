//Parametros por default

// en caso de no recibir argumentos, se toma el valor asignado
function saludar(nombre = 'Desconocido', apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar();
saludar("Papu");
saludar("Papu", "Lince");