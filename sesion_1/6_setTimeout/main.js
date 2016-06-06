
//los Arrays son un tipo de variable que permite almacenar varios valores en un mismo objeto. La información puede ser accesada por medio de una sintáxis muy sencilla.
var array1 = [ 1, 10, 123, "valor", "#455644", 34, 12.345, 0.1 ];

var objeto1 = document.getElementById( "objeto1" );

//setTimeout nos permite llamar a una función determinado tiempo después de la apertura del documento

var funcionTimeout = setTimeout( function(){
//Un loop FOR genera ciclos dentro de nuestro documento; en este caso el número de ciclos de nuestro loop será el número de elementos del array1
for( var i = 0; i < array1.length; i++ ){
  objeto1.innerHTML = objeto1.innerHTML + array1[ i ] + ", ";
}
} , 1000);
