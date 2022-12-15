let num_1 = Number(prompt("Introduce un número entre el 10 y el 30"));
let result;
switch( num_1 ){ //valor a comparar 
      case 10:
            result = num_1+" vale 10";
            break; 
      case 20:
            result = num_1+" vale 20";
            break; 
      case 30:
            result = num_1+" vale 30";
            break; 
      default:
            result = num_1+" no vale 10,20 ni 30";
}
console.log(result);
let resultado = document.getElementById("resultado");
console.log(resultado);
resultado.innerHTML="<p>"+result+"</p>";
