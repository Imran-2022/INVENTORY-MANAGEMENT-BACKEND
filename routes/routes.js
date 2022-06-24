const router = require('express').Router();
const { productCounts, products, addProducts } = require('../controllers/controllers');


router.route("/productCount")
    .get(productCounts)
router.route("/products")
    .get(products)
    .post(addProducts)
    
module.exports = router;