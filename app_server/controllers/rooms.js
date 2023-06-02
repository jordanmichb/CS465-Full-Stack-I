const fs = require('fs');
const suites = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Getaways', suites, active: {rooms: true}});
};

module.exports = {
    rooms
}