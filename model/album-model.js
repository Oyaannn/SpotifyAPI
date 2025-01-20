const { config } = require('dotenv')
const db = require('../config/db')
const bcrypt = require('bcrypt')

const getAllAlbum = async() => {
    try {
        const query = "SELECT * FROM album"
        const [result] = await db.query(query)
        return result
    } catch (error){
    console.log(error);
    }
}

const createAlbum = async (data) => {
    const {title, realese_date, artist_id} = data
    const [result] = await db.query('INSERT INTO album (title,realese_date,artist_id) values(?,?,?)',[title,realese_date,artist_id])
    return result.insertId
}

const deleteAlbum = async (album_id) => {
    try {
        const [result] = await db.query('DELETE FROM album WHERE album_id = ?',[album_id])
        return result.affectedRows
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = { getAllAlbum, createAlbum, deleteAlbum }