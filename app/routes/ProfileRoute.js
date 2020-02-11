const {
    check,
    validationResult
} = require('express-validator');
module.exports = app => {

    const profilecontroller = new app.controllers.ProfileController(
        new app.repositories.ProfileRepository(
            app.models.ProfileModel),
        new app.utils.Hateoas('perfil'))

    app.route('/perfil')
        .post([
            check('nome')
            .isLength({
                min: 3
            })
            .withMessage('O perfil esta invalido, preencha com mais de 3 letras')
        ],

        (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({
                    errors: errors.array()
                });
            }
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
            profilecontroller.update(req.body)
                .then(success => res.status(200).json(success))
                .catch(error => res.status(500).json(error))
        })

}