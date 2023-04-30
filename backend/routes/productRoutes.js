// Rutas de prductos
// host + /api/product
const  { Router } = require('express');
const router = Router();
const Product = require('../models/productModel');
const {product,productId,createProduct,updateProduct} = 
require('../controllers/products');


// const {protect, admin} = require('../middleware/authMiddleware.js')
router.route('').get(product)//.post(protect, admin, createProduct)
router.route('/:id').get(productId)
//   .delete(protect, admin, deleteProduct)
//   •put (protect, admin, updateProduct)


router.get("/",product);//get
router.get("/:id",productId);//get

module.exports = router;