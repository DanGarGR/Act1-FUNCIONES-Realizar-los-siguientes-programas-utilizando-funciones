function calcularPromedio() {
    var materia1 = parseFloat(document.getElementById('materia1').value);
    var materia2 = parseFloat(document.getElementById('materia2').value);
    var materia3 = parseFloat(document.getElementById('materia3').value);

    var promedio = (materia1 + materia2 + materia3) / 3;
    document.getElementById('resultadoPromedio').innerText = "El promedio del alumno es: " + promedio.toFixed(2);
}
