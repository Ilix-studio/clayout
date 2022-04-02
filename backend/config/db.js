const mongoose = require('mongoose');

const connectString = process.env.DATABASE_CONNECTION;

const connectDB = async () => {
   try {
      await mongoose.connect(connectString,{
         
          useUnifiedTopology: true,
          useNewUrlParser:true,
      });
      console.log(`MongoDB connected 💖`)
   } catch (error) {
   
    console.log(`MongoDB failed 😞`)
    console.log(error);
    process.exit(1);
}
}
module.exports=connectDB;