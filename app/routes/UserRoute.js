const host = process.env.HOST || 'http://localhost';

module.exports = app => {

    const usercontroller = new app.controllers.UserController(
        new app.repositories.UserRepository(
            app.models.UserModel),
        new app.utils.Hateoas('user'))

    app.route('/user')
        .post((req, res) => {

            usercontroller.create(req.body)
                .then(success => res.status(201).json(success))
                .catch(error => res.status(500).json(error))

        })
        .get((req, res) => {

            usercontroller.find()
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })

    app.route('/user/:id')
        .get((req, res) => {

            usercontroller.findById(req.params.id)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .delete((req, res) => {

            usercontroller.delete(req.params.id)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .put((req, res) => {

            req.body.id = req.params.id;

            usercontroller.update(req.body)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
}