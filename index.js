const express = require('./config/custom-express')

const porta = process.env.PORT || 3001;

express.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}!`))