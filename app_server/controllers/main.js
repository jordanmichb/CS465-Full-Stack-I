const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', active: {index: true}});
};

module.exports = {
    index
}