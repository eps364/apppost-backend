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
                    console.log(error)
                    return reject(error)
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
                    return reject(error)
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
                    console.log(error)
                    return reject(error)
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
                    console.log(error)
                    return reject(error)
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
                    console.log(error)
                    return reject(error)
                })

        })
    }

}
module.exports = () => StudentController