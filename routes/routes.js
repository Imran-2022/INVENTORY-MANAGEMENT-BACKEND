const router = require('express').Router();
const { productCounts} = require('../controllers/controllers');
router.get("/", productCounts)
module.exports = router;