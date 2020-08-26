//ubicar elemento/s dentro del DOM

    var caja = document.getElementById('caja');

//generar función/es

    function ocultar()
    {
        //caja.style.visibility = 'hidden';
        //caja.style.opacity = 0;
        caja.style.display = 'none';
    }

    function mostrar()
    {
        //caja.style.visibility = 'visible';
        //caja.style.opacity = 1;
        caja.style.display = 'block';
    }

    function mostrarOcultar()
    {
        if( caja.style.display == 'block' ){
            //caja.style.display = 'none';
            ocultar();
        }
        else {
            //caja.style.display = 'block';
            mostrar();
        }
    }