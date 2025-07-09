// Vamos ver sobre repetição, algo essencial em qualquer linguagem: for

// Vamos criar uma repetição

/**  Primeiro colocamos for no inicio, depois criamos uma váriavel dentro do for e a condição logo em seguida, 
 *assim finalizamos com o que ocorre se ainda não chegou na condição: for (let i = 0; i <=5; i++; ){}
*/

for (let i = 0; i <= 5; i++) {
    // Aqui vamos colocar tudo o que vai acontecer dentro do loop
    console.log(i)
}

// Acho que dessa forma fica mais legivel de ver

let n; // Criamos a váriavel
n <= 5; // Depois colocamos a condição
n++; // E adicionamos mais 1

// É muito utilizado em Arrays
const frutas = ["banana", "uva", "Pera"]

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}
