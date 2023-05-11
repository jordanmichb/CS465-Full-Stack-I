const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways', active: {meals: true}});
};

module.exports = {
    meals
}