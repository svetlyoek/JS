const expect = require('chai').expect;
const symmetric = require('./CheckForSymmetry').isSymmetric;

describe('Testing', function () {
    describe('Input incorrect types', function () {
        it('Should return false if object', function () {
            let expectedObj = symmetric({});

            expect(expectedObj).to.be.equal(false);
        });
        it('Should return false if string', function () {
            let expectedString = symmetric('My testing string');

            expect(expectedString).to.be.equal(false);
        });
        it('Should return false if empty string', function () {
            let expectedEmptyString = symmetric('');

            expect(expectedEmptyString).to.be.equal(false);
        });
        it('Should return false if numbers', function () {
            let expectedNumbers = symmetric(1, 2, 3, 3, 2, 1);

            expect(expectedNumbers).to.be.equal(false);
        });
    });
    describe('Input correct type', function () {
        it('Should return true if equal', function () {
            let expected = symmetric([1, 2, 3, 3, 2, 1]);

            expect(expected).to.be.equal(true);
        });
        it('Should return false if not equal', function () {
            let expected = symmetric([1, 2, 3, 3, 2, 2]);

            expect(expected).to.be.equal(false);
        });
        it('Should return true if [1]', function () {
            let expected = symmetric([1]);

            expect(expected).to.be.equal(true);
        });
        it('Should return true for[new Date(),5,{prop:10},{prop:10},5,new Date()]', function () {
            let expected = symmetric([new Date(), 5, { prop: 10 }, { prop: 10 }, 5, new Date()]);

            expect(expected).to.be.equal(true);
        });
        it('Should return false for[new Date(),6,{prop:10},{prop:10},5,new Date()]', function () {
            let expected = symmetric([new Date(), 6, { prop: 10 }, { prop: 10 }, 5, new Date()]);

            expect(expected).to.be.equal(false);
        });
        it('Should return false [-5,2,5]', function () {
            let expected = symmetric([-5, 2, 5]);

            expect(expected).to.be.equal(false);
        });
        it('Should return true [-5,2,-5]', function () {
            let expected = symmetric([-5, 2, -5]);

            expect(expected).to.be.equal(true);
        });
    });
});