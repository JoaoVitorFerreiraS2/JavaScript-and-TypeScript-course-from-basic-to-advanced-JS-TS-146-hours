// Vamos ver sobre o Call Back


// O Call back serve para que coisas não pulem uma as outras, um exemplo é que quando precisamos esperar a resposta de uma API, ou banco de dados. Esse call back nos ajuda com isso

function tempo(min = 1000, max = 5000){ // Aleatorizar o tempo de resposta
    const num = Math.random() * (max - min) + min;

    return Math.floor(num);
}


function n1(callback){
    setTimeout(function(){
        console.log('n1 ativado')
        if (callback) callback();
    }, tempo());
}

function n2(callback){
    setTimeout(function(){
        console.log('n2 ativado')
        if (callback) callback();
    }, tempo());
}

function n3(callback){
    setTimeout(function(){
        console.log('n3 ativado')
        if (callback) callback();
    }, tempo());
}

n1(n1Callback);

function n1Callback(){
    n2(n2Callback);
}

function n2Callback(){
    n3(n3Callback)
}

function n3Callback(){
    console.log('Precisa somente ser executado no final')
}

