// Filter

const numbers = [50, 0, 5, 80, 10, 15, 8, 15, 22, 27, 1, 2, 3, 4, 10, 15, 16];

// Sem utilizar o Filter

const numbers2Minor10 = [];

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] < 10){
        continue
    }
    else{
        numbers2Minor10.push(numbers[i])
    }
}

console.log(numbers2Minor10)

// Com o filter

const numbersFiltrados = numbers.filter((value) => value > 10); 
// O método filter é utilizado para criar um novo array com todos os elementos que passam por um teste implementado por uma 
// função fornecida. Ele recebe uma função de callback como argumento, que é chamada para cada elemento do array original. Se a função de callback retornar true, 
// o elemento é incluído no novo array filtrado.

console.log(numbersFiltrados);

// Outro exemplo
// Retornar as pessoas que tem nomes com 5 letras ou mais
// Retornar as pessoas com mais de 50 anos
// Retornar as pessoas cujo o nome termina com A


const pessoas = [
    {nome: 'João', idade: 20},
    {nome: "Eduardo", idade: 60},
    {nome: "Anderson", idade: 25},
    {nome: "Felipe", idade: 35},
    {nome: "Emanuel", idade: 78}, 
    {nome: "Maria", idade: 22},
    {nome: "Ana", idade: 18},
    {nome: "Carlos", idade: 40},
    {nome: "Beatriz", idade: 54},
    {nome: "Bruna", idade: 32},
    {nome: "Gustavo", idade: 24},
    {nome: "Fernanda", idade: 29},
    {nome: "Ricardo", idade: 50},
    {nome: "Larissa", idade: 51},
]

function callBackFilter(nomes){
    let nome = nomes.nome
    let idade = nomes.idade

    if (nome.length >= 5){
        if (idade >= 50){
            return true; 
        }
    }
    
}

const numbersFiltrados2 = pessoas.filter((callBackFilter))

console.log(numbersFiltrados2)