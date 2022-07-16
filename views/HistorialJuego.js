import { Usuario } from "./Usuario.js";

export const HistorialJuego = { 
    nivel:0,
    puntosAcumulados:0,
    puntosBase:100000,
    numPreguntasCorrectas:0,
    preguntaActual:0,
    respuestaActual:"",
    getNivel:function(){
        return this.nivel;
    },
    getPuntosAcumulados:function(){
        return this.puntosAcumulados;
    },
    getNumPreguntasCorrectas:function(){
        return this.numPreguntasCorrectas;
    },
    setNivel:function(nivel){
        this.nivel = nivel;
    },
    setPuntosAcumulados:function(puntosAcumulados){
        this.puntosAcumulados = puntosAcumulados;
    },
    setNumPreguntasCorrectas:function(numPreguntasCorrectas){
        this.numPreguntasCorrectas = numPreguntasCorrectas;
    },    
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
    }
}