// Referente ao if e else, é algo bem lógico, e muito interessante de brincar

let dinheiro = 100;

// Vamos fingir que tenho 100 reais, e quero comprar uma bolsa de 80 reais, se tiver mais de 100 na minha conta eu compro, se não, não compro

if (dinheiro >= 80){
    console.log("Conseguiu comprar a bolsa");
}


// Mas vamos fingir que o logista me deu um desconto
dinheiro = 60;

if (dinheiro >= 80){
    console.log("Conseguiu comprar a bolsa");
}
else if (dinheiro >=50){
    console.log("Conseguiu comprar a bolsa com o desconto");
}

// Mas se nada puder me ajudar

dinheiro = 10;

if (dinheiro >= 80){
    console.log("Conseguiu comprar a bolsa");
}
else if (dinheiro >=50){
    console.log("Conseguiu comprar a bolsa com o desconto");
}
else{
    console.log('Não comprou a bolsa')
}


// Todos os operadores podem ser usados nas condições, divirta-se 

//OBS: É possível utilizar if's dentro de if's

if (true === true){
    if (false != true){
        console.log("Aproveite")
    }
}