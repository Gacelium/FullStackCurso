const ejer1 = document.getElementById("ejer1");
const ejer2 = document.getElementById("ejer2");

const devolverNotaaTexto = (nota) =>{
      if(isNaN(nota) == false && nota >= 0 && nota <=10){
                  
            let resposta = "";
            if(nota >= 0 && nota < 5){
                  resposta = "Suspendido";
            }
            else if(nota >=5 && nota <6){
                  resposta = "Aprobado";
            }
            else if(nota >=6 && nota <7){
                  resposta = "Bien";
            }
            else if(nota >=7 && nota <9){
                  resposta = "Notable";
            }
            else{
                  resposta = "Sobresaliente";
            }
            alert(`La nota es: ${nota} y te corresponde un: ${resposta}`);
      }
};

ejer1.onclick = () => {
      let num;
      do{
            num = Number(prompt("Introduce un número entre 0 y 10"));

            devolverNotaaTexto(num);
       
      } while(isNaN(num) == true || num < 0 || num > 10); 
}

ejer2.onclick = () => {
      let num1;
      let num2;
      let media;
      do{
            num1 = Number(prompt("Introduce un número entre 0 y 10"));
           
      } while(isNaN(num1) == true || num1 < 0 || num1 > 10); 
      do{
            num2 = Number(prompt("Introduce un número entre 0 y 10"));
           
      } while(isNaN(num2) == true || num2 < 0 || num2 > 10); 
      media = (num1 + num2) / 2;

      devolverNotaaTexto(media);

}
