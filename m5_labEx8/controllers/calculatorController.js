const Calculator = require("../libraries/Calculator.js");
const Logger = require("../libraries/Logger.js");
let logger = new Logger();
let myCalc = new Calculator(logger);

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1,number2)

    res.status(200) //200: HTTP request was sucessful.
    res.json({result:sum})
}

const subNumbers = (req, res) => {    
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sub = myCalc.sub(number1,number2)

    res.status(200); //200: HTTP request was sucessful.
    res.json({result:sub});
}

const mulNumbers = (req, res) => {  
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let mul = myCalc.mul(number1,number2)

    res.status(200); //200: HTTP request was sucessful.
    res.json({result:mul});
}

const divNumbers = (req, res) => {  
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let div = myCalc.div(number1,number2)

    res.status(200); //200: HTTP request was sucessful.
    res.json({result:div});
}

module.exports = {
    addNumbers,
    subNumbers,
    mulNumbers,
    divNumbers
}