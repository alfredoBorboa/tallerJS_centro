$( document ).ready( function(){
//Por medio de getJSON podemos acceder a cierta información en sites externos, siempre y cuando conozcamos los métodos de obtención de info de dichos sites.
$.getJSON(
  "http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?",
  {page:"Richard Stallman", prop:"text"},
  function(data) {
    $( "body" ).html( JSON.stringify( data ) );
  });
});//document ready
