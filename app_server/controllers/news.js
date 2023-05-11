const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', active: {news: true}});
};

module.exports = {
    news
}