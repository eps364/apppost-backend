const bcrypt = require('bcrypt');

class UserRepository {

    constructor(model) {
        this._model = model
    }

    async create(user) {


        const usuario = await this._model.findOne({
            email: user.email
        }, {
            email: 1
        });

        return await new Promise((resolve, reject) => {

            if (usuario) {
                return reject(`O usuario ${usuario.email} já esta cadastrado`)
            } else {
                this._model.create(user)
                    .then(sucesso => {
                        return resolve(sucesso)
                    })
                    .catch(error => {
                        return reject(error.message)
                    })
            }
        })
    }

    async find() {
        return await new Promise((resolve, reject) => {
            this._model.find()
                .populate([{
                        path: 'curso.curso_id',
                        select: 'nome'
                    },
                    {
                        path: 'perfil',
                        select: 'nome'
                    }
                ])
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error.message)
                })
        })
    }

    async delete(id) {
        return await new Promise((resolve, reject) => {
            this._model.updateOne({
                    _id: id
                }, {
                    $set: {
                        ativo: false,
                        data_modificacao: new Date
                    }
                })
                .then(success => {

                    return resolve(success)
                })
                .catch(error => {
                    return reject(error.message)
                })
        })
    }

    async deleteAlunos(id_perfil) {

        return await new Promise((resolve, reject) => {

            this._model.deleteMany({ perfil: id_perfil })
                    .then(success => {
                        return resolve(success)
                    }).catch(error => {
                        return reject(error)
            })
        })        
    }

    async updateOne(user) {
        return await new Promise((resolve, reject) => {

            const {
                id,
                ...newUser
            } = user;

            user.data_modificacao = new Date;

            this._model.findByIdAndUpdate({
                    _id: id
                }, {
                    $set: newUser
                }, {
                    new: true
                })
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error.message)
                })

        })
    }

    async findById(id) {
        return await new Promise((resolve, reject) => {

            this._model.findById(id)
                .populate([{

                    path: 'curso.curso_id',
                    select: 'nome'
                }, {
                    path: 'perfil',
                    select: 'nome'
                }])
                .then(success => {

                    return resolve(success)
                })
                .catch(error => {
                    return reject(error.message)
                })
        })
    }

    async authenticate(user) {

        return await new Promise((resolve, reject) => {

            this._model.findOne({
                    email: user.email
                })
                .select('+senha')
                .then(success => {

                    if (!success)
                        return reject({
                            mensagem: 'Usuario não cadastrado'
                        })

                    if (success.desligado === true)
                        return reject({
                            mensagem: 'Usuario inativo'
                        })

                    if (success.ativo === false && success.desligado === false)
                        return reject({
                            mensagem: 'Usuario aguardando aprovação'
                        })


                    bcrypt.compare(user.senha, success.senha, (err, res) => {
                        success.senha = ""

                        if (!res)
                            return reject({
                                mensagem: 'E-mail/Senha Inválidos'
                            })

                        if (res)
                            return resolve({

                                id: success.id,
                                usuario: success

                            })
                        if (err)
                            return reject({
                                mensagem: 'Erro na aplicação'
                            })
                    });
                })
                .catch(error => {

                    console.log(error)
                    return reject(error.message)

                })
        })
    }
}

module.exports = () => UserRepository
