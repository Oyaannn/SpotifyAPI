require('dotenv').config();
const axios = require('axios');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('CLIENT_ID or CLIENT_SECRET is missing from .env file');
}

const TOKEN_URL = 'https://accounts.spotify.com/api/token';

async function getAccessToken() {
    try {
        const response = await axios.post(
            TOKEN_URL,
            new URLSearchParams({
                grant_type: 'client_credentials',
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
                },
            }
        );

        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error.response?.data || error.message);
        throw new Error('Failed to fetch Spotify access token');
    }
}

module.exports = {getAccessToken};
