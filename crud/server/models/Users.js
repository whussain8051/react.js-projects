const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    images: [String] // Change from single image to array of images
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
