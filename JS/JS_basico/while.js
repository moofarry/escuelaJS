var estudiantes =[ "Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);

}

while (estudiantes.length>0) {
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
    
}