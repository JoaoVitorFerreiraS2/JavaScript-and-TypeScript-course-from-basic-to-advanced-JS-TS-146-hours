// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material

// Herança é quando uma função construtora herda as propriedades e 
// métodos de outra função construtora.

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco; 
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}


function Camiseta(nome, preco, cor=None){
    Produto.call(this, nome, preco);
} 

function Caneca(nome, preco, material){
    this.nome = nome;
    this.preco = preco;
    this.material = material;

    Produto.call(this, nome, preco);
}

Camiseta.prototype = Object.create(Produto.prototype); // Aqui definimos que o __proto__ do
// Camiseta é o do Produto

Camiseta.prototype.constructor = Camiseta; // Aqui definimos que o constructor da 
// Camiseta é a própria Camiseta, e não o Produto

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto1 = new Produto("Genérico", 3, "Branco");
const camiseta = new Camiseta('Regata', 7.5, "Preta");
const caneca = new Caneca('Caneca Papai Noel', 15, "Metal");




console.log(camiseta);
camiseta.aumento(10);
console.log(camiseta);
console.log(produto1);
produto1.aumento(20);
console.log(produto1);
console.log(caneca);
caneca.aumento(25);
console.log(caneca);


