require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}`))

app.get('/', (req, res) => {
    res.status(200).send(`Routing is happening`)
})