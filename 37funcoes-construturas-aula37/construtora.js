// Vamos entender o que é uma função construtora.

// Quando queremos pegar o horário atual, utilizamos de:

const data = new Date(); // Aqui criamos um novo objeto, mas percebe que esse <date> é um molde para a criação. E como fazemos isso? 
console.log(data.getHours() + ':' + data.getMinutes());

//              Colocamos paramestros se assim quisermos
function Pessoa(nome, sobrenome){ // Colocamos a primeira letra da funcion como maiuscula
    this.nome, 
    this.sobrenome
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('João', 'Vitor');


// Para exemplificar melhor, poderiamos até criar nossa próprio Math

function Calculadora(){ // Vou dar o nome de Calculadora
    this.soma = function(n1, n2){ // Usamos o <this> para a declaração
        return n1 + n2
    }
}

const n1 = new Calculadora();

console.log(n1.soma(1, 5))


// Acho que deu para entender