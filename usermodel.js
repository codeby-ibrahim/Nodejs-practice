const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongoprictice');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String
});

// ✔ Export the model
module.exports = mongoose.model('User', userSchema);
