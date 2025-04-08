const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2

    res.status(200) //200: HTTP request was sucessful.
    res.json({result:sum})
}

const subNumbers = (req, res) => {    
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sub = number1 - number2;

    res.status(200); //200: HTTP request was sucessful.
    res.json({result:sub});
}

const mulNumbers = (req, res) => {  
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let mul = number1 * number2;

    res.status(200); //200: HTTP request was sucessful.
    res.json({result:mul});
}

const divNumbers = (req, res) => {  
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let div = number1 / number2;

    res.status(200); //200: HTTP request was sucessful.
    res.json({result:div});
}

module.exports = {
    addNumbers,
    subNumbers,
    mulNumbers,
    divNumbers
}