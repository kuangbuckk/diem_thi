const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const student = new Schema({
    hoten: {type: String, max_length: 50, required: true},
    khoi: {type: String, max_length: 5, required: true},
    ban: {type: String, required: true},
    toan: {type: Number, required: true},
    van: {type: Number, required: true},
    anh: {type: Number, required: true},
});

module.exports = mongoose.model('student', student);