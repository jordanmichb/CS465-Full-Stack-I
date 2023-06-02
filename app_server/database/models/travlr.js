const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

// Define room schema
const roomSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    rate: { type: String, required: true },
});

// Define meal schema
const mealSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
});

// Define blog schema
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    link: { type: String, required: true },
    date: { type: String, required: true },
    preview: { type: String, required: true },
    author: { type: String, required: true }
});

// Define tip schema
const tipsSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    link: { type: String, required: true },
    date: { type: String, required: true },
    preview: { type: String, required: true },
    author: { type: String, required: true }
});

module.exports = mongoose.model('trips', tripSchema);
module.exports = mongoose.model('rooms', roomSchema);
module.exports = mongoose.model('meals', mealSchema);
module.exports = mongoose.model('blogs', blogSchema);
module.exports = mongoose.model('tips', tipsSchema);