const expect = require('chai').expect;
const convertor = require('./RGBToHex').rgbToHexColor;

describe('Testing', function () {
    describe('Test if integers', function () {
        it('Should return undefined if red is not integer', function () {
            let expected = convertor('abc', 2, 3);

            expect(expected).to.be.equal(undefined);
        });
        it('Should return undefined if green is not integer', function () {
            let expected = convertor(1, 3.14, 2);

            expect(expected).to.be.equal(undefined);
        });
        it('Should return undefined if blue is not integer', function () {
            let expected = convertor(1, 2, { prop: 10 });

            expect(expected).to.be.equal(undefined);
        });
    });
    describe('Test other cases', function () {
        it('Should return undefined if no arguments', function () {
            let expected = convertor();

            expect(expected).to.be.equal(undefined);
        });
        it('Should return #000000 for(0,0,0)', function () {
            let expected = convertor(0, 0, 0);

            expect(expected).to.be.equal('#000000');
        });
    });
    describe('Test arguments range', function () {
        it('Should return undefined if red is less than 0', function () {
            let expected = convertor(-1, 2, 3);

            expect(expected).to.be.equal(undefined);
        });
        it('Should return undefined if green is less than 0', function () {
            let expected = convertor(1, -1, 2);

            expect(expected).to.be.equal(undefined);
        });
        it('Should return undefined if blue is less than 0', function () {
            let expected = convertor(1, 2, -1);

            expect(expected).to.be.equal(undefined);
        });
        it('Should return undefined if red is more than 255', function () {
            let expected = convertor(256, 2, 3);

            expect(expected).to.be.equal(undefined);
        });
        it('Should return undefined if green is more than 255', function () {
            let expected = convertor(1, 256, 3);

            expect(expected).to.be.equal(undefined);
        });
        it('Should return undefined if blue is more than 255', function () {
            let expected = convertor(1, 2, 256);

            expect(expected).to.be.equal(undefined);
        });
    });
    describe('Tes valid arguments', function () {
        it('Should return hex correctly', function () {
            let expected = convertor(100, 5, 30);

            expect(expected).to.be.equal('#64051E');
        });
    });

});