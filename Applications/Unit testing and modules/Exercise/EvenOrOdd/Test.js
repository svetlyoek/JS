const expect = require('chai').expect;
const func = require('./EvenOrOdd').isOddOrEven;

describe('Testing', function () {
    describe('Test invalid argument', function () {
        it('Should return undefined for func({prop:10})', function () {
            let expected = func({ prop: 10 });

            expect(expected).to.equal(undefined, 'Function did not return the correct result!');
        });
        it('Should return undefined for func(5)', function () {
            let expected = func(5);

            expect(expected).to.equal(undefined, 'Function did not return the correct result!');
        });
    });
    describe('Test even length', function () {
        it('Should return even for func("even")', function () {
            let expected = func('even');

            expect(expected).to.equal('even', 'Function did not return the correct result!');
        });
    });
    describe('Test odd length', function () {
        it('Should return odd for func("odd")', function () {
            let expected = func('odd', 'Function did not return the correct result!');

            expect(expected).to.equal('odd', 'Function did not return the correct result!');
        });
    });
    describe('Test multiple checks', function () {
        it('Should return correct results', function () {
            let firstExpected = func('car');
            let secondExpected = func('computer');
            let thirdExpected = func('hat');

            expect(firstExpected).to.equal('odd', 'Function did not return the correct result!');
            expect(secondExpected).to.equal('even', 'Function did not return the correct result!');
            expect(thirdExpected).to.equal('odd', 'Function did not return the correct result!');
        });
    });
});