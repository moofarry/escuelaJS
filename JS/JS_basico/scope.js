var miNombre = "Jhon";
//scope global
function nombreCompleto() {
    //scope local
    var miApellido = "Moofarry";
    console.log(miNombre + " " + miApellido);
}

nombreCompleto(); // Jhon Moofarry

miApellido(); // is not defined 