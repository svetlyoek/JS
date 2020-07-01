const StringBuilder = require('./StringBuilder');

const expect = require('chai').expect;
const assert = require('chai').assert;
const myClass = require('./StringBuilder').StringBuilder;

describe('Testing', function () {
    describe('Test constructor', function () {
        it('Property array should be empty', function () {
            let expected = new myClass(undefined);

            expect(expected).to.have.property('_stringArray').with.lengthOf(0);
        });
        it('Property array length should be 6', function () {
            let expected = new myClass('string');

            expect(expected).to.have.property('_stringArray').with.lengthOf(6);
        });
        it('Should throw error if invalid argument', function () {

            expect(() => new myClass(22)).to.Throw('Argument must be string');
        });
    });
    describe('Test append', function () {
        it('Should throw error if invalid argument', function () {
            let expected = new myClass('string');

            expect(() => expected.append(2)).to.Throw('Argument must be string');
        });
        it('Should append correctly', function () {
            let expected = new myClass('string');
            expected.append('N');

            expect(expected).has.own.property('_stringArray').with.lengthOf(7);
        });
        it('Should append correctly at the end', function () {
            let expected = new myClass('string');
            expected.append('N');

            expect(expected._stringArray[6]).to.equal('N');
        });
    });
    describe('Test prepend', function () {
        it('Should throw error if invalid argument', function () {
            let expected = new myClass('string');

            expect(() => expected.prepend(2)).to.Throw('Argument must be string');
        });
        it('Should prepend correctly', function () {
            let expected = new myClass('string');
            expected.prepend('N');

            expect(expected).has.own.property('_stringArray').with.lengthOf(7);
        });
        it('Should prepend correctly at the beginning', function () {
            let expected = new myClass('string');
            expected.prepend('N');

            expect(expected._stringArray[0]).to.equal('N');
        });
    });
    describe('Test insertAt', function () {
        it('Should throw error if invalid argument', function () {
            let expected = new myClass('string');

            expect(() => expected.insertAt(2, 0)).to.Throw('Argument must be string');
        });
        it('Should insert correctly', function () {
            let expected = new myClass('string');
            expected.insertAt('N', 1);

            expect(expected).has.own.property('_stringArray').with.lengthOf(7);
        });
        it('Should insert correctly at the given index', function () {
            let expected = new myClass('string');
            expected.insertAt('N', 1);

            expect(expected._stringArray[1]).to.equal('N');
        });
    });
    describe('Test remove', function () {
        it('Should remove correctly', function () {
            let expected = new myClass('string');
            expected.remove(3, 3);

            expect(expected).has.own.property('_stringArray').with.lengthOf(3);
        });
        it('Should remove the exact elements', function () {
            let expected = new myClass('string');
            expected.remove(3, 3);

            expect(expected._stringArray.join('')).to.equal('str');
        });
    });
    describe('Test toString', function () {
        it('Should return the elements correctly', function () {
            let expected = new myClass('string');
            expected.append('N');
            expected.prepend('N');
            expected.insertAt('G', 0);
            expected.remove(2, 2);

            expect(expected._stringArray.join('')).to.equal('GNringN');
        });
    });
    describe('Other tests', function () {
        it('Full test', function () {
            let expected = new myClass('string');
            expected.append('N');
            expected.prepend('N');
            expected.insertAt('G', 0);
            expected.remove(2, 2);

            expect(expected.toString()).to.equal('GNringN')
        });
        it('Class should exists', function () {
            expect(myClass).to.exist;
        });
        it('StringBuilder type', function () {
            expect(typeof StringBuilder).to.equal('object');
        });
        it('Should have correct function properties', function () {
            assert.isFunction(myClass.prototype.append);
            assert.isFunction(myClass.prototype.prepend);
            assert.isFunction(myClass.prototype.insertAt);
            assert.isFunction(myClass.prototype.remove);
            assert.isFunction(myClass.prototype.toString);
        });
    });
});