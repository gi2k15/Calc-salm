function formatarTempo(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segundosRestantes = (segundos % 60).toFixed(0);

    let partes = [];
    if (horas > 0) partes.push(`${horas} horas`);
    if (minutos > 0) partes.push(`${minutos} minutos`);
    if (segundosRestantes > 0) partes.push(`${segundosRestantes} segundos`);

    return partes.join(", ").replace(/,([^,]*)$/, " e$1");
}

function calcular() {
    event.preventDefault(); // Previne o envio do formulário

    // Remove o foco dos campos de entrada para fechar o teclado
    document.getElementById("peso").blur();
    document.getElementById("agua").blur();

    let peso = parseFloat(document.getElementById("peso").value);
    let agua = parseFloat(document.getElementById("agua").value);

    if (peso <= 0 || agua <= 0 || isNaN(peso) || isNaN(agua)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let sal = agua * 0.1; // 10% de sal na água
    let tempo = ((peso * 7) / 100) * 60; // 7 min para cada 100g. Tempo em segundos

    document.getElementById("resultado-tempo").innerText = `Tempo de salmoura: ${formatarTempo(tempo)}`;
    document.getElementById("resultado-sal").innerText = `Quantidade de sal: ${sal.toFixed(2)} g`;

    document.getElementById("resultados-div").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    let pesoInput = document.getElementById("peso");
    let aguaInput = document.getElementById("agua");
    let resultadosDiv = document.getElementById("resultados-div");

    let esconderResultados = function() {
        resultadosDiv.style.display = "none";
    }

    pesoInput.addEventListener("input", esconderResultados);
    aguaInput.addEventListener("input", esconderResultados);
});