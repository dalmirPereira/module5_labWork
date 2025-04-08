const express = require("express");
const router = express.Router();

// import all fake-store controllers
const { getProducts } = require('../controllers/fakeStoreControllers'); 

// functional add route calling controller
router.get('', (req, res) => {
    getProducts(req, res);
});

module.exports = router;