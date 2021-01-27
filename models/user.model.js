const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    email: {type: String, required: true, max: 12},
});

//Export the model
module.exports = mongoose.model('userdb', ProductSchema);
