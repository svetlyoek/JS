const expect = require('chai').expect;
const package = require('./PaymentPackage').PaymentPackage;

describe('Testing', function () {
    describe('Test constructor', function () {
        it('VAT should be 20 by default', function () {
            let expected = new package('package', 20);

            expect(expected.VAT).to.equal(20);
        });
        it('Active should be true by default', function () {
            let expected = new package('package', 20);

            expect(expected.active).to.equal(true);
        });
        it('Name should be get correctly', function () {
            let expected = new package('package', 20);

            expect(expected.name).to.equal('package');
        });
        it('Value should be get correctly', function () {
            let expected = new package('package', 20);

            expect(expected.value).to.equal(20);
        });
    });
    describe('Test setters', function () {
        it('Name should be set correctly', function () {
            let expected = new package('package', 10);
            expected.name = 'new package';

            expect(expected.name).to.equal('new package');
        });
        it('Name should throw error if new value is not string', function () {
            let expected = new package('package', 10);

            expect(() => expected.name = { prop: 10 }).Throw('Name must be a non-empty string');
        });
        it('Name should throw error if new value is empty', function () {
            let expected = new package('package', 10);

            expect(() => expected.name = '').Throw('Name must be a non-empty string');
        });
        it('Value should be set correctly', function () {
            let expected = new package('package', 10);
            expected.value = 16;

            expect(expected.value).to.equal(16);
        });
        it('Value should throw error if new value is not a number', function () {
            let expected = new package('package', 10);

            expect(() => expected.value = { prop: 10 }).Throw('Value must be a non-negative number');
        });
        it('Value should throw error if new value is below zero', function () {
            let expected = new package('package', 10);

            expect(() => expected.value = -10).Throw('Value must be a non-negative number');
        });
        it('VAT should be set correctly', function () {
            let expected = new package('package', 10);
            expected.VAT = 16;

            expect(expected.VAT).to.equal(16);
        });
        it('VAT should throw error if new value is not a number', function () {
            let expected = new package('package', 10);

            expect(() => expected.VAT = { prop: 10 }).Throw('VAT must be a non-negative number');
        });
        it('VAT should throw error if new value is below zero', function () {
            let expected = new package('package', 10);

            expect(() => expected.VAT = -10).Throw('VAT must be a non-negative number');
        });
        it('Active should be set correctly', function () {
            let expected = new package('package', 10);
            expected.active = false;

            expect(expected.active).to.equal(false);
        });
        it('Active should throw error if new value is not a boolean', function () {
            let expected = new package('package', 10);

            expect(() => expected.active = 6).Throw('Active status must be a boolean');
        });
    });
    describe('Test toString', function () {
        it('Should return info correctly if active is false', function () {
            let expected = new package('package', 10);
            expected.active = false;

            expect(expected.toString()).to.equal(`Package: package (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): ${10 * (1 + 20 / 100)}`);
        });
        it('Should return info correctly if active is true', function () {
            let expected = new package('package', 10);
            expected.active = true;

            expect(expected.toString()).to.equal(`Package: package\n- Value (excl. VAT): 10\n- Value (VAT 20%): ${10 * (1 + 20 / 100)}`);
        });
    });
    describe('Test all', function () {
        it('Should works correctly', function () {
            let expected = new package('package', 10);
            expected.active = false;
            expected.VAT = 10;
            expected.value = 30;
            expected.name = 'new package';

            expect(expected.toString()).to.equal(`Package: new package (inactive)\n- Value (excl. VAT): 30\n- Value (VAT 10%): ${30 * (1 + 10 / 100)}`);
        });
    });
});