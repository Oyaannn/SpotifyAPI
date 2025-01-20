const ArtistModel = require('../model/artist-model')

const getAllArtist = async (req, res) => {
    try {
        const response = await ArtistModel.getAllArtist()
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const createArtist = async (req, res) => {
    try {
        const newArtist = await ArtistModel.createArtist(req.body);
        res.status(200).json({ id: newArtist, ...req.body });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Insert Data', error });
    }
}

const updateArtist = async (req, res) => {
    try {
        const { artist_id } = req.params
        const { name, gender } = req.body
        const rowsUpdated = await ArtistModel.updateArtist(artist_id, { name, gender });

        if (rowsUpdated > 0) {
            res.status(200).json({ message: `Artist with ID ${artist_id} updated successfully`, data: { artist_id, name, gender } });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error update artist', error });
    }
}

const deleteArtist = async (req, res) => {
    try {
        const { artist_id } = req.params
        const rowsDeleted = await ArtistModel.deleteArtist(artist_id);

        if (rowsDeleted > 0) {
            res.status(200).json({ message: `Artist with ID ${artist_id} deleted successfully` });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting artist', error });
    }
}

module.exports = { getAllArtist,createArtist, updateArtist, deleteArtist };