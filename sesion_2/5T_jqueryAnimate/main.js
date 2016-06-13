//Crear un "estrobo" de pantalla completa con una gama de colores establecida en un array.
$( document ).ready( function(){
var arrayColores = [ "#FF6138", "#FFFF9D", "#BEEB9F", "#79BD8F", "#00A388", "#FFFF9D", "#FFFF9D" ];

setInterval( function(){
  $( "body" ).animate({
    backgroundColor : arrayColores[ Math.floor( Math.random() * arrayColores.length ) ]
  }, 1000);
}, 1000);

$( window ).mousemove( function( event ){
  //console.log( event.pageX + ", " + event.pageY );
  $( "body" ).append( "<div class='bolita' style='left:" + event.pageX + "px;top:" + event.pageY + "px;width:" + (Math.random() * 100) + "'></div>" );
});

$( ".cuadro" ).each( function(){
  console.log( "cuadro" );
});

});
