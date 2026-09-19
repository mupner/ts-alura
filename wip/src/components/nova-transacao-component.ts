const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement
// let saldo: number = 3000

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
let data = inputData.valueAsDate
if (data === null) {
  alert("Informe uma data para a transação")
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

elementoSaldo.textContent = saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})
  
  const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
  }
 
  elementoFormulario.reset()
 
})