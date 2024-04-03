let jwt = require('jsonwebtoken');
let { SECRET } = require('../constants');
exports.auth = function (req, res, next) {
    let token = req.header('X-Authorization');
    //console.log(token);

    if (token) {
        let decodedToken = jwt.verify(token, SECRET);
        if (decodedToken) {
            req.user = decodedToken;
           // console.log(req.user);
            next();
        } else {
            res.status(401).json('You are not authorized!');
        }
    } else {
        next();
    }
};

exports.isAuth = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).json({ message: 'you are not authorized' });
    }
};