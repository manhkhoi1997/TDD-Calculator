const Add        = require('./Add');
const Sub        = require('./Sub');
const Mul        = require('./Mul')
const assert     = require('mocha').assert;
const chai       = require('chai')



describe('Test Calculator', () => {
    const add = new Add();
    const sub = new Sub();
    const mul = new Mul();



    it('test add', () => {
        let result = add.operater(1, 3);
        chai.assert.equal(result, 4);
    });
    it('test sub', () => {
        let result = sub.operater(3, 2);
        chai.assert.equal(result, 1);
    });
    it('test mul', () => {
        let result = mul.operater(3, 4);
        chai.assert.equal(result, 12);
    });
});
