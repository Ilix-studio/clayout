const Bootcamp = require('./../models/BootcampsModels');
const asyncHandler = require('./../middleware/asyncHandler')
const ErrorResponse = require('./../utils/errorResponse')
// find function is used to send a query to mongoDB to retrive all the bootcamp.
// if not error comes
// we have to used trycatch block in every singlr controller 
// it makes development harder. So, we use global error handler and async handler
// to get rig off try catch block
// This make getting errors in better format
// So, middleware is used to handle it.
// wrap asynchandler into it

//controller1
exports.getAllBootcamps = asyncHandler(  async (req, res, next) => {
   const bootcamps = await Bootcamp.find();

   res.status(200).json({
       sucess:true,
       data: bootcamps,
   });
  
});

//controller2
exports.createBootcamp =  asyncHandler(  async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);


    res.status(201).json({
        sucess:true,
        data: bootcamp,
    });
});

//controller3
exports.updateBootcampById =  asyncHandler(  async (req, res, next) => {
   let bootcamp = await Bootcamp.findById(req.params.id);

   if(!bootcamp) {
      return next(new ErrorResponse(`Bootcamp with id ${req.params.id} was not found`, 404))
   }
   bootcamp = await Bootcamp
   .findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators: true});

   res.status(201).json({
       success:true,
       data: bootcamp,
   })
});

//controller4
exports.deleteBootcampById =  asyncHandler(  async (req, res, next) => {
    let bootcamp = await Bootcamp.findById(req.params.id);

   if(!bootcamp) {
      return next(new ErrorResponse(`Bootcamp with id ${req.params.id} was not found`, 404))
   }
   await bootcamp.remove();
   
   res.status(200).json({
       success:true,
       data: {},
   })   
});