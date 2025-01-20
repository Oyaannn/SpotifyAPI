const { config } = require('dotenv')
const db = require('../config/db')
const bcrypt = require('bcrypt')

const getAllSong = async() => {
    try {
        const query = "SELECT * FROM song"
        const [result] = await db.query(query)
        return result
    } catch (error){
    console.log(error);
    }
}

const createSong = async (data) => {
    const {title, duration, album_id, genre_id} = data
    const [result] = await db.query('INSERT INTO song (title,duration,album_id,genre_id) values(?,?,?,?)',[title,duration,album_id,genre_id])
    return result.insertId
}

const updateSong = async (song_id, data) => {
    try {
        const { title, duration, album_id, genre_id } = data;
        const query = "UPDATE song SET title = ?, duration = ?, album_id = ?, genre_id = ? WHERE song_id = ?";
        const [result] = await db.query(query, [title, duration, album_id, genre_id, song_id]);
        return result.affectedRows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteSong = async (song_id) => {
    try {
        const [result] = await db.query('DELETE FROM song WHERE song_id = ?',[song_id])
        return result.affectedRows
    } catch (error) {
        console.log(error)
        throw error
    }
};

module.exports = {getAllSong, createSong, updateSong, deleteSong}