
//https://training.sitepen.com/cheatsheets/JavaScriptCheatSheet.html
$( document ).ready( function(){

  console.log( "DOM y Jquery cargado" );

  var gridRes = 30;
/*
  for( var i = 0; i < $( window ).width(); i+=gridRes ){
    $( "body" ).append( "<div class='bolita' style='left:" + i + "'></div>" );
  }
*/
  for( var i = 0; i < $( window ).width(); i+=gridRes ){
    for( var j = 0; j < $( window ).height(); j+=gridRes ){
    $( "body" ).append( "<div class='bolita' style='left:" + i + "; top:" + j + "'></div>" );
    }
  }

  /*$( ".bolita " ).hover( function(){
    $( this ).css( "background-color", "#F00" );
  }, function(){
    $( this ).css( "background-color", "#000" );
  });*/

});
