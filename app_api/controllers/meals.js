const mongoose = require('mongoose');
const model = mongoose.model('meals');

// GET: /meals - lists all the meals
const mealsList = async (req, res) => {
    model
        .find({}) // call find with no params to get all meals
        .exec((err, meals) => {
            if (!meals) {
                return res
                    .status(404)
                    .json({ "message": "meal not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(meals);
            }
        });
};

const mealsFindName = async (req, res) => {
    model
        .find({ 'name': req.params.mealName })
        .exec((err, meals) => {
            if (!meals) {
                return res
                    .status(404)
                    .json({ "message": "meal not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(meals);
            }
        });
};

module.exports = {
    mealsList,
    mealsFindName
};