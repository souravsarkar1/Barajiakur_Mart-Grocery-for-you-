const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
    name: String,
    pass: String,
    email: String,
    age: Number,
    city: String,
    photo: {
        data: Buffer, // Binary data of the photo
        contentType: String // MIME type of the photo (e.g., image/jpeg)
    }
}, {
    versionKey: false,
    timestamps: true
});

const SellerModel = mongoose.model("seller", sellerSchema);

module.exports = { SellerModel };
