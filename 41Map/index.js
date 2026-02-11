// Map

// Dobrar os números
const numbers = [5, 50, 80, 30, 2, 3, 8, 7, 11, 15, 22, 27];
console.log(numbers);   
// Sem utilizar o Map

let numbers2 = [];

for (let i=0; i < numbers.length; i++){
    
    numbers2.push(numbers[i] * 2);
}

console.log(numbers2);

// Com o Map

const numerosDobro = numbers.map((value) => value * 2); // O método map é utilizado para criar um novo array com os resultados da chamada de uma função para 
// cada elemento do array original. Ele recebe uma função de callback como argumento, que é chamada para cada elemento do array original, 
// e o valor retornado pela função de callback é adicionado ao novo array mapeado.

console.log(numerosDobro);