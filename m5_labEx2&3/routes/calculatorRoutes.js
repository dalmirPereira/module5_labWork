const express = require("express");
const router = express.Router();

// functional add route performing addition on request parameters
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2

    res.status(200) //200: HTTP request was sucessful.
    res.json({result:sum})
});

// functional add route performing subtraction on request parameters
router.get('/sub', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sub = number1 - number2

    res.status(200) //200: HTTP request was sucessful.
    res.json({result:sub})
});

// functional add route performing multiplication on request parameters
router.get('/mul', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let mul = number1 * number2

    res.status(200) //200: HTTP request was sucessful.
    res.json({result:mul})
});

// functional add route performing division on request parameters
router.get('/div', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let div = number1 / number2

    res.status(200) //200: HTTP request was sucessful.
    res.json({result:div})
});

module.exports = router;
