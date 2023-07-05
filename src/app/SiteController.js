const { multipleMongooseToObject } = require('../util/mongoose');
const Student = require('./models/Student');
const Khoi = require('./models/Khoi');

class SiteController {
    //[GET] /
    home(req, res, next) {
        Khoi.find({})
        .then(khois => {
            res.render('home', {
                khois: multipleMongooseToObject(khois),
            })
        })
        .catch(error => next(error));
    }
}

module.exports = new SiteController();