// Promises
// Promises são uma forma de lidar com operações 
// assíncronas em JavaScript. Elas representam um valor que 
// pode estar disponível agora, no futuro ou nunca. 
// Uma Promise pode estar em um dos 
// seguintes estados: pendente, resolvida ou rejeitada.

// Antigamente usávamos callbacks para lidar com operações 
// assíncronas, mas isso pode levar a um código difícil de ler e manter,
// conhecido como "callback hell". As Promises ajudam a evitar 
// esse problema, permitindo encadear operações assíncronas de 
// forma mais clara e legível.

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    //Promise é uma função construtora, ou seja, precisa ser instanciada com o operador new
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject('BAD VALUE');
            return;
        } 
        setTimeout(() => {
            resolve(msg + ' Passei na promise');
            return;
        }, tempo);
    }); 
    
}

// esperaAi('Frase 1', rand(1, 3)).then(resposta => {
//     console.log(resposta);
//     return esperaAi('Frase 2', rand(1, 3));

// }).then(resposta => {
//     console.log(resposta)
//     return esperaAi ('Frase 3', rand(1, 3));
// }).then(resposta => {
//     console.log(resposta)
// })
// .catch(e => {
//     console.log(e)
// })

// then é usado para lidar com o resultado de uma Promise resolvida,
// enquanto catch é usado para lidar com erros ou rejeições. 
// Exemplo: .then(resposta => console.log(resposta)).catch(erro => console.error(erro));

// O catch é opcional, mas é recomendado para lidar com erros de forma adequada.

// Promise.all, Promise.race, Promise.resolve Promisse.reject

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    esperaAi('teste', 1000),
    'Outro valor'
];

Promise.all(promises).then(function(valor){ 
// Promise.all espera todas as promessas serem resolvidas e 
// retorna um array com os resultados
    console.log(valor)
}).catch(function(erro){
    console.log(erro)
// Caso uma promessa de erro, o catch irá capturar o erro e exibir a mensagem de erro ignorando os outros resultados
})

Promise.race(promises).then(function(valor){
// Promise.race retorna o resultado da primeira promessa que for resolvida, seja ela bem-sucedida ou rejeitada. Ignorando as 
// outras promessas
    console.log(valor);
}).catch(function(erro){
    console.log(erro)
});

function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Página em cache');
        // Promise.resolve é usado para criar uma promessa que já está resolvida com um valor específico.
    } else {
        return esperaAi('Baixei a página', 3000);
    }
};

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => {
    console.log(e);
});