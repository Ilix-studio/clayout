// promise all

const asyncHandler = (controllerfunction) => (req, res, next) =>
  Promise.resolve(controllerfunction(req, res, next)).catch(next);

module.exports = asyncHandler;

//import to bootcampController.js

//Anytime you work with async await, some promise need to be return.
// to avoid using error handling,aka- midddleware functionality,  use try catch block on every controller routes
