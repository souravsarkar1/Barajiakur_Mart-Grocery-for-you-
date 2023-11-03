const express = require('express');
const multer = require('multer'); // Middleware for handling file uploads
const { registerCheck } = require('../Middleware/register.check.middleware');

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { SellerModel } = require('../Model/seller.modle');
require('dotenv').config();


const sellerRoutes = express.Router();
const upload = multer(); // Configure multer



sellerRoutes.post('/register', upload.single('photo'), registerCheck, async (req, res) => {
    try {
        const { name, email, pass, city, age } = req.body;
        const isEmailRegistered = await SellerModel.findOne({ email });

        if (isEmailRegistered) {
            return res.status(200).json({ msg: 'Email is already registered' });
        }

        bcrypt.hash(pass, 5, async (err, hash) => {
            if (err) {
                return res.status(400).json({ err: err.message });
            }

            if (hash) {
                let photo = null;

                if (req.file) {
                    photo = {
                        data: req.file.buffer, // Binary data of the uploaded photo
                        contentType: req.file.mimetype // MIME type of the uploaded photo
                    };
                }
                //console.log(photo);
                const newUser = new SellerModel({
                    name,
                    email,
                    pass: hash,
                    city,
                    age,
                    photo
                });

                await newUser.save();

                return res.status(200).json({ msg: 'New user has been added' });
            }
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


sellerRoutes.post('/login', async (req, res) => {
    try {
        const { email, pass } = req.body;
        const user = await SellerModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: 'User not found.' });
        }

        bcrypt.compare(pass, user.pass, async (error, result) => {
            if (result) {
                const token = jwt.sign(
                    { name: user.name, photo: user.photo, userId: user._id },
                    process.env.secrate,
                    { expiresIn: '7d' }
                );
                res.status(200).json({
                    msg: 'Login Successful!!',
                    token: token,
                    name: user.name,
                    photo: user.photo,
                    userId : user._id
                });
            } else {
                res.status(200).json({ msg: 'Wrong Credentials' });
            }
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = { sellerRoutes };
