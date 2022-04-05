const express = require("express");
const router = express.Router();
const bootcampConrollers = require('../controllers/bootcampControllers');



//@route - /api/v1/bootcamps
router
.route('/')
.get(bootcampConrollers.getAllBootcamps)
.post(bootcampConrollers.createBootcamp);

//@route - api/v1/bootcamps/id
router
.route('/:id')
.put(bootcampConrollers.updateBootcampById)
.delete(bootcampConrollers.deleteBootcampById);

module.exports=router;