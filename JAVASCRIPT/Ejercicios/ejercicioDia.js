const ejer5 = document.getElementById("ejer5");
const mostra_ejer5 = document.getElementById("mostra_ejer5");

ejer5.onclick = () => {
      let dia = prompt("Introduce el nombre del día de la semana").toUpperCase();
      let resposta = "";

      switch (dia){
            case "LUNES":
                  resposta = `Has introducido ${dia} y pertenece al primer día de la semana`;
                  break;
            case "MARTES":
                  resposta = `Has introducido ${dia} y pertenece al segundo día de la semana`;
                  break;
            case "MIERCOLES":
                  resposta = `Has introducido ${dia} y pertenece al tercer día de la semana`;
                  break;
            case "MIÉRCOLES":
                  resposta = `Has introducido ${dia} y pertenece al tercer día de la semana`;
                  break;
            case "JUEVES":
                  resposta = `Has introducido ${dia} y pertenece al cuarto día de la semana`;
                  break;
            case "VIERNES":
                  resposta = `Has introducido ${dia} y pertenece al quinto día de la semana`;
                  break;
            case "SABADO":
                  resposta = `Has introducido ${dia} y pertenece al sexto día de la semana`;
                  break;
            case "SÁBADO":
                  resposta = `Has introducido ${dia} y pertenece al sexto día de la semana`;
                  break;
            case "DOMINGO":
                  resposta = `Has introducido ${dia} y pertenece al séptimo día de la semana`;
                  break;
            default:
                  resposta = `No has introducido bien el nombre del día de la semana`;            
      }

      alert(resposta);
      mostra_ejer5.innerHTML = `<p> ${resposta} </p>`;
};