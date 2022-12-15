/* const NOMBRE = "Israel";
const PI = 3.141516;  Esto se utilizaba antes del 2015 */

const nombre = "Israel";
const apellido = "Cortés";
const saludo = `<h3>Bienvenido</h3> <p>${nombre} ${apellido} a nuestra aplicación</p>`;

const mostra = document.getElementById("mostra");
const lista = document.getElementById("lista");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

mostra.innerHTML=saludo;

let estaciones = ``;
const primavera = "Primavera";
const verano = "Verano";
const otono = "Otoño";
const invierno = "Invierno";

const listaEstaciones = () => {
      estaciones += 
      `<ul>
            <li>${primavera}</li>
            <li>${verano}</li>
            <li>${otono}</li>
            <li>${invierno}</li>
      </ul>`;
      lista.innerHTML = estaciones; 
};
abrir.onclick = listaEstaciones;

cerrar.onclick = () => {
      lista.innerHTML = "";
};






