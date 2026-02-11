
// Criando um array utilizando um construtor Array

// const nomes = new Array();

// nomes[0] = 'João';
// nomes[1] = 'Maria';
// nomes[2] = 'José';

// console.log(nomes);

// Método splice

const nomes = ['João', 'Maria', 'José', 'Ana', 'Carlos'];

const removidos = nomes.splice(2, 1) // O primeiro número é o índice, o segundo é a quantidade de elementos a serem removidos a partir do índice

console.log(nomes);
console.log(removidos);

const nomes2= ['João', 'Maria', 'José', 'Ana', 'Carlos'];

const removidos2 = nomes2.splice(-2, Number.MAX_VALUE); // O número negativo indica que a contagem deve ser 
// feita a partir do final do array, ou seja, -1 é o último elemento, -2 é o penúltimo, e assim por diante. 
// O Number.MAX_VALUE é um valor muito grande que garante que todos os elementos a partir do índice especificado sejam removidos.

console.log(nomes2);

// Também podemos remover o elemento e logo em seguida adicionar um novo elemento no mesmo índice

const nomes3 = ['João', 'Maria', 'José', 'Ana', 'Carlos'];

const removidos3 = nomes3.splice(2, 1, 'Pedro'); // O terceiro argumento é o elemento a ser adicionado no índice especificado

console.log(nomes3);

// E também existe formas de concatenar arrays utilizando o método concat

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2); // O método concat é utilizado para concatenar dois ou mais arrays, 
// retornando um novo array que contém os elementos de todos os arrays concatenados.

console.log(array3);