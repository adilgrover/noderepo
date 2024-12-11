const express =require('express')

const tourController = require("./../controllers/tourController")



const router = express.Router();

router.param('id', tourController.checkID);


router.route('/').get(tourController.getAllTours).post(tourController.checBody,tourController.createTour)


router.get('/:id', tourController.getTour);



router.patch('/:id',tourController.updateTour );

router.delete('/:id',tourController.deleteTour);

module.exports =router;