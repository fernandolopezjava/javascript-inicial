// ubicar elemento/s dentro del DOM
    var verDado = document.getElementById('verDado');
    var dado = document.getElementById('dado');

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
        if( numero == 1 ){
            dado.src = 'dados/dado1.png';
        }
        else if( numero == 2 ){
            dado.src = 'dados/dado2.png';
        }
        else if( numero == 3 ){
            dado.src = 'dados/dado3.png';
        }
        else if( numero == 4 ){
            dado.src = 'dados/dado4.png';
        }
        else if( numero == 5 ){
            dado.src = 'dados/dado5.png';
        }
        else{
            dado.src = 'dados/dado6.png';
        }
    }

    tirarDado();