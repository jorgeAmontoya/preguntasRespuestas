
import {dataj} from "./data.js";
// variables globales
var countNumPreguntasCorrectas = 0;




/*idNivel = 1;
Idpregunta = 0;
var numPreguntasCorrectas = 0;
var puntosPorNivel = 100000*idNivel;

// jugador 
var nombre ="";
var correo="";

var idJuego = "";
var idUsuario = "";
var usuario="";*/

//export const dato = dataj.niveles.map( dato =>

//var dato=  dataj.nivelDos.Pregunta;

function guardar_Localstorage(){
    let persona ={
        nombre:"",
        puntos:0,
        NivelActual1:0,

    }

    let nombre = "JOrge"; 
    let puntos= dataj.puntosAcumulados;
    let NivelActual1 = dataj.NivelActual;
    
//localStorage.setItem("persona", JSON.stringify(persona));

localStorage.setItem("nombre", nombre)
localStorage.setItem("puntos", puntos)
localStorage.setItem("nivel", NivelActual1+1)
    

};


const RetirarseJuego = async ({target}) => {
    opcionesRespuesta.textContent = "";
    botones.textContent ="";
    Pregunta.textContent="Fin del juego";
    guardar_Localstorage()
}



const SiguientePregunta = async ({target}) => {
    var RespuestaSeleccionada = false;
    var statusCorrecta = false;

    if(document.getElementById("a").checked)
    {        
        statusCorrecta = document.getElementById("a").value;
        RespuestaSeleccionada = true;
    }
    if(document.getElementById("b").checked)
    {
        statusCorrecta = document.getElementById("b").value;
        RespuestaSeleccionada = true;
    }
    if(document.getElementById("c").checked)
    {
        statusCorrecta = document.getElementById("c").value;
        RespuestaSeleccionada = true;
    }
    if(document.getElementById("d").checked)
    {
        statusCorrecta = document.getElementById("d").value;
        RespuestaSeleccionada = true;
    }


    if(!RespuestaSeleccionada)
    {
        alert("Seleccione una opción");       
    }
    else if(statusCorrecta == "true")
    {
        
        alert("Respondio correctamente");
        dataj.countNumPreguntasCorrectas = dataj.countNumPreguntasCorrectas+ 1;
        numPreguntasCorrectas.textContent = "Número de preguntas correctas: "+dataj.countNumPreguntasCorrectas;
        
        dataj.puntosAcumulados += (dataj.puntos*(dataj.NivelActual+1));
        puntosAcumulados.textContent = "Puntos acumulados: "+dataj.puntosAcumulados;

        
        var estadoGano = "";
        
        if(dataj.countNumPreguntasCorrectas == 5 && dataj.NivelActual == 4 )
        {
            botones.textContent ="";
            opcionesRespuesta.textContent = "";
            Pregunta.textContent="";

            Pregunta.textContent="Fin del juego, ganaste";
            alert("ganaste");
            guardar_Localstorage()
            var estadoGano = "Ganó";

        
        }
        if(dataj.countNumPreguntasCorrectas == 5 && dataj.NivelActual != 5)
        {
            dataj.countNumPreguntasCorrectas =0;
            numPreguntasCorrectas.textContent = "Número de preguntas correctas: "+dataj.countNumPreguntasCorrectas;

            dataj.NivelActual++;
            nivel.textContent = "nivel "+(dataj.NivelActual+1);

            
            
        }

        if(estadoGano != "Ganó"){
            cargarPregunta();

        }

    }
    else
    {
        opcionesRespuesta.textContent = "";
        botones.textContent ="";
        Pregunta.textContent="Fin del juego";
        dataj.puntosAcumulados = 0;
        puntosAcumulados.textContent = "Puntos acumulados: "+dataj.puntosAcumulados;
        guardar_Localstorage()
        alert("perdio");
    }

}

const cargarPregunta = function (){

    var max = 4;
    var min = 0;
    var numeroAleatorioPregunta = Math.floor(Math.random() * (max - min + 1) + min);
    var nivelPregunta = dataj.NivelActual;

    Pregunta.textContent="";
    Pregunta.append(dataj.niveles[nivelPregunta][numeroAleatorioPregunta].question)
    
    cargarOpcionesRespuesta(nivelPregunta,numeroAleatorioPregunta);

}

const cargarOpcionesRespuesta = function (nivel,numeroAleatorioPregunta){
    opcionesRespuesta.textContent = "";
    for( let i = 0; i<dataj.niveles[nivel][numeroAleatorioPregunta].choices.length; i++ ){
       

            const boxwrapper = document.createElement('div');
            boxwrapper.classList.add("boxwrapper");

            const opcion = document.createElement('div');
            opcion.id = "opcion_"+ dataj.niveles[nivel][numeroAleatorioPregunta].choices[i].letra;
            opcion.classList.add("box");

            const checkboxwrap = document.createElement('div');
            checkboxwrap.classList.add("checkbox-wrap");

            if(dataj.niveles[nivel][numeroAleatorioPregunta].choices[i].descripcion == dataj.niveles[nivel][numeroAleatorioPregunta].answer)
            {
                var correcta = "true";
            }
            else
            {
                var correcta = "false";
            }
            const checkbox1 = document.createElement('input');
            checkbox1.id = dataj.niveles[nivel][numeroAleatorioPregunta].choices[i].letra;
            checkbox1.classList.add('form-check-input');
            checkbox1.type = "checkbox";
            checkbox1.value= correcta;
            if(dataj.niveles[nivel][numeroAleatorioPregunta].choices[i].letra =="a")
            {
                checkbox1.addEventListener('click',estadoCheckbox_a);
            }
            if(dataj.niveles[nivel][numeroAleatorioPregunta].choices[i].letra =="b")
            {
                checkbox1.addEventListener('click',estadoCheckbox_b);
            }
            if(dataj.niveles[nivel][numeroAleatorioPregunta].choices[i].letra =="c")
            {
                checkbox1.addEventListener('click',estadoCheckbox_c);
            }
            if(dataj.niveles[nivel][numeroAleatorioPregunta].choices[i].letra =="d")
            {
                checkbox1.addEventListener('click',estadoCheckbox_d);
            }
            const lable = document.createElement('label');
            lable.for = dataj.niveles[nivel][numeroAleatorioPregunta].choices[i].letra;
            lable.classList.add("form-check-label", "fw-bold");
            lable.textContent = dataj.niveles[nivel][numeroAleatorioPregunta].choices[i].descripcion;

            checkboxwrap.append(checkbox1);
            opcion.append(checkboxwrap,lable);
            boxwrapper.append(opcion);


            opcionesRespuesta.append(boxwrapper);
    }
   
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

function estadoCheckbox_a()
{
    document.getElementById("a").checked = true;
    document.getElementById("b").checked = false;
    document.getElementById("c").checked = false;
    document.getElementById("d").checked = false;
}  
   

//#region  DOm
const contenedor = document.querySelector('#container');
const div = document.createElement('div');

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

div.append(divCargaUsuario, nivel, numPreguntasCorrectas, puntosAcumulados);

const Pregunta = document.createElement('div');
Pregunta.id = "Pregunta";


const opcionesRespuesta = document.createElement('div');
opcionesRespuesta.id = "opcionesRespuesta";

const botones = document.createElement('div');
botones.id = "botones";

const btn__retirarse = document.createElement("button");
btn__retirarse.id = "btn__retirarse";
btn__retirarse.textContent = "Retirarse"
btn__retirarse.addEventListener('click', RetirarseJuego);

const btn__siguiente = document.createElement("button");
btn__siguiente.id = "btn__siguiente";
btn__siguiente.textContent = "Siguiente"
btn__siguiente.addEventListener('click', SiguientePregunta);

botones.append(btn__retirarse, btn__siguiente);

contenedor.append(div, Pregunta, opcionesRespuesta, botones);

//#endregion





//Aleatorio
cargarPregunta();

/*



<div>
    <div id="CargaUsuario"></div>
    <div id="numNivel"><p>Nivel 1</p></div>
    <div id="numPreguntasCorrectas"><p>Número de preguntas correctas: 0</p></div>
    <div id="puntosAcumulados"><p>Puntos acumulados: 0</p></div>
</div>    
<span></span>
<div id="Pregunta"> </div>
<div id="opcionesRespuesta"></div>
<span></span>
<div id="botones">       
    <button id="btn__retirarse">Retiraaaarse</button>                    
    <button id="btn__siguiente">Siguiente</button> 
</div>*/