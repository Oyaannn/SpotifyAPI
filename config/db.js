require('dotenv').config()
const mysql = require('mysql2')

const db = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASS,
    database:process.env.DB_NAME
})

const poolPromise = db.promise()
module.exports = poolPromise