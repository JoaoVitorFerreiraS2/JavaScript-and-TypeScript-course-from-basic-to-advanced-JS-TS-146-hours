import './assets/css/style.css';
import Senha from './assets/modules/Senha';

const senhaView = document.querySelector('.senha-view');
const btnGerar = document.querySelector('.gerar-senha');



btnGerar.addEventListener('click', () => {
    if (senhaView.querySelector('p')) {
        senhaView.querySelector('p').remove();
    }
    const p = document.createElement('p');
    senhaView.appendChild(p);
    const senha = new Senha();

    let qtdCaracteres = document.querySelector('#tamanho-senha').value;
    let addNumeros = document.querySelector('#adicionar-numeros').checked;
    let addMaiusculas = document.querySelector('#adicionar-maiusculas').checked;
    let addMinusculas = document.querySelector('#adicionar-minusculas').checked;
    let addSimbolos = document.querySelector('#adicionar-simbolos').checked;
    let semRepetir = document.querySelector('#sem-repetir').checked;

    p.innerText = senha.gerarSenha(qtdCaracteres, addNumeros, addMaiusculas, addMinusculas, addSimbolos, semRepetir);
    
});


