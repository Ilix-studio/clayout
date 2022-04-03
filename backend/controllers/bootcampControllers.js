const Bootcamp = require('./../models/BootcampsModels');

// find function is used to send a query to mongoDB to retrive all the bootcamp.
// if not error comes
// So, Global Error Handling System or asynchorous handler
// So, we have to used trycatch block in every singlr controller 
// it makes development easier
// Getting your errors in better format
// So, middleware is used to handle it.

//controller1
exports.getAllBootcamps = async (req, res, next) => {
   const bootcamp = await Bootcamp.find();
  
}

//controller2
exports.createBootcamp = (req, res, next) => {
    res.send("Create  bootcamps");
}

//controller3
exports.updateBootcampById = (req, res, next) => {
    res.send("update a bootcamp by id");
}

//controller4
exports.deleteBootcampById = (req, res, next) => {
    res.send("Delete a bootcamps by id");
}