// Import é uma palavra reservada do JavaScript que serve para importar módulos, 
// ou seja, arquivos JavaScript que exportam funcionalidades, objetos, classes, etc. O import é usado para trazer 
// essas funcionalidades para o arquivo atual, permitindo que você utilize o código de outros arquivos sem precisar copiá-lo.

import { soma } from "./modulo1.js";

const numeros = [1, 2, 3, 4, 5, 10];
const resultado = soma(numeros);
console.log(resultado); 