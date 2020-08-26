//ubicar elemento dentro del DOM
var campoNombre = document.querySelector('input[name="nombre"]');
var errorNombre = document.querySelector('#errorNombre');

//generar funciones

function validar()
{
    if( campoNombre.value == '' ){
        //escribir una leyenda de error
        errorNombre.innerHTML = '<img src="imagenes/error.png"> Complete el campo Nombre';
        //evitamos enviar el email
        return false;
    }

    return true;
}