// ubicar elemento dentro del DOM

    var caja = document.getElementById('caja');

// generar función
    function cambiarColor()
    {
        //variables para las luces
        var rojo = Math.round( Math.random() * 255 );
            console.log('r:' + rojo);
        var verde = Math.round( Math.random() * 255 );
            console.log('g:' + verde);
        var azul = Math.round( Math.random() * 255 );
            console.log('b:' + azul);

        // cambiar color
        caja.style.backgroundColor = 'rgb('+rojo+', '+verde+', '+azul+')';
    }

    cambiarColor();

    setInterval( cambiarColor, 300 );

