// Construtora -> Molde (Classe)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
    
}

// Instância 

const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');

console.dir(pessoa1);
console.dir(pessoa2);

// O problema disso é que cada objeto criado a partir da função construtora tem uma cópia da função nomeCompleto, 
// o que pode consumir mais memória do que o necessário.

// Para resolver isso, podemos usar o protótipo da função construtora para definir a função nomeCompleto, 
// assim todos os objetos criados a partir da função construtora compartilharão a mesma função nomeCompleto, economizando memória.

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.nomeCompleto = function(){ // Define a função nomeCompleto no protótipo da função construtora Pessoa2
    return this.nome + ' ' + this.sobrenome;
}

const pessoa3 = new Pessoa2('Luiz', 'O.');
const pessoa4 = new Pessoa2('Maria', 'A.');

console.dir(pessoa3);
console.dir(pessoa4);

// Assim, a função nomeCompleto é definida no protótipo da função construtora Pessoa2, 
// e todos os objetos criados a partir de Pessoa2 compartilharão a mesma função nomeCompleto, economizando memória.