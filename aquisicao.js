// Aluna: Anne Izabelle. Curso: Ciência da Computação.

function calcularTotal(preco, quantidade) {
    console.log("Preço unitário:", preco);
    console.log("Quantidade de produtos:", quantidade);
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


    console.log("Resumo da aquisição:");
    console.log("Quantidade de produtos:", quantidade);
    console.log("Valor total antes do desconto: R$", valorTotal.toFixed(2));
    console.log("Valor final com desconto: R$", valorComDesconto.toFixed(2));
}

window.onload = function () {
    exibirResumo();
};
