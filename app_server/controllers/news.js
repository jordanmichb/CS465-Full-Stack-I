const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* render meal list view */
const renderBlogsList = (req, res, responseBodyBlogs, responseBodyTips) => {
    let message = null;

    if (!(responseBodyBlogs instanceof Array || !(responseBodyTips instanceof Array))) {
        message = 'API lookup error';
        responseBodyBlogs = [];
        responseBodyTips = [];
    } else {
        if (!responseBodyBlogs.length || !responseBodyTips.length) {
            message = 'Database lookup error';
        }
    }

    res.render('news', {
        title: 'Travlr Getaways',
        blogs: responseBodyBlogs,
        tips: responseBodyTips,
        message,
        active: {news: true}
    });
};

/* GET blogs list view */
const newsList = (req, res) => {
    const pathBlogs = '/api/blogs';
    const pathTips = '/api/tips';
    const requestOptionsBlogs = {
        url: `${apiOptions.server}${pathBlogs}`,
        method: 'GET',
        json: {},
    };

    const requestOptionsTips = {
        url: `${apiOptions.server}${pathTips}`,
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.newsList calling ' + requestOptionsBlogs.url);

    request(
        requestOptionsBlogs,
        (err, { statusCode }, bodyBlogs) => {
            if (err) {
                console.error(err);
            }
            console.info('>> travelController.newsList calling ' + requestOptionsTips.url);
            request(
                requestOptionsTips,
                (err, { statusCode }, bodyTips) => {
                    if (err) {
                        console.error(err);
                    }
                    renderBlogsList(req, res, bodyBlogs, bodyTips);
                }
            )
        }
    )
}

module.exports = {
    newsList
}


/*
const fs = require('fs');
const blogs = JSON.parse(fs.readFileSync('./data/blogs.json', 'utf8'));
const tips = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));

const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', blogs, tips, active: {news: true}});
};

module.exports = {
    news
}
*/