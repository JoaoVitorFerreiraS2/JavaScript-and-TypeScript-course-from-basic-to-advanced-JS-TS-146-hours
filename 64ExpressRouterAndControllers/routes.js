const express = require('express');
const route = express.Router(); // Aqui cria uma instância do roteador Express, que é usada para definir rotas específicas para um módulo ou recurso.
const homeController = require('./controllers/homeController')

// Rotas Home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)


module.exports = route;