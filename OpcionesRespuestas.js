import {dataj} from "./DataDBOpreguntasRespuestas/data.js";
export const OpcionesRespuestas = {
    /**
     * @description permite cargar las opciones de respuestas del data.js
     * esta funcion se le debe pasar:
     * @param {number} nivelPregunta 
     * @param {number} numeroAleatorioPregunta 
    */
    cargarOpcionesRespuesta : function (nivelPregunta,numeroAleatorioPregunta){
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
            if(element.descripcion == dataj.niveles[nivelPregunta][numeroAleatorioPregunta].answer){
                correcta = "true";
            }
            else{
                correcta = "false";
            }
            const checkbox1 = document.createElement('input');
            checkbox1.id = element.letra;
            checkbox1.classList.add('form-check-input');
            checkbox1.type = "checkbox";
            checkbox1.value= correcta;
            if(element.letra =="a"){
                checkbox1.addEventListener('click',this.estadoCheckbox_a);
            }
            if(element.letra =="b"){
                checkbox1.addEventListener('click',this.estadoCheckbox_b);
            }
            if(element.letra =="c"){
                checkbox1.addEventListener('click',this.estadoCheckbox_c);
            }
            if(element.letra =="d"){
                checkbox1.addEventListener('click',this.estadoCheckbox_d);
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
    },
    // estadoChecbox
    estadoCheckbox_a : function(){
        document.getElementById("a").checked = true;
        document.getElementById("b").checked = false;
        document.getElementById("c").checked = false;
        document.getElementById("d").checked = false;
    },
    estadoCheckbox_b : function(){    
        document.getElementById("a").checked = false;
        document.getElementById("b").checked = true;
        document.getElementById("c").checked = false;
        document.getElementById("d").checked = false;
    },
    estadoCheckbox_c : function(){
        document.getElementById("a").checked = false;
        document.getElementById("b").checked = false;
        document.getElementById("c").checked = true;
        document.getElementById("d").checked = false;
    },    
    estadoCheckbox_d : function(){
        document.getElementById("a").checked = false;
        document.getElementById("b").checked = false;
        document.getElementById("c").checked = false;
        document.getElementById("d").checked = true;
    }
}