const express = require('express');
const app = express();
const fs =require("fs")



// middleware is a function to modify incomming data
app.use(express.json());
// right  now we are reading this data from local file but in real we will be reading data from database
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// Define a route for the homepage
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });



// Set the port number
const PORT =  3000;

const getAllTours = (req,res)=>{
  res.status(200).json({
    status:"success",
    results:tours.length,
    data :{
      tours:tours
    }
  })


}

const getTour = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;

  // if(id>tours.length){

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }

  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
    },
  });
}

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;

  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  // we will not use write file sync here because we are in the callback function and we do not want to block the code
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
}

const updateTour = (req, res) => {
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here ....>',
    },
  });
}

const deleteTour =  (req, res) => {
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }

  res.status(204).json({
    status: 'success',
  data:null
  });
}


app.get('/api/v1/tours', getAllTours);

app.get('/api/v1/tours/:id', getTour);

app.post('/api/v1/tours',createTour );

app.patch('/api/v1/tours/:id',updateTour );

app.delete('/api/v1/tours/:id',deleteTour);

// Start the server
app.listen(PORT, () => {
  console.log(`Serverr is running on http://localhost:${PORT}`);
});