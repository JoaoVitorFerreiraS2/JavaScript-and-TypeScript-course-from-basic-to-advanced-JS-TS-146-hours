const {somatoria} = require('./mod');

function aleatoriezar(min = 1, max = 1000){
    somador = [];
    let e = Math.floor(Math.random() * (max - min + 1)) + min;

    for(let i = 0; i < e; i++){
        console.log(e);
        somador.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return somatoria(somador);
}

console.log(aleatoriezar());