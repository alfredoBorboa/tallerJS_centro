$( document ).ready( function(){

  $( "li" ).has( "ul" ).hover( function(){
    $( this ).children( "ul" ).fadeIn('fast');
    //$( this ).children( "ul" ).slideDown('fast');
  }, function(){
    $( this ).children( "ul" ).fadeOut('fast');
    //$( this ).children( "ul" ).slideUp('fast');
  });

  $( "#btnMenuMobile" ).click( function(){
    $( "#nav" ).fadeToggle('fast');
    //$( "#nav" ).slideToggle('fast');
  });
});
