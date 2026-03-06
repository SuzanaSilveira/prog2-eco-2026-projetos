//Atividade 1 - Classe Curso
class Curso {
    constructor(nome, cargaHoraria) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
    }

    set nome(valor) {
        if (!valor?.trim()) throw new Error('Nome do curso é obrigatório');
        this._nome = valor;
    }
    get nome() { return this._nome; }

    set cargaHoraria(valor) {
        if (!valor || valor <= 0) throw new Error('Carga horária deve ser positiva');
        this._cargaHoraria = valor;
    }
    get cargaHoraria() { return this._cargaHoraria; }
}

// Classe Estudante
class Estudante {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }

    set nome(valor) {
        if (!valor?.trim()) throw new Error('Nome do estudante é obrigatório');
        this._nome = valor;
    }
    get nome() { return this._nome; }

    set matricula(valor) {
        if (!valor?.trim()) throw new Error('Matrícula é obrigatória');
        this._matricula = valor;
    }
    get matricula() { return this._matricula; }
}

// Classe Turma
class Turma {
    constructor(curso) {
        if (!(curso instanceof Curso)) throw new Error('Curso inválido');
        this._curso = curso;
        this._estudantes = [];
    }

    get curso() { return this._curso; }
    get estudantes() { return [...this._estudantes]; }

    adicionarEstudante(estudante) {
        if (!(estudante instanceof Estudante)) throw new Error('Estudante inválido');
        if (this._estudantes.some(e => e.matricula === estudante.matricula)) {
            throw new Error(`Matrícula ${estudante.matricula} já existe`);
        }
        this._estudantes.push(estudante);
    }

    removerEstudante(matricula) {
        const index = this._estudantes.findIndex(e => e.matricula === matricula);
        if (index === -1) throw new Error('Estudante não encontrado');
        this._estudantes.splice(index, 1);
    }

    listarEstudantes() {
        return this._estudantes.length ? 
            this._estudantes.map(e => `${e.nome} (${e.matricula})`).join('\n') : 
            'Nenhum estudante';
    }
}


try {
    const curso = new Curso('JavaScript', 40);
    const turma = new Turma(curso);
    
    turma.adicionarEstudante(new Estudante('João', '123'));
    turma.adicionarEstudante(new Estudante('Maria', '456'));
    
    console.log('Estudantes:');
    console.log(turma.listarEstudantes());
    
} catch (erro) {
    console.log('Erro:', erro.message);
}