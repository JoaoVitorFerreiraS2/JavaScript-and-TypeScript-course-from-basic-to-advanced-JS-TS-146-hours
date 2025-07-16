// Algo extremamente importante, tempo, e podemos adicionar um tempo determinado para a outra ação ocorrer utilizando

/**
 * setInterval
 * setTimeout
 */

function mostraHora(){
    let data = new Date(); // Aqui utilizo algo do javaScript

    return data.toLocaleString('pt-BR', {
        hour12: false
    })
}

// Agora vamos criar o intervalo de tempo para ficar aparecendo a hora atualizada

const timer = setInterval(function (){ 
    console.log(mostraHora())
}, 1000); // Dessa forma utilizamos uma função dentro junto ao tempo logo em seguida: setInterval(funcion(){}, <tempo>);

// Enquanto esse faz seguidamente para sempre, o setTimeout é para quando fazer ele parar

setTimeout(function (){
    clearInterval(timer)
}, 10000);

// Fazendo parar quando der 10 segundos