const fs = require('fs').promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf-8') // Aqui utiliza a função 'readFile' do módulo 'fs' para ler o conteúdo do arquivo especificado pelo caminho. O segundo argumento 'utf-8' indica que o conteúdo deve ser lido como uma string.   