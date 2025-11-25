const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testapp1');

// Define schema
const userschema = new mongoose.Schema({
    name: String,
    email: String,
    image: String
});

// Export the model
module.exports = mongoose.model('User', userschema);
