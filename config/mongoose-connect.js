
const seed = require('mongoose-seed');
const mongoose = require('mongoose')
require('dotenv/config');

const strCon = 'mongodb://localhost/postapp'
//const strConOnline = 'mongodb+srv://admin:admin@cluster0-sv2jx.mongodb.net/postapp?retryWrites=true&w=majority'

const connection = process.env.DB_HOST || strCon


module.exports = (app) => {

  const perfil = app.models.ProfileModel;
  const user = app.models.UserModel;

  mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
  },function(erro) {
      if(erro){
        console.log(`Não foi possivel connectar no banco de dados: ${JSON.stringify(erro)}`);
      }else{

        seed();

        console.log(connection)
        console.log('Connectado ao banco de dados');

      }
  })


  async function seed(){

    await seedPerfil();

    await seedUserAdmin();
  }



  async function seedPerfil(){

    var listPerfil = await perfil.find();
    
    var arr = [
        { nome: 'Admin', existe: false}, 
        { nome: 'Diretor', existe: false}, 
        { nome: 'Coordenado', existe: false}, 
        { nome: 'Professor', existe: false},
        { nome: 'Secretario', existe: false},
        { nome: 'Aluno', existe: false},
    ]
    
    await listPerfil.forEach(e => {

        arr.forEach(p => {
          
          if(e.nome == p.nome){
            p.existe = true
          }
          else{
          }

        })
   })

   await arr.forEach(e => {

     if(e.existe == false){

       perfil.create({nome: e.nome, ativo: true })
     }

   })
   
  }


  async function seedUserAdmin(){
    
    const admin = await perfil.findOne({nome: 'Admin'})

    console.log(admin);

    console.log(process.env.ADM_APP_EMAIL, process.env.ADM_APP_PASS)

  }


}





