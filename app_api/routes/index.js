const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');
const mealsController = require('../controllers/meals');
const blogsController = require('../controllers/blogs');
const tipsController = require('../controllers/tips');

router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);

router
    .route('/rooms')
    .get(roomsController.roomsList);

router
    .route('/rooms/:roomName')
    .get(roomsController.roomsFindName);

router
    .route('/meals')
    .get(mealsController.mealsList);

router
    .route('/meals/:mealName')
    .get(mealsController.mealsFindName);

router
    .route('/blogs')
    .get(blogsController.blogsList);

router
    .route('/blogs/:blogTitle')
    .get(blogsController.blogsFindTitle);

router
    .route('/tips')
    .get(tipsController.tipsList);

router
    .route('/tips/:tipTitle')
    .get(tipsController.tipsFindTitle);

module.exports = router;