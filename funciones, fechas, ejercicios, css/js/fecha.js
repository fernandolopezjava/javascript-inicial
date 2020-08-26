//ubicar elemento dentro del DOM

    var frase = document.getElementById('frase');

    var fecha = new Date();

    var diaMes = fecha.getDate();
    var mes = fecha.getMonth()+1;
    var anio = fecha.getFullYear();

        frase.innerText = diaMes + '/' + mes + '/' + anio;
