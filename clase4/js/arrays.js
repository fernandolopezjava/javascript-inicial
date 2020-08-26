// dos maneras de crear un array

/*
var nombre1 = 'Juan';
var nombre2 = 'Lucas';
var nombre3 = 'Mateo';
var nombre4 = 'Marcos';
*/

//* usando el constructor new

  /*  var nombres = new Array( 'Juan', 'Lucas', 'Mateo', 'Marcos',
                                  'Santiago', 'Pedro' ); */

//* usando corchetes

    var nombres = [ 'Juan', 'Lucas', 'Mateo', 'Marcos',
                        'Santiago', 'Pedro', 'Benjamin', 'Pablo' ];

    console.log( nombres );
    console.log( nombres[2] );


/* ## EN HTML tenemos también colecciones del DOM  */
    var parrafos = document.getElementsByTagName('p');

        console.log( parrafos );

    var lis = document.getElementsByTagName('li');

        console.log( lis );
        lis[2].style.fontWeight = 'bold';