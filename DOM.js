import {Usuario} from "./Usuario.js";
import {HistorialJuego} from "./HistorialJuego.js";
import {FormaSalidaJuego} from "./FormasSalidaDeJuego.js";
import {Preguntas} from "./Preguntas.js";

HistorialJuego.setNivel(0);
HistorialJuego.setPuntosAcumulados(0);
HistorialJuego.setNumPreguntasCorrectas(0);

/**
 * @type{Array} permite guardar los datos del jugador a lo largo del juego 
 */
let arrayJuego = [];

const divUsuario = document.createElement('div');
const inputUsuario = document.createElement('input');
inputUsuario.id = "inputUsuario";
inputUsuario.placeholder = "Ingrese su nombre";

const buttonUsuario = document.createElement("button");
buttonUsuario.id = "buttonUsuario";
buttonUsuario.addEventListener('click', Usuario.IngresoUsuario);
buttonUsuario.textContent = "Ingreso"

divUsuario.append(inputUsuario,buttonUsuario);

const contenedor = document.querySelector('#container');

const divInformacion = document.createElement('div');
divInformacion.id = "divInformacion";
divInformacion.classList.add("none");

const divCargaUsuario = document.createElement('div');
divCargaUsuario.id = "CargaUsuario";

const nivel = document.createElement('div');
nivel.id = "nivel";
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
btn__siguiente.addEventListener('click', function(){Preguntas.SiguientePregunta(arrayJuego)});

botones.append(btn__retirarse, btn__siguiente);

contenedor.append(divUsuario,divInformacion, Pregunta, opcionesRespuesta, botones);
