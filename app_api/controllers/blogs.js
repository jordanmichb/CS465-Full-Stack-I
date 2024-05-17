const mongoose = require('mongoose');
const model = mongoose.model('blogs');

// GET: /blogs - lists all the blogs
const blogsList = async (req, res) => {
    model
        .find({}) // call find with no params to get all blogs
        .exec((err, blogs) => {
            if (!blogs) {
                return res
                    .status(404)
                    .json({ "message": "blog not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(blogs);
            }
        });
};

const blogsFindTitle = async (req, res) => {
    model
        .find({ 'title': req.params.blogTitle })
        .exec((err, blogs) => {
            if (!blogs) {
                return res
                    .status(404)
                    .json({ "message": "blog not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(blogs);
            }
        });
};

module.exports = {
    blogsList,
    blogsFindTitle
};