//declarativas
function miFuncion1() {
    return 3;
}
miFuncion1();

//expresion
var miFuncion2 = function(a,b) {
    return a+b;
}
miFuncion2(1,1)

function saludarEstudiante(estudiante) {
    console.log(estudiante)
}


function saludarEstudiantes(estudiante) { 
    console.log(`hola ${estudiante}`); 
}

//regresa resultados de funcion
function sumar( a, b){ 
    var resultado= a+b;
    return resultado;
}