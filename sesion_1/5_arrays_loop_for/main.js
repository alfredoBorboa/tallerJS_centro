
//los Arrays son un tipo de variable que permite almacenar varios valores en un mismo objeto. La información puede ser accesada por medio de una sintáxis muy sencilla.
var array1 = [ 1, 10, 123, "valor", "#455644", 34, 12.345, 0.1 ];

var objeto1 = document.getElementById( "objeto1" );

//Un loop FOR genera ciclos dentro de nuestro documento; en este caso el número de ciclos de nuestro loop será el número de elementos del array1

for( var i = 4; i < 5; i++ ){
  for( var j = 0; j < array1.length; j++){
  objeto1.innerHTML = objeto1.innerHTML + array1[ j ] + ", ";
 }
}
