let Comment = require('../models/Comment');
let Garment = require('../models/Garment');
exports.create = (commentData) => Comment.create(commentData);
exports.getCommentsByGarmentId = (garmentId) => Comment.find({ garmentId });