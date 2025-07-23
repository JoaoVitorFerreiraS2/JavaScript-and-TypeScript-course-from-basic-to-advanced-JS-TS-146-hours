// Vamos dizer que precisamos criar uma função onde ela deva parar no meio do caminho

// Exemplo: A função tem 3 valores dentro dela, e ela só me entrega um deles na primeira chamada, na segunda chamada entrega o segundo e assim por diante

// Para iniciarmos, começaramos com uma funcion um pouco diferente, adicionaremos o *

function* gerador1(){
    yield 'Valor 1'; // Yield é quase um return, mas diferente
    yield 'Valor 2';
    yield 'Valor 3';
}   

function* gerador2(){
    yield 'Valor 4'; // Yield é quase um return, mas diferente
    yield 'Valor 5';
    yield 'Valor 6';
}   

const g1 = gerador1();
const g2 = gerador2();

console.log(g1.next().value); // Usamos o next chamados o primeiro yield
console.log(g1.next().value);
console.log(g1.next().value);

// Também podemos utilizar o for

for (let valor of g2){
    console.log(valor);
}

// Também podemos criar um gerador infinito

function* gerador3(){ // É interessante para algo como ID
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g3 = gerador3();

console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);


