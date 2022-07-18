/**
 * se importa el @historialJuego para poder acceder a los atributos de esta clase y al @arrayjueego necesario para
 * la persistencia de los datos y el mensaje final para el usuario al momento de terminar su juego
 */
import { HistorialJuego } from "./HistorialJuego.js";
/**
 * se importa la funcion usuario para poder acceder al nombre del jugador.
*/
import { Usuario } from "./Usuario.js";
/**
 * este metodo representa las tres maneras en las cuales el usuario puede terminar el juego si se retira voluntariamente, si perdio
 * o gano el juego.
 */
export const FormaSalidaJuego = {     
    /**
     * @description  Esta funcion se activa por medio de un evento de click  @btn__retirarse  
     * y su objetivo es guardar en el arrayJuego el nombre del jugador, nivel 
     * de pregunta y los puntos acumulados y posteriormente guardarlos en el 
     * local Storage; y de esta manera tener una persistencia de los datos
     * 
     * @param {*Array} arrayJuego  array donde se almacenan losdatos del jugador durante ronda de preguntas
     * @opcionesRespuesta - div- en la funcion retirarsejuego se esconde el este div
     * @preguntas - div en esta funcion se esconden las preguntas y se carga un nuevo mensaje "fin Juego" 
    */
    RetirarseJuego:function(arrayJuego){
        opcionesRespuesta.textContent = "";
        botones.classList.add("none");
        Pregunta.textContent="Fin del juego";
        let item = {
            nombre: Usuario.nombre,
            nivelPregunta:HistorialJuego.nivel,
            idPregunta:HistorialJuego.preguntaActual,
            respuesta:"No aplica",
            estadoRespuesta:"No aplica", //correcta o incorrecta o N/A
            puntosAcumulados:HistorialJuego.puntosAcumulados,            
            formaSalida:"Retiro"
        }
        HistorialJuego.actualizaHistorialSalidaJuego(item,arrayJuego);   
    },
    /**
     * @description esta funcion es llamada cuando el jugador contesta de manera incorrecta una pregunta, cuando pierde se guarda en 
     * el arrayJuego y posteriormente lo guarda en el localStorage; cuando pierde el jugador se borran los puntos que tenia acumulados 
     * 
     * @param {Array} arrayJuego  array donde se almacenan los item necesarios para la persistencia de los datos del jugador
     * @param {let} item se almacenan los datos del juego asociados al jugador
     */
    PerdioJuego:function(arrayJuego){
        botones.classList.add("none");
        HistorialJuego.puntosAcumulados = 0;
        puntosAcumulados.textContent = "Puntos acumulados: "+HistorialJuego.puntosAcumulados;        
        opcionesRespuesta.textContent = "";
        Pregunta.textContent="Perdio Fin del juego";
        /**
         * @typedef {object} item
         * @property {String} nombre  nombre del jugador
         * @property {String} nivelPregunta nivelpregunta; clasificacion de las preguntas
         * @property {number} idPregunta es un identificador unico para cada pregunta.
         * @property {String } respuesta permite guardar la respuesta ingresada por el usuario
         * @property {String} estadoRespuesta determina cuando la respuesta es correcta o no
         * @property {number} puntosAcumulados almacena los puntos del jugador durante todo el juego
         * @property {String} formaSalida indica la forma en la cual termina el juego.
         */    
        /**
        * @type {item}
        */
        let item = {
            nombre: Usuario.nombre,
            nivelPregunta:HistorialJuego.nivel,
            idPregunta:HistorialJuego.preguntaActual,
            respuesta:HistorialJuego.respuestaActual,
            estadoRespuesta:"Incorrecta", 
            puntosAcumulados:HistorialJuego.puntosAcumulados,            
            formaSalida:"Perdio"
        }        
        HistorialJuego.actualizaHistorialSalidaJuego(item,arrayJuego);   
        alert("perdio");        
    },
    /**
     * @description esta funcion se activa cuando el jugador responde correctamente todas las preguntas y muestra el mensaje 
     * de que gano con sus respectivos puntos
     * @param {*array} arrayJuego este metodo permite finalizar el juego, cuando el usuario a respondido correctamente 
     * las preguntas de los 5 niveles; el metodo permite mostrar el mensaje al usuario de que gano, asi como guardar en el
     * arrayjuego los datos relacionados al juego en el local Storage
     */
    GanoJuego:function(arrayJuego){
        botones.classList.add("none");
        opcionesRespuesta.textContent = "";
        Pregunta.textContent="";
        Pregunta.textContent="Fin del juego, ganaste";
        let item = {
            nombre: Usuario.nombre,
            nivelPregunta:HistorialJuego.nivel,
            idPregunta:HistorialJuego.preguntaActual,
            respuesta:HistorialJuego.respuestaActual,
            estadoRespuesta:"Correcta",
            puntosAcumulados:HistorialJuego.puntosAcumulados,            
            formaSalida:"Gano"
        }               
        HistorialJuego.actualizaHistorialSalidaJuego(item,arrayJuego);
        alert("ganaste"); 
    }
}