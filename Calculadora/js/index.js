function criarCalculadora() {
    return {

        display: document.querySelector('.display'),

        apagarCaracter() {
            this.display.value = this.display.value.slice(0, -1);
        },

        limparTudo(){
            this.display.value = '';
        },

        resultadoFinal() {

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
        },

        iniciar() {
            this.pegarBotoes()
        },

        pegarBotoes() {

            document.addEventListener('click', function (event) {
                el = event.target
                console.log(el)

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
        },

        mostrarDisplay(valor) {
            this.display.value += valor;

        }
    }
};

const calculadora = criarCalculadora();
calculadora.iniciar();