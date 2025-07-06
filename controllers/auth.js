const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model.js');
const {generateToken} = require('../utils/generateToken.js');


module.exports.registerUser = async function(req, res) {
    try{
        let { fullname, email, password } = req.body;

        let user = await userModel.findOne({ email: email });
        if(user) {
            return res.status(400).send('User already exists');
        }

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password, salt, async(err, hash) => {
                if(err) {
                    return res.status(500).send('Error hashing password');
                }
                else{
                    let createdUser = await userModel.create({
                    fullname: fullname,
                    email: email,
                    password: hash
                   });
                   let token = generateToken(createdUser);
                   res.cookie('token', token);
                   res.send("User registered successfully");
                }
                
            });
        })       
    }
    catch{
        res.status(500).send('Internal Server Error');
    }

}

module.exports.loginUser = async function(req, res) {
    try{
        let { email, password } = req.body;

        let user = await userModel.findOne({ email: email });
        if(!user) {
            return res.status(400).send('User does not exist');
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if(err) {
                return res.status(500).send('Error comparing passwords');
            }
            if(!result) {
                return res.status(400).send('Invalid password');
            }
            let token = generateToken(user);
            res.cookie('token', token);
            res.redirect('/shop');
        });
    }
    catch{
        res.status(500).send('Internal Server Error');
    }
}

module.exports.logout = function(req, res) {
    res.clearCookie('token');
    res.redirect('/');
}