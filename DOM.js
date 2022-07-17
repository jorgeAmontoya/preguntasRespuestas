import {dataj} from "./DataDBOpreguntasRespuestas/data.js";
import {Usuario} from "./Usuario.js";
import {HistorialJuego} from "./HistorialJuego.js";
import {FormaSalidaJuego} from "./FormasSalidaDeJuego.js";
//import { IngresoUsuario } from "./IngresoUsuario.js";
//import {cargarPregunta} from "./CargarPregunta.js";







HistorialJuego.setNivel(0);
HistorialJuego.setPuntosAcumulados(0);
HistorialJuego.setNumPreguntasCorrectas(0);

/**
 * @type{Array} permite guardar los datos del jugador a lo largo del juego 
 */
let arrayJuego = [];

  


/**
 * @description funcion asincronica que permite capturar el nombre del 
 * jugador.
 * @function async 
 */
const IngresoUsuario = async () => {

    if(document.getElementById("inputUsuario").value == "")
    {
        alert("Ingrese su nombre");
    }
    else
    {
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

        cargarPregunta();


    }
}

/**
 * @description funcion que permite pasar a la siguiente pregunta, solo si la pregunta marcada en el
 * checked es correcta, ademas se actualiza el arrayJuego con los puntos obtenidos.
 * @function {async}
 */
const SiguientePregunta = async () => {
    let RespuestaSeleccionada = false;
    let statusCorrecta = false;
debugger;
    if(document.getElementById("a").checked)
    {        
        statusCorrecta = document.getElementById("a").value;
        RespuestaSeleccionada = true;
        HistorialJuego.respuestaActual = "a";
    }
    if(document.getElementById("b").checked)
    {
        statusCorrecta = document.getElementById("b").value;
        RespuestaSeleccionada = true;
        HistorialJuego.respuestaActual = "b";

    }
    if(document.getElementById("c").checked)
    {
        statusCorrecta = document.getElementById("c").value;
        RespuestaSeleccionada = true;
        HistorialJuego.respuestaActual = "c";
    }
    if(document.getElementById("d").checked)
    {
        statusCorrecta = document.getElementById("d").value;
        RespuestaSeleccionada = true;
        HistorialJuego.respuestaActual = "d";
    }


    if(!RespuestaSeleccionada)
    {
        alert("Seleccione una opción");       
    }
    else if(statusCorrecta == "true")
    {
        

        alert("Respondio correctamente");

        HistorialJuego.numPreguntasCorrectas = HistorialJuego.numPreguntasCorrectas+ 1;
        numPreguntasCorrectas.textContent = "Número de preguntas correctas: "+HistorialJuego.numPreguntasCorrectas;
        
        HistorialJuego.puntosAcumulados += (HistorialJuego.puntosBase*(HistorialJuego.nivel+1));
        puntosAcumulados.textContent = "Puntos acumulados: "+HistorialJuego.puntosAcumulados;
        debugger;
        let estadoGano = "";
        if(HistorialJuego.numPreguntasCorrectas == 5 && HistorialJuego.nivel == 4 )
        {
            FormaSalidaJuego.GanoJuego(arrayJuego);
            estadoGano = "Ganó";        
        }
      
        if(estadoGano != "Ganó"){
            HistorialJuego.nivel++;
            nivel.textContent = "nivel "+(HistorialJuego.nivel+1);                        


            cargarPregunta();
        }
        HistorialJuego.actualizaHistorial(arrayJuego);
    }
    else
    {
        FormaSalidaJuego.PerdioJuego(arrayJuego);
    }
}
/**
 * @description funcion que permite generar una pregunta aleatoria proveniente de la data.js
 */
const cargarPregunta = function (){
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
    
    HistorialJuego.preguntaActual = numeroAleatorioPregunta;

    cargarOpcionesRespuesta(nivelPregunta,numeroAleatorioPregunta);
}

/**
 * @description permite cargar las opciones de respuestas del data.js
 * esta funcion se le debe pasar:
 * @param {number} nivelPregunta 
 * @param {number} numeroAleatorioPregunta 
 */
const cargarOpcionesRespuesta = function (nivelPregunta,numeroAleatorioPregunta){
    opcionesRespuesta.textContent = "";
    for(const element of dataj.niveles[nivelPregunta][numeroAleatorioPregunta].choices){       
        const boxwrapper = document.createElement('div');
        boxwrapper.classList.add("boxwrapper");

        const opcion = document.createElement('div');
        opcion.id = "opcion_"+ element.letra;
        opcion.classList.add("box");

        const checkboxwrap = document.createElement('div');
        checkboxwrap.classList.add("checkbox-wrap");
        let correcta = "";
        if(element.descripcion == dataj.niveles[nivelPregunta][numeroAleatorioPregunta].answer)
        {
            correcta = "true";
        }
        else
        {
            correcta = "false";
        }
        const checkbox1 = document.createElement('input');
        checkbox1.id = element.letra;
        checkbox1.classList.add('form-check-input');
        checkbox1.type = "checkbox";
        checkbox1.value= correcta;
        if(element.letra =="a")
        {
            checkbox1.addEventListener('click',estadoCheckbox_a);
        }
        if(element.letra =="b")
        {
            checkbox1.addEventListener('click',estadoCheckbox_b);
        }
        if(element.letra =="c")
        {
            checkbox1.addEventListener('click',estadoCheckbox_c);
        }
        if(element.letra =="d")
        {
            checkbox1.addEventListener('click',estadoCheckbox_d);
        }
        const lable = document.createElement('label');
        lable.for = element.letra;
        lable.classList.add("form-check-label", "fw-bold");
        lable.textContent = element.descripcion;

        checkboxwrap.append(checkbox1);
        opcion.append(checkboxwrap,lable);
        boxwrapper.append(opcion);

        opcionesRespuesta.append(boxwrapper);
    }
}
// estadoChecbox
function estadoCheckbox_a()
{
    document.getElementById("a").checked = true;
    document.getElementById("b").checked = false;
    document.getElementById("c").checked = false;
    document.getElementById("d").checked = false;
}  
function estadoCheckbox_b()
{    
    document.getElementById("a").checked = false;
    document.getElementById("b").checked = true;
    document.getElementById("c").checked = false;
    document.getElementById("d").checked = false;
}

function estadoCheckbox_c()
{
    document.getElementById("a").checked = false;
    document.getElementById("b").checked = false;
    document.getElementById("c").checked = true;
    document.getElementById("d").checked = false;
}

function estadoCheckbox_d()
{
    document.getElementById("a").checked = false;
    document.getElementById("b").checked = false;
    document.getElementById("c").checked = false;
    document.getElementById("d").checked = true;
}



//#region  DOm
const divUsuario = document.createElement('div');
const inputUsuario = document.createElement('input');
inputUsuario.id = "inputUsuario";
inputUsuario.placeholder = "Ingrese su nombre";

const buttonUsuario = document.createElement("button");
buttonUsuario.id = "buttonUsuario";
buttonUsuario.addEventListener('click', IngresoUsuario);
buttonUsuario.textContent = "Ingreso"



divUsuario.append(inputUsuario,buttonUsuario);

const contenedor = document.querySelector('#container');
const divInformacion = document.createElement('div');
divInformacion.id = "informacion";
divInformacion.classList.add("none");

const divCargaUsuario = document.createElement('div');
divCargaUsuario.id = "CargaUsuario";

const nivel = document.createElement('div');
nivel.id = "numNivel";
nivel.textContent = "nivel 1";

const numPreguntasCorrectas = document.createElement('div');
numPreguntasCorrectas.id = "numPreguntasCorrectas";
numPreguntasCorrectas.textContent = "Número de preguntas correctas: 0";

const puntosAcumulados = document.createElement('div');
puntosAcumulados.id = "puntosAcumulados";
puntosAcumulados.textContent = "Puntos acumulados: 0";

divInformacion.append(divCargaUsuario, nivel, numPreguntasCorrectas, puntosAcumulados);

const Pregunta = document.createElement('div');
Pregunta.id = "Pregunta";

Pregunta.classList.add("none");

const opcionesRespuesta = document.createElement('div');
opcionesRespuesta.id = "opcionesRespuesta";
opcionesRespuesta.classList.add("none")
const botones = document.createElement('div');
botones.id = "botones";
botones.classList.add("none");
const btn__retirarse = document.createElement("button");
btn__retirarse.id = "btn__retirarse";
btn__retirarse.textContent = "Retirarse"
btn__retirarse.addEventListener('click',function(){ FormaSalidaJuego.RetirarseJuego(arrayJuego)});

const btn__siguiente = document.createElement("button");
btn__siguiente.id = "btn__siguiente";
btn__siguiente.textContent = "Siguiente"
btn__siguiente.addEventListener('click', SiguientePregunta);

botones.append(btn__retirarse, btn__siguiente);

contenedor.append(divUsuario,divInformacion, Pregunta, opcionesRespuesta, botones);
//#endregion






