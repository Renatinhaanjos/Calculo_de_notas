document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pegando os valores das notas
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    
    // Calculando a média
    var media = (nota1 + nota2 + nota3) / 3;
    
    // Exibindo o resultado
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 'A média é: ' + media.toFixed(2);

    // Verificando se o aluno foi aprovado ou reprovado
    if (media >= 7) {
        resultadoDiv.innerHTML += '<br>Aluno Aprovado!';
    } else {
        resultadoDiv.innerHTML += '<br>Aluno Reprovado!';
    }
});