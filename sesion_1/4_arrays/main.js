
//los Arrays son un tipo de variable que permite almacenar varios valores en un mismo objeto. La información puede ser accesada por medio de una sintáxis muy sencilla.
var array1 = [ 1, 10, 123, "valor", "#455644", 34, 12.345, 0.1 ];

var objeto1 = document.getElementById( "objeto1" );

//objeto1.innerHTML = array1[ 3 ];

// Math.floor trunca valores decimales a su íntegro más cercano
// Math.random genera un valor aleatorio entre 0 y 0.9
// el parámetro "length" de un array nos regresa el número de elementos en el Array.
//0.8 * 8 = 6.4 -> Math.floor -> 6
objeto1.innerHTML = array1[ Math.floor( 0.8 * array1.length ) ];
