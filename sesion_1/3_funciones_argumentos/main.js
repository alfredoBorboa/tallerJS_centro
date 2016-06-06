
//en JS el método "getElementById" accede al DOM ( Document Object Model ) y nos permite crear objetos a partir de elementos en el HTML
//Aquí creamos un objeto a partir del DIV con ID "objeto1" en el HTML
var objeto1 = document.getElementById( "objeto1" );
//Aquí creamos un objeto a partir del BUTTON con ID "boton1" en el HTML
var boton1 = document.getElementById( "boton1" );
//Aquí creamos un objeto a partir del INPUT con ID "input1" en el HTML
var input1 = document.getElementById( "input1" );

//declaramos una función llamada "funcion1". El "e" dentro del paréntesis indica que nuestra función tendrá argumentos. Estos argumentos pueden ser cualquier tipo de variable. Dicha variable podrá ser afectada de cualquier manera dentro de nuestra función
function funcion1( e ){
  objeto1.innerHTML = e * e;
  input1.value = e * e;
}

//usamos el evento "onclick" para detectar cuando se hace click en el botón y llamamos a la "funcion1"
boton1.onclick = function(){
  funcion1( input1.value );
};
