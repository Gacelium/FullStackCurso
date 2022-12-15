/* alert("PopUp lanzado \"desde\" un javascript externo a mi html"); */

const dameNombre = function(){
      let nombre = window.prompt("Dime tu nombre");
      console.log(nombre);
      const mostra = document.getElementById("mostra");
      mostra.innerHTML="<p>Te llamas <strong>"+nombre+"</strong></p>";
      mostra.innerHTML=`<p>Te llamas <strong>${nombre}</strong></p>`;
}

document.getElementById("nombre").onclick=dameNombre;

