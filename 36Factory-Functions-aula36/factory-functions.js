// Aqui criaremos uma função normal para aprendizado 

function criarPessoa(nome, sobrenome, idade, altura, peso) {
    return {
        nome,
        sobrenome,
        idade,
        altura, 
        peso, 


        // Getter
        get nomeCompleto(){
            return `${this.nome}` + ` ` + `${this.sobrenome}`
        },

        // Quero separar nome de sobrenome
        // Setter
        set nomeCompleto(nomeCompleto){
            // Utilizado para setar coisas de fora
            nomeCompleto = nomeCompleto.split(' '); // Separando por espaços
            this.nome = nomeCompleto.shift(); // Tirando o primeiro nome
            this.sobrenome = nomeCompleto.join(' ');
            
        },
    


        falaAssunto(assunto) {
            return `O meu nome é ${this.nome}, tenho ${this.idade} de idade, peso por volta de ${this.peso} kg, `
        },

        // Transformando em Getter
        get imc(){ // Sempre que quisermos transformar uma função em um atributo ou qualquer coisa do gênero, utilizaremos a palavra get incialmente

            let imc = this.peso / (this.altura * this.altura);
            return `Seu IMC é ${imc.toFixed(2)}`
        }
        
    }
    
}

const p1 = criarPessoa('João Vitor', 'Ferreira', '20', 1.90, 90);

p1.nomeCompleto = 'Maria Isabel Da Silva'

console.log(p1.nomeCompleto)