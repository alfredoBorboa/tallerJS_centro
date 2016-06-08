//se crean nuestros objetos relacionados en el HTML
var objeto1 = document.getElementById( "objeto1" );
var boton1 = document.getElementById( "boton1" );
//se declara un array vacío
var array1 = [];

//se llena el array con valores aleatorios
for( var i = 0; i < 100; i++ ){
  array1.push( Math.round( Math.random() * 100 ) );
}

// imprimimos a consola el array y lo asignamos como
//valor del objeto1
console.log( JSON.stringify( array1 ) );
objeto1.innerHTML = JSON.stringify( array1 );

//cuando hacemos click en el boton1, por medio de
//un loop FOR cambiamos todos los valores del array1 a 101
boton1.onclick = function(){
  for( var i = 0; i < 100; i++ ){
    //para indicar qué valor del array se va a modificar
    //usamos la sintáxis array[ índiceDeLaPosiciónAModificar ]
    // el valor de i incrementa conforme el loop avanza
    array1[ i ] = 101;

  }
  //finalmente actualizamos los valores con los del array1
  //modificado
  console.log( JSON.stringify( array1 ) );
  objeto1.innerHTML = JSON.stringify( array1 );
};
