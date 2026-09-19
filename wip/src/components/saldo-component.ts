let saldo: number = 3000
let dataAtual: Date = new Date()

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement
elementoSaldo.textContent = saldo.toLocaleString("pt-BR", { style: "currency", currency:"BRL"})

const elementoDataAtual = document.querySelector("block-saldo, time") as HTMLElement

elementoDataAtual.textContent = dataAtual.toLocaleDateString("pt-BR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
})