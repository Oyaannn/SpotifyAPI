const express = require('express')
const cors = require('cors')
require('dotenv').config()
const router = require('./routes/route')
const app = express ()

app.use(cors())
app.use(express.json())
app.use('/api',router)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server run at http://localhost:${port}/api/user`);
})