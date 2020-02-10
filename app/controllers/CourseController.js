

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

                    let objeto = this._hateoas.create(success);
 
                    return resolve({objeto});
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

                    return resolve(objeto)
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

                    const objeto = this._hateoas.findOne(success);

                    return resolve({objeto})
                })
                .catch(error => {
                    
                    let objeto  = this._hateoas.errorDb({ error })

                    return reject({objeto})
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

                    let objeto  = this._hateoas.errorDb({ error })

                    return reject({objeto})
                })
        })
    }
}

module.exports = () => CourseController