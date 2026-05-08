const express = require('express'); // Aqui faz o requerimento do módulo 'express' para criar um servidor web.
const app = express(); // Aqui cria uma instância do aplicativo Express, que é usada para configurar rotas e middleware.

//         CRIAR, LER, ATUALIZAR, DELETAR
// CRUD -> CREATE, READ, UPDATE, DELETE 
//         POST    GET     PUT/PATCH   DELETE



// http://meusite.com/ <- GET -> Entregue a página inicial do meu site
// http://meusite.com/sobre <- GET -> Entregue a página sobre do meu site
// http://meusite.com/contato <- GET -> Entregue a página de contato do meu site

// req = requisição -> O que o cliente está requisitando para o servidor
// res = resposta -> O que o servidor vai responder para o cliente

// Se você tiver alguma aplicação para compartilharmento de rede, o colega poderá acessar essa porta do seu computador.

app.listen(3010, () => {
    console.log('Servidor rodando na porta 3010'); // Aqui imprime uma mensagem no console indicando que o servidor está rodando e escutando na porta 3010.
    console.log('Acesse http://localhost:3010'); // Aqui imprime uma mensagem no console indicando que o servidor pode ser acessado através do endereço 'http://localhost:3010'.
}); // Aqui inicia o servidor e faz com que ele escute as requisições na porta 3010. Quando o servidor estiver rodando, 
// ele estará pronto para receber e responder às requisições dos clientes.

app.get('/', (req, res) => {
    res.send('<form action="/" method="POST"><label>Nome:</label><input type="text" name="nome"><button type="submit">Enviar</button></form>') // Aqui define uma rota para o caminho '/' (página inicial) usando o método GET. Quando um cliente fizer uma requisição para essa rota, 
    // a função de callback será executada, e a resposta 'Hello World!' será enviada de volta para o cliente. Em seguida, a resposta com o formulário HTML também será enviada de volta para o cliente.
    
    // Aqui define uma rota para o caminho '/' (página inicial) usando o método GET. Quando um cliente fizer uma requisição para essa rota, 
    // a função de callback será executada, e a resposta 'Hello World!' será enviada de volta para o cliente.
});

app.post('/', (req, res) => {
    res.send('Formulário recebido!') // Aqui define uma rota para o caminho '/' (página inicial) usando o método POST. Quando um cliente fizer uma requisição POST para essa rota, 
    // a função de callback será executada, e a resposta 'Formulário recebido!' será enviada de volta para o cliente.
});


app.get('/sobre', (req, res) => {
    res.send('Página sobre ainda em criação') // Aqui define uma rota para o caminho '/sobre' usando o método GET. Quando um cliente fizer uma requisição para essa rota, 
    // a função de callback será executada, e a resposta 'Página sobre' será enviada de volta para o cliente.
});
