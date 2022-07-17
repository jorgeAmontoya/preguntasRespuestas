/**
 * se importa la funcion @usuario para poder acceder al atributo de nombre.
 */
//import { json } from "express/lib/response.js";
import { Usuario } from "./Usuario.js";
/**
 * @description  se crean los atributos necesarios, con sus respectivos geters y seters con el fin de crear una funcion 
 * donde se almacenara por medio de un array los atributos necesarios para el historial del jugador.
 */
export const HistorialJuego = { 
    /**atributo nivel- numero que determina el nivel en el cual se encuentra el jugador 
     * @type{String}
    */
    nivel:0,
    /**
     * atributo puntosAcumulados- numero que permite registrar los puntos acumulados en cada pregunta.
     */
    puntosAcumulados:0,
    /** atributo puntosBase - determina los puntos base, los cuales se tomaran como referencia para cada nivel
     * @type{number}
     */
    puntosBase:100000,
    /**atributo numPreguntasCorrectas - registra el numero de preguntas correctas que ha obtenido el jugador por nivel
     * @type{number}
     */
    numPreguntasCorrectas:0,
    /**atributo preguntaActual- permite registrar la pregunta en la cual se encuentra el usuario
     * @type{number}
     */
    preguntaActual:0,
    /**atributo respuestaActual- permite registrar la respuesta que ha marcado el usuario
     * @type{String}
     */
    respuestaActual:"",
    
    /**
     *  @returns permite obtener el nivel registrado
     */
    getNivel:function(){
        return this.nivel;
    },
    /**@returns permite obtener los puntos acumulados registrados
     */
    getPuntosAcumulados:function(){
        return this.puntosAcumulados;
    },
    /**
     * @returns permite obtener el numero de preguntas correctas del jugador
     */
    getNumPreguntasCorrectas:function(){
        return this.numPreguntasCorrectas;
    },
    /**
     *  @param {int} nivel setNivel  permite actualizar el nivel en el cual se encuentra el jugador
     */
    setNivel:function(nivel){
        this.nivel = nivel;
    },
    /**
     * @param {int} puntosAcumulados permite actualizar los puntos acumulados que ha obtenido el jugador
     */
    setPuntosAcumulados:function(puntosAcumulados){
        this.puntosAcumulados = puntosAcumulados;
    },
    /**
     *  @param {int} numPreguntasCorrectas permite actualizar la cantidad de preguntas correctas 
     */
    setNumPreguntasCorrectas:function(numPreguntasCorrectas){
        this.numPreguntasCorrectas = numPreguntasCorrectas;
    },    
    /**
     * 
     * @param {array} arrayJuego en la funcion se ingresan los atributos necesarios para tener un historial
     * de juego en un array y posteriormente este arreglo se guarda en el localStore.
     */
    actualizaHistorial:function(arrayJuego)
    {
        let item = {
            nombre: Usuario.nombre,
            nivelPregunta:this.nivel+1,
            idPregunta:this.preguntaActual,
            respuesta:this.respuestaActual,
            estadoRespuesta:"correcta", 
            puntosAcumulados:this.puntosAcumulados,            
            formaSalida:"N/A"
        }
        arrayJuego.push(item);
        localStorage.setItem("HistorialJuego",JSON.stringify(arrayJuego));  
        debugger;

        let jjj =JSON.parse( localStorage.getItem( "HistorialJuego"));
    }
        

}