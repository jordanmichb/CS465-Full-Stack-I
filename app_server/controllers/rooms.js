const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Getaways', active: {rooms: true}});
};

module.exports = {
    rooms
}