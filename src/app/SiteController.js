const { multipleMongooseToObject } = require('../util/mongoose');
const Student = require('./models/Student');
const Khoi_thi = require('./models/Khoi_thi');

class SiteController {
    //[GET] /
    home(req, res, next) {
        Khoi_thi.find({})
        .then(Khoi_this => {
            res.render('home', {
                Khoi_this: multipleMongooseToObject(Khoi_this),
            })
        })
        .catch(error => next(error));
    }
}

module.exports = new SiteController();