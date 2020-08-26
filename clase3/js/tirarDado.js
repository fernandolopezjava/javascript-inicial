// ubicar elemento/s dentro del DOM
    var verDado = document.getElementById('verDado');

// generar función/es

    function tirarDado()
    {
        // generar un número aleatorio
        var numeroAleatorio = Math.random();
        // el número debe ser entre 1 y 6
        var numero = Math.round( (numeroAleatorio * 5) + 1 );


        // mostrar imagen del dado
        verDado.innerText = numero;
    }

    tirarDado();