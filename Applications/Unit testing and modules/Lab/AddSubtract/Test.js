const expect = require('chai').expect;
const calculator = require('./AddSubtract').createCalculator;

describe('Testing', function () {

    let calc;

    beforeEach(function () {

        calc = calculator();
    });

    it('Should return 5 if add(5)', function () {
        calc.add(5);
        let expected = calc.get();

        expect(expected).to.be.equal(5);
    });
    it('Should return 5 if add("5")', function () {
        calc.add('5');
        let expected = calc.get();

        expect(expected).to.be.equal(5);
    });
    it('Should return 10 if add(5); add(5)', function () {
        calc.add(5);
        calc.add(5);
        let expected = calc.get();

        expect(expected).to.be.equal(10);
    });
    it('Should return 5 if add("10"); subtract(5)', function () {
        calc.add('10');
        calc.subtract(5);
        let expected = calc.get();

        expect(expected).to.be.equal(5);
    });
    it('Should return 5 if add(10); subtract(5)', function () {
        calc.add(10);
        calc.subtract(5);
        let expected = calc.get();

        expect(expected).to.be.equal(5);
    });
    it('Should return NaN if add()', function () {
        calc.add();
        let expected = calc.get();

        expect(expected).to.be.NaN;
    });
    it('Should return NaN if subtract()', function () {
        calc.subtract();

        let expected = calc.get();

        expect(expected).to.be.NaN;
    });
    it('Should return NaN if add(string); subtract(string);', function () {
        calc.add('string');
        calc.subtract('string');

        let expected = calc.get();

        expect(expected).to.be.NaN;
    });
    it('Should return 0 if add() subtract(10)', function () {
        calc.subtract(10);
        let expected = calc.get();

        expect(expected).to.be.equal(-10);
    });
});