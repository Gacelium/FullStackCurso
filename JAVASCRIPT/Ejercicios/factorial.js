let num;
do{
      num = Number(prompt("Introduce un número mayor que cero"));
           
      if(isNaN(num) === false && num > 0){
            // Primero con el For
            console.log("Primero con el For");
            let x = 0;
            let factorial = num;
            for(x = num-1; x >= 1; x--)
            {
                  factorial = factorial * x;
            }
            console.log(`Resultado del Factorial de ${num} con el FOR: ${factorial}`);    
            // Con el WHILE
            console.log("Con el WHILE");
            x = num-1;
            factorial = num;
            while (x >= 1)
            {
                  factorial = factorial * x;
                  x--;
            }
            console.log(`Resultado del Factorial de ${num} con el WHILE: ${factorial}`); 
            // Con el DO WHILE
            console.log("Con el DO WHILE");
            x = num-1;
            factorial = num;
            do{
                  if(factorial != 1){
                        factorial = factorial * x;
                  }
                  x--;
            }
            while(x >= 1);
            console.log(`Resultado del Factorial de ${num} con el DO WHILE: ${factorial}`); 

      }      
} while(isNaN(num) === true || num <= 0); 