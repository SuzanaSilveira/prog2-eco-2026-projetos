// Atividade 3
class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
  }
  
  desc() {
    return this.marca + " " + this.modelo + " " + this.ano
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, ano, portas) {
    super(marca, modelo, ano)
    this.portas = portas
  }
  
  desc() {
    return super.desc() + " (" + this.portas + " portas)"
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, ano, cc) {
    super(marca, modelo, ano)
    this.cc = cc
  }
  
  desc() {
    return super.desc() + " (" + this.cc + "cc)"
  }
}

function mostrar(v) {
  console.log(v.desc())
}


let carro1 = new Carro("Renault", "Kwid", 2018, 4)
let moto1 = new Moto("Honda", "Biz", 2020, 125)

mostrar(carro1)
mostrar(moto1)