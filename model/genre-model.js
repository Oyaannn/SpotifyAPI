const { config } = require('dotenv')
const db = require('../config/db')
const bcrypt = require('bcrypt')

const createGenre = async (data) => {
    const {genre_name} = data
    const [result] = await db.query('INSERT INTO genre (genre_name) values(?)',[genre_name])
    return result.insertId
}

const deleteGenre = async (genre_id) => {
    try {
        const [result] = await db.query('DELETE FROM genre WHERE genre_id = ?',[genre_id])
        return result.affectedRows
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = {createGenre, deleteGenre}