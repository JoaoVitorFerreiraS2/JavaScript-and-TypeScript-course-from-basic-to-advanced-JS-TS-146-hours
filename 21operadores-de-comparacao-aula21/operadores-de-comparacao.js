/**
 * Operadores de comparação
 * > Maior que
 * >= Maior ou igual a
 * < Menor que
 * <= Menor ou igual a
 * == igualdade (valor)
 * === igualdade estrita (valor e tipo)
 * != diferente de (valor)
 * !== diferente estrito de (valor e tipo)
 */

const n1 = 10;
const n2 = 14;

console.log(n1 > n2); // O console retornara um valor boolean, ou seja (true ou false)
console.log(n1 < n2);
console.log(n1 <= n2);
console.log(n1 >= n2);

console.log(n1 == n2);
console.log(n1 != n2);

// Mas uma coisa curiosa é que utilizando == e !=, você basicamente está comparando dois valores mesmo um sendo string e o outro number, tipo:

console.log(n1 == n1.toString()); // Perceba que transformei o number em string, e ainda continua dando true

// Por isso o mais correto é usar === ou !== 

console.log(n1 === n1.toString()); // Perceba que agora é false

