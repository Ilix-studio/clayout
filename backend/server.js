require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');


//call mongodb connection function
connectDB();

//call express
const app = express();

//middleware
app.use(express.json())

//Routes
app.use('/api/v1/bootcamps', require('./routes/bootcampRoutes'));

// error handler should be below routes
app.use(errorHandler);

//listen to port 5000
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}`))





