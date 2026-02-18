// Async/await é uma forma mais moderna e legível de lidar com Promises em JavaScript.
// Ele permite que você escreva código assíncrono de maneira mais síncrona, usando as palavras-chave "async" e "await".
// A palavra-chave "async" é usada para declarar uma função assíncrona, que retorna uma Promise.
// A palavra-chave "await" é usada para esperar a resolução de uma Promise dentro de uma função assíncrona.

function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return
        }, tempo);
    });
};

// Sem async/await

// esperaAi('Frase 1', rand(1, 3))
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Frase 2', rand(1, 3));
//     }).then(valor => {
//         console.log(valor);
//         return esperaAi('Frase 3', rand(1, 3));
//     }).then(valor => {
//         console.log(valor);
//     }).catch(e => {
//         console.log('ERRO:', e);
//     });

// Com async/await

async function executa() {

    try {
        const fase1 = await esperaAi('Frase 1', rand(1, 3));
        console.log(fase1);
        const fase2 = await esperaAi('Frase 2', rand(1, 3));
        console.log(fase2);
        const fase3 = await esperaAi('Frase 3', rand(1, 3));
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch (e) {
        console.log('ERRO:', e);
    }
    
};

executa();