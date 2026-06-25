const express = require('express'); // Aqui faz o requerimento do módulo 'express' para criar um servidor web.
const app = express(); // Aqui cria uma instância do aplicativo Express, que é usada para configurar rotas e middleware.
const routes = require('./routes')

//         CRIAR, LER, ATUALIZAR, DELETAR
// CRUD -> CREATE, READ, UPDATE, DELETE 
//         POST    GET     PUT/PATCH   DELETE



// http://meusite.com/ <- GET -> Entregue a página inicial do meu site
// http://meusite.com/sobre <- GET -> Entregue a página sobre do meu site
// http://meusite.com/contato <- GET -> Entregue a página de contato do meu site

// req = requisição -> O que o cliente está requisitando para o servidor
// res = resposta -> O que o servidor vai responder para o cliente

// Se você tiver alguma aplicação para compartilharmento de rede, o colega poderá acessar essa porta do seu computador.


//req.body -> Acessar os dados enviados em um formulário
//req.params -> Acessar os parâmetros enviados na URL
//req.query -> Acessar os parâmetros enviados na URL após '?'


app.use(
    express.urlencoded({ extended: true }) // Aqui adiciona um middleware para o aplicativo Express que permite que ele entenda e processe os dados enviados em formulários HTML.
)

app.use(routes);

app.listen(3010, () => {
    console.log('Servidor rodando na porta 3010'); // Aqui imprime uma mensagem no console indicando que o servidor está rodando e escutando na porta 3010.
    console.log('Acesse http://localhost:3010'); // Aqui imprime uma mensagem no console indicando que o servidor pode ser acessado através do endereço 'http://localhost:3010'.
}); // Aqui inicia o servidor e faz com que ele escute as requisições na porta 3010. Quando o servidor estiver rodando, 
// ele estará pronto para receber e responder às requisições dos clientes.

