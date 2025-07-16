const inputTarefa = document.querySelector('#nova_tarefa');
const btnTarefa = document.querySelector('#buttonAdd');
const tarefas = document.querySelector('#lista-tarefas');

function criarTarefa(inputTarefa){
    const li = document.createElement('li');
    const buttonApagar = document.createElement('button');
    buttonApagar.textContent = 'Apagar';
    buttonApagar.setAttribute('title', 'Apagar essa tarefa');
    buttonApagar.setAttribute('class', 'apagar');
    li.innerHTML = inputTarefa;
    tarefas.appendChild(li);
    tarefas.appendChild(buttonApagar);

}


btnTarefa.addEventListener('click', function(event){
    event.preventDefault();
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value)
    inputTarefa.value = '';
})


document.addEventListener('click', function(event){
    if (event.target.classList.contains('apagar')){
        event.target.parentElement.remove();

    }
})