var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var resultado = document.getElementById('resultado');

var btnSomar = document.getElementById('somar');
var btnSub = document.getElementById('sub');
var btnDiv = document.getElementById('div');
var btnMult = document.getElementById('mult');

btnSomar.addEventListener('click', function() {
    resultado.textContent = "Resultado: " + (parseFloat(num1.value) + parseFloat(num2.value));
});

btnSub.addEventListener('click', function() {
    resultado.textContent = "Resultado: " + (parseFloat(num1.value) - parseFloat(num2.value));
});

btnDiv.addEventListener('click', function() {
    resultado.textContent = "Resultado: " + (parseFloat(num1.value) / parseFloat(num2.value));
});

btnMult.addEventListener('click', function() {
    resultado.textContent = "Resultado: " + (parseFloat(num1.value) * parseFloat(num2.value));
});