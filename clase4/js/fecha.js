// mostrar día de la semana en el span "Martes"
// 1- crear un array con los nombres de los días de la semana
// 2- en la función mostar fecha:
//      escribir en el span el nombre del día de la semana
//      usando un elemento del array

// ubicar elemento dentro del DOM
    var span = document.getElementsByTagName('span');
    // var span = document.getElementById('verFecha');
//generar función
    function mostarFecha()
    {
        var fecha = new Date(); // objeto de fecha
        var numDiaSemana = fecha.getDay(); // 0 Domingo, 1 Lunes ...
        if( numDiaSemana == 0 ){
            span[0].innerText = 'Domingo';
            //span.innerText = 'Domingo'; // usando getElementById()
        }
        else if( numDiaSemana == 1 ) {
            span[0].innerText = 'Lunes';
            //span.innerText = 'Lunes'; // usando getElementById()
        }
    }