const router = require('express').Router();
const { productCounts, products, addProducts,productsD,deleteSingleData,getSingleData,updateSingleStock } = require('../controllers/controllers');


router.route("/productCount")
    .get(productCounts)

router.route("/products")
    .get(products)
    .delete(productsD)
    .post(addProducts)

router.route("/products/:id")
    .put(updateSingleStock)
    .get(getSingleData)
    .delete(deleteSingleData)

    
module.exports = router;