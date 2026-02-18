// Fetch API é uma interface JavaScript para acessar e manipular partes do pipeline HTTP, como requisições e respostas. Ela também fornece um método global fetch() que fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona pela rede.
// A Fetch API é baseada em Promises, o que torna o código mais fácil de ler e escrever. Ela é uma alternativa moderna ao XMLHttpRequest (XHR) para fazer requisições HTTP.



document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    };
})


async function carregaPagina(el) {
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if (response.status !== 200) throw new Error ('ERRO 404');
        const html = await response.text();
        carregaResultado(html);
    } catch(e){
        carregaResultado(e)
    }
    

};

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}