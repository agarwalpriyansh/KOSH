const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const productModel = require('../models/product-model');
const userModel = require('../models/user-model');
const router = express.Router();

router.get('/', (req, res) => {
  let error = req.flash('error');
  res.render('index', {error, LoggedIn:false});
});

router.get('/shop',isLoggedIn, async (req, res) => { 
  let products = await productModel.find();
  let success = req.flash('success'); 
  res.render("shop", { products,success}); 
});

router.get('/addtocart/:productid',isLoggedIn, async (req, res) => { 
    let user = await userModel.findOne({email : req.user.email})
    user.cart.push(req.params.productid);
    req.flash('success', 'Product added to cart successfully!');
    await user.save();
    res.redirect('/shop');
});

module.exports = router;