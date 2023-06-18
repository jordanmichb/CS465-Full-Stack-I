const express = require('express');
const router = express.Router();
const { expressjwt: jwt } = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    requestProperty: 'payload',
    algorithms: ["HS256"]
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');
const mealsController = require('../controllers/meals');
const blogsController = require('../controllers/blogs');
const tipsController = require('../controllers/tips');

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(auth, tripsController.tripsUpdateTrip)
    .delete(auth, tripsController.tripsDeleteTrip);

router
    .route('/rooms')
    .get(roomsController.roomsList)
    .post(auth, roomsController.roomsAddRoom);

router
    .route('/rooms/:roomName')
    .get(roomsController.roomsFindName)
    .put(auth, roomsController.roomsUpdateRoom)
    .delete(auth, roomsController.roomsDeleteRoom);

router
    .route('/meals')
    .get(mealsController.mealsList)
    .post(auth, mealsController.mealsAddMeal);

router
    .route('/meals/:mealName')
    .get(mealsController.mealsFindName)
    .put(auth, mealsController.mealsUpdateMeal)
    .delete(auth, mealsController.mealsDeleteMeal);

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