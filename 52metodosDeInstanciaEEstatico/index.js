//  Métodos de instância e estáticos em classes
// Métodos de instância são os métodos que são chamados a partir de uma instância da classe, ou seja, a partir de um objeto criado a partir da classe.
// Métodos estáticos são os métodos que são chamados a partir da própria classe, ou seja, sem a necessidade de criar um objeto a partir da classe.

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0; 
    }

    // Método de instância
    aumentarVolume(){
        this.volume += 2;
    }

    // Método de instância
    diminuir(){
        this.volume -= 2;
    }

    // Método estático
    static faltaVolume(volume){ 
        // O método estático é chamado a partir da própria classe, 
        // ou seja, sem a necessidade de criar um objeto a partir da classe.
        console.log(volume)
        let falta = 100 - volume;
        console.log(`Falta ${falta} para chegar ao máximo`);
    }
}

const controle1 = new ControleRemoto('LG'); // Instanciando a classe (criando um novo objeto)

console.log(controle1);
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.faltaVolume(controle1.volume);