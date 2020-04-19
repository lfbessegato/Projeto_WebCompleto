const app = require('express')()
const consign = require('consign')

// Consig() -> gerenciar as dependencias dos middlewares
consign ()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})