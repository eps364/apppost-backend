module.exports = app => {

    const courseController = new app.controllers.CourseController(
        new app.repositories.CourseRepository(
            app.models.CourseModel),
            new app.utils.Hateoas('cursos'))
      
    app.route('/cursos')
        .post((req, res) => {

            courseController.create(req.body)
                .then(success => res.status(201).json(success))
                .catch(error => res.status(500).json(error))
        })
        .get((req, res) => {

            courseController.find()
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
       })

    app.route('/cursos/:id')
        .get((req, res) => {
            courseController.findById(req.params.id)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .delete((req, res) => {

            courseController.delete(req.params.id)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .put((req, res) => {

            req.body.id = req.params.id;

            courseController.update(req.body)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
}
