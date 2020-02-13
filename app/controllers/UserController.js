const bcrypt = require('bcrypt');
const csv = require('csv-parser');
const fs = require('fs');


class UserController {

    constructor(repository, hateoas) {
        this._repository = repository
        this._hateoas = hateoas
    }

    async create(user) {        

        user.ativo = true;
        user.desligado = false;

        return await new Promise((resolve, reject) => {

            this._repository.create(user)
                .then(success => {

                    let objeto = this._hateoas.create(success);

                    return resolve({objeto})
                })
                .catch(error => {

                    let objeto  = this._hateoas.errorDb({ error })

                    return reject({objeto})
                })
        })
    }

    async find() {
        return await new Promise((resolve, reject) => {
            this._repository.find()
                .then(success => {

                    let objeto = this._hateoas.findAll(success);

                    return resolve({objeto})
                })
                .catch(error => {

                    let objeto  = this._hateoas.errorDb({ error })

                    return reject({objeto})
                })
        })
    }

    async delete(id) {

        return await new Promise((resolve, reject) => {

            this._repository.delete(id)
                .then(success => {

                    let objeto = this._hateoas.delete(success);

                    return resolve({objeto})
                })
                .catch(error => {
 
                    let objeto  = this._hateoas.errorDb({ error })

                    return reject({objeto})
                })

        })
    }

    async findById(id) {

        return await new Promise((resolve, reject) => {

            this._repository.findById(id)
                .then(success => {

                    let objeto = this._hateoas.findOne([success]);                   

                    return resolve({objeto})
                })
                .catch(error => {

                    let objeto  = this._hateoas.errorDb({ error })

                    return reject({objeto})
                })

        })
    }

    async update(user) {


        if(user.senha){

            const hash = await bcrypt.hash(user.senha, 10);
            user.senha = hash;

            console.log(user.senha, hash);
        }

        return await new Promise((resolve, reject) => {

            this._repository.updateOne(user)
                .then(success => {

                    let objeto = this._hateoas.update(success);

                    return resolve({objeto})
                })
                .catch(error => {

                    let objeto  = this._hateoas.errorDb({ error })

                    return reject({objeto})
                })
        })
    }

    async import(perfilModel) {

        const file = './app/files/alunos.csv'
        const aluno = await perfilModel.findOne({ nome: 'Aluno'});
        const id_aluno = aluno._id;
       
        let dell = await this._repository.deleteAlunos(id_aluno)

        return await new Promise((resolve, reject) => {
            
            try {

                fs.createReadStream(file)
                .pipe(csv())
                .on('data', row => {
    
                    Object.assign(row, {
                        perfil: id_aluno,
                        senha: row.cpf
                    })
    
                   this._repository.create(row);
                })
                .on('end', () => console.log('Leitura concluida'))

                return resolve({mensagem: 'Arquivo Importado com sucesso'})
                

            } catch (error) {

                return reject({error})
            }



        })
    }
}

module.exports = () => UserController