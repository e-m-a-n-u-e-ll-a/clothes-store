let mongoose = require('mongoose');

let garmentSchema = new mongoose.Schema({
    model: String,
    img: String,
    color: String,
    price: Number,
    type: String,
    size: String,
    description: String,
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }],
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

let Garment = mongoose.model('Garment', garmentSchema);
module.exports = Garment;