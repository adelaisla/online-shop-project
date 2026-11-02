const Product = require('../models/product.model');

async function addCartItem(req, res, next) {
    let product; 
    try {
        const product = await Product.findById(req.body.productId);
    } catch (error) {
        next(error);
        return;
    }
    const cart = res.locals.cart;
    res.locals.cart.addCartItem(product);
    req.session.cart = cart;
    res.status(201).json({
        message: 'Cart Updated',
        newTotalItems: cart.totalQuantity
    });
}

module.exports = {
    addCartItem: addCartItem
}