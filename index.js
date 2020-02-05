const express = require('./config/custom-express')
require('dotenv/config')

const porta = process.env.APP_PORT || 3000

express.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}!`))