// Vamos ver sobre operador ternario: ? :

// Operador ternario faz com que o código fique pequeno e mais direto, exemplo: 

//Vamos dizer que precise de 20 pontos para conseguir bater o record, então a forma de escrever padrão seria assim: 


const pontos = 0;

if (pontos < 20){
    console.log('Você não bateu o record');
}
else{
    console.log('Você bateu o record')
}

// Mas da forma ternária seria assim:

let recorde = pontos >= 20 ? "Você bateu o recorde" : "Você não bateu o recorde"

/**
 * Sendo ? Se for true, ou seja, verdadeiro
 * Sendo : Se for false, ou seja, falso
 */