const expect = require('chai').expect;
const sum = require('./SumOfNumbers').sum;

describe('Sum testing', function () {
    it('Should return NaN if not numbers', function () {
        let actual = sum('abc');
        expect(actual).to.be.NaN;
    });
    it('Should return numbers if string numbers', function () {
        let expected = sum(['1', '2']);
        expect(expected).to.equal(3, 'Papameter is not array of numbers');
    });
    it('Expect sum ([1,2,3] to be 6)', function () {
        let expected = 6;
        let actual = sum([1, 2, 3]);
        expect(actual).to.equal(expected);
    });
    it('Should return 0 for [0]', function () {
        let expected = 0;
        let actual = sum([]);
        expect(actual).to.be.equal(expected);
    });
    it('Should return 1 for [1]', function () {
        let expected = 1;
        let actual = sum([1]);
        expect(actual).to.be.equal(expected);
    });
});