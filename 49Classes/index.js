// Classe
// O que é uma classe? 
// Classe é um molde para criar objetos. 
// Ela define as propriedades e métodos que os objetos criados a partir dela terão.
// Ela é bem parecida com uma função construtora, mas com uma sintaxe mais simples e clara.


class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        return console.log(`Olá senhor ${this.nome + ' ' + this.sobrenome}`)
    }
}

const p1 = new Pessoa("João", "Vitor");

console.log(p1.falar());