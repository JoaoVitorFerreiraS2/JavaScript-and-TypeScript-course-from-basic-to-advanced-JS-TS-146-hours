// Agora existe algo mais interessante

/**
 * continue
 * break
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros){

    if (numero === 2){
        console.log('Pulei o número 2');
        continue
        // Quando ele achar o número dois, ele vai ignorar o que estiver abaixo e retorna o loop lá em cima
    }

    console.log(numero)
}

for (let numero of numeros){
    if (numero === 7){
        console.log('Achei o número 7');
        break
        // Ele sai do loop quando encontra o resultado
    }
    console.log(numero)
}