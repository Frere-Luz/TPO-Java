function comprarTickets() {
    var cantTickets,
        total,
        categoria,

        cantTickets = document.getElementById('cantidad').value;
    categoria = document.getElementById('categoria').value;

    cantTickets > 0
    if (categoria == 'estudiante') {

        total = parseFloat(200 - (200 * 0.8)) * cantTickets   //160dto*1entrada
        document.getElementById('pagoTotal').innerHTML =
            'Total a Pagar:$' + total;
    } else if (categoria == 'trainee') {

        total = parseFloat(200 - (200 * 0.5)) * cantTickets //100dto*1entrada
        document.getElementById('pagoTotal').innerHTML =
            'Total a Pagar:$' + total;
    } else if (categoria == "junior") {

        total = parseFloat(200 - (200 * 0.15)) * cantTickets   //30dto*1entrada
        document.getElementById('pagoTotal').innerHTML =
            'Total a Pagar:$' + total;
    } else {
        window.alert = 'Ingrese la cantidad de entradas'
    }

}


function borrar() {
    document.getElementById('nombre').value = ' ';
    document.getElementById('apellido').value = ' ';
    document.getElementById('email').value = ' ';
    document.getElementById('cantidad').value = ' ';
    document.getElementById('categoria').value = 'Estudiante';
    document.getElementById('pagoTotal').innerHTML = 'Total a Pagar: $';
}
document.getElementById(formulario).innerHTML = formulario.nombre + "," + formulario.apellido + "," + formulario.correo + "," + formulario.cantidad + "," + formulario.categoria;