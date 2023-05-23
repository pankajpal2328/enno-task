const auth = require("../middleware/auth");
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.post('/create', auth, productController.create);
router.get('/show/:id', auth, productController.show);

module.exports = router;