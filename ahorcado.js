$(document).ready(function() {
    $('#palabraEnProceso').text(palabraEnProceso);
    $('#resultado').text('Tienes '+numerodeIntentos+' intentos');
    $("#enviarIntento").on('click', function(){pintarResultados($('#LetraoPalabra').val())});
});

var diccionario = ["onomastica","mundo","plebeyo","milagro"];
var palabraElegida = diccionario[Math.floor((Math.random() * (diccionario.length-1)) + 1)];
var numerodeIntentos = 10;
var palabraEnProceso = "";
var palabraEnProcesoBuffer = "";
var hasGanado = false;
var hasPerdido = false;

for(i=0; i< palabraElegida.length; i++){
    palabraEnProceso += "-";
}

function checkearLetraoPalabra(letraoPalabra)  {
    numerodeIntentos--;
    if(numerodeIntentos<1){
          hasPerdido = true;
          numerodeIntentos = 10;
  }

  if(letraoPalabra.length>1 && letraoPalabra == palabraElegida ){
        palabraEnProceso = palabraElegida;
        hasGanado = true;
        numerodeIntentos = 10;
  }else{nuevaPalabra(letraoPalabra);}

}

function nuevaPalabra(letra){
       palabraEnProcesoBuffer = "";
       for(i=0; i< palabraElegida.length; i++){

         if(palabraElegida.charAt(i) == letra){
             palabraEnProcesoBuffer += letra;
         }else{palabraEnProcesoBuffer += palabraEnProceso.charAt(i);}
       }

       palabraEnProceso = palabraEnProcesoBuffer;
       if(palabraElegida === palabraEnProceso){
         hasGanado = true;
         numerodeIntentos = 10;
       };
 };

function pintarResultados(y){
    checkearLetraoPalabra(y);
    $('#resultado').text('Te quedan '+numerodeIntentos+' intentos');
    if(hasGanado){
        $('#resultado').text("Has ganado");
        $('#palabraEnProceso').text(palabraEnProceso);
    }

    if(hasPerdido){
        $('#resultado').text("Has perdido");
    }else{
        $('#palabraEnProceso').text(palabraEnProceso);
     }

}
