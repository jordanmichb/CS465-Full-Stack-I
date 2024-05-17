const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* render room list view */
const renderRoomList = (req, res, responseBody) => {
    let message = null;

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No rooms exist in database!';
        }
    }

    res.render('rooms', {
        title: 'Travlr Getaways',
        suites: responseBody,
        message,
        active: {rooms: true}
    });
};

/* GET room list view */
const roomList = (req, res) => {
    const path = '/api/rooms';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.roomList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderRoomList(req, res, body);
        }
    )
}

module.exports = {
    roomList
}