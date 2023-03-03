// 1) Construindo um objeto com atributos e metodos:
const pessoa = {
    //ATRIBUTOS
    nome:'Lucas',
    sobrenome:'Lourenção',
    idade:35,

    // 2) Construindo o objeto com métodos:
    //MÉTODOS:
    fala(){
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos e está dizendo olá!`)
    },

    incrementaIdade(){
        this.idade = this.idade + 1;
        console.log(`Parabéns ${this.nome}!, hoje você está fazendo ${this.idade} ano de idade!`)
    }
};

// 3) Executando os métodos do objeto pessoa:

// 3.1) Executadno o método fala:
pessoa.fala();

// 3.2) Executando o método idade:
pessoa.incrementaIdade();

