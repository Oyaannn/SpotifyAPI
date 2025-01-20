const PlaylistModel = require('../model/playlist-model')

const getAllPlaylist = async (req, res) => {
    try {
        const response = await PlaylistModel.getAllPlaylist()
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const createPlaylist = async (req, res) => {
    try {
        const newArtist = await PlaylistModel.createPlaylist(req.body);
        res.status(200).json({ id: newArtist, ...req.body });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Insert Data', error });
    }
}

const deletePlaylist = async (req, res) => {
    try {
        const { playlist_id } = req.params
        const rowsDeleted = await PlaylistModel.deletePlaylist(playlist_id);

        if (rowsDeleted > 0) {
            res.status(200).json({ message: `Artist with ID ${playlist_id} deleted successfully` });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting artist', error });
    }
}

module.exports = { getAllPlaylist, createPlaylist, deletePlaylist };