/**
 * @description el dataj es un arreglo Objtos Json que permite consultar las preguntas, el  id de la pregunta, las opciones de respuesta, el nivel, la respuesta 
 * correcta los cuales son necesarios para la funcionalidad del juego. el arreglo @dataj consta de cinco niveles los cuales contienen cada uno cinco 
 * preguntas; cada pregunta consta de 4 opciones de respuesta y una opcion correcta.
 */
export const dataj = {        
   /**
    *@description arreglo donde se encuentran los niveles, las preguntas, las opciones de respuesta,
    la letra y la respuesta correcta correspondiente a cada preguntas
    */
   niveles:[
      /*nivelUno:*/ [      
         /* question 1*/
         
         {
            id: 1,
            /**
             * preguntas almacenadas en data.js
             */
            question: '¿Qué son las palabras reservadas?',
            /**
             * @description opciones de respuesta
             */
            choices: [
               { 
                  /**
                   * @type String
                   * @description letra correspondiente a la opcion de respuesta
                   */
                  letra:"a", 
               /**
                * @description descripcion de la opcion de respuestas correspondiente a una pregunta
                */
               descripcion: 'a) Son las palabras que usamos para definir variables'
               }, 
               {
                  letra:"b", 
               descripcion:'b) Son las palabras que usa el compilador para transformar el código en código máquina'
               },
               {
                  letra: "c",
                  descripcion: 'c) Son las palabras que no podemos usar; porque tienen un significado especial para el compilador'}, 
               {
                  letra: "d",
                  descripcion: 'd) Es la palabra que se reserva en memoria para usarla posteriormente'
               }
            ],
            /**
             * @description respuesta correcta
             */
            answer: "c) Son las palabras que no podemos usar; porque tienen un significado especial para el compilador",
         },

         /* question 2*/
         {
            id: 2,
            question: '¿Qué codificación utiliza solamente 0 y 1? ',
            choices: [
               {
                  letra:"a", 
                  descripcion:'a) Binario'
               }, 
               {
                  letra:"b", 
                  descripcion:'b) jeroglíficos'
               }, 
               {
                  letra:"c", 
                  descripcion:'c) Castellano'
               }, 
               {
                  letra:"d", 
                  descripcion:'d) C#'
               }
            ],
            answer: 'a) Binario',
         },

         /* question 3*/
         {
            id: 3,
            question: '¿Qué es un bit?  ',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) La unidad más pequeña de almacenamiento'
               },
               {
                  letra:"b",
                  descripcion:'b) Unidad de medida de la velocidad del cpu'
               }, 
               {
                  letra:"c",
                  descripcion:'c) La unidad más grande de almacenamiento'
               }, 
               {
                  letra:"d",
                  descripcion:'d) Es una unidad de medida de longitud'
               }
            ],
            answer: 'a) La unidad más pequeña de almacenamiento',
         },

         /* question 4*/
         {
            id: 4,
            question: '¿Cúal de los siguientes números es de tipo float? ',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) “ocho”'}, 
               {
                  letra:"b",
                  descripcion:'b) 3/0'
               }, 
               {
                  letra:"c",
                  descripcion:'c) 3.6'
               }, 
               {
                  letra:"d",
                  descripcion:'d) 2.5X10^41'
               }
         ],
            answer: 'c) 3.6',
         },

         /* question 5*/
         {
            id: 5,
            question: 'En una variable tipo string se pueden guardar:',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) cadenas de texto'
               }, 
               {
                  letra:"b",
                  descripcion:'b) mapas'
               }, 
               {
                  letra:"c",
                  descripcion:'c) dibujos'
               }, 
               {
                  letra:"d",
                  descripcion:'d) diccionarios'
               }
            ],
            answer: 'a) cadenas de texto',
         },

      ],      
     
      /*nivelDos:*/ [

         /* question 6 */
         {
         id: 6,

            question: '¿ Que es un IDE?',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) Un entorno de desarrollo integrado'
               }, 
               {
                  letra:"b",
                  descripcion:'b) Identificador único excepcional'
               },
               {
                  letra:"c",
                  descripcion:'c) Significa intellisense DEscription'
               }, 
               {
                  letra:"d",
                  descripcion:'d) Es un lenguaje de programación'
               }
            ],
            answer: 'a) Un entorno de desarrollo integrado',
         },

         /* question 7 */
         {
         id: 7,
            question: '¿Qué significan las siglas "www"?',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) Windows world  walk'},
               {              
                  letra:"b",
                  descripcion:'b) World Wide Web'}, 
               {              
                  letra:"c",
                  descripcion:'c) Wait war warning'}, 
               {              
                  letra:"d",    
                  descripcion:'d) Wash water white'}
            ],
            answer: 'b) World Wide Web',
         },

         /* question 8 */
         {
         id: 8,
            question: '¿Cuál es la distribución de Linux más usada?',
            choices: [
               {              
                  letra:"a", 
                  descripcion:'a) Windows'
               },
               {              
                  letra:"b",
                  descripcion:'b) Excel'
               }, 
               {              
                  letra:"c",
                  descripcion:'c) Ubuntu'
               }, 
               {              
                  letra:"d",
                  descripcion:'d) Mac'
               }
            ],
            answer: 'c) Ubuntu',
         },

         /* question 9*/
         {
         id: 9,
            question: '¿Cuál de las siguientes variables está escrita correctamente?',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) string saludoFormal = buenos días;}', 
               },
               {
                  letra:"b",
                  descripcion:'b) string saludoFormal = “buenos” días'
               }, 
               {
                  letra:"c",
                  descripcion:'c) string saludoFormal = buenos “días”;'
               }, 
               {
                  letra:"d",
                  descripcion:'d) string saludoFormal = “buenos días”;'
               }
            ],
            answer: 'd) string saludoFormal = “buenos días”;',
         },

         /* question 10*/
         {
         id: 10,
            question: '¿Qué significa CLR?',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) Common Lite Read'},
               {
                  letra:"b",
                  descripcion:'b) Common language runtime'},
               {
                  letra:"c",
                  descripcion:'c) Common Language read'},
               {
                  letra:"d",
                  descripcion:'d) Común  la risa'}
            ],
            answer: 'b) Common language runtime',
         },
      ],

      /*niveltres:*/ [
         /* question 11*/
         {
            id: 11,
            question: '¿ Cúal de las siguientes  variables locales están escritas correctamente usando camel Case?',
            choices: [
               { letra:"a", 
               descripcion: 'a) string ESTOESUNAVARIABLE = “hola”;'
               }, 
               {
                  letra:"b", 
               descripcion:'b) string EstoEsUnaVariable = “hola”; '
               },
               {
                  letra: "c",
                  descripcion: 'c) string estoEsUnaVariable = “hola”;'
               }, 
               {
                  letra: "d",
                  descripcion: 'd) string estoesuna variable = “hola”; '
               }
            ],
            answer: "c) string estoEsUnaVariable = “hola”;",
         },

         /* question 12*/
         {
            id: 12,
            question: '¿Los operadores  booleanos son aquellos que  devuelven un true o un false, dentro de los operadores Booleanos está el conectivo lógico and, este operador devuelve un true si:',
            choices: [
               {
                  letra:"a", 
                  descripcion:'a) Si  ambos valores son true '
               }, 
               {
                  letra:"b", 
                  descripcion:'b) Si ambos valores son false'
               }, 
               {
                  letra:"c", 
                  descripcion:'c) Siempre es true'
               }, 
               {
                  letra:"d", 
                  descripcion:'d) Si un valor es true y el otro es false '
               }
            ],
            answer: 'a) Si  ambos valores son true ',
         },

         /* question 13*/
         {
            id: 13,
            question: 'Si se tiene la siguiente cadena de texto S = “hOlA MunDo” al aplicar el s.lower () , qué transformación tendrá la cadena de texto:',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) “hola mundo” '
               },
               {
                  letra:"b",
                  descripcion:'b) HOLA MUNDO '
               }, 
               {
                  letra:"c",
                  descripcion:'c) Hola Mundo'
               }, 
               {
                  letra:"d",
                  descripcion:'d) Hola_mundo '
               }
            ],
            answer: 'a) “hola mundo” ',
         },

         /* question 14*/
         {
            id: 14,
            question: '¿Para qué sirven las variables?',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) Para realizar operaciones '
               }, 
               {
                  letra:"b",
                  descripcion:'b) Para almacenar valores y operar con ellos '
               }, 
               {
                  letra:"c",
                  descripcion:'c) Para asignar valores que no se pueden modificar en tiempo de ejecución '
               }, 
               {
                  letra:"d",
                  descripcion:'d) Para variar la información '
               }
         ],
            answer: 'b) Para almacenar valores y operar con ellos ',
         },

         /* question 15*/
         {
            id: 15,
            question: '¿Se puede cambiar el valor de una constante?',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) Si se puede pero no es recomendable hacerlo'
               }, 
               {
                  letra:"b",
                  descripcion:'b)  Si'
               }, 
               {
                  letra:"c",
                  descripcion:'c) No se puede'
               }, 
               {
                  letra:"d",
                  descripcion:'d) se puede hacer solo cuando la constante sea de tipo entero'
               }
            ],
            answer: 'c) No se puede',
         },

      ],
      /*nivelcuatro:*/ [
         /* question 16*/
         {
            id: 16,
            question: '¿Qué bucle usarías para recorrer una lista de elementos?',
            choices: [
               { letra:"a", 
               descripcion: 'a) if '
               }, 
               {
                  letra:"b", 
               descripcion:'b) Switch '
               },
               {
                  letra: "c",
                  descripcion: 'c) Diccionario '
               }, 
               {
                  letra: "d",
                  descripcion: 'd) for y foreach ambos sirven '
               }
            ],
            answer: "d) for y foreach ambos sirven",
         },

         /* question 17*/
         {
            id: 17,
            question: '¿Qué hace el operador ++? ',
            choices: [
               {
                  letra:"a", 
                  descripcion:'a) Ese operador no existe '
               }, 
               {
                  letra:"b", 
                  descripcion:'b) Es el operador de la suma '
               }, 
               {
                  letra:"c", 
                  descripcion:'c) El operador suma 1 a un valor entero asignado '
               }, 
               {
                  letra:"d", 
                  descripcion:'d) El operador resta 2 a un valor entero asignado '
               }
            ],
            answer: 'c) El operador suma 1 a un valor entero asignado ',
         },

         /* question 18*/
         {
            id: 18,
            question: '¿Es obligatorio el uso de else dentro de un condicional If?  ',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) Si '
               },
               {
                  letra:"b",
                  descripcion:'b) No '
               }, 
               {
                  letra:"c",
                  descripcion:'c) Solo si el condicional If está dentro de un for '
               }, 
               {
                  letra:"d",
                  descripcion:'d) Solo es obligatorio si el if está dentro de un switch '
               }
            ],
            answer: 'b) No ',
         },

         /* question 19*/
         {
            id: 19,
            question: '¿Cuál es la diferencia entre un método y una función?',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) Un método acepta que se le pasen parámetros y una función no '
               }, 
               {
                  letra:"b",
                  descripcion:'b) Un método puede devolver o no resultados, una función devuelve siempre resultado '
               }, 
               {
                  letra:"c",
                  descripcion:'c) Es lo mismo se pueden llamar de ambas formas'
               }, 
               {
                  letra:"d",
                  descripcion:'d) Una función solo se puede usar en .Net Core '
               }
         ],
            answer: 'b) Un método puede devolver o no resultados, una función devuelve siempre resultado ',
         },

         /* question 20*/
         {
            id: 20,
            question: '¿ Qué se puede entender por lenguaje de programación?',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) Una manera de comunicarse con el hardware'
               }, 
               {
                  letra:"b",
                  descripcion:'b) Una manera definida para escribir instrucciones claras para programar aplicaciones de alto nivel.'
               }, 
               {
                  letra:"c",
                  descripcion:'c) Lo relacionado con la codificación de páginas web y sitios interactivos'
               }, 
               {
                  letra:"d",
                  descripcion:'d) Una forma de diseñar código para la máquina'
               }
            ],
            answer: 'b) Una manera definida para escribir instrucciones claras para programar aplicaciones de alto nivel.',
         },

      ], 
      /*nivel cinco:*/ [
         /* question 21*/
         {
            id: 21,
            question: '¿Qué es una base de datos?',
            choices: [
               { letra:"a", 
               descripcion: 'a) Un repositorio de datos '
               }, 
               {
                  letra:"b", 
               descripcion:'b) Es un servidor que permite persistir información o datos concretos '
               },
               {
                  letra: "c",
                  descripcion: 'c) Es un grupo de datos efímeros '
               }, 
               {
                  letra: "d",
                  descripcion: 'd) Es una colección de datos o información concreta '
               }
            ],
            answer: "b) Es un servidor que permite persistir información o datos concretos",
         },

         /* question 22*/
         {
            id: 22,
            question: '¿Qué es un algoritmo? ',
            choices: [
               {
                  letra:"a", 
                  descripcion:'a) Código fuente '
               }, 
               {
                  letra:"b", 
                  descripcion:'b) Instrucciones lógicas con un propósito específico '
               }, 
               {
                  letra:"c", 
                  descripcion:'c) Una función matemática '
               }, 
               {
                  letra:"d", 
                  descripcion:'d) Una estructura programada orientada a una sintaxis '
               }
            ],
            answer: 'b) Instrucciones lógicas con un propósito específico ',
         },

         /* question 23*/
         {
            id: 23,
            question: '¿Que es una variable de bandera?  ',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) Es una variable lógica que se utiliza para conservar el estado (verdadero o falso) de una condición, la cual toma valores binarios 1= si y 0 = no '
               },
               {
                  letra:"b",
                  descripcion:'b) Es un triángulo con colores'
               }, 
               {
                  letra:"c",
                  descripcion:'c) Es un tipo de variable '
               }, 
               {
                  letra:"d",
                  descripcion:'d) Es una palabra reservada '
               }
            ],
            answer: 'a) Es una variable lógica que se utiliza para conservar el estado (verdadero o falso) de una condición, la cual toma valores binarios 1= si y 0 = no ',
         },

         /* question 24*/
         {
            id: 24,
            question: '¿Cual es la mejor forma de consumir librerías de terceros?',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) Referenciando al proyecto que genera la librería '
               }, 
               {
                  letra:"b",
                  descripcion:'b) Referenciando directamente la librería en el proyecto '
               }, 
               {
                  letra:"c",
                  descripcion:'c) Usando paquetes nuget '
               }, 
               {
                  letra:"d",
                  descripcion:'d) Instanciando la librería '
               }
         ],
            answer: 'c) Usando paquetes nuget ',
         },

         /* question 25*/
         {
            id: 25,
            question: 'No sirve Do\ While para iterar sobre una lista de elementos',
            choices: [
               {
                  letra:"a",
                  descripcion:'a) No es su uso principal, pero sí se puede'
               }, 
               {
                  letra:"b",
                  descripcion:'b) Si, sirve para eso'
               }, 
               {
                  letra:"c",
                  descripcion:'c) Si, solo si la expresión evaluada siempre sea True'
               }, 
               {
                  letra:"d",
                  descripcion:'d) No, para eso se utilizan el for o el foreach'
               }
            ],
            answer: 'd) No, para eso se utilizan el for o el foreach',
         },
      ]
   ]   
}