const fs =require("fs")
// right  now we are reading this data from local file but in real we will be reading data from database

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));


exports.getAllTours = (req,res)=>{
    res.status(200).json({
      status:"success",
      results:tours.length,
      requestedAt :req.requestTime,
      data :{
        tours:tours
      }
    })
  
  
  }
  
  exports.getTour = (req, res) => {
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
  
  exports.createTour = (req, res) => {
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
  
  exports.updateTour = (req, res) => {
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
  
  exports.deleteTour =  (req, res) => {
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
  