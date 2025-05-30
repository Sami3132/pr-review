class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }

    power(base, exponent) {
        if (!Number.isInteger(exponent)) {
            throw new Error('Exponent must be an integer');
        }
        return Math.pow(base, exponent);
    }
}

export default Calculator;