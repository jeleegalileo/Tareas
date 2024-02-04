let mes = prompt("mes de nacimiento")
  
if(mes <= 12){
  let dia = prompt("dia de nacimiento");
  if(dia <= 31){
  /*ENERO*/
if(mes == 1){
  if(dia >= 21){
    console.log("ERES ACUARIO");
  }else{
    console.log("ERES CAPRICORNIO");
  }
}
    /*FEBRERO*/
if(mes == 2){
  if(dia >= 20){
    console.log("ERES PISCIS");
  }else{
    console.log("ERES ACUARIO");
  }
}
    /*MARZO*/
if(mes == 3){
  if(dia >= 21){
    console.log("ERES ARIES");
  }else{
    console.log("ERES PISCIS");
  }
}
    /*ABRIL*/
if(mes == 4){
  if(dia >= 21){
    console.log("ERES TAURO");
  }else{
    console.log("ERES ARIES");
  }
}
    /*MAYO*/
if(mes == 5){
  if(dia >= 21){
    console.log("ERES GEMINIS");
  }else{
    console.log("ERES TAURO");
  }
}
    /*JUNIO*/
if(mes == 6){
  if(dia >= 21){
    console.log("ERES CANCER");
  }else{
    console.log("ERES GEMINIS");
  }
}
    /*JULIO*/
if(mes == 7){
  if(dia >= 23){
    console.log("ERES LEO");
  }else{
    console.log("ERES CANCER");
  }
}
    /*AGOSTO*/
if(mes == 8){
  if(dia >= 24){
    console.log("ERES VIRGO");
  }else{
    console.log("ERES LEO");
  }
}
    /*SEPTIEMBRE*/
if(mes == 9){
  if(dia >= 23){
    console.log("ERES LIBRA");
  }else{
    console.log("ERES VIRGO");
  }
}
    /*OCTUBRE*/
if(mes == 10){
  if(dia >= 24){
    console.log("ERES ESCORPIO");
  }else{
    console.log("ERES LIBRA");
  }
}
    /*NOVIEMBRE*/
if(mes == 11){
  if(dia >= 23){
    console.log("ERES SAGITARIO");
  }else{
    console.log("ERES ESCORPIO");
  }
}
    /*DICIEMBRE*/
if(mes == 12){
  if(dia >= 22){
    console.log("ERES CAPRICORNIO");
  }else{
    console.log("ERES SAGITARIO");
  }
}
    
    
    
  }else{console.log("ingrese dia correcto");
       }
}else{console.log("ingrese mes correcto")};