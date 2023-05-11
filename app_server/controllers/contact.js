const contact = (req, res) => {
    res.render('contact', {title: 'Travlr Getaways', active: {contact: true}});
};

module.exports = {
    contact
}