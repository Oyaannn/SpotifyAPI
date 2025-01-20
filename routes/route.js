const express = require ('express')
const userController        = require('../controllers/user-controller')
const songController        = require('../controllers/song-controller')
const albumController       = require('../controllers/album-controller')
const artistController      = require('../controllers/artist-controller')
const genreController       = require('../controllers/genre-controller')
const playlistController    = require('../controllers/playlist-controller')
const router           = express.Router()
const userAuth         = require("../middleware/user-middleware")
const { createArtist } = require('../model/artist-model')


router.post('/user',userController.userReg);
router.get('/user/login',userController.userLogin);
router.get('/user',userAuth,userController.getAllUser);
router.put('/user/:id',userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

router.post('/song',songController.createSong);
router.get('/song',songController.getAllSong);
router.put('/song/:song_id',songController.updateSong);
router.delete('/song/:song_id',songController.deleteSong);

router.post('/album',albumController.createAlbum);
router.get('/album',albumController.getAllAlbum);
router.delete('/album/:album_id',albumController.deleteAlbum);

router.post('/artist',artistController.createArtist);
router.get('/artist',artistController.getAllArtist);
router.put('/artist/:artist_id',artistController.updateArtist);
router.delete('/artist/:artist_id',artistController.deleteArtist);

router.post('/genre',genreController.createGenre);
router.delete('/genre/:genre_id',genreController.deleteGenre);

router.post('/playlist',playlistController.createPlaylist);
router.get('/playlist',playlistController.getAllPlaylist);
router.delete('/playlist/:playlist_id',playlistController.deletePlaylist);

module.exports = router