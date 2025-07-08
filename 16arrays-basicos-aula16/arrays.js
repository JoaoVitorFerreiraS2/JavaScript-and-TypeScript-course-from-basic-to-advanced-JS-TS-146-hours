const testes = ['Jão', 'Luis', 'Maria', 1, true, null]; // Pode ser colocado qualquer tipo de dado dentro de uma lista
console.log(testes);

//              0        1           2
const nomes = ['Maria', 'Fernanda', 'Isabela']; //Cada nome dentro de uma lista é um indice

console.log(nomes[0]); // Pegando especificadamente o indice 0

// É possível fazer a adição assim: 

nomes[3] = 'Luiza';
console.log(nomes); // Assim, foi feita a nova adição de indice e valor ao mesmo [ 'Maria', 'Fernanda', 'Isabela', 'Luiza' ]

// Outra forma seria

nomes[nomes.length] = "Fernanda"; // Agora foi adicionado para mais 1 | [ 'Maria', 'Fernanda', 'Isabela', 'Luiza', 'Fernanda' ]
console.log(nomes);

// Outra forma, mas bem mais correta

nomes.push('Fábio'); // Sempre adiciona no fim
console.log(nomes);

nomes.unshift('Roberto'); // Adiciona no incio
console.log(nomes)

nomes.pop(); // Remove o indice do final 
console.log(nomes);

const removido = nomes.pop(nomes); // Também podemos colocar o elemento removido em uma outra váriavel
const removido2 = nomes.shift(nomes); // Também podemos remover o elemento do inicio

// Para excluir de vez, sem mexer no indice, podemos fazer:

// Array é considerado um objeto

console.log(nomes instanceof Array); // Verificar se é realmente uma Array