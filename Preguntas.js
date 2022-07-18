import {dataj} from "./DataDBOpreguntasRespuestas/data.js";
import {HistorialJuego} from "./HistorialJuego.js";
import {OpcionesRespuestas} from "./OpcionesRespuestas.js";
import {FormaSalidaJuego} from "./FormasSalidaDeJuego.js";
export const Preguntas = {
    /**
     * @description funcion que permite generar una pregunta aleatoria proveniente de la data.js
    */
    cargarPregunta : function (){
        /**
         * @type {number}
         * @description permite tener un numero maximo necesario para generar el numero random
        */
        const max = 4;
        /**
         * @type {number}
         * @description numero que necesario para saber el numero minimo generado aleatoriamente
        */
        const min = 0;
        /**
         * @description numero generado aleatoriamente usando la clase math.random
        */
        const numeroAleatorioPregunta = Math.floor(Math.random() * (max - min + 1) + min);
        /**
         * @description se obtiene el nivel al cual corresponda la pregunta
        */
        const nivelPregunta = HistorialJuego.nivel;    
        Pregunta.textContent="";
        Pregunta.append(dataj.niveles[nivelPregunta][numeroAleatorioPregunta].question);        
        HistorialJuego.preguntaActual = dataj.niveles[nivelPregunta][numeroAleatorioPregunta].id;    
        OpcionesRespuestas.cargarOpcionesRespuesta(nivelPregunta,numeroAleatorioPregunta);
    },
    /**
     * @description funcion que permite pasar a la siguiente pregunta, solo si la pregunta marcada en el
     * checked es correcta, ademas se actualiza el arrayJuego con los puntos obtenidos.
     * @function {async}
    */
    SiguientePregunta : function(arrayJuego) {
        let RespuestaSeleccionada = false;
        let statusCorrecta = false;
        if(document.getElementById("a").checked){        
            statusCorrecta = document.getElementById("a").value;
            RespuestaSeleccionada = true;
            HistorialJuego.respuestaActual = "a";
        }
        if(document.getElementById("b").checked){
            statusCorrecta = document.getElementById("b").value;
            RespuestaSeleccionada = true;
            HistorialJuego.respuestaActual = "b";
        }
        if(document.getElementById("c").checked){
            statusCorrecta = document.getElementById("c").value;
            RespuestaSeleccionada = true;
            HistorialJuego.respuestaActual = "c";
        }
        if(document.getElementById("d").checked){
            statusCorrecta = document.getElementById("d").value;
            RespuestaSeleccionada = true;
            HistorialJuego.respuestaActual = "d";
        }
        if(!RespuestaSeleccionada){
            alert("Seleccione una opción");       
        }
        else if(statusCorrecta == "true"){        
            alert("Respondio correctamente");
            HistorialJuego.numPreguntasCorrectas = HistorialJuego.numPreguntasCorrectas+ 1;
            numPreguntasCorrectas.textContent = "Número de preguntas correctas: "+HistorialJuego.numPreguntasCorrectas;        
            HistorialJuego.puntosAcumulados += (HistorialJuego.puntosBase*(HistorialJuego.nivel+1));
            puntosAcumulados.textContent = "Puntos acumulados: "+HistorialJuego.puntosAcumulados;        
            let estadoGano = "";
            if(HistorialJuego.numPreguntasCorrectas == 5 && HistorialJuego.nivel == 4 ){
                FormaSalidaJuego.GanoJuego(arrayJuego);
                estadoGano = "Ganó";        
            }      
            if(estadoGano != "Ganó"){
                HistorialJuego.nivel++;
                nivel.textContent = "nivel "+(HistorialJuego.nivel+1);   
                HistorialJuego.actualizaHistorial(arrayJuego);                     
                Preguntas.cargarPregunta();
            }
           
        }
        else{
            FormaSalidaJuego.PerdioJuego(arrayJuego);
        }
    }        
}