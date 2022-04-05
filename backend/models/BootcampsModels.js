const mongoose = require("mongoose");

const bootcampSchema = mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'Please write a name'],
        unique: true
    },
    rating: {
        type: Number,
        required: [true, 'Please provide rating'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Please provide the required description'],
    },
    price: {
        type: Number,
        required: [true, 'Enter price'] 
    }
})

const Bootcamp = mongoose.model('Bootcamp', bootcampSchema);

module.exports = Bootcamp;