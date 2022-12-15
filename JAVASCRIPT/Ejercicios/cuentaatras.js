let num;
do{
      num = Number(prompt("Introduce un número mayor que cero"));

      if(isNaN(num) == false && num > 0){
            // Primero con el For
            console.log("Primero con el For");
            let x = 0;
            for(x = num; x >= 0; x--)
            {
                  console.log(`Iteración con el FOR: ${x}`);
            }     
            // Con el WHILE
            console.log("Con el WHILE");
            x = num;
            while (x >= 0)
            {
                  console.log(`Iteración con el WHILE: ${x}`);
                  x--;
            }
            // Con el DO WHILE
            console.log("Con el DO WHILE");
            x = num;
            do{
                  console.log(`Iteración con el DO WHILE: ${x}`);
                  x--;
            }
            while(x >= 0);

      }      
} while(isNaN(num) == true || num <= 0); 
