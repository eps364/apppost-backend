class StudentController {

    constructor(repository, hateoas) {
        this._repository = repository
        this._hateoas = hateoas
    }

    async create(student) {
        
        student.ativo = false;
        student.desligado = false;

        return await new Promise((resolve, reject) => {

            this._repository.create(student)
                .then(success => {

                    let objeto = this._hateoas.create(success)

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
                    return resolve(success)
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
                    return resolve(success)
                })
                .catch(error => {

                    let objeto  = this._hateoas.errorDb({ error })

                    return reject({objeto})
                })

        })
    }

    async update(student) {

        return await new Promise((resolve, reject) => {

            this._repository.updateOne(student)
                .then(success => {

                    return resolve(success)
                })
                .catch(error => {

                    let objeto  = this._hateoas.errorDb({ error })

                    return reject({objeto})
                })

        })
    }

}
module.exports = () => StudentController