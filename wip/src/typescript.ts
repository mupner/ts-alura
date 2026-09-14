let valor: number = 3000
let nome: string = "oi"
let isPago: boolean = false
let qualquer: any = 555
valor = 1
nome = "cachorro"
isPago = true
qualquer = 43534

const lista: number[] = []

lista.push(13, 444, 45, 56, 87.87)

enum TipoTransacao {
  DEPOSITO = "Depósito",
  TRANSFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de boleto"
}

type Transacao = {
  tipoTransacao: TipoTransacao,
  data: Date,
  valor: number
}

const novaTransacao: Transacao= {
  tipoTransacao: TipoTransacao.DEPOSITO,
  data: new Date(),
  valor: 500,
}