$( document ).ready( function(){

  $( "#cuadro" ).animate({
    left : "100px"
  }, 500, function(){//1er callback
    $( "#cuadro" ).animate({
      top : "100px"
    }, 500, function(){ // 2o callback
        $( "#cuadro" ).animate({
          top : "0px",
          left: "0px"
        }, 500 ); //tercer animate
    }); //segundo animate
  }); //primer animate

});
