let mongoose = require('mongoose');

let garmentSchema = new mongoose.Schema({
    model: String,
    img: String,
    description: String,
    price: Number,
    year: Number,
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