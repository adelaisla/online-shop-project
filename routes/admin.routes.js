const express = require('express');

const adminController = require('../controllers/admin.controller');
const imageUploadMiddleWare = require('../middlewares/image-upload');

const router = express.Router();

router.get('/products', adminController.getProducts);

router.get('/products/new', adminController.getNewProduct);

router.post('/products', imageUploadMiddleWare, adminController.createNewProduct);

module.exports = router;