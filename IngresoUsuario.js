/*import { Usuario } from "./Usuario.js";
import { HistorialJuego } from "./HistorialJuego.js";


export const IngresoUsuario = { 

    IngresoUsuario :function(){
debugger;
    if(document.getElementById("inputUsuario").value == "")
    {
        alert("Ingrese su nombre");
    }
    else
    {
       //divInformacion.classList.remove("none");
        Pregunta.classList.remove("none");
        opcionesRespuesta.classList.remove("none")
        botones.classList.remove("none");

        Usuario.setNombre(document.getElementById("inputUsuario").value);
        inputUsuario.disabled = true;
        buttonUsuario.disabled = true;

        HistorialJuego.nivel=0;
        HistorialJuego.puntosAcumulados=0;
        HistorialJuego.numPreguntasCorrectas=0;

        numPreguntasCorrectas.textContent = "Número de preguntas correctas: "+HistorialJuego.numPreguntasCorrectas;
        puntosAcumulados.textContent = "Puntos acumulados: 0";
        nivel.textContent = "nivel 1";

        cargarPregunta();


    }
}
}*/
