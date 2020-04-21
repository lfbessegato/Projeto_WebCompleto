const config = require('../knexfile.js')
const knex = require('knex')(config)

// Para executar as migrations automaticamente
knex.migrate.latest([config ])

module.exports = knex