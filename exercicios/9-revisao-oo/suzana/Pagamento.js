// Atividade 5
class Pagamento {
  constructor(valor) {
    this.valor = valor
    this.status = "pendente"
  }
}

class Cartao extends Pagamento {
  constructor(valor, vezes) {
    super(valor)
    this.vezes = vezes
  }
  
  processar() {
    let parcela = this.valor / this.vezes
    console.log("Cartao: R$" + this.valor + " em " + this.vezes + "x de R$" + parcela)
    this.status = "aprovado"
  }
}

class Pix extends Pagamento {
  processar() {
    console.log("Pix: R$" + this.valor + " - codigo gerado")
    this.status = "aprovado"
  }
}

class Boleto extends Pagamento {
  processar() {
    console.log("Boleto: R$" + this.valor + " - vence em 3 dias")
    this.status = "pendente"
  }
}

function pagar(p) {
  p.processar()
  console.log("Status: " + p.status)
  console.log("---")
}


let p1 = new Cartao(400, 1)
let p2 = new Pix(100)
let p3 = new Boleto(200)

pagar(p1)
pagar(p2)
pagar(p3)