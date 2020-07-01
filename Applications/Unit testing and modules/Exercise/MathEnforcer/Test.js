const expect = require('chai').expect;
const object = require('./MathEnforcer').mathEnforcer;

describe('Testing', function () {
    describe('Test addfive', function () {
        it('Should return undefined for addFive("4")', function () {
            let expected = object.addFive('4');

            expect(expected).to.equal(undefined);
        });
        it('Should return undefined for addFive({prop:10})', function () {
            let expected = object.addFive({ prop: 10 });

            expect(expected).to.equal(undefined);
        });
        it('Should return 10 for addFive(5)', function () {
            let expected = object.addFive(5);

            expect(expected).to.equal(10);
        });
        it('Should return -5 for addFive(-10)', function () {
            let expected = object.addFive(-10);

            expect(expected).to.equal(-5);
        });
        it('Should return 7.75 for addFive(2.75)', function () {
            let expected = object.addFive(2.75);

            expect(expected).to.be.closeTo(7.75, 0.01);
        });
    });
    describe('Test subtractTen', function () {
        it('Should return undefined for subtractTen("4")', function () {
            let expected = object.subtractTen('4');

            expect(expected).to.equal(undefined);
        });
        it('Should return undefined for subtractTen({prop:10})', function () {
            let expected = object.subtractTen({ prop: 10 });

            expect(expected).to.equal(undefined);
        });
        it('Should return 10 for subtractTen(20)', function () {
            let expected = object.subtractTen(20);

            expect(expected).to.equal(10);
        });
        it('Should return -30 for subtractTen(-20)', function () {
            let expected = object.subtractTen(-20);

            expect(expected).to.equal(-30);
        });
        it('Should return 10.75 for subtractTen(20.75)', function () {
            let expected = object.subtractTen(20.75);

            expect(expected).to.be.closeTo(10.75, 0.01);
        });
        it('Should return -1 for subtractTen(9)', function () {
            let expected = object.subtractTen(9);

            expect(expected).to.equal(-1);
        });
    });
    describe('Test sum', function () {
        it('Should return undefined for sum("4",4)', function () {
            let expected = object.sum('4', 4);

            expect(expected).to.equal(undefined);
        });
        it('Should return undefined for sum({prop:10},"4")', function () {
            let expected = object.sum({ prop: 10 }, '4');

            expect(expected).to.equal(undefined);
        });
        it('Should return undefined for sum(4,[1,2])', function () {
            let expected = object.sum(4, [1, 2]);

            expect(expected).to.equal(undefined);
        });
        it('Should return 19 for sum(9,10)', function () {
            let expected = object.sum(9, 10);

            expect(expected).to.equal(19);
        });
        it('Should return -30 for sum(-20,-10)', function () {
            let expected = object.sum(-20, -10);

            expect(expected).to.equal(-30);
        });
        it('Should return -9.56 for sum(-20,10.45)', function () {
            let expected = object.sum(-20, 10.45);

            expect(expected).to.closeTo(-9.56, 0.01);
        });
    });
});