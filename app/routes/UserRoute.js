const host = process.env.HOST || 'http://localhost';
const {
    check,
    validationResult
} = require('express-validator');

const multer = require('multer');
const multerConfig = require('../../config/multer-config');

module.exports = app => {

    const usercontroller = new app.controllers.UserController(
        new app.repositories.UserRepository(app.models.UserModel),
        new app.utils.Hateoas('user'))

    const perfilModel = app.models.ProfileModel;

    
    app.post('/user/importar', multer(multerConfig).single('file'), (req, res) => {

        usercontroller.import(perfilModel)
            .then(success => res.json(success))
            .catch(error => res.json(error))

        return res.json({mensagem: 'Upload com sucesso'})

    })

    app.route('/user')
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
                .withMessage('Senha incompativel, digite outra e maior que 4 digitos'),
                check('curso_id')
                .isEmpty()
                .withMessage('Selecione um dos cursos corretamente'),
                check('caracteristica')
                .isEmpty()
                .withMessage('Selecione uma das categorias.')

            ],
            (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({
                        errors: errors.array()
                    });
                }

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
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(422).json({
                        errors: errors.array()
                    });
                }

                req.body.id = req.params.id;

                usercontroller.update(req.body)
                    .then(success => res.status(200).json(success))
                    .catch(error => res.status(500).json(error))
            })
}