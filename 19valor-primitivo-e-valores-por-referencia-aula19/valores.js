/**
 * Dados Primitivos (imutáveis) <Não pode mudar>
 * string, number, boolean, undefined, null, (bugint, symbol) - Valores copiados
 */
//Exemplo

let nome = "Jão";
nome[0] = 'R';
console.log(nome[0], nome);

/**
 * Referências (mutável)
 * array, object, function - Passados por referência
 */

// Algo interessante a ser notado, se eu faço

let a = [1, 2, 3];
let b = a;
console.log(a, b) // Os dois são exatamente os mesmos
a[0] = 10; // Se eu altero somente o a
console.log(a, b) // Os dois são mudados, pois eles estão apontados para o mesmo espaço da memória, ou seja, o b não copia o a, somente aponta

// Para que seja copiado, deveria ser feito dessa forma
b = [...a]; // Assim você está copiando o array para outro array
a[1] = 465;

console.log(a, b) // Agora os dois tem valores diferentes. 
