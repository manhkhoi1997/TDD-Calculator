class Calculator {

    constructor() {
        this.operetor = {};
    }
    register(name, operator) {
        this.operator[name] = operator;
        return this;
    }
    calculator(operatorName, numberA, numberB) {
        const operator = this.operator[operatorName];
        if (!operator) {
            throw new Error('Operator [${operatorName}]')
        }
        return operator.execute(numberA, numberB);
    }
}
module.exports = Calculator;
