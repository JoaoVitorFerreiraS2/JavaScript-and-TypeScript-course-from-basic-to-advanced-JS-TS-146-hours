/**
 * Operadores lógicos
 * && -> AND =  E
 * || -> OR = OU
 * ! -> NOT = NÃO
 */

// O && serve para verificar se o valores pré requisitados são true, se forem, retornar true, se não retorna false, exemplo:
// Para eu ir a praia, preciso está com vontade e o dia fazendo sol: Eu estava com vontade? (true), estava fazendo sol? (true), ou seja, vou a praia (true)

let praiaComSol = true;
let minhaVontade =true;

let vouSairDeCasa = praiaComSol && minhaVontade

console.log(vouSairDeCasa); // O console retornára valor boolean

// Mas se acabar chovendo

praiaComSol = false;
vouSairDeCasa = praiaComSol && minhaVontade

console.log(vouSairDeCasa);

// Agora referente ao ||, seria se: Eu só vou sair se pagarem para mim, ou se eu tiver dinheiro.

let tenhoDinheiro = false;
let vaoPagarParaMim = true;

vouSairDeCasa = tenhoDinheiro || vaoPagarParaMim
console.log(vouSairDeCasa); // Deve retornar true, porque vão pagar para mim

// O ! vai negar uma expressão, exemplo: 

console.log(!true); // Vai sair falso
console.log(!false); //Vai sair verdadeiro