// Aluna: Anne Izabelle. Curso: Ciência da Computação.

function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9;
    }
    return valorTotal;
}

function exibirResumo() {
    let preco = parseFloat(prompt("Digite o preço unitário do produto:"));
    let quantidade = parseInt(prompt("Digite a quantidade adquirida:"));

    if (isNaN(preco) || isNaN(quantidade) || preco <= 0 || quantidade <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let valorTotal = calcularTotal(preco, quantidade);
    let valorComDesconto = aplicarDesconto(valorTotal);

    let resumoDiv = document.getElementById("resumo");

    resumoDiv.innerHTML = `
        <h2>Resumo da Aquisição:</h2>
        <p><strong>Quantidade de produtos:</strong> ${quantidade}</p>
        <p><strong>Valor total antes do desconto:</strong> R$ ${valorTotal.toFixed(2)}</p>
        <p><strong>Valor final com desconto:</strong> R$ ${valorComDesconto.toFixed(2)}</p>
    `;
}

// Professor, a parte abaixo é para garantir que o código funcione após o carregamento completo da página
window.onload = function () {
    exibirResumo();
};
