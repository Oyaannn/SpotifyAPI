const SongModel = require('../model/song-model')

const getAllSong = async (req, res) => {
    try {
        const response = await SongModel.getAllSong()
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const createSong = async (req, res) => {
    try {
        const newSong = await SongModel.createSong(req.body);
        res.status(200).json({ id: newSong, ...req.body });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Insert Data', error });
    }
}

const updateSong = async (req, res) => {
    try {
        const { song_id } = req.params
        const { title, duration, album_id, genre_id } = req.body
        const rowsUpdated = await SongModel.updateSong(song_id, { title, duration, album_id, genre_id });

        if (rowsUpdated > 0) {
            res.status(200).json({ message: `Music with ID ${song_id} updated successfully`, data: { song_id, title, duration, album_id, genre_id } });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error update music', error });
    }
}

const deleteSong = async (req, res) => {
    try {
        const { song_id } = req.params
        const rowsDeleted = await SongModel.deleteSong(song_id);

        if (rowsDeleted > 0) {
            res.status(200).json({ message: `Music with ID ${song_id} deleted successfully` });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting music', error });
    }
}

module.exports = { getAllSong, createSong, updateSong, deleteSong }