"use strict";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    const elementoSaldo = document.querySelector(".saldo-valor .valor");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = inputData.valueAsDate;
    let saldo = 3000;
    if (tipoTransacao === "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao === "Transferência" || tipoTransacao === "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Pagamento inválido!");
        return;
    }
    elementoSaldo.textContent = saldo.toFixed(2);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    elementoFormulario.reset();
});
