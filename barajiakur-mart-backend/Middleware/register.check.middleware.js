const registerCheck = (req, res, next) => {

    const { name, email, pass, city, age } = req.body;
    if (!name || !email || !pass || !city || !age) {
        return res.status(400).json({ msg: `please fill the the required field` });
    }
    if (pass.length < 8) {
        return res.status(400).json({ msg: `password should be 8 charecter minimum` });
    }
    if (!/[A-Z]/.test(pass) || !/\d/.test(pass) || !/[!@#$%^&*]/.test(pass)) {
        return res.status(400).json({
            msg: 'Password should contain at least one uppercase character, one number, and one special character',
        });
    }

    next();
}

module.exports = {registerCheck};