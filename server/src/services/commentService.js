let Comment = require('../models/Comment');
let Car = require('../models/Garment');
exports.create = (commentData) => Comment.create(commentData);
exports.getCommentsByCarId = (carId) => Comment.find({ carId });