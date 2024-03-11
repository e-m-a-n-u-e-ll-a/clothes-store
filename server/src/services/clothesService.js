const Garment = require('../models/Garment');

exports.getAll = () => Garment.find({});

exports.create = (garmentData) => Garment.create(garmentData);

exports.getOne = (id) => Garment.findById(id);

exports.update = (id, data) => Garment.findByIdAndUpdate(id, { $push: { comments: data } });

exports.updateWithComments = (id, data) => Garment.findByIdAndUpdate(id, { $push: { comments: data } })

exports.delete = (id) => Garment.findByIdAndDelete(id);
exports.updatee = (id, body) => Garment.findByIdAndUpdate(id, body)