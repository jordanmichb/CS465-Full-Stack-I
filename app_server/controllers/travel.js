const travel = (req, res) => {
    res.render('travel', {title: 'Travlr Getaways', active: {travel: true}});
};

module.exports = {
    travel
}