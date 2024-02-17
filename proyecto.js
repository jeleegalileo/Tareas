var precio_base = 2000
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%
var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%
var hijos_recargo = 0.2 // 20%
var recargo = 0
var recargo_total = 0
var precio_final = 0
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
//1.Preguntar la edad para poder identificar si es mayor de edad o no asi saber si puede continuar.//
if(edad < 18){
//1a.alertar de que no es mayor de edad y no poder seguir//  
  alert("No eres mayor de edad no puedes continuar")
}else{
//1b.Seguir con la cotizacion//  
  //2.preguntar si esta casado para ver si sumamos el recargo de conyuge tambien//
  var casado = prompt("¿Está casado actualmente?", "si/no")
  var edad_conyuge
  //2a.por si esta casado, preguntar edad para calcular el porcentaje//
  if("SI" == casado.toUpperCase()){
   
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "Ingrese solamente números")

  }else{
  edad_conyuge = 0
  //2b.si no esta casado agregar el valor de edad conyuge para evitar errores de resultado NaN//
  }

var edad_numero = parseInt(edad)

var edad_conyuge_numero = 0

edad_conyuge_numero = parseInt(edad_conyuge)
//3.preguntar por si tiene hijos para agregar en la cotizacion//
var hijos = prompt("¿Tiene hijos o hijas?")

var cantidad_hijos

var cantidad_hijos_numero = parseInt(cantidad_hijos)
  //3a.preguntar por si tiene hijos para agregar en la cotizacion//
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("cuantos hijos tienes?", "Ingrese solamente números")
}else{
  //3b.si no esta casado agregar el valor de cantidad hijos para evitar errores de resultado NaN//
  cantidad_hijos = 0
}

//4.calcular recargos acorde edad para la cotizacion//
if(edad >= 18 && edad < 25 ){
  recargo = precio_base * edad_18
  
  recargo_total = recargo_total + recargo
}
if(edad >= 25 && edad < 50 ){
  recargo = precio_base * edad_25
  
  recargo_total = recargo_total + recargo
}
if(edad >= 50){
  recargo = precio_base * edad_50
  
  recargo_total = recargo_total + recargo
}

if(edad_conyuge >= 18 && edad_conyuge < 25 ){
  recargo = precio_base * casado_18
  
  recargo_total = recargo_total + recargo
}
if(edad_conyuge >= 25 && edad_conyuge < 50 ){
  recargo = precio_base * casado_25
  
  recargo_total = recargo_total + recargo
}
if(edad_conyuge >= 50){
  recargo = precio_base * casado_50
  
  recargo_total = recargo_total + recargo
}
//6.calcular recargos acorde cantidad de hijos para la cotizacion//
recargo = precio_base * (cantidad_hijos * hijos_recargo)
recargo_total = recargo_total + recargo


//7.mostrar resultado//
precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+ recargo_total)
alert ("El precio sera de: "+ precio_final)

}