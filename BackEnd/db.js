const {Pool} = require('pg')

const pool = new Pool({
    host : 'localhost',
    user : 'postgres',
    database : '',
    port : 5432,
    password : 'Kingsr@08'
})

module.exports = pool