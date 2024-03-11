let mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    email: String,
    text: String,
    carId: {
        type: mongoose.Types.ObjectId,
        ref: 'Car'
    }
});

let Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment