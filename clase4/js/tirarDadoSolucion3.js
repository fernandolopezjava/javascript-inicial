// ubicar elemento/s dentro del DOM
    var verDado = document.getElementById('verDado');

// generar función/es

    function tirarDado()
    {
        // generar un número aleatorio entre 0 y 1 con decimales
        var numeroAleatorio = Math.random();
            console.log(numeroAleatorio);

        // el número entre 1 y 6 con decimales
        var numeroModificado = (numeroAleatorio * 5) + 1;
            console.log(numeroModificado);

        // el número debe ser entre 1 y 6 sin decimales
        var numero = Math.round( numeroModificado );


        // mostrar imagen del dado
        verDado.innerHTML = '<img src="dados/dado' + numero + '.png">';
    }

    tirarDado();