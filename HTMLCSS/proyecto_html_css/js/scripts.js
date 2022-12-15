// Gestión del Video de Fondo
const abrirVideoFondo = function(){
      window.open("bgvideo.html", "new", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=800,height=800");
}
const btn_abrirVideoFondo = document.getElementById("btn_abrirVideoFondo");
btn_abrirVideoFondo.onclick = abrirVideoFondo;

// Gestión del Vídeo por Javascript

// Localizar los botones de la Reprodución de Video
const myVideo = document.getElementById("video");
const btn_reproduce = document.getElementById("btn_reproduce");
const btn_pause = document.getElementById("btn_pause");
const btn_playPause = document.getElementById("btn_playPause");

// Funciones para activar o desactivar botones
const activarBoton = function (boton){
      boton.disabled = false;
      boton.classList.remove("btn_disabled");
}
const desactivarBoton = function (boton){
      boton.disabled = true;
      boton.classList.add("btn_disabled");
}

// Función para Pausar y Play
const playPause = function(){
      if(myVideo.paused){
            myVideo.play();
            desactivarBoton(btn_reproduce);
            activarBoton(btn_pause);
      } 
      else{
            myVideo.pause();
            activarBoton(btn_reproduce);
            desactivarBoton(btn_pause);
      } 
}
// Función del Botón Play
const reproduce = function(){
      myVideo.play();
      activarBoton(btn_pause);
      desactivarBoton(btn_reproduce);
}

// Función del Botón Pausa
const pausa = function(){
      myVideo.pause();
      activarBoton(btn_reproduce);
      desactivarBoton(btn_pause);
}

// Añadir los eventos a los botones
btn_playPause.onclick = playPause;
btn_reproduce.onclick = reproduce;
btn_pause.onclick = pausa;



