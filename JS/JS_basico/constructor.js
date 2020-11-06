
var numAutos = prompt( `Cuantos autos va guardar?`); //número de autos a guardar
var autos = []; //Lugar donde guardaremos los autos

//Constructor de autos
function auto(marca,modelo,annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//funcion para mostrar un auto
function mostrarAutos(autos) {
    for(let i = 0 ; i < numAutos ; i++){
        console.log( `El auto ${i+1} es de Marca ${autos[i].marca}, su modelo es ${autos[i].modelo} y su año es ${autos[i].annio}`);
    }
    
}

//Pediremos los datos de cada auto y guardamos en autos[]
for (let j = 0; j < numAutos; j++) {
    var marca =  prompt( `Ingrese la Marca del auto ${j+1}`); 
    var modelo = prompt( `Ingrese el Modelo del auto ${j+1}`);
    var annio  = prompt( `Ingrese el Año del auto ${j+1}`);
    autos.push( new auto(marca, modelo,annio)); //Guardamos cada auto en autos
}

//Mostraremos cada auto con la función creada
mostrarAutos(autos)
