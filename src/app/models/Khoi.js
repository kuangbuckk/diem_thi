const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Khoi = new Schema({
    khoi: {type: String, required: true},
    ban: {type: String, required: true},
});

module.exports = mongoose.model('Khoi', Khoi);