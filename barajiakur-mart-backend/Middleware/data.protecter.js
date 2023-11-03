const jwt = require('jsonwebtoken');
require('dotenv').config()
const auth = (req, res, next) => {

    
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);
    if (token) {
        try {
            const decode = jwt.verify(token, "masai");
            req.body.sellerName = decode.name;
            req.body.userID = decode.userId;
            next();
        } catch (error) {
            return res.status(401).json({ msg: "Not Authorized" });
        }
    } else {
        return res.status(401).json({ msg: "Please login" });
    }
};

module.exports = { auth };
