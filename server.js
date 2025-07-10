const express = require('express')
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas externas
const paginaRoutes = require('./routes/paginaRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.use('/', paginaRoutes);      // Para páginas e formulários
app.use('/api', apiRoutes);      // Para rotas de API

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});