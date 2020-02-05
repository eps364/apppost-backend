const mongoose = require('mongoose')
<<<<<<< HEAD
//const strCon = 'mongodb://localhost/postapp'

 const strCon = 'mongodb+srv://admin:admin@cluster0-sv2jx.mongodb.net/postapp?retryWrites=true&w=majority'

module.exports = () => {
  mongoose.connect(strCon, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(console.log('Conectado ao banco com sucesso'))
=======
require('dotenv/config');

const strCon = 'mongodb://localhost/postapp'
const strConOnline = 'mongodb+srv://admin:admin@cluster0-sv2jx.mongodb.net/postapp?retryWrites=true&w=majority'

const connection = process.env.DB_HOST || strCon

module.exports = () => {
  mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(console.log('Iniciando conexão com o banco'))
>>>>>>> Commit inicial
    .catch((erro) => console.log('Houve um erro ao conectar no banco: ' + erro))
}