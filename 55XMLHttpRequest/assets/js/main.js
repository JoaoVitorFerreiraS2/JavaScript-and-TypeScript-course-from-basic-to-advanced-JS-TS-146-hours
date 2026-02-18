// xhr - XMLHttpRequest
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// O que é? É uma API do navegador que permite fazer requisições HTTP para servidores web.
// Para que serve? Para buscar ou enviar dados para um servidor web sem precisar recarregar a página.
// Como usar? Criando uma instância de XMLHttpRequest, configurando a requisição e enviando-a.

// Criando uma função para facilitar o uso do XMLHttpRequest
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // Criando uma instância de XMLHttpRequest
        xhr.open(obj.method, obj.url, true);  // Configurando a requisição (método, URL e assíncrona)
        xhr.send(); // Enviando a requisição

        xhr.addEventListener('load', () => { // Adicionando um evento para quando a requisição for carregada
            if (xhr.status >= 200 && xhr.status < 300) { // Verificando se a requisição foi bem sucedida (status entre 200 e 299)
                resolve(xhr.responseText); // Chamando a função de sucesso passando a resposta da requisição (responseText)
            } else {
                reject( // Chamando a função de erro passando um objeto com o status e a mensagem de erro
                    xhr.statusText // Mensagem de erro (statusText)
                );
            }
        });
    })

};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    };
})


async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href
    }
    try{
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(e){
        carregaResultado(e)
    }

};



function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}