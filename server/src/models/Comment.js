let mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    email: String,
    text: String,
    garmentId: {
        type: mongoose.Types.ObjectId,
        ref: 'Garment'
    }
});

let Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment