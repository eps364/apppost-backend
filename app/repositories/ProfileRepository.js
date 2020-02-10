class UserRepository {

    constructor(model) {
        this._model = model
    }

    async create(profile) {
        return await new Promise((resolve, reject) => {

            this._model.create(profile)
                .then((success) => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error.message)
                })

        })
    }

    async find() {
        return await new Promise((resolve, reject) => {
            this._model.find({
                    ativo: true
                })
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
                    ativo: false,
                })
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error.message)
                })
        })
    }

    async update(profile) {
        return await new Promise((resolve, reject) => {

            this._model.findByIdAndUpdate({
                    _id: profile.id
                }, {
                    $set: profile
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

            this._model.find({
                    _id: id,
                    ativo: true
                })
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {
                    return reject(error.message)
                })

        })
    }
}

module.exports = () => UserRepository