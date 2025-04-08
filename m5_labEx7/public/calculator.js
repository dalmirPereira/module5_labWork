 //Calculate button action submit
 document.getElementById('calculator').addEventListener('submit', (event) => {
    //prevent the page to reload
    event.preventDefault();

    //get all the elements from the form.
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const operator = document.getElementById('operator').value;
    //console.log(firstNumber, secondNumber, operator);

    switch (operator) {
        case '+':
            callAPI(`/calculator/add?num1=${firstNumber}&num2=${secondNumber}`)
            break;
        case '-':
            callAPI(`/calculator/sub?num1=${firstNumber}&num2=${secondNumber}`)
            break;
        case '*':
            callAPI(`/calculator/mul?num1=${firstNumber}&num2=${secondNumber}`)
            break;
        case '/':
            // Check for division by zero
            if (Number(secondNumber) === 0) {
                return "Error: Division by 0.";
            }
            callAPI(`/calculator/div?num1=${firstNumber}&num2=${secondNumber}`)
            break;
    }
});

//template for API
function callAPI(endpoint) {
    fetch(endpoint)
        .then(res => res.json())
        .then(data => {
        document.getElementById("result").innerHTML = `<li>${data.result}</li>`;
        document.getElementById("calculator").reset();
        })
        .catch(err => console.error(err));
};