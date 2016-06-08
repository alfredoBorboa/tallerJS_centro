// Actividad 1
// Crear una función que llene un array con valores del 1 al 100, llenando un valor con cada click en botón

var objeto1 = document.getElementById( "objeto1" );
var boton1 = document.getElementById( "boton1" );

var array1 = [];
var valor = 1;

boton1.onclick = function(){
  if( valor < 16 ){
  console.log( JSON.stringify( array1 ) );//JSON.stringify convierte nuestra variable ( del tipo que sea ) a un String
  objeto1.innerHTML = JSON.stringify( array1 ) ;
  array1.push( valor );//push agrega un elemento en la última posición del array.
  valor++;
}else{
  console.log( "Terminado :)" );
}
};
