const GenreModel = require('../model/genre-model')

const createGenre = async (req, res) => {
    try {
        const newGenre = await GenreModel.createGenre(req.body);
        res.status(200).json({ id: newGenre, ...req.body });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Insert Data', error });
    }
}

const deleteGenre = async (req, res) => {
    try {
        const { genre_id } = req.params
        const rowsDeleted = await GenreModel.deleteGenre(genre_id);

        if (rowsDeleted > 0) {
            res.status(200).json({ message: `Genre with ID ${genre_id} deleted successfully` });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting genre', error });
    }
}

module.exports = { createGenre, deleteGenre }