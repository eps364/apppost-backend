const {
    check,
    validationResult
} = require('express-validator');
module.exports = app => {

    const studentController = new app.controllers.StudentController(
        new app.repositories.StudentRepository(
            app.models.UserModel),
        new app.utils.Hateoas('aluno'))

    app.route('/aluno')
        .post([
                check('nome')
                .isLength({
                    min: 3
                })
                .withMessage('Preencha com mais de 3 letras'),

                check('cpf')
                .isNumeric()
                .isLength({
                    min: 11,
                    max: 11
                })
                .withMessage('Digite um cpf valido, apenas numeros, sem ponto e sem hifem.'),

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

                studentController.create(req.body)
                    .then(success => res.status(200).json(success))
                    .catch(error => res.status(500).json(error))

            })
}