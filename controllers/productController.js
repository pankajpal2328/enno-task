const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Product = require('../models/product');

exports.create = async (req, res) => {
  let { name, sku, price, quantity } = req.body;
  
  const product = new Product({ name, sku, price, quantity });

  try {
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.show = async (req, res) => {
    
  const { id } = req.params;

  try {
    const product = await Product.findOne({_id: id});

    return res.status(200).json(product);
    
  } catch (err) {
    return res.status(404).json({ error: 'Product not found' });
  }
};
