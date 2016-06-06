
//los Arrays son un tipo de variable que permite almacenar varios valores en un mismo objeto. La información puede ser accesada por medio de una sintáxis muy sencilla.
var array1 = [ 1, 10, 123, "valor", "#455644", 34, 12.345, 0.1 ];
var arrayColores = [ "#FF6138", "#FFFF9D", "#BEEB9F", "#79BD8F", "#00A388", "#FFFF9D", "#FFFF9D" ];

//setInterval Permite llamar a una función por intervalos de tiempo indefinidamente.
var funcionIntervalo = setInterval( function(){
  //JQuery introduce una manera más sintética de acceder a los elementos de nuestro documento:
  // $( elemento ).atributos
  $( "#objeto1" ).html( array1[ Math.floor( Math.random() * array1.length ) ] );
  //Una de las funciones más útiles en JQuery es el elemento CSS. CSS acepta JSON objects con los parámetros que queremos afectar o parámetros individuales
  // con la sintáxis: $( elemento ).css( "atributo", valor );
  $( "#objeto1" ).css({
    "background-color" : arrayColores[ Math.floor( Math.random() * arrayColores.length ) ],
    "left" : Math.random() * window.innerWidth,
    "top" : Math.random() * window.innerHeight,
    "width" : Math.random() * 300,
    "height" : Math.random() * 300
  });
} , 100);

$( "#boton1" ).click( function(){
  clearInterval( funcionIntervalo );
});
