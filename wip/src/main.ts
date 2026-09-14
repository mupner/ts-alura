let saldo: number = 3000

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement
elementoSaldo.textContent = saldo.toFixed(2) 

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement

elementoFormulario.addEventListener("submit", function(event) {
  event.preventDefault()

  if (!elementoFormulario.checkValidity()) {
  alert("Por favor, preencha todos os campos da transação");
  return;
}

const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement
const inputValor =  elementoFormulario.querySelector("#valor") as HTMLInputElement
const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement

let tipoTransacao = inputTipoTransacao.value
let valor = inputValor.valueAsNumber
let data = inputData.valueAsDate

if (tipoTransacao === "Depósito") {
  saldo += valor
} else if (tipoTransacao === "Transferência" || tipoTransacao === "Pagamento de Boleto") {
    saldo -= valor;
  } else {
    alert("Pagamento inválido!")
    return
  } 

elementoSaldo.textContent = saldo.toFixed(2)
  
  const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
  }
 
  elementoFormulario.reset()

  

 
})