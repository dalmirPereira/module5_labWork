// app.test.js
// import supertest and the express app
const request = require("supertest");
const app = require("./app");

describe("Calculator Routes", () => {
    // generate some random numbers to test the calculator
    let number1 = Math.floor(Math.random() * 1_000_000);
    let number2 = Math.floor(Math.random() * 1_000_000);

    //add test
    test("GET /calculator/add => sum of numbers", () => {
        return request(app)
            .get(`/calculator/add?num1=${number1}&num2=${number2}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: number1 + number2
                });
            });
    });

    //sub test
    test("GET /calculator/sub => subtraction of numbers", () => {
        return request(app)
            .get(`/calculator/sub?num1=${number1}&num2=${number2}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: number1 - number2
                });
            });
    });

    //mul test
    test("GET /calculator/mul => multiplication of numbers", () => {
        return request(app)
            .get(`/calculator/mul?num1=${number1}&num2=${number2}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: number1 * number2
                });
            });
    });

    //div test
    test("GET /calculator/div => division of numbers", () => {
        return request(app)
            .get(`/calculator/div?num1=${number1}&num2=${number2}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: number1 / number2
                });
            });
    });
});
