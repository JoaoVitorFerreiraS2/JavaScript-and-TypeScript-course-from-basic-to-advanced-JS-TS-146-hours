// Manipulação de String

//               01234567
let umaString = "Um texto";

console.log(umaString.charAt(6)); // Pegar um caractere na string

console.log(umaString.indexOf('texto')); // Informa em qual indice começa o texto

console.log(umaString.indexOf('texto')); // Informa em qual indice começa o texto

console.log(umaString.lastIndexOf('o')) // Começa de trás para frente mas é a mesma coisa que o de cima

console.log(umaString.match(/[a-z]/g)); //Referente a expressões regulares, não será abordado a fundo

console.log(umaString.search(/x/)); // Procura literalmente a letra

console.log(umaString.replace('Um', 'Outra')); //Serve para trocar de lugar as palavras 

let segundaString = "O rato roeu a roupa do rei de roma";

console.log(segundaString.replace('r', '#')); // Ele só vai pegar a primeira letra, agora se você quer todos os R, utilize o <g>
console.log(segundaString.replace(/r/g, '#'));

console.log(segundaString.length); // Podemos ver a quantidade caracteres tem na váriavel;

console.log(segundaString.slice(2, 5)); //Fatia, pegando de um indice ao outro, também é possível utilizar número negativo sendo de trás para frente

console.log(segundaString.split(' ')); //Você pode dividir as palavras utilizando split e o caracter que você quer que separe