const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* render meal list view */
const renderMealsList = (req, res, responseBody) => {
    let message = null;

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No meals exist in database!';
        }
    }

    res.render('meals', {
        title: 'Travlr Getaways',
        food: responseBody,
        message,
        active: {meals: true}
    });
};

/* GET meal list view */
const mealsList = (req, res) => {
    const path = '/api/meals';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.mealList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderMealsList(req, res, body);
        }
    )
}

module.exports = {
    mealsList
}