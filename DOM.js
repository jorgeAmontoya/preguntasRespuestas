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
const body = document.querySelector('#body');


const contenedor = document.querySelector('#container');
//contenedor.classList.add("container2");


const section = document.createElement("section");
section.classList.add("vh-100", "gradient-custom");
section.id = "sectionLogin";


const div1 = document.createElement('div');
div1.classList.add("container","py-5", "h-100");

const div2 = document.createElement('div');
div2.classList.add("row", "d-flex", "justify-content-center", "align-items-center", "h-100");

const div3 = document.createElement('div');
div3.classList.add("col-12", "col-md-8", "col-lg-6", "col-xl-5");

const div4 = document.createElement('div');
div4.classList.add("card", "bg-dark", "text-white");
div4.style.borderRadius = "1rem";

const div5 = document.createElement('div');
div5.classList.add("card-body", "p-5", "text-center");


const div6 = document.createElement('div');
div6.classList.add("mb-md-5", "mt-md-4", "pb-5");

const txtLogin = document.createElement('h2');
txtLogin.textContent = "Login";
const txt_instrucion  = document.createElement('p');
txt_instrucion.textContent = "Por favor ingrese su nombre y correo";

const div7 = document.createElement('div');
div7.classList.add("form-outline", "form-white", "mb-4");

const inputName = document.createElement('input');
inputName.classList.add("form-control", "form-control-lg");
inputName.placeholder = "Nombre";
inputName.id = "inputUsuario";
inputName.type = "text";



const div8 = document.createElement('div');
div8.classList.add("form-outline", "form-white", "mb-4");

const inputCorreo = document.createElement('input');
inputCorreo.classList.add("form-control", "form-control-lg");
inputCorreo.placeholder= "Correo";

inputCorreo.id = "typeEmailX";
inputCorreo.type = "text";




const buttonLoging = document.createElement('button');
buttonLoging.textContent= "Ingresar";
buttonLoging.addEventListener('click', Usuario.IngresoUsuario);

buttonLoging.classList.add("btn", "btn-outline-light", "btn-lg", "px-5");






div8.append(inputCorreo);
div7.append(inputName);
div6.append(txtLogin, txt_instrucion,div7, div8, buttonLoging)
div5.append(div6);
div4.append(div5);
div3.append(div4);
div2.append(div3);
div1.append(div2);
section.append(div1);
contenedor.append(section);







const divUsuario = document.createElement('div');
divUsuario.id = "ingresoform"
const inputUsuario = document.createElement('input');
inputUsuario.id = "inputUsuario";
inputUsuario.placeholder = "Ingrese su nombre";

const buttonUsuario = document.createElement("button");
buttonUsuario.id = "buttonUsuario";
buttonUsuario.addEventListener('click', Usuario.IngresoUsuario);
buttonUsuario.textContent = "Ingreso"

divUsuario.append(inputUsuario,buttonUsuario);

const divInformacion = document.createElement('div');
divInformacion.id = "divInformacion";
divInformacion.classList.add("none");

const divCargaUsuario = document.createElement('div');
divCargaUsuario.id = "CargaUsuario";

const nivel = document.createElement('h1');
nivel.id = "nivel";
nivel.textContent = "nivel 1";

const numPreguntasCorrectas = document.createElement('h3');
numPreguntasCorrectas.id = "numPreguntasCorrectas";
numPreguntasCorrectas.textContent = "Número de preguntas correctas: 0";

const puntosAcumulados = document.createElement('h3');
puntosAcumulados.id = "puntosAcumulados";
puntosAcumulados.textContent = "Puntos acumulados: 0";

const fulldivider = document.createElement('div');
fulldivider.classList.add("full-divider");

divInformacion.append(divCargaUsuario, nivel, numPreguntasCorrectas, puntosAcumulados, fulldivider);

const Pregunta = document.createElement('h4');
Pregunta.id = "Pregunta";

Pregunta.classList.add("none");

const opcionesRespuesta = document.createElement('h4');
opcionesRespuesta.id = "opcionesRespuesta";
opcionesRespuesta.classList.add("none")
const botones = document.createElement('div');
botones.id = "botones";
botones.classList.add("none");
const btn__retirarse = document.createElement("button");
btn__retirarse.classList.add("btn", "btn-danger");
btn__retirarse.id = "btn__retirarse";
btn__retirarse.textContent = "Retirarse"
btn__retirarse.addEventListener('click',function(){ FormaSalidaJuego.RetirarseJuego(arrayJuego)});

const btn__siguiente = document.createElement("button");
btn__siguiente.classList.add("btn", "btn-primary");
btn__siguiente.id = "btn__siguiente";
btn__siguiente.textContent = "Siguiente"
btn__siguiente.addEventListener('click', function(){Preguntas.SiguientePregunta(arrayJuego)});

botones.append(btn__retirarse, btn__siguiente);

const fulldivider2 = document.createElement('div');
fulldivider2.classList.add("full-divider");

const fulldivider3 = document.createElement('div');
fulldivider3.classList.add("full-divider");

contenedor.append(/*divUsuario,*/fulldivider3,divInformacion, Pregunta, opcionesRespuesta,fulldivider2, botones);
