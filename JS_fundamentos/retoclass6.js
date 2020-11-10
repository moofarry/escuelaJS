
var jhon = {
  nombre: 'Jhon',
  apellido: 'Moofarry',
  edad: 24
}

const imprimirNombreyEdad = ( {nombre,edad}) => {
  console.log(`Hola! Soy ${nombre} y tengo ${edad} años`);
}

imprimirNombreyEdad(jhon)