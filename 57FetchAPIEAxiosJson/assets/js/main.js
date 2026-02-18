// Axios é uma biblioteca de terceiros para fazer requisições HTTP, 
// muito utilizada por ser mais simples e ter mais recursos do que a API 
// Fetch nativa do JavaScript. Para usar o Axios, você precisa incluí-lo no 
// seu projeto, seja via CDN ou instalando-o com npm/yarn.
// No exemplo abaixo, estamos usando o Axios para fazer uma requisição 
// GET para um arquivo JSON chamado 'pessoas.json'. O método 'then' é usado 
// para lidar com a resposta da requisição. A resposta é passada para a função 
// 'carregaElementos', que é responsável por criar uma tabela HTML e preencher os 
// dados das pessoas.

axios('pessoas.json')
    .then(resposta => carregaElementos(resposta.data))

// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementos(json));


function carregaElementos(json) {
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td')
        td.innerHTML = 'Primeiro nome: ' + pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td')
        td.innerHTML = 'Idade: '+ pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td')
        td.innerHTML = 'Salário: R$' + (pessoa.salario).toFixed(2);
        tr.appendChild(td);


        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}