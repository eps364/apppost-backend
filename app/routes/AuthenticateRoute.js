const {
    check,
    validationResult
} = require('express-validator');
const jwt = require('jsonwebtoken')

module.exports = app => {

    const autcontroller = new app.controllers.AuthenticateController(
        new app.repositories.UserRepository(
            app.models.UserModel),
        jwt,
        new app.utils.Hateoas('authenticate')
    )

    app.post('/authenticate', [
            check('email')
            .isEmail()
            .withMessage('Digite um email no formato correto.'),
            check('senha')
            .isLength({
                min: 4
            })
            .withMessage('Senha incompativel, digite outra e maior que 4 digitos')
        ],

        (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({
                    errors: errors.array()
                });
            }

            autcontroller.authenticate(req.body)
                .then(success => res.status(200).send(success))
                .catch(error => res.status(500).send(error))
        })

    //Validando token
    app.use('/', (req, res, next) => {

        autcontroller.validaExcecao(req)
            .then(success => {

                if (success)
                    next()

                if (!success)
                    autcontroller.verify(req)
                        .then(success => next())
                        .catch(error => res.status(500).json(error))
            })
    })
}