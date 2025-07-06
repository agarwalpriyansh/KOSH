const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model.js');
const { registerUser } = require('../controllers/auth.js');
const { loginUser } = require('../controllers/auth.js');
const{logout} = require('../controllers/auth.js');

router.get('/', (req, res) => {
    res.send('users page');
}); 

router.post('/register',registerUser)

router.post('/login',loginUser);

router.get('/logout',logout);

module.exports = router;