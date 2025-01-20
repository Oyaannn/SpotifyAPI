const AlbumModel = require('../model/album-model')

const getAllAlbum = async (req, res) => {
    try {
        const response = await AlbumModel.getAllAlbum()
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const createAlbum = async (req, res) => {
    try {
        const newAlbum = await AlbumModel.createAlbum(req.body);
        res.status(200).json({ id: newAlbum, ...req.body });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Insert Data', error });
    }
}


const deleteAlbum = async (req, res) => {
    try {
        const { album_id } = req.params
        const rowsDeleted = await AlbumModel.deleteAlbum(album_id);

        if (rowsDeleted > 0) {
            res.status(200).json({ message: `Album with ID ${album_id} deleted successfully` });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting album', error });
    }
}

module.exports = { getAllAlbum, createAlbum, deleteAlbum }