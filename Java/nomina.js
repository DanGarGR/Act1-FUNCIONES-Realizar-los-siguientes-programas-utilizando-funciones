function calcularNomina() {
    // Obtener los valores ingresados por el usuario
    var trabajador1 = parseFloat(document.getElementById('trabajador1').value);
    var trabajador2 = parseFloat(document.getElementById('trabajador2').value);
    var trabajador3 = parseFloat(document.getElementById('trabajador3').value);
    var trabajador4 = parseFloat(document.getElementById('trabajador4').value);
    var trabajador5 = parseFloat(document.getElementById('trabajador5').value);

    // Calcular el total de la nómina sumando los sueldos de los trabajadores
    var totalNomina = trabajador1 + trabajador2 + trabajador3 + trabajador4 + trabajador5;

    // Mostrar el resultado
    document.getElementById('resultadoNomina').innerText = "Total de nómina a pagar: $" + totalNomina.toFixed(2);
}
