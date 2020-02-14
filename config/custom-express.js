
const express = require('express')
const consign = require('consign')
const mongoose_connect = require('./mongoose-connect')
const routes = require('../app/routes')
const cors = require('cors');

require("dotenv/config");

//Variaveis de ambiente
//if(process.env.NODE_ENV !== 'production')

const app = express()

app.use(cors());
app.get('/', (req, res) => res.send('<h1> Post App Compasso </h1>'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


consign({ cwd: 'app'})
    .include('models')
    .then('repositories')
    .then('controllers')
    .then('utils')
    .into(app)

//Conecting with database
mongoose_connect(app);

//Routes
routes(app)

module.exports = app
