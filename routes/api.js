const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const productsRouter = require('./products');



router.use('/user', usersRouter);
router.use('/product', productsRouter);



module.exports = router;