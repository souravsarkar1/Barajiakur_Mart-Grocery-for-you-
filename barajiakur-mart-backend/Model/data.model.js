const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    title: String,
    desc: String,
    img1: {
        data: Buffer, // Binary data of the photo
        contentType: String // MIME type of the photo (e.g., image/jpeg)
    },
    img2: {
        data: Buffer, // Binary data of the photo
        contentType: String // MIME type of the photo (e.g., image/jpeg)
    },
    userID: String,
    sellerName: String,
    price: Number,
    stock: Boolean,
    rating: Number
},{
    versionKey: false,
    timestamps: true
})

const DataModel = mongoose.model('data',dataSchema);

module.exports = {DataModel};