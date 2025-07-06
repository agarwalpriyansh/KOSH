const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config');
const productModel = require('../models/product-model');

router.post('/create', upload.single("image"),async(req, res) => {
    const product=await productModel.create({
        image: req.file.buffer,
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount || 0,
        bgColor: req.body.bgColor,
        panelColor: req.body.panelColor,
        textColor: req.body.textColor
    })
}); 

module.exports = router;