const about = (req, res) => {
    res.render('about', {title: 'Travlr Getaways', active: {about: true}});
};

module.exports = {
    about
}