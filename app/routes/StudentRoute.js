const host = process.env.HOST || 'http://localhost:3000';

module.exports = app => {

    const usercontroller = new app.controllers.StudentController(
        new app.repositories.StudentRepository(
            app.models.UserModel))

    app.route('/aluno')
        .post((req, res) => {

            usercontroller.create(req.body)
                .then(success => res.status(201).json(success, [
                    { rel: "self", method: "GET", href: `${host}/user/${success._id}` },
                    { rel: "delete", method: "DELETE", title: 'Delete user', href: `${host}/user/${success._id}` },
                    { rel: "update", method: "PUT", title: 'Update user', href: `${host}/user/${success._id}` }
                ]))
                .catch(error => res.status(500).json(error))

        })
}