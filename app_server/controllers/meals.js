const fs = require('fs');
const food = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways', food, active: {meals: true}});
};

module.exports = {
    meals
}