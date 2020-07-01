const expect = require('chai').expect;
const func = require('./CharLookup').lookupChar;

describe('Testing', function () {
    describe('Test invalid arguments', function () {
        it('Should return undefined for func(3,0)', function () {
            let expected = func(3, 0);

            expect(expected).to.equal(undefined);
        });
        it('Should return undefined for func({prop:10},0)', function () {
            let expected = func({ prop: 10 }, 0);

            expect(expected).to.equal(undefined);
        });
        it('Should return undefined for func("string","1")', function () {
            let expected = func('string', '1');

            expect(expected).to.equal(undefined);
        });
        it('Should return undefined for func("string",1.5)', function () {
            let expected = func('string', 1.5);

            expect(expected).to.equal(undefined);
        });
    });
    describe('Test invalid index', function () {
        it('Should return empty string for func("string",-1)', function () {
            let expected = func('string', -1);

            expect(expected).to.equal('Incorrect index');
        });
        it('Should return empty string for func("string",6)', function () {
            let expected = func('string', 6);

            expect(expected).to.equal('Incorrect index');
        });
        it('Should return empty string for func("string",7)', function () {
            let expected = func('string', 7);

            expect(expected).to.equal('Incorrect index');
        });
    });
    describe('Test valid arguments and index', function () {
        it('Should return char correctly', function () {
            let expected = func('string', 3);

            expect(expected).to.equal('i');
        });
    });
});