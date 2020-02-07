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
  },function(erro) {
      if(erro)
        console.log(`Não foi possivel connectar no banco de dados: ${JSON.stringify(erro)}`);

      console.log('Connectado ao banco de dados');
  })
}