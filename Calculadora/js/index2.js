function Calculadora() {
    this.display = document.querySelector('.display');


    this.iniciar = function () {
        // Inicialização de qualquer outra função
        console.log('Estou aqui')
        this.pegarBotoes();
    }

    this.pegarBotoes = function () {

        document.addEventListener('click', function (event) {
            el = event.target
            if (el.classList.contains('btn-num')) {
                this.mostrarDisplay(el.innerText);
            }

            if (el.classList.contains('btn-del')) {
                this.apagarCaracter();
            }

            if (el.classList.contains('btn-eq')) {
                this.resultadoFinal();
            }

            if (el.classList.contains('btn-clear')) {
                this.limparTudo();
            }

        }.bind(this))
    }

    this.mostrarDisplay = function (valor) {
        this.display.value += valor;
    }

    this.apagarCaracter = function () {
        this.display.value = this.display.value.slice(0, -1);
    },

        this.limparTudo = function () {
            this.display.value = '';
        },

        this.resultadoFinal = function () {

            let conta = this.display.value;
            try {

                conta = eval(conta);
                if (!conta) {
                    alert('Conta invalida');
                    return;
                }

                this.display.value = String(conta)
            }
            catch (error) {

            }
        }

}

const cal = new Calculadora();

cal.iniciar();


