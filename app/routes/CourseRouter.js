const {
    check,
    validationResult
} = require('express-validator');
module.exports = app => {

    const courseController = new app.controllers.CourseController(
        new app.repositories.CourseRepository(
            app.models.CourseModel),
        new app.utils.Hateoas('cursos'))

    app.route('/cursos')
        .post([
                check('nome')
                .isLength({
                    min: 3
                })
                .withMessage('O nome do curso esta invalido, preencha com mais de 3 letras')
            ],

            (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({
                        errors: errors.array()
                    });
                }

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
        .put([
                check('nome')
                .isLength({
                    min: 3
                })
                .withMessage('Preencha com mais de 3 letras'),
                check('_id')
                .isEmpty()
                .withMessage('Você deve enviar o ID na URL'),
                check('ativo')
                .isBoolean()
                .withMessage("Preencha com true ou false")
            ],

            (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({
                        errors: errors.array()
                    });
                }

                req.body.id = req.params.id;

                courseController.update(req.body)
                    .then(success => res.status(200).json(success))
                    .catch(error => res.status(500).json(error))
            })


}