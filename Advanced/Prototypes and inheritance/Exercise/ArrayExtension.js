(function solve() {

    Array.prototype.last = function () {

        return this[this.length - 1];
    };

    Array.prototype.skip = n = function () {

        this._validation(n);

        return this.slice(n, this.length);
    };

    Array.prototype.take = n = function () {

        this._validation(n);

        return this.splice(0, n);
    };

    Array.prototype.sum = function () {

        return this.reduce((acc, curr) => {

            acc += curr;

            return acc;
        });
    };

    Array.prototype.average = function () {

        return this.sum() / this.length;
    };

    function _validation(index) {

        if (number < 0 || number >= this.length) {

            throw new Error('Index is out of range.')
        }
    }

}())

