const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* render meal list view */
const renderBlogsList = (req, res, responseBody) => {
    let message = null;

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No blogs exist in database!';
        }
    }

    res.render('index', {
        title: 'Travlr Getaways',
        blogs: responseBody,
        message,
        active: {index: true}
    });
};

/* GET meal list view */
const index = (req, res) => {
    const path = '/api/blogs';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.index calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderBlogsList(req, res, body);
        }
    )
}

module.exports = {
    index
}


/*
const fs = require('fs');
const blogs = JSON.parse(fs.readFileSync('./data/blogs.json', 'utf8'));


const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', blogs, active: {index: true}});
};

module.exports = {
    index
}
*/