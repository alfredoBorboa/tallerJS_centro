//JS maneja variables del tipo general, a diferencia de otros lenguajes como c# o JAVA, que manejan variables de ciertos tipos específicos ( int, float, double, etc.)

//en este caso declaramos una variable y no le asignamos un valor
var var1;
//aquí asignamos el valor a la variable
var1 = 10;

//y en este caso declaramos la variable y le asignamos un valor en la misma línea
var var2 = 6;

//en JS el método "getElementById" accede al DOM ( Document Object Model ) y nos permite crear objetos a partir de elementos en el HTML
//Aquí creamos un objeto a partir del DIV con ID "objeto1" en el HTML
var objeto1 = document.getElementById( "objeto1" );


//Una vez que nuestra variable "objeto1" está hecha, podemos acceder al objeto directamente y por medio de innerHTML cambiar sus contenidos
objeto1.innerHTML = Math.round( (var1 / var2) * 100 ) / 100;
