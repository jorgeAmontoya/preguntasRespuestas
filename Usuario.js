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
}