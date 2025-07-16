const relogio = document.getElementById('relogio');

const button_iniciar = document.getElementById('iniciar');
const button_pausar = document.getElementById('pausar');
const button_zerar = document.getElementById('zerar');


let [hora, minuto, segundo] = [0, 0, 0];
let temporizador; 

function cronometro() {
    segundo++;
    if (segundo === 60) {
        segundo = 0;
        minuto++
    }
    if (minuto === 60) {
        minuto = 0
        hora++
    }

    return `${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}:${String(segundo).padStart(2, '0')}`;
}

button_iniciar.addEventListener('click', function (event){
    event.preventDefault();
    relogio.style.color = 'white'
    button_iniciar.disabled = true;
    temporizador = setInterval(function () {
        relogio.innerHTML = cronometro();
    }, 1000)
});

button_zerar.addEventListener('click',function(event){
    event.preventDefault();
    relogio.style.color = 'white'
    clearInterval(temporizador);
    segundo = 0;
    minuto = 0;
    hora = 0;
    relogio.innerHTML = `${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}:${String(segundo).padStart(2, '0')}`
    button_iniciar.disabled = false; 
    button_iniciar.textContent = 'Iniciar';
    
});

button_pausar.addEventListener('click',function(event){
    event.preventDefault();
    clearInterval(temporizador);
    button_iniciar.disabled = false;
    button_iniciar.textContent = 'Continuar';
    relogio.style.color = 'red'
    
});



