"use strict";
let valor = 3000;
let nome = "oi";
let isPago = false;
let qualquer = 555;
valor = 1;
nome = "cachorro";
isPago = true;
qualquer = 43534;
const lista = [];
lista.push(13, 444, 45, 56, 87.87);
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 500,
};
