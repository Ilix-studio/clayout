require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');

//call express
const app = express();



//call mongodb connection function
connectDB();



//middleware
app.use(express.json())

//Routes
app.use('/api/v1/bootcamps', require('./routes/bootcampRoutes'));

//listen to port 5000
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}`))





