const mongoose = require('mongoose');
const model = mongoose.model('tips');

// GET: /tips - lists all the tips
const tipsList = async (req, res) => {
    model
        .find({}) // call find with no params to get all tips
        .exec((err, tips) => {
            if (!tips) {
                return res
                    .status(404)
                    .json({ "message": "tip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(tips);
            }
        });
};

const tipsFindTitle = async (req, res) => {
    model
        .find({ 'title': req.params.tipTitle })
        .exec((err, tips) => {
            if (!tips) {
                return res
                    .status(404)
                    .json({ "message": "tip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(tips);
            }
        });
};

module.exports = {
    tipsList,
    tipsFindTitle
};