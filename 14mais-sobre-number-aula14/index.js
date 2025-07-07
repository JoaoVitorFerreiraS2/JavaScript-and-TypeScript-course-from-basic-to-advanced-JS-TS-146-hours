let n1 =  1; // number
let n2 = 2.512312321; // number

console.log(n1.toString + n2.toString); // Também é possível transformar de número para String

console.log(n1 + n2.toFixed(4)); // toFixed serve para delimitar as casas do valor

console.log(Number.isInteger(n2)); // O isInteger é utilizado para verificar se o número é inteiro

console.log(Number.isNaN(n1)); // Verificar se o valor é inválido 