const { config } = require('dotenv')
const db = require('../config/db')
const bcrypt = require('bcrypt')

const getAllArtist = async() => {
    try {
        const query = "SELECT * FROM artist"
        const [result] = await db.query(query)
        return result
    } catch (error){
    console.log(error);
    }
}

const createArtist = async (data) => {
    const {name, gender} = data
    const [result] = await db.query('INSERT INTO artist (name,gender) values(?,?)',[name,gender])
    return result.insertId
}

const updateArtist = async (artist_id, data) => {
    try {
        const { name, gender } = data;
        const query = "UPDATE artist SET name = ?, gender = ? WHERE artist_id = ?";
        const [result] = await db.query(query, [name, gender, artist_id]);
        return result.affectedRows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteArtist = async (artist_id) => {
    try {
        const [result] = await db.query('DELETE FROM artist WHERE artist_id = ?',[artist_id])
        return result.affectedRows
    } catch (error) {
        console.log(error)
        throw error
    }
};

module.exports = {getAllArtist, createArtist, updateArtist, deleteArtist}