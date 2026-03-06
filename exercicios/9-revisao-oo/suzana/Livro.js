// Atividade 4
class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo
    this.autor = autor
    this.emprestado = false
  }
}

class User {
  constructor(nome) {
    this.nome = nome
    this.meusLivros = []
  }
  
  pegar(livro) {
    if(livro.emprestado == true) {
      console.log("ja emprestado")
      return
    }
    livro.emprestado = true
    this.meusLivros.push(livro)
    console.log(this.nome + " pegou " + livro.titulo)
  }
  
  devolver(livro) {
    for(let i = 0; i < this.meusLivros.length; i++) {
      if(this.meusLivros[i].titulo == livro.titulo) {
        this.meusLivros.splice(i, 1)
        livro.emprestado = false
        console.log("devolveu " + livro.titulo)
        return
      }
    }
  }
  
  listar() {
    console.log(this.nome + " tem:")
    for(let l of this.meusLivros) {
      console.log("- " + l.titulo)
    }
  }
}


let livro1 = new Livro("Percy Jackson", "Rick")
let livro2 = new Livro("Harry Potter", "Rowling")

let user = new User("Rose")
user.pegar(livro1)
user.pegar(livro2)
user.listar()
user.devolver(livro1)
user.listar()