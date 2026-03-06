// Atividade 6 
class Aluno {
  constructor(nome) {
    this.nome = nome
    this.notas = []
  }
  
  addNota(n) {
    if(n >= 0 && n <= 10) {
      this.notas.push(n)
    } else {
      console.log("nota invalida")
    }
  }
  
  calcularMedia() {
    if(this.notas.length == 0) return 0
    
    let soma = 0
    for(let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i]
    }
    return soma / this.notas.length
  }
  
  situacao() {
    let media = this.calcularMedia()
    if(media >= 7) {
      return "Aprovado"
    } else if(media >= 5) {
      return "Recuperacao"
    } else {
      return "Reprovado"
    }
  }
  
  mostrar() {
    console.log("Aluno: " + this.nome)
    console.log("Notas: " + this.notas)
    console.log("Media: " + this.calcularMedia().toFixed(1))
    console.log("Situacao: " + this.situacao())
    console.log("---------------")
  }
}


let aluno1 = new Aluno("Cristal")
aluno1.addNota(8)
aluno1.addNota(7.5)
aluno1.addNota(9)
aluno1.mostrar()

let aluno2 = new Aluno("Benjamin")
aluno2.addNota(4)
aluno2.addNota(5.5)
aluno2.addNota(3)
aluno2.mostrar()
