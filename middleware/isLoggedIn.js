const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model.js');

module.exports = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = await userModel.findOne({email: decoded.email});
        if (!user) {
            req.flash('error', 'User not found');
            return res.redirect('/');
        }
        req.user = user; 
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
}