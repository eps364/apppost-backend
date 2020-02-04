const express = require('express')
const consign = require('consign')
const express_hateoas_links = require('express-hateoas-links')
const mongoose_connect = require('./mongoose-connect')
const routes = require('../app/routes')
const cors = require('cors');
require("dotenv/config")

//Variaveis de ambiente
//if(process.env.NODE_ENV !== 'production') 

const app = express()

app.use(cors());
app.get('/', (req, res) => res.send('<h1> Post App Compasso </h1>'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express_hateoas_links)

//Conecting with database
mongoose_connect()

consign()
    .include('./app/models')
    .then('./app/repositories')
    .then('./app/controllers')
    .into(app)

//Routes
routes(app)

module.exports = app
