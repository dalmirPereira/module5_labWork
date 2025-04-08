class Calculator {

    constructor(logger) {
        this.id = Math.floor(Math.random() * 1_000_000);
        this.logger = logger;
    }

    add(num1, num2) {
        const value = num1 + num2;
        this.logger.log(this.id, value);
        
        return value;
    }

    sub(num1, num2) {
        const value = num1 - num2;
        this.logger.log(this.id, value);

        return value;
    }

    mul(num1, num2) {
        const value = num1 * num2;
        this.logger.log(this.id, value);

        return value;
    }

    div(num1, num2) {
        const value = num1 / num2;
        this.logger.log(this.id, value);

        return value;
    }
}
module.exports = Calculator;
