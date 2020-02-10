const jwt = require('jsonwebtoken')

module.exports = app => {

    const autcontroller = new app.controllers.AuthenticateController(
        new app.repositories.UserRepository(
            app.models.UserModel),
        jwt,
        new app.utils.Hateoas('authenticate')
    )

    app.post('/authenticate', (req, res) => {

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
                        .catch(error => res.status(500).send(error))
            })
    })
}