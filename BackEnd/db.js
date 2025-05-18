const {Pool} = require('pg')

const pool = new Pool({
    host : 'localhost',
    user : 'postgres',
    database : 'Practice_DB',
    port : 5432,
    password : 'Kingsr@08'
})

module.exports = pool

// module install - pg axios express body-parser express-validator fs jsonwebtoken multer path  