let nome = document.getElementById('nomeInput');
let sobrenome = document.getElementById('sobrenomeInput');
let peso = document.getElementById('pesoInput');
let altura = document.getElementById('alturaInput');

objeto = [];

const button = document.getElementById('buttonEnviar')

button.addEventListener('click', function(){
    objeto.push(criarObjeto(nome.value, sobrenome.value, peso.value, altura.value ));
    console.log(objeto);
})

function criarObjeto(nome = 0, sobrenome = 0, peso = 0, altura = 0){
    return {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura
    }
}
