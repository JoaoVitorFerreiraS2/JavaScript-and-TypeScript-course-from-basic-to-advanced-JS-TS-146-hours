// Validação de CPF
// Feito por mim
// let cpf = "131.373.579-50";

// let cpfLimpo = cpf.replace(/\D+/g, '')
// let cpfArray = Array.from(cpfLimpo);

// console.log(cpfArray)

// function primeiraEtapa(total, number, contador) {
//     contador = 10 - contador
//     if (contador >= 2) {
//         total = total + (Number(number) * contador)
//     }
//     return total
// }

// let sTprimeiroDigito = cpfArray.reduce(primeiraEtapa, 0);
// let primeiroDigito = 11 - (sTprimeiroDigito % 11);
// console.log(primeiroDigito);

// function segundaEtapa(total, number, contador) {
//     contador = 11 - contador
//     if (contador >= 2) {
//         total = total + (Number(number) * contador)
//     }
//     return total
// }

// let sTsegundoDigito = cpfArray.reduce(segundaEtapa, 0);
// let segundoDigito = 11 -(sTsegundoDigito % 11);

// if (segundoDigito > 9){
//     segundoDigito = 0;
// }

// console.log(segundoDigito);

// if (cpfArray[9] == primeiroDigito && cpfArray [10] == segundoDigito){
//     console.log("CPF OK")
// };

// if (cpfArray[9] != primeiroDigito || cpfArray [10] != segundoDigito){
//     console.log("CPF FALSO")
// }

function ValidaCpf (cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true, 
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);  
    console.log(digito1);
    console.log(digito2);

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
}

ValidaCpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCpf.prototype.isSequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === cpf.cpfLimpo;
}

const cpf = new ValidaCpf('131.373.579-50');
console.log(cpf.valida());
