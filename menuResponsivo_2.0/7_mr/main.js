$( document ).ready( function(){

  if( $( window ).width() > 500 ){

    $( "li" ).has( "ul" ).hover( function(){
      $( this ).children( "ul" ).fadeIn('fast');
      //$( this ).children( "ul" ).slideDown('fast');
    }, function(){
      $( this ).children( "ul" ).fadeOut('fast');
      //$( this ).children( "ul" ).slideUp('fast');
    });

  }// if window width > 500px

  if( $( window ).width() <= 500 ){

    $( "li" ).has( "ul" ).click( function(){
      $( this ).children( "ul" ).fadeToggle('fast');
      //$( this ).children( "ul" ).slideDown('fast');
    });

    $( "#btnMenuMobile" ).click( function(){
      $( "#nav" ).fadeToggle('fast');
      //$( "#nav" ).slideToggle('fast');
    });

  }// if window width <= 500


});
