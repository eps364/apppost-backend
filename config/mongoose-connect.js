const mongoose = require('mongoose')
require('dotenv/config');

const strCon = 'mongodb://localhost/postapp'
//const strConOnline = 'mongodb+srv://admin:admin@cluster0-sv2jx.mongodb.net/postapp?retryWrites=true&w=majority'

const connection = process.env.DB_HOST || strCon

module.exports = () => {
  mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
  })
    .then(console.log('Iniciando conexão com o banco'))
    .catch((erro) => console.log('Houve um erro ao conectar no banco: ' + erro))
}