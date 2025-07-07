// Aprendendo sobre const

//Const não pode ser criado sem um valor já especificado, ou futuramente alteraro da mesma forma

const nome = 'João';

//Utilizarei uma forma para adicionar a váriavel, mas mais para frente será mostrado outro jeito, que seria o mais correto

console.log(nome, "Vitão nasceu em 1984");
console.log("Em 2000", nome,  "conheceu Maria");
console.log(nome, "João casou-se com Maria em 2012");
console.log("Maria teve 1 filho com", nome,  "em 2015");
console.log("O filho de", nome, "se chama Eduardo");


//Também podemos declarar váriaveis sem receber nada

const nome1 = 'qualquer valor';
console.log(nome1); //O retorno será de undefined

// Não pode re-declarar mais de uma vez a váriavel

//Outra coisa referente a linguagem, não podemos criar váriaveis com palavras reservadas como: if, else
//É recomendado que as váriaveis sempre tenham nomes significativos 
//Variaveis não podem começar com números
//Variaveis também não podem conter traços ou espaços
//Utilizamos para fazer as váriaveis o camelCase, ou seja, a primeira palavra minuscula e a outra maiscula, assim por diante. 
//RECOMENDO Utilizar const do que var. 

const nomeClient = "Exemplo";

// Uma coisa interessante é deixar a váriavel const fixa 


