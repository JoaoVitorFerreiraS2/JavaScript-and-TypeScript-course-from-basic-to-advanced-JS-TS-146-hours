// Vamos falar um pouco sobre objetos

const nome01 = "Fernando";
const sobrenome01 = "Oliveira";
const idade01 = 16;

// Imagine que você tenha 100 pessoas, vai precisar fazer isso a cada pessoa? Por isso criamos objetos, pois, podemos relacionar os objetos



const pessoa1 = {
    // Estamos agora dentro do objeto, e declaramos as informações aqui
    nome: 'Fernando',
    sobrenome: 'Oliveira',
    idade: 15
    // Percebe, temos agora o objeto "pessoa" incluindo informações importantes dela mesma, como: nome, sobrenome, idade
}

//E para mostrarmos esse objeto, podemos utilizar:
console.log(pessoa1);
// Mas eu quero pegar só o nome, como faz?
console.log(pessoa1.nome); //Simples, e lógico

// E se criasssemos funções que criam objetos? 

function criadorObjetos(nome, sobrenome, idade){
    return {
        nome: nome, 
        sobrenome: sobrenome, 
        idade: idade
    }
}

const pessoa2 = criadorObjetos('Larissa', 'Felina', 16); //Não foi possível utilizar pessoa1 aqui porque já declaramos essa váriavel lá em cima
console.log(pessoa2);
console.log(pessoa2.nome);

// Também é possível criar funções dentro do objeto, dessa forma:

const carros = {
    //Definimos os dados do objeto
    marca: 'Ferraria',
    cor: 'vermelha',
    placa: 'MNKD795',

    // Criamos uma função
    mostrar (){
        // E para se referenciar aos dados do objeto, podemos utilizar o <this>
        console.log(this.marca)
        console.log(this.cor)
        console.log(this.placa)
    }
};

carros.mostrar(); // E para se referenciarmos a função, colocamos primeiramente o objeto que está a função, e logo após, a ela mesma