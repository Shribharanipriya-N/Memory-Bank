const mongoose = require('mongoose');


const ImageSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const ImageModel = mongoose.model('Image', ImageSchema);
module.exports = ImageModel;