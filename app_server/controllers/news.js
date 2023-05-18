const fs = require('fs');
const latest = JSON.parse(fs.readFileSync('./data/latest-news.json', 'utf8'));
const tips = JSON.parse(fs.readFileSync('./data/vacation-tips.json', 'utf8'));

const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', latest, tips, active: {news: true}});
};

module.exports = {
    news
}