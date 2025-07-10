const express = require('express');
const router = express.Router();

// Rota /api/lanches — retorna JSON com os lanches
router.get('/lanches', (req, res) => {
  const lanches = [
    {
      id: 1,
      nome: 'X-Burger',
      ingredientes: ['pão', 'carne', 'queijo'],
      preco: 12.5
    },
    {
      id: 2,
      nome: 'X-Salada',
      ingredientes: ['pão', 'carne', 'alface', 'tomate'],
      preco: 14.0
    }
  ];

  res.status(200).json(lanches);
});

module.exports = router;
