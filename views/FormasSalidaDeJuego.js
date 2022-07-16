import { HistorialJuego } from "./HistorialJuego.js";
import { Usuario } from "./Usuario.js";

export const FormaSalidaJuego = { 
    RetirarseJuego:function(arrayJuego)
    {
        opcionesRespuesta.textContent = "";
        botones.classList.add("none");
        Pregunta.textContent="Fin del juego";

        let item = {
            nombre: /*Usuario.nombre*/"fvjkv",
            nivelPregunta:HistorialJuego.nivel+1,
            idPregunta:HistorialJuego.preguntaActual,
            respuesta:"No aplica",
            estadoRespuesta:"No aplica", //correcta o incorrecta o N/A
            puntosAcumulados:HistorialJuego.puntosAcumulados,            
            formaSalida:"Retiro"
        }

        //almacenar el item en un array
        arrayJuego.push(item);
        localStorage.setItem("HistorialJuego",JSON.stringify(arrayJuego));  
        
        inputUsuario.disabled = false;
        buttonUsuario.disabled = false;


    },
    PerdioJuego:function(arrayJuego)
    {
        botones.classList.add("none");
        HistorialJuego.puntosAcumulados = 0;
        puntosAcumulados.textContent = "Puntos acumulados: "+HistorialJuego.puntosAcumulados;
        
        opcionesRespuesta.textContent = "";
        Pregunta.textContent="Perdio Fin del juego";

        let item = {
            nombre: Usuario.nombre,
            nivelPregunta:HistorialJuego.nivel+1,
            idPregunta:HistorialJuego.preguntaActual,
            respuesta:HistorialJuego.respuestaActual,
            estadoRespuesta:"Incorrecta", //correcta o incorrecta o N/A
            puntosAcumulados:HistorialJuego.puntosAcumulados,            
            formaSalida:"Perdio"
        }

        //almacenar el item en un array
        arrayJuego.push(item);
        localStorage.setItem("HistorialJuego",JSON.stringify(arrayJuego));  

        alert("perdio");
        inputUsuario.disabled = false;
        buttonUsuario.disabled = false;


    },
    GanoJuego:function(arrayJuego)
    {
        botones.classList.add("none");
        opcionesRespuesta.textContent = "";
        Pregunta.textContent="";

        Pregunta.textContent="Fin del juego, ganaste";

        let item = {
            nombre: Usuario.nombre,
            nivelPregunta:HistorialJuego.nivel,
            idPregunta:HistorialJuego.preguntaActual,
            respuesta:HistorialJuego.respuestaActual,
            estadoRespuesta:"Correcta", //correcta o incorrecta o N/A
            puntosAcumulados:HistorialJuego.puntosAcumulados,            
            formaSalida:"Gano"
        }

        //almacenar el item en un array
        arrayJuego.push(item);
        localStorage.setItem("HistorialJuego",JSON.stringify(arrayJuego));  

        alert("ganaste");
        inputUsuario.disabled = false;
        buttonUsuario.disabled = false;

        
    }
}