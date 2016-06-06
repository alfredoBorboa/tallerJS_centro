//y en este caso declaramos la variable y le asignamos un valor en la misma línea
var var2 = 2;

//en JS el método "getElementById" accede al DOM ( Document Object Model ) y nos permite crear objetos a partir de elementos en el HTML
//Aquí creamos un objeto a partir del DIV con ID "objeto1" en el HTML
var objeto1 = document.getElementById( "objeto1" );

//declaramos una función llamada "funcion1"
function funcion1(){
  objeto1.innerHTML = var2;
  //incrementamos var2 cada vez que la función es llamada
  var2++;
}

var boton1 = document.getElementById( "boton1" );

//usamos el evento "onclick" para detectar cuando se hace click en el botón y llamamos a la "funcion1"
boton1.onclick = function(){
  funcion1();
};
