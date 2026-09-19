"use strict";
let saldo = 3000;
let dataAtual = new Date();
const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const elementoDataAtual = document.querySelector("block-saldo, time");
elementoDataAtual.textContent = dataAtual.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});
