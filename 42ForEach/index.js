// forEach

const a1 = [1, 2, 3, 4, 5];

// Sem o forEach
for (let valor of a1){
    console.log(valor);
}


// Com o forEach
a1.forEach(function(valor, indice){
    console.log(valor, indice);
}) // O método forEach é utilizado para executar uma função para cada elemento de um array. 
// Ele recebe uma função de callback como argumento, que é chamada para cada elemento do array,