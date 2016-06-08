
//localStorage nos permite guardar persistentemente información sencilla en el browser del usuario.

if( localStorage.getItem( "colorGuardado" ) != null ){
  console.log( "color guardado " );
  $( "#cuadro5" ).css( "background-color", localStorage.getItem( "colorGuardado" ) );
}

$( ".cuadro" ).click( function(){
  $( "#cuadro5" ).css( "background-color", $( this ).css("background-color" ) );
  localStorage.setItem( "colorGuardado", $( this ).css("background-color" ) );
});

$( "#boton1" ).click( function(){
  localStorage.clear();
  window.location = "index.html";
});

//Tarea: seleccionar un plugin de esta lista e implementarlo en su setItem
//http://www.creativebloq.com/jquery/top-jquery-plugins-6133175
