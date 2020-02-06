

class CourseController {

    constructor(repository, hateoas) {
        this._repository = repository
        this._hateoas = hateoas
    }

    async create(curso) {

        curso.ativo = true;
        
        return await new Promise((resolve, reject) => {

            this._repository.create(curso)
                .then(success => {

                    let objeto = this._hateoas.create(success, 'cursos');
 
                    return resolve({objeto});
                })
                .catch(error => {
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
                    console.log(error)
                    return reject(error)
                })

        })
    }

    async delete(id) {

        return await new Promise((resolve, reject) => {

            this._repository.delete(id)
                .then(success => {

                    let objeto = this._hateoas.delete(success);

                    return resolve(objeto)
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

                    const objeto = this._hateoas.findOne(success);

                    return resolve({objeto})
                })
                .catch(error => {
                    console.log(error)
                    return reject(error)
                })

        })
    }

    async update(curso) {

        return await new Promise((resolve, reject) => {            

            this._repository.update(curso)
                .then(success => {

                    let objeto = this._hateoas.update(success);

                    return resolve(objeto)
                })
                .catch(error => {

                    return reject(error)
                })
        })
    }
}

module.exports = () => CourseController