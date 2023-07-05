const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema({
    ho_ten: {type: String, max_length: 50, required: true},
    ban_thi: {type: String, required: true},
    khoi_thi: {type: String, max_length: 5, required: true},
    toan: {type: Number, required: true},
    van: {type: Number, required: true},
    anh: {type: Number, required: true},
});

module.exports = mongoose.model('Student', Student);