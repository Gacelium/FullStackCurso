const ejer6 = document.getElementById("ejer6");

ejer6.onclick = () => {
      let salir = false;
      let errores = 0;
      let resposta = ``;
     
      do{
            let num = Number(prompt("Introduce un número"));
            if(isNaN(num) == true){
                  resposta = "No has introducido un número!";
                  errores++;
            }
            else if(num < 50){
                  resposta = "Has introducido un número inferior a 50";
                  errores++;
            }
            else{
                  salir = true;
                  resposta = `Has introducido ${errores} veces un número inferior a 50`;
            }
            alert(resposta);
                  
      } while(salir == false);    
};