function calcularSuperficie() {
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;
    var superficie = (base * altura) / 2;
    document.getElementById('resultado').innerText = "La superficie del triángulo es: " + superficie;
}
