
//los Arrays son un tipo de variable que permite almacenar varios valores en un mismo objeto. La información puede ser accesada por medio de una sintáxis muy sencilla.
var array1 = [ 1, 10, 123, "valor", "#455644", 34, 12.345, 0.1 ];

var objeto1 = document.getElementById( "objeto1" );
var boton1 = document.getElementById( "boton1" );

//setInterval Permite llamar a una función por intervalos de tiempo indefinidamente.
var funcionIntervalo = setInterval( function(){
  objeto1.innerHTML = array1[ Math.floor( Math.random() * array1.length ) ];
} , 100);

boton1.onclick = function(){
  clearInterval( funcionIntervalo );
};
