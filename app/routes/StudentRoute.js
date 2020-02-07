
module.exports = app => {

    const studentController = new app.controllers.StudentController(
        new app.repositories.StudentRepository(
            app.models.UserModel),
        new app.utils.Hateoas('aluno'))

    app.route('/aluno')
        .post((req, res) => {

            studentController.create(req.body)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))

        })
}