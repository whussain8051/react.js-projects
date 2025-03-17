const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    image: String  // Add image field
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
