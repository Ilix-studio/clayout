require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}`))

//call mongodb connection function
connectDB();

app.get('/', (req, res) => {
    res.status(200).send(`Routing is happening`)
})