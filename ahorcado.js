

//Diccionario inicial
var dicc = ["onomastica","mundo","plebeyo","milagro"];
//elegimos palabra
var word = dicc[Math.floor((Math.random() * (dicc.length-1)) + 1)];
//contador de intentos
var nGuess = 0;

var newWord = "";
var newWord1 = "";

//la palabra inicial es de huecos
for(i=0;i< word.length;i++){
  newWord += "-";
}
console.log(newWord);

//función probar con una letra o palabra

 function guess(x)  {
  nGuess++;

  //si se prueba con una palabra, ver si es la correcta
  if(x.length>1 && x == word ){
     console.log("you win");
     nGuess = 0;
   }else{
//la cantidad máxima de intentos es 20
     if(nGuess>20){
     console.log("you loose");
     nGuess = 0;
    }else{
//llamar a la función que genera la nueva palabra con huecos
      newW(x);
      console.log(newWord);
      if(word === newWord){
       console.log("you win");
       nGuess = 0;
     }
   }
 }
};

// reemplaza guiones por la letra dada si está en la palabra, y si no, deja guiones
 function newW(y){
   newWord1 = "";
   for(i=0; i< word.length; i++){
     if(word.charAt(i) == y){
       newWord1 += y;
     }else{
       newWord1 += newWord.charAt(i);
     }
   }
   newWord = newWord1;
 };
