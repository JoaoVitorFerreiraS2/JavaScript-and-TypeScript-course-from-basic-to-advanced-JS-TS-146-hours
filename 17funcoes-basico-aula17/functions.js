// Podemos abrir a função utilizando <function> e depois adicionamos o nome dela, e dentro dos (<parametros>)
function saudacao(nome) {
    console.log(`Hello ${nome}`)
    // Também conseguimos guardar na váriavel o retorno de qualquer dado da função, exemplo:
    return 123
}

saudacao('World'); // Chamando a função
saudacao('João'); // Podemos utilizar a vontade

const numero = saudacao('Fernando'); // Aqui pegamos o return, e podemos usar da forma que quisermos
console.log(numero); 

// vamos fazer uma função funcional

function soma(x, y){
    const resultado = x + y
    return resultado
}

console.log(soma(5, 5)); // O resultado no console será 10

// Lembrando que as váriaveis criadas dentro de uma função pode ser declarada fora dela, exemplo: 

function exemplo(numero){
    numero2 = 10;
    resultado = numero + numero2;
    return resultado;
}

numero2 = 5;
console.log(exemplo(numero2)); // Resultado será 15, usando os nomes para as duas váriaveis, pois, quando declarado na função, não se pode usar fora dela mesma

// Também é possivel adotar um valor padrão, caso ocorra de não ser enviado nenhum parametro para a função, exemplo:

function exemplo2 (n1 = 1){
    return n1;
}
console.log(exemplo2());

// Também podemos criar uma função anônima, exemplo:

const soma2 = function (n1 = 1, n2 = 2){ //Lembrando que funções não podem ter o mesmo nome
    return n1 + n2;
}

console.log(soma2(4, 5));

// Agora vamos para uma maneira mais moderna

const raiz = (n1) => {
    return n1 ** 0.5;
}

console.log(raiz(10))