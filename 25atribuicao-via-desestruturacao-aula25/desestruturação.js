// Podemos fazer outra coisa legal com Arrays, observe


letras = ['A', 'B', 'C', 'D', 'E', 'F'] // Uma array simples correto? 

// Poderiamos atribuir a letra utilizando de uma váriavel, vamos fazer isso, mas dessa forma:

// Criamos as váriaveis

// Criamos as váriaveis dessa forma dentro da array, e depois indicamos o array com as informações, agora cada váriavel dentro do array terá um valor
const [primeiraLetra, segundaLetra] = letras; // A váriavel sempre vai pegar o valor na ordem do array

console.log(primeiraLetra, segundaLetra)

// Mas ainda sobrou muitas letras, como podemos pegar o resto?

//Simples
                                 // Usamos ... para informar que queremos o que sobrou na váriavel a frente, como no exemplo, resto.
const [terceiraLetra, quartaLetra, ...resto] = letras;
console.log(resto)


// Mas e se eu quiser pular os valores? Simples, vamos usar outro exemplo

numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [n1, , n2, , n3] = numero; // Basicamente damos um espaço na onde não queremos pegar