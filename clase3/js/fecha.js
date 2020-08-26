//ubicar elemento dentro del DOM

    var frase = document.getElementById('frase');
    var frase2 = document.getElementById('frase2');

    var fecha = new Date();

    var diaMes = fecha.getDate();
    if ( diaMes < 10 ){
        diaMes = '0' + diaMes;
    }

    var mes = fecha.getMonth()+1;
    if ( mes < 10 ){
        mes = '0' + mes;
    }

    var anio = fecha.getFullYear();

        frase.innerText = diaMes + '/' + mes + '/' + anio;

// función para mostrar un reloj

    function mostrarReloj()
    {
        var fecha = new Date();

        var horas = fecha.getHours();
        var minutos = fecha.getMinutes();
        if ( minutos < 10 ){
            minutos = '0' + minutos;
        }
        var segundos = fecha.getSeconds();
        if ( segundos < 10 ){
            segundos = '0' + segundos;
        }

        var mili = fecha.getMilliseconds();

            frase2.innerText = horas + ':' + minutos + ':' + segundos + ' /' + mili;
    }

// llamado a la función mostrarReloj()

    mostrarReloj();

//#### para actualizar el reloj, vamos a utilizar la función
//#### setInterval();

    setInterval( mostrarReloj, 10);
