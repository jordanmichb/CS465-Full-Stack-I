const fs = require('fs');
const blogs = JSON.parse(fs.readFileSync('./data/blogs.json', 'utf8'));
const tips = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));

const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', blogs, tips, active: {news: true}});
};

module.exports = {
    news
}