var again = 1;
while(again == 1){
var jc1 = Math.floor(Math.random() * (11 - 1) + 1);
var jc2 = Math.floor(Math.random() * (11 - 1) + 1);
var pc1 = Math.floor(Math.random() * (11 - 1) + 1);
var pc2 = Math.floor(Math.random() * (11 - 1) + 1);
var jc = jc1 + jc2;
var pc = pc1 + pc2;
var cc = 1;
alert("BIENVENIDOS A BLACK JACK, vamos a jugar!")
alert("Te ha salido " + jc1 + " y " + jc2 + ", total de: " + jc);




while(cc == 1 ){
  var cnt = prompt("Deseas otra carta? si o no")
  if(cnt == "si" || "no"){
  if(cnt == "si"){
  var rdm = Math.floor(Math.random() * (11 - 1) + 1);
    var jc = jc + rdm
      alert("Te ha salido " + rdm + ", en total de " + jc);
      cc = 1;
		if(jc > 21){
      alert("has perdido! Tu cantidad era " + jc + ", Cantidad de pc era " + pc );
    cc = cc + 1;
			var ag = prompt("deseas jugar otra vez? si o no");
    if(ag == "si"){
    again = 1;
    }
    if(ag == "no"){
    alert("gracias por jugar~");
		again = again + 1;
    }
    }
    
  }
  
  if(cnt == "no"){
    if(jc <= 21 && jc > pc){
      alert("has ganado! Tu cantidad era " + jc + ", Cantidad de pc era " + pc );
    cc = cc + 1;
    var ag = prompt("deseas jugar otra vez? si o no");
    if(ag == "si"){
    again = 1;
    }
    if(ag == "no"){
    alert("gracias por jugar~");
		again = again + 1;
    }
  }
    if(jc > 21 || jc <= pc){
      alert("has perdido! Tu cantidad era " + jc + ", Cantidad de pc era " + pc );
    cc = cc + 1;
    var ag = prompt("deseas jugar otra vez? si o no");
    if(ag == "si"){
    again = 1;
    }
    if(ag == "no"){
    alert("gracias por jugar~");
		again = again + 1;
    }
  }
  
  
  }
  }
  }
  
  }