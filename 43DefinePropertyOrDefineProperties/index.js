// defineProperty or defineProperties

// O que é o defineProperty ou defineProperties?

// O defineProperty ou defineProperties é um método do objeto global Object que permite definir ou modificar propriedades de um objeto. 
// Ele é utilizado para criar propriedades com características específicas, como ser enumerável, configurável ou ter um valor específico.

// function Produto(nome, preco, estoque) {

//        // DefineProperty recebe o objeto que queremos definir a propriedade, o nome da propriedade e um objeto de configuração (this) ->  é o local onde queremos definir a propriedade, 
//     // 'estoque' -> é o nome da propriedade que queremos definir, {enumerable: true, configurable: true, value: estoque} -> é o objeto de configuração que define as características da propriedade.

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // Mostra a chave
//         value: estoque, // Definindo o valor
//         writable: false, // Verificar se o valor pode ser alterado
//         configurable: false, // Pode reconfigurar a chave? 
//     })

//     Object.defineProperties(this, {
//         nome: {
//             enumerable: true, // Mostra a chave
//             value: nome, // Definindo o valor
//             writable: false, // Verificar se o valor pode ser alterado
//             configurable: false, // Pode reconfigurar a chave? 
//         },
//         preco: {
//             enumerable: true, // Mostra a chave
//             value: preco, // Definindo o valor
//             writable: false, // Verificar se o valor pode ser alterado
//             configurable: false, // Pode reconfigurar a chave? 
//         }
//     });


// };

// const p1 = new Produto('Camisa', 20, 3);
// console.log(p1);
// console.log(Object.keys(p1)); // Verificar as chaves do objeto

function Produto2(nome, preco, estoque){
    //  Getters and Setters

    let estoquePrivado = estoque
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Definindo o valor
            writable: false, // Verificar se o valor pode ser alterado
            configurable: false, // Pode reconfigurar a chave? 
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Definindo o valor
            writable: false, // Verificar se o valor pode ser alterado
            configurable: false, // Pode reconfigurar a chave? 
        },
        estoque: {
            enumerable: true, // Mostra a chave
            configurable: false, // Pode reconfigurar a chave? 
            get : function(){
                return estoquePrivado;
            }, // Serve para modificação do valor
            set: function(valor){

                if (typeof valor !== 'number'){
                    throw new TypeError('Não é um número.')
                }

                estoquePrivado = valor
                
            }
        }
        
    });
}


const p2 = new Produto2('Camisa', 20, 32);
console.log(p2.estoque);
p2.estoque = 10
console.log(p2.estoque);
console.log(Object.keys(p2)); // Verificar as chaves do objeto