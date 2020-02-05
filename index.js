const express = require('./config/custom-express')
require('dotenv/config')

const porta = process.env.PORT || 3000
console.log(process.env.PORT)
express.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}!`))