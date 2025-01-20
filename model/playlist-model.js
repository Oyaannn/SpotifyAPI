const { config } = require('dotenv')
const db = require('../config/db')
const bcrypt = require('bcrypt')

const getAllPlaylist = async() => {
    try {
        const query = "SELECT * FROM playlist"
        const [result] = await db.query(query)
        return result
    } catch (error){
    console.log(error);
    }
}

const createPlaylist = async (data) => {
    const {song_id} = data
    const [result] = await db.query('INSERT INTO playlist (song_id) values(?)',[song_id])
    return result.insertId
}

const deletePlaylist = async (playlist_id) => {
    try {
        const [result] = await db.query('DELETE FROM playlist WHERE playlist_id = ?',[playlist_id])
        return result.affectedRows
    } catch (error) {
        console.log(error)
        throw error
    }
};

module.exports = {getAllPlaylist, createPlaylist, deletePlaylist}