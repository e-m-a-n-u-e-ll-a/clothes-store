let User = require('../models/User');
let jwt = require('jsonwebtoken');
let { SECRET } = require('../constants');
const Car = require('../models/Garment');

//SHOULD BE HASH!!!!!!!!!!!!
exports.register = ({ email, password }) => User.create({ email, password });

exports.login = async ({ email, password }) => {
    let user = await User.findOne({ email, password });

    if (user) {
        const payload = {
            _id: user._id, email: user.email
        };
        let token = jwt.sign(payload, SECRET, { expiresIn: "1d" });
        return { user, token };
    } else {
        throw new Error('No such user');
    }
};


exports.pushPost = (id, post) => User.findByIdAndUpdate(id, { $push: { posts: post._id } });

exports.getPostsByUserId = (userId) => {
    return User.findById(userId)
        .populate('posts') 
        .exec()
        .then((user) => {
            if (user) {
                return user.posts;
            } else {
                throw new Error('No such user');
            }
        })
        .catch((error) => {
            console.error('Error getting posts by user ID:', error);
            throw error;
        });
};