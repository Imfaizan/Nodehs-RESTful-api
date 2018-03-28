const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : "Handling get request to products"
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message : "Handling post request to products",
        id : id,
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message:"You discovered the special id"
        });
    } else {
        res.status(200).json({
            message:`you passed an id ${id}`
        });
    }
});

router.patch('/:productId', (req, res, next) => {
   res.status(200).json({
        message:"products updated"
   });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
         message:"products deleted"
    });
 });

module.exports = router;