const ejer4 = document.getElementById("ejer4");

ejer4.onclick = () => {
      let num1 = Number(prompt("Introduce el primer número"));
      let num2 = Number(prompt("Introduce el segundo número"));
      resposta = "";
      if(num1 > num2){
            resposta = `El ${num1} es mayor que ${num2}`;
      }
      else if(num2 > num1){
            resposta = `El ${num2} es mayor que ${num1}`;
      }
      else if (isNaN(num1) == true || isNaN(num2) == true){
            resposta = "Algunos de los valores introducidos no es un número!!"
      }
      else {
            resposta = "Los dos números son iguales!"
      }
      alert(resposta);
};