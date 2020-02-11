class PostRepository {

    constructor(model) {
        this._model = model
    }

    async create(post) {
        return await new Promise((resolve, reject) => {

            this._model.create(post)
                .then(success => {
                    return resolve(success);
                })
                .catch(error => {
                    return reject(error.message)
                })
        })
    }

    async find() {
        return await new Promise((resolve, reject) => {

            this._model.find(
                {
                    ativo: true
                })
                .populate([
                    { 
                        path: 'curso', 
                        select: ['nome','ativo'] 
                    }, 
                    {
                         path: 'usuario', 
                         select: ['ativo','nome','email']
                    }
                 ])
                .sort({ data_criacao: 'desc' })
                .then(success => {

                    return resolve(success)
                })
                .catch(error => {
                    return reject(error.message)
                })

        })
    }

    async findWithPagination(pagination) {


        const { list, page } = pagination;

        const limit = parseInt(list);
        const skip = limit * (parseInt(page) -1)

        return await new Promise((resolve, reject) => {

            this._model.find(
                {
                    ativo: true
                })
                .populate([
                    { 
                        path: 'curso', 
                        select: ['nome','ativo'] 
                    }, 
                    {
                         path: 'usuario', 
                         select: ['ativo','nome','email']
                    }
                 ])
                .sort({ data_criacao: 'desc' })
                .skip(skip)
                .limit(limit)
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

            this._model.findByIdAndUpdate(
                { _id: id },
                {
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

    async findById(id) {
        return await new Promise((resolve, reject) => {

            this._model.find(
                {
                    _id: id,
                    ativo: true
                })
                .populate(['curso', 'usuario'])
                .then(success => {

                    return resolve(success)
                })
                .catch(error => {
                    return reject(error.message)
                })

        })
    }

    async update(post) {

        const { _id, ...info } = post;

        return await new Promise((resolve, reject) => {

            this._model.findByIdAndUpdate(
                { _id: post._id }, { $set: info }, { new: true })
                .then(success => {
                    return resolve(success)
                })
                .catch(error => {

                    return reject(error.message)
                })

        })
    }

    async search(filtros) {

        Object.assign(filtros, { ativo: true })

        console.log(filtros)

        return await new Promise((resolve, reject) => {

            this._model.find()
            .populate([
                { 
                    path: 'curso', 
                    select: ['nome','ativo'] 
                }, 
                {
                     path: 'usuario', 
                     select: ['ativo','nome','email']
                }
             ])
            .sort({ data_criacao: 'desc' })
            .then(success => {

                return resolve(success)
            })
            .catch(error => {

                return reject(error.message)
                
            })

        })
    }

    async searchWithPagination(pagination) {

        const { list, page } = pagination;

        const limit = parseInt(list);
        const skip = limit * (parseInt(page) -1)


        Object.assign(attributes.body, { ativo: true })

        return await new Promise((resolve, reject) => {

            this._model.find(
                attributes.body
            )
            .populate([
                { 
                    path: 'curso', 
                    select: ['nome','ativo'] 
                }, 
                {
                     path: 'usuario', 
                     select: ['ativo','nome','email']
                }
             ])
            .sort({ data_criacao: 'desc' })
            .skip(skip)
            .limit(limit)
            .then(success => {

                return resolve(success)
            })
            .catch(error => {
                return reject(error.message)
            })

        })
    }


    async findPostByUser(pagination){

        const { id, list, page } = pagination;

        const limit = parseInt(list);
        const skip = limit * (parseInt(page) -1)

        return new Promise((resolve, reject) => {
            this._model.find({
                usuario: id
            })
            .populate([
                { 
                    path: 'curso', 
                    select: ['nome','ativo'] 
                }, 
                {
                     path: 'usuario', 
                     select: ['ativo','nome','email']
                }
             ])
            .sort({ data_criacao: 'desc' })
            .skip(skip)
            .limit(limit)
            .then(success => {

                return resolve(success)
            })
            .catch(error => {

                return reject(error.message)
            })
        })
    }
}

module.exports = () => PostRepository