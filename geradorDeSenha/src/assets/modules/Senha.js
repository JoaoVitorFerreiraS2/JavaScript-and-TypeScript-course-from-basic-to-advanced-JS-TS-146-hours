export default class Senha {
    constructor() {

    }

    gerarSenha(qtdCaracteres = 8, addNumeros = false, addMaiusculas = false, 
        addMinusculas = false, addSimbolos = false, semRepetir = false) {
        const senha = [];
        const numeros = '0123456789';
        const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const minusculas = maiusculas.toLowerCase();
        const simbolos = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let caracteres = '';    

        if (addNumeros) caracteres += numeros;
        if (addMaiusculas) caracteres += maiusculas;
        if (addMinusculas) caracteres += minusculas;
        if (addSimbolos) caracteres += simbolos;
        if (!addNumeros && !addMaiusculas && !addMinusculas && !addSimbolos) return 'Selecione pelo menos um tipo de caractere para gerar a senha.';
        
        for (let i = 0; i < qtdCaracteres; i++) {
            console.log(senha.join(''));
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            if (semRepetir && senha.includes(caracteres[randomIndex])) {
                i--;
                continue;
            }
            senha.push(caracteres[randomIndex]);
        }

        console.log(senha.join(''));
        return senha.join('');
    }

}