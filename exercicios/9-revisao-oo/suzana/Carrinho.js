// Atividade 2
class Carrinho {
  #itens = []
  
  constructor(cliente) {
    this.cliente = cliente
  }
  
  add(item, preco, qtd) {
    if(qtd <= 0) {
      console.log("quantidade invalida")
      return
    }
    this.#itens.push({
      nome: item,
      preco: preco,
      quantidade: qtd
    })
  }
  
  remove(item) {
    for(let i = 0; i < this.#itens.length; i++) {
      if(this.#itens[i].nome == item) {
        this.#itens.splice(i, 1)
        console.log("item removido")
        return
      }
    }
  }
  
  total() {
    let soma = 0
    for(let item of this.#itens) {
      soma += item.preco * item.quantidade
    }
    return soma
  }
  
  verCarrinho() {
    console.log("Carrinho de " + this.cliente)
    for(let item of this.#itens) {
      console.log(item.nome + " - " + item.quantidade + "x R$" + item.preco)
    }
    console.log("Total: R$" + this.total())
  }
}

// testando
let car = new Carrinho("João")
car.add("Mouse", 50, 2)
car.add("Teclado", 120, 1)
car.verCarrinho()
car.remove("Mouse")
car.verCarrinho()