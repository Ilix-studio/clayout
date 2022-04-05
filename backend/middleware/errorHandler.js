const ErrorResponse = require('./../utils/errorResponse');

//create a function call error handler function
// error handler function will control error , request , response, and next
// put error in first parameter bcoz node will know that this is global error handler
// add middleware to catch the error handler.

const errorHandler = (err, req, res, next) =>{
 console.log(err);

 let error = { ... err };
 error.message = err.message;
 
 console.log(error);

 //check for 3 types of error
 //first - resource not found error
 // cast error will occur if we didnot found any mongoDb id that was searched for.
 if(err.name === "CastError"){
    const message = "Resouce not found";
    error = new ErrorResponse(message, 404);
 }

 //Second - check duplicate key 
 if(err.code === 11000){
     const message = "Duplicate field value entered";
     error = new ErrorResponse(message, 400);
 } 

 //Third - models validation error 
 if(err.name === "validationError"){
    const message = Object.values(err.errors)
    .map(error => error.message)
     .join(", ");
     error = new ErrorResponse(message, 400); 
 }
 
 //Add more check here

 res.status(error.statusCode || 500).json({
     suceess: false,
     error: error.message || 'server Error'
 });

}
module.exports = errorHandler;