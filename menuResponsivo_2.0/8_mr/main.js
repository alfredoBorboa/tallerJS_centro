$( document ).ready( function(){

  $( "#showMenu" ).click( function(){

    if( $( "#menu" ).css( "left" ) == "-170px" ){
      $( "#menu" ).animate({
        left : "0px"
      }, 500, function(){
        $( "#showMenu" ).children( "a" ).children( "i" ).attr( "class", "fa fa-arrow-left" );
      });
    }
    if( $( "#menu" ).css( "left" ) == "0px" ){
      $( "#menu" ).animate({
        left : "-170px"
      }, 500, function(){
          $( "#showMenu" ).children( "a" ).children( "i" ).attr( "class", "fa fa-arrow-right" );
      });
    }
  });

    $( "li" ).has( "ul" ).click( function(){
      $( this ).children( "ul" ).fadeToggle('fast', function(){
        $( "li ul" ).not( this ).hide();
      });
      //$( this ).children( "ul" ).slideDown('fast');
    });

});
