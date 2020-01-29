const mongoose = require('mongoose')
const srcCon = 'mongodb://localhost/postapp'

// const strCon = 'mongodb+srv://admin:admin@cluster0-sv2jx.mongodb.net/postapp?retryWrites=true&w=majority'

module.exports = () => {
  mongoose.connect(srcCon, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(console.log('Conectado ao banco com sucesso'))
    .catch((erro) => console.log('Houve um erro ao conectar no banco: ' + erro))
}