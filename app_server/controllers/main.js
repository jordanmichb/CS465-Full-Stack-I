const fs = require('fs');
const latest = JSON.parse(fs.readFileSync('./data/latest-news.json', 'utf8'));


const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', latest, active: {index: true}});
};

module.exports = {
    index
}