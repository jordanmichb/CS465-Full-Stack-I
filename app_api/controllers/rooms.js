const mongoose = require('mongoose');
const Room = mongoose.model('rooms');
const User = mongoose.model('users');

// GET: /rooms - lists all the rooms
const roomsList = async (req, res) => {
    Room
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
    Room
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

const roomsAddRoom = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            Room
                .create({
                    name: req.body.name,
                    image: req.body.image,
                    description: req.body.description,
                    rate: req.body.rate
                },
                (err, room) => {
                    if (err) {
                        console.log(err);
                        return res
                            .status(400) // bad request, invalid content
                            .json(err);
                    } else {
                        return res
                            .status(201) // created
                            .json(room);
                    }
                    });
                }
    )
}

const roomsUpdateRoom = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            Room
                .findOneAndUpdate({ 'name': req.params.roomName }, {
                    name: req.body.name,
                    image: req.body.image,
                    description: req.body.description,
                    rate: req.body.rate
                }, { new: true })
                .then(room => {
                    if (!room) {
                        return res
                            .status(404)
                            .send({
                                message: "Room not found with name " + req.params.roomName
                            });
                    }
                    res.send(room);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res 
                            .status(404)
                            .send({
                                message: "Room not found with name " + req.params.roomName
                            })
                    }
                    return res
                        .status(500) // server error
                        .json(err);
                });
        }
    )
}

const roomsDeleteRoom = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            Room
                .deleteOne({ 'name': req.params.roomName })
                .exec((err, room) => {
                    if (!room) {
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
                            .json(room);
                    }
                });
        }
    )
};

const getUser = (req, res, callback) => {
    if (req.payload && req.payload.email) {
        User
            .findOne({ email: req.payload.email })
            .exec((err, user) => {
                if (!user) {
                    return res
                        .status(404)
                        .json({ "message": "User not found" });
                } else if (err) {
                    console.log(err);
                    return res
                        .status(404)
                        .json(err);
                }
                callback(req, res, user.name);
            });
    } else {
        return res
            .status(404)
            .json({ "message": "User not found" })
    }
};


module.exports = {
    roomsList,
    roomsFindName,
    roomsAddRoom,
    roomsUpdateRoom,
    roomsDeleteRoom
};