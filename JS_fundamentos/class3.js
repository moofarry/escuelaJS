var edad = 27

// edad = edad + 1
edad += 1

var peso = 75

// peso = peso - 2
peso -= 2

var sandwich = 1

peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100
var totalStr = total.toFixed(3)
console.log(totalStr)
console.log(typeof(totalStr))

var total2 = parseFloat(totalStr)
console.log(total2)
typeof(total2)
console.log(typeof(total2))

var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas