// Polimorfismo
// Superclasse | ClassePai
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor){
    if (this.saldo < valor){
        this.verSaldo();
        console.log(`Você não possui saldo suficiente para sacar R$${valor.toFixed(2)}`)
        return
    }

    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/ ${this.conta} | Seu saldo é: R$${this.saldo.toFixed(2)}`);
};


function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)){
        this.verSaldo();
        console.log(`Você não possui saldo suficiente para sacar R$${valor.toFixed(2)}`)
        return
    } 
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança

const cc1 = new ContaCorrente('0001', 22, 20, 100);
cc1.sacar(50);

const cp = new ContaPoupança('0001', 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);