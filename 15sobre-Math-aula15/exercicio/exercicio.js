const numeroEscrita = "Seu número é";

const numero = prompt("Digite seu número: ");

let n1 = document.getElementById('n1');

let juncao = `${numeroEscrita} ${numero}`  

n1.innerHTML = juncao; 
