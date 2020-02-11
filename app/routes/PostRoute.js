module.exports = app => {

    const postcontroller = new app.controllers.PostController(
        new app.repositories.PostRepository(
            app.models.PostModel),
        new app.utils.Hateoas('posts'))

    app.route('/posts')
        .post((req, res) => {


            req.body.usuario = req.userId

            postcontroller.create(req.body)
                .then(success => res.status(201).json(success))
                .catch(error => res.status(500).json(error))

        })
        .get((req, res) => {

            if (req.body.search == undefined) {

                postcontroller.find()
                    .then(success => res.status(200).json(success))
                    .catch(error => res.status(500).json(error))

            } else {

                postcontroller.search(req.body.search)
                    .then(success => res.status(200).json(success))
                    .catch(error => res.status(500).json(error))
            }
        })

    app.route('/posts/pagination/:inicial/:final')
        .get((req, res) => {

            const pagination = {
                inicio: req.params.inicial,
                fim: req.params.final
            }

            if (req.body.search == undefined) {

                postcontroller.findWithPagination(pagination)
                    .then(success => res.status(200).json(success))
                    .catch(error => res.status(500).json(error))

            } else {

                pagination.body = req.body.search

                postcontroller.searchWithPagination(pagination)
                    .then(success => res.status(200).json(success))
                    .catch(error => res.status(500).json(error))
            }
        })

    app.route('/posts/:id')
        .get((req, res) => {

            postcontroller.findById(req.params.id)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .delete((req, res) => {

            postcontroller.delete(req.params.id)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
        .put((req, res) => {

            req.body._id = req.params.id;

            postcontroller.update(req.body)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })
}