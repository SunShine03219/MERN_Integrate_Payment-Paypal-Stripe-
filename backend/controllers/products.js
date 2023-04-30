const express = require('express');
const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

const product = async(req,res= express.response)=>{
    const product = await Product.find()
    res.json(product)
}

const productId  = async(req,res = express.response)=>{
    const product = await Product.findById(req.params.id)
    // const product = products.find((p) => p.id === parseInt(req.params.id))
    if(product) {
    res.json(product)
    } else {
    res.status(404).json({message: 'Product not found'})
    }
}

const createProduct = asyncHandler(async (req, res) =>{
    const product=new Product ({
      name: 'Sample name',                  
      user: req.user._id,
      image: '/images/sample.jpg',
      countInStock: 0,
      numReviews: 0,
      description: 'Sample description'
  })
    const createdProduct=await product.save()
    res.status (201).json(createdProduct)
})

const updateProduct=asyncHandler(async (req, res) =>{
    const {name, description, image,countInStock}=req.body;
    if(product){
        product.name=name
        product.description=description
        product.image=image
        product.countInStock=countInStock
      const updatedProduct=await product.save()
      res.json(updatedProduct)
    }else{
    res.status (404)
    throw new Error('Product not found')
    }    
    const createdProduct=await product.save()
    res.status (201).json(product)
})

module.exports ={
    product, productId, createProduct, updateProduct
}