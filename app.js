const express = require('express');
const app = express();
const fs =require("fs")
const morgan =require("morgan")
const tourRouter =require('./routes/tourRoutes')
const userRouter =require('./routes/userRoutes')


// middleware is a function to modify incomming data

console.log(process.env.NODE_ENV);


if(process.env.NODE_ENV === "development"){

app.use(morgan("dev"));

}

app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.use((req,res,next)=>{
  req.requestTime =  new Date().toISOString();
  next()

})

// Define a route for the homepage
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });



// Set the port number




  // Routes
 

  app.use("/api/v1/tours",tourRouter)
  app.use("/api/v1/users",userRouter)

// Start the server
module.exports = app