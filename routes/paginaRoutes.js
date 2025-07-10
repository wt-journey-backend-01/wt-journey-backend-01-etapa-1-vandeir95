const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const viewsPath = path.join(__dirname, '..', 'views');

// Página principal
router.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
});

// Sugestão (GET com query)
router.get('/sugestao', (req, res) => {
  const { nome, ingredientes } = req.query;

  if (!nome || !ingredientes) {
    return res.status(400).send('Erro: dados incompletos.');
  }

  const filePath = path.join(viewsPath, '/agradecimento.html');

  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      return res.status(500).send('Erro ao carregar a página de agradecimento.');
    }

    // Substitui os placeholders pelos dados da query string
    const paginaComDados = html
      .replace('{{NOME}}', nome)
      .replace('{{INGREDIENTES}}', ingredientes);

    res.send(paginaComDados);
  });
});

// Página de contato (formulário)
router.get('/contato', (req, res) => {
  const filePath = path.join(viewsPath, 'contato.html');
  console.log('📁 Enviando arquivo:', filePath);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Erro ao enviar contato.html:', err);
      res.status(err.status).end();
    }
  });
});



// Recebimento do formulário de contato (POST)
router.post('/contato', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  if (!nome || !email || !mensagem || !assunto) {
    return res.status(400).json({ erro: 'Dados incompletos.' });
  }

  res.status(200).json({
    mensagem: 'Contato recebido com sucesso!',
    dados: {
      nome,
      email,
      assunto,
      mensagem
    }
  });
});

module.exports = router;
