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
  const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement

let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao
let valor = inputValor.valueAsNumber
let saldo: number = 3000
let data: Date = new Date(inputData.value)
if (!data) {
  alert("Por favor, insira uma data válida")
  return
}


if (tipoTransacao === TipoTransacao.DEPOSITO) { 
  saldo += valor
} else if (tipoTransacao === TipoTransacao.TRANSFERENCIA || tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
    saldo -= valor;
  } else {
    alert("Pagamento inválido!")
    return
  } 

elementoSaldo.textContent = saldo.toFixed(2)
  
  const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
  }
 
  elementoFormulario.reset()
 
})