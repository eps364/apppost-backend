module.exports = app => {

    const profilecontroller = new app.controllers.ProfileController(
        new app.repositories.ProfileRepository(
            app.models.ProfileModel),
        new app.utils.Hateoas('perfil'))

    app.route('/perfil')
        .post((req, res) => {
            profilecontroller.create(req.body)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .get((req, res) => {

            profilecontroller.find()
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })

    app.route('/perfil/:id')
        .get((req, res) => {

            profilecontroller.findById(req.params.id)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .delete((req, res) => {

            profilecontroller.delete(req.params.id)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .put((req, res) => {
            req.body.id = req.params.id;
            profilecontroller.update(req.body)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })

}