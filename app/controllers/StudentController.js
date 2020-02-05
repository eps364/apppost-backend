class StudentController {

    constructor(repository) {
        this._repository = repository
    }

    async create(student) {
        const schema = Yup.object.shape({
            name: Yup.string().required().min(3),
            email: Yup.email().required(),
            senha: Yup.string().required(),
            cpf: Yup.number().required().min(11).max(11),
            ra: Yup.number().min(3).max(13),
            perfil: Yup.array(),
            curso: Yup.array()
        })

        if (!(await schema.isValid(user))) {
            return res.status(400).json({
                error: 'Erro na validação'
            })
        }

        student.ativo = false;
        student.desligado = false;

        return await new Promise((resolve, reject) => {

            this._repository.create(student)
                .then(result => {
                    return resolve(result)
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
                    return resolve(success)
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