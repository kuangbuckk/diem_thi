const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Khoi_thi = new Schema({
    khoi_thi: {type: String, required: true},
    ban: {type: String, required: true},
});

module.exports = mongoose.model('Khoi_thi', Khoi_thi);