const mongoose = require('mongoose')
require('dotenv/config');

const strCon = 'mongodb://localhost/postapp'
//const strConOnline = 'mongodb+srv://admin:admin@cluster0-sv2jx.mongodb.net/postapp?retryWrites=true&w=majority'

const connection = process.env.DB_HOST || strCon
const admEmail = process.env.ADM_APP_EMAIL || 'admin@admin.com'
const admPass = process.env.ADM_APP_PASS || 'admin123'


module.exports = (app) => {

  const perfil = app.models.ProfileModel;
  const user = app.models.UserModel;

  mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }, function (erro) {
    if (erro) {
      console.log(`Não foi possivel connectar no banco de dados: ${JSON.stringify(erro)}`);
    } else {

      seed();

      console.log(connection)
      console.log('Connectado ao banco de dados');

    }
  })


  async function seed() {

    let perfil = await seedPerfil();

    await seedUserAdmin(perfil);

  }



  async function seedPerfil() {

    var listPerfil = await perfil.find();

    var arr = [{
        nome: 'Admin',
        ativo: true
      },
      {
        nome: 'Diretor',
        ativo: true
      },
      {
        nome: 'Coordenador',
        ativo: true
      },
      {
        nome: 'Professor',
        ativo: true
      },
      {
        nome: 'Secretario',
        ativo: true
      },
      {
        nome: 'Aluno',
        ativo: true
      },
    ]

    await listPerfil.forEach(e => {

      arr.forEach(p => {

        if (e.nome == p.nome) {
          p.ativo = false
        }
      })

    })


    var newArr = arr.filter(e => {
      return e.ativo == true;
    })

    var newProfile = await perfil.insertMany(newArr);

    return newProfile
  }




  async function seedUserAdmin(perfil) {

    let admin = perfil.filter(a => {

      return a.nome == 'Admin';

    })

    if (admin.length > 0) {

      let perfil_id = admin[0];
      perfil_id = JSON.parse(JSON.stringify(perfil_id));

      let userAdmin = await user.findOne({
        nome: admEmail
      })

      if (!userAdmin) {

        await user.create({
          nome: 'Admin',
          email: admEmail,
          senha: admPass,
          ativo: true,
          desligado: false,
          perfil: perfil_id,
          cpf: '12345678909'

        }).then(result => console.log('usuario admin criado com sucesso'))
      }

    }
  }
}