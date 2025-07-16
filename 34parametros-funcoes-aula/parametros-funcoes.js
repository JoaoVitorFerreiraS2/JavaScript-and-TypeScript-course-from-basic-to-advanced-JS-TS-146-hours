// Parametros de funções, o que acontece se eu fizer isso?


function funcao(valor) {
    console.log(valor)
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9); // Onde foi parar os outros valores dados para a função. 

// Na verdade eles ainda estão lá, podemos até pegar um valor especifico

function funcao2() { // Criamos uma função sem parametro
    console.log(arguments[9]); // E depois usamos a paravra arguments para pegar qualquer coisa alocada junto a função.
}

funcao2(1, 2, 3, 4, 5, 6, 7, 8, 9, 'estou aqui');

// Também é possível mostrar todos os argumentos usando o for, e até fazer a soma de números


function funcao3() {
    let total = 0
    let argumentos = arguments; // Criamos a váriavel que vai obter os arguments

    for (let argumento of arguments) { // Ele vai fazer uma conta brabissima aqui
        total += argumento
    }
    console.log(total)
}

funcao3(1, 2, 3, 4, 5, 6, 7, 8, 9);

// E até conseguimos fazer um mini calculadora aqui

function calculadora(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') {
            acumulador += numero
        }

        if (operador === '-') {
            acumulador -= numero
        }

        if (operador === '/') {
            acumulador /= numero
        }

        if (operador === '+') {
            acumulador *= numero
        }

        console.log(acumulador)
    }
}