// Ejemplo 1 Añadir Vidas a un gato
const ejemplo1 = function(){
      let vidas_restantes =3;
      let numero= window.prompt("incremento de vidas"); 
      let resul = parseInt(numero)+vidas_restantes;
      alert("Vides restantes: "+resul);
      console.log("Vides restantes: "+resul);
}

//ejemplo1();

console.log("*** Ejemplo 2 ***");
var hola = "Hola Mundo";
let hello = "Hello World";

console.log(hola,hello);
hola = 2;
console.log(window.hola,window.hello);

function testVar(){
      console.log(hola);
      hola = 30;
      console.log(hola);
      if(hola){
            hola=80;
            console.log(hola);
      }
            
}

testVar();
console.log(hola);

function testLet(){
      /* console.log(hello); */
      let hello = 30;
      console.log(hello);
      if(hello){
            hello=80;
            console.log(hello);
      }
}

testLet();
console.log(hello);
console.log("*** Fin de Ejemplo 2 ***"); 

console.log("*** Ejemplo 3 ***");

function salir(){
      location.replace("https://w3schools.com");
}

/* let variable1 =10; let variable2=5;
variable2 = parseInt(window.prompt("indica un numero")); 
let resul = variable1 + variable2; */

resul = window.prompt("indica un numero");
if( resul > 20 ){
      console.log("Resultado mayor que 20");
} 
else if(resul < 20){
      console.log("Resultado menor que 20");
}
else if(resul === 20){
      console.log("Resultado es igual que 20");
}
else {
      console.log("No puedo averiguarlo"); 
}

let recarga = confirm("Quieres volver a cargar el documento?");
if(recarga)
      location.reload();
else
      salir();


console.log("*** Fin de Ejemplo 3 ***"); 
