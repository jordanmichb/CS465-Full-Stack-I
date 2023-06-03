const fs = require('fs');
const blogs = JSON.parse(fs.readFileSync('./data/blogs.json', 'utf8'));


const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', blogs, active: {index: true}});
};

module.exports = {
    index
}