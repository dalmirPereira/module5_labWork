const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

// functional add route calling controller
router.get('/add', (req, res) => {
    calculatorController.addNumbers(req, res);
});

// functional sub route calling controller
router.get('/sub', (req, res) => {
    calculatorController.subNumbers(req, res);
});

// functional mul route calling controller
router.get('/mul', (req, res) => {
    calculatorController.mulNumbers(req, res);
});

// functional div route calling controller
router.get('/div', (req, res) => {
    calculatorController.divNumbers(req, res);
});

module.exports = router;
