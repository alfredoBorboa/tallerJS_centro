$( document ).ready( function(){

  $( "li" ).has( "ul" ).hover( function(){
    $( this ).children( "ul" ).show();
  }, function(){
    $( this ).children( "ul" ).hide();
  });

  $( "#btnMenuMobile" ).click( function(){
    $( "#nav" ).toggle();
  });
});
