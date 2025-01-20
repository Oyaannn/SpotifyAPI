const express = require('express');
const router = express.Router();
const axios = require('axios');
const { getAccessToken } = require('../config/spotify');
const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

router.get('/search/artist', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query params is required' });
    }

    try {
        const accessToken = await getAccessToken();
        const response = await axios.get(`${SPOTIFY_API_BASE_URL}/search`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                query,
                type: 'artist',
                limit: 10,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error searching for artist:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to search for artist' });
    }
});

module.exports = router;
