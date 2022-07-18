import {HistorialJuego} from "./HistorialJuego.js";
import {Preguntas} from "./Preguntas.js";
export const Usuario = { 
    /**
     * @description atributo nombre- se almacena el nombre del usuario
     * @type{String}
     */
    nombre:"",   
    /** @returns funcion que permite obtener el nombre del jugador
     */    
    getNombre:function(){
        return this.nombre;
    },    
    /**
     * 
     * @param {String} nombre - funcion que permite actualizar el nombre del jugador
     */  
    setNombre:function(nombre){
        this.nombre = nombre;
    }, 
    /**
     * @description funcion asincronica que permite capturar el nombre del 
     * jugador.
     * @function async 
     */
    IngresoUsuario :function(){        
        if(document.getElementById("inputUsuario").value == ""){
            alert("Ingrese su nombre");
        }
        else{
            divInformacion.classList.remove("none");
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
            Preguntas.cargarPregunta();        
        }
    }   
}