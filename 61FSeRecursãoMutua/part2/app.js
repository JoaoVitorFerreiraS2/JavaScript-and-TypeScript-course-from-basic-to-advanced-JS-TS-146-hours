const fs = require('fs').promises; // Aqui faz o requerimento do módulo 'fs' e utiliza a função 'promises' para trabalhar com promessas.
const escreve = require('./modules/escrever.js'); // Aqui importa a função 'escreve' do módulo 'escrever.js' para ser utilizada posteriormente.
const ler = require('./modules/ler.js'); // Aqui importa a função 'ler' do módulo 'ler.js' para ser utilizada posteriormente.
const path = require('path'); // Aqui faz o requerimento do módulo 'path' para trabalhar com caminhos de arquivos.
const caminhoArquivo = path.join(__dirname, 'arquivoTeste.json'); // Aqui utiliza o módulo 'path' para criar um caminho para o arquivo 'pessoas.json' que está localizado no mesmo diretório do arquivo atual. 


// const pessoas = [
//     { nome: 'João', idade: 30 },
//     { nome: 'Maria', idade: 25 },
//     { nome: 'Pedro', idade: 35 }
// ]; // Aqui define um array de objetos chamado 'pessoas' com informações de nome e idade.}

// const json = JSON.stringify(pessoas, '', 2); // Aqui utiliza a função 'JSON.stringify' para converter o array 'pessoas' em uma string JSON formatada com indentação de 2 espaços.

// escreve('./pessoas.json', json) // Aqui chama a função 'escreve' passando o caminho do arquivo 'pessoas.json' e a string JSON como argumentos para escrever os dados no arquivo.

async function lerArquivo(caminho) {
    const dados = await ler(caminho); // Aqui chama a função 'ler' passando o caminho do arquivo e aguarda a leitura do conteúdo do arquivo, que é armazenado na variável 'dados'.
    renderizaDados(dados); // Aqui chama a função 'renderizaDados' passando os dados lidos do arquivo para serem processados e exibidos.
}

function renderizaDados(dados){
    dados = JSON.parse(dados); // Aqui utiliza a função 'JSON.parse' para converter a string JSON de volta para um array de objetos.
    console.log(dados); // Aqui imprime o array de objetos no console.
}

const dadosArquivo = lerArquivo(caminhoArquivo); // Aqui chama a função 'lerArquivo' passando o caminho do arquivo 'pessoas.json' e armazena a promessa retornada na variável 'dadosArquivo'. 