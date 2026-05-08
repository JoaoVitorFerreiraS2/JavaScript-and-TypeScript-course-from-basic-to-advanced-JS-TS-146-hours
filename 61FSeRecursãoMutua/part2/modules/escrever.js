const path = require('path');
const caminhoArquivo = path.join(__dirname, '..', 'pessoas.json'); // Aqui utiliza o módulo 'path' para criar um caminho para o arquivo 'pessoas.json' que está localizado no mesmo diretório do arquivo atual.

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, '', 2, {flag: 'w'}) // Aqui utiliza a função 'writeFile' do módulo 'fs' para escrever no arquivo. O conteúdo a ser escrito é o array 'pessoas' convertido para JSON e a opção 'flag: 'w'' indica que o conteúdo deve ser sobrescrito no arquivo.
}