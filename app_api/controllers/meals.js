const mongoose = require('mongoose');
const Meal = mongoose.model('meals');
const User = mongoose.model('users');

// GET: /meals - lists all the meals
const mealsList = async (req, res) => {
    Meal
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
    Meal
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

const mealsAddMeal = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            Meal
                .create({
                    name: req.body.name,
                    image: req.body.image,
                    description: req.body.description,
                },
                (err, meal) => {
                    if (err) {
                        console.log(err);
                        return res
                            .status(400) // bad request, invalid content
                            .json(err);
                    } else {
                        return res
                            .status(201) // created
                            .json(meal);
                    }
                    });
                }
    )
}

const mealsUpdateMeal = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            Meal
                .findOneAndUpdate({ 'name': req.params.mealName }, {
                    name: req.body.name,
                    image: req.body.image,
                    description: req.body.description,
                }, { new: true })
                .then(meal => {
                    if (!meal) {
                        return res
                            .status(404)
                            .send({
                                message: "Meal not found with name " + req.params.mealName
                            });
                    }
                    res.send(meal);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res 
                            .status(404)
                            .send({
                                message: "Meal not found with name " + req.params.mealName
                            })
                    }
                    return res
                        .status(500) // server error
                        .json(err);
                });
        }
    )
}

const mealsDeleteMeal = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            Meal
                .deleteOne({ 'name': req.params.mealName })
                .exec((err, meal) => {
                    if (!meal) {
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
                            .json(meal);
                    }
                });
        }
   )
};

const getUser = (req, res, callback) => {
    if (req.payload && req.payload.email) {
        User
            .findOne({ email: req.payload.email })
            .exec((err, user) => {
                if (!user) {
                    return res
                        .status(404)
                        .json({ "message": "User not found" });
                } else if (err) {
                    console.log(err);
                    return res
                        .status(404)
                        .json(err);
                }
                callback(req, res, user.name);
            });
    } else {
        return res
            .status(404)
            .json({ "message": "User not found" })
    }
};

module.exports = {
    mealsList,
    mealsFindName,
    mealsAddMeal,
    mealsUpdateMeal,
    mealsDeleteMeal
};