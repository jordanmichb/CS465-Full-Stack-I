const mongoose = require('mongoose');
const model = mongoose.model('rooms');

// GET: /rooms - lists all the rooms
const roomsList = async (req, res) => {
    model
        .find({}) // call find with no params to get all rooms
        .exec((err, rooms) => {
            if (!rooms) {
                return res
                    .status(404)
                    .json({ "message": "room not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(rooms);
            }
        });
};

const roomsFindName = async (req, res) => {
    model
        .find({ 'name': req.params.roomName })
        .exec((err, rooms) => {
            if (!rooms) {
                return res
                    .status(404)
                    .json({ "message": "room not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(rooms);
            }
        });
};

module.exports = {
    roomsList,
    roomsFindName
};