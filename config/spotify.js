require('dotenv').config()
const axios = require('axios')

const tmdb = axios.create({
    baseURL:'https://accounts.spotify.com/api/token',
    headers:{
        Accept :'application/json',
        Authorization :`Bearer ${process.env.CLIENTID.CLIENTSECRET}`
    }
})
module.exports = tmdb