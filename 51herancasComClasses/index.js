class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log((this.nome + " já ligado"))
            return
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log((this.nome + " já desligado"))
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{ 
    // A classe Smartphone herda as propriedades 
    // e métodos da classe DispositivoEletronico
    // Extends serve para criar uma classe filha, 
    // ou seja, uma classe que herda as propriedades e métodos da classe pai
    constructor(nome, cor, modelo){
        super(nome); // O super é usado para chamar o construtor da classe pai,
        // ou seja, para inicializar as propriedades da classe pai
        this.cor = cor; 
        this.modelo = modelo; 
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        return console.log("Alterado o método Ligar");
    }
}




const s1 = new Smartphone('Samsung', 'Preto', 'A32');
const t1 = new Tablet ('Ipad', true);

console.log(t1);
console.log(t1.ligar())