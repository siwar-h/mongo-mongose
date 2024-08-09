const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    Name: String,
    Age: Number,
    favoriteFoods: [String] 
});

const User = mongoose.model('User', userSchema);

module.exports = User