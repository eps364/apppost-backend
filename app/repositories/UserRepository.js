const bcrypt = require('bcrypt');

class UserRepository {

    constructor(model) {
        this._model = model
    }

    async create(user) {


        const usuario = await this._model.findOne({ email: user.email}, {email: 1});

        return await new Promise((resolve, reject) => {

            if (usuario) {
                return reject(`O usuario ${usuario.email} já esta cadastrado`)
            } else {
                this._model.create(user)
                    .then(sucesso => {
                        return resolve(sucesso)
                    })
                    .catch(error => {
                        return reject(error)
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
                    return reject(error)
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
                    return reject(error)
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
                    return reject(error)
                })
        })
    }
    
    async authenticate(user) {

        return await new Promise((resolve, reject) => {

            this._model.findOne({
                    email: user.email
                }, {
                    _id: 1,
                    senha: 1,
                    ativo: 1,
                    desligado: 1
                }).select('+senha')
                .then(success => {

                    const { id, ativo, desligado, senha } = success;

                    console.log(id, ativo, desligado, senha);
                    
                    if (!success)
                        return reject('Usuario não cadastrado')

                    if (desligado === true)
                        return reject('Usuario inativo')    

                    if (ativo === false && desligado === false)
                        return reject('Usuario aguardando aprovação')
                    

                    bcrypt.compare(user.senha, success.senha, (err, res) => { 

                        if (!res)
                            return reject('E-mail/Senha Inválidos')

                        if (res)
                            return resolve({
                                id: success._id, token: success.token, id: success.id
                            })

                        if (err)
                            return reject(err)
                    });
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }
}

module.exports = () => UserRepository