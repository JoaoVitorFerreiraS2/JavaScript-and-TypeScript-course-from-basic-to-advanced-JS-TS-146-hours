const numeroEscrita = "Seu número é";
const numero = Number(prompt("Digite seu número: "));

let n1 = document.getElementById('n1'); // document (acessa o documento) . getElementById (Acessa um elemento especifico)
let juncao = `${numeroEscrita} ${numero}`  

n1.innerHTML = juncao; // InnerHTML transforma para HTML, normalmente usado em escritas

texto = document.getElementById('texto')
texto.innerHTML += `<p>Raiz quadrada:  ${Math.sqrt(numero)}</p>` //Criando elementos do javaScript para o HTML dentro de outro elemento, como no exemplo, uma div
texto.innerHTML += `<p>É inteiro?  ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>É NaN?:  ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondando para baixo:  ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arrendondando para cima:  ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais:${parseFloat(numero.toFixed(2))} </p>`


